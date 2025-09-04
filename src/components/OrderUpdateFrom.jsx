import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  TextField,
  Button,
  Avatar,
  Box,
  Grid,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItem,
  List,
  ListItemText
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Keyboard", price: 2000 },
  { id: 4, name: "Mouse", price: 1000 },
];


function OrderUpdateFrom() {
  const [searchProduct, setSearchProduct] = useState("")
  const [show, setShow] = useState(false)

  const [status, setStatus] = useState("")
  const handelChange = (e) => {
    setStatus(e.target.value)
  }

  const filterProduct = useMemo(() => {
    return products.filter(product => product.name.toLowerCase().includes(searchProduct.toLowerCase()))
  }, [searchProduct])

  const handleDelete = (id) => {
    console.log("Delete row:", id);
  };

  const handelSerach = (e) => {
    setSearchProduct(e.target.value)
    console.log("filter: ", filterProduct);

  }

  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 100,
      renderCell: (params) => (
        <Avatar
          alt={params.row.productName}
          src={params.value}
          sx={{ width: 40, height: 40 }}
          variant="square"
        />
      ),
    },
    { field: "productName", headerName: "Product Name", width: 200 },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 120,
      type: "number",
      editable: true,
      renderCell: (params) => {
        <Box>+</Box>
      }
    },
    { field: "sellPrice", headerName: "Sell Price", width: 130, type: "number" },
    {
      field: "discount",
      headerName: "Discount",
      width: 120,
      type: "number",
      editable: true,
    },
    { field: "subTotal", headerName: "Sub Total", width: 150, type: "number" },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      image: "/product-img/trimmer.jpg",
      productName: "Laptop",
      quantity: 2,
      sellPrice: 55000,
      discount: 5000,
      subTotal: 100000,
    },
    {
      id: 2,
      image: "/product-img/trimmer.jpg",
      productName: "Mouse",
      quantity: 3,
      sellPrice: 800,
      discount: 0,
      subTotal: 2400,
    },
  ];

  return (
    <Box sx={{ mt: 2, mr: 2, ml: 2 }}>
      {/* Search Box */}
      <Paper elevation={5} sx={{ p: 2, mb: 2 }}>
        <TextField
          variant="outlined"
          placeholder="All Product Here"
          value={searchProduct}
          onChange={handelSerach}
          onClick={()=>setShow(true)}
          fullWidth
          InputProps={{
            sx: { height: 40 },
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {show &&  (<List>
          {filterProduct.map((product) => <ListItem key={product.id}>
            <ListItemText primary={product.name}  />
          </ListItem>)}
        </List>)}
      </Paper>

      {/* DataGrid */}
      <Paper elevation={5} sx={{ p: 2, mb: 3 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          getCellClassName={(params) =>
            params.colDef.editable ? "editable-cell" : ""
          }
          sx={{
            "& .editable-cell": {
              backgroundColor: "#fff4e5",
              border: "1px dashed #79736aff",
            },
          }}
        />
      </Paper>

      {/* Bottom Section */}
      <Grid container spacing={2}>
        {/* Left Side - User Info */}
        <Grid item size={8} component={Paper} elevation={5}>
          <Box sx={{ p: 2 }}>
            <Table>
              <TableBody>
                <TableData value={"Monjurul Islam"} />
                <TableData value={"01716550180"} />
                <TableRow>
                  <TableCell>
                    <FormControl fullWidth>
                      <InputLabel id="status">Selctec Status</InputLabel>
                      <Select
                        id="status"
                        value={status}
                        label={"Where Delevary"}
                        onChange={handelChange}
                      >
                        <MenuItem value={"In Side Dhaka"}>In Side Dhaka</MenuItem>
                        <MenuItem value={"Dhaka"}>Dhaka</MenuItem>
                        <MenuItem value={"Out Side Dhaka"}>Out Side Dhaka</MenuItem>

                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
                <TableData value={<TextField label={"Note"} fullWidth />} />
              </TableBody>
            </Table>
          </Box>
        </Grid>

        {/* Right Side - Payment Info */}
        <Grid item size={4} component={Paper} elevation={5}>
          <Box sx={{ p: 2 }}>
            <Table sx={{ border: "1px solid black" }}>
              <TableBody>
                <PaymentInfo leftValue={"Sub Total"} rightValue={590} />
                <PaymentInfo leftValue={"Shipping Fee"} rightValue={80} />
                <PaymentInfo leftValue={"Discount"} rightValue={0} />
                <PaymentInfo leftValue={"Total"} rightValue={670} />
              </TableBody>
            </Table>
          </Box>
        </Grid>

        {/* Full width Update Order Button */}
        <Grid item size={12} component={Paper} elevation={5}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              "&:focus": { outline: "none" },
            }}
          >
            Update Order
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

function PaymentInfo({ leftValue, rightValue }) {
  return (
    <TableRow>
      <TableCell>{leftValue}</TableCell>
      <TableCell>{rightValue}</TableCell>
    </TableRow>
  );
}

function TableData({ value }) {
  return (
    <TableRow>
      <TableCell>{value}</TableCell>
    </TableRow>
  );
}



export default OrderUpdateFrom;
