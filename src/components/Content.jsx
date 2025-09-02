import { Box, Button, Input, Link, Paper, styled, TextField } from "@mui/material";
import LineBoxSapce from "./mui-styles/LineBoxSpace";
import SearchBox from "./mui-styles/SearchBox";
import { DataGrid } from '@mui/x-data-grid';
import { BiSolidEdit } from "react-icons/bi";
import PrintIcon from '@mui/icons-material/Print';
import AddIcon from '@mui/icons-material/Add';
import OrderDitales from "../components/Order-Ditals";
import { useEffect, useState, } from "react";

let timer

const tableData = [
    {
        id: 1,
        dateTime: "2025-08-14 10:30 AM",
        name: "John Doe",
        phone: "01711112222",
        address: "Dhaka, Bangladesh",
        product: "Laptop - Dell Inspiron",
        note: "Urgent delivery",
        status: "PENDING",
    },
    {
        id: 2,
        dateTime: "2025-08-14 11:00 AM",
        name: "Jane Smith",
        phone: "01822223333",
        address: "Chattogram, Bangladesh",
        product: "Smartphone - Samsung Galaxy S24",
        note: "Gift wrap needed",
        status: "PENDING",
    },
    {
        id: 3,
        dateTime: "2025-08-13 3:45 PM",
        name: "Rahim Uddin",
        phone: "01933334444",
        address: "Sylhet, Bangladesh",
        product: "Wireless Headphones - Sony WH-1000XM5",
        note: "Call before delivery",
        status: "PENDING",
    },
    {
        id: 4,
        dateTime: "2025-08-12 9:15 AM",
        name: "Karim Hossain",
        phone: "01644445555",
        address: "Khulna, Bangladesh",
        product: "Smart TV - LG 55 inch 4K",
        note: "Check packaging",
        status: "PROCESSING",
    },
    {
        id: 5,
        dateTime: "2025-08-12 4:20 PM",
        name: "Shila Akter",
        phone: "01555556666",
        address: "Rajshahi, Bangladesh",
        product: "Microwave Oven - Panasonic",
        note: "No contact delivery",
        status: "PROCESSING",
    }
];


export default function Content({ data }) {
    const [rows, setRows] = useState(tableData)
    const [printData, setPintData] = useState([])
    const [searchValue, setSearchValue] = useState("")


    const taskActions = [
        { id: 1, key: "PRINT", name: "Print", color: "primary", icon: <PrintIcon />, action: PrintAction(printData) },
        { id: 2, key: "CHANGE", name: "Change", color: 'secondary' },
        { id: 3, key: "STATUS", name: "Status", color: 'info' },
        { id: 4, key: "ADD_NEW", name: "Add New", color: 'error', icon: <AddIcon /> }
    ];

    const columns = [
        { field: 'id', headerName: 'Invoice Id', width: 90 },
        {
            field: 'dateTime',
            headerName: 'Date ',
            width: 120,

        },
        {
            field: 'name',
            headerName: 'Name',
            width: 100,
        },
        {
            field: 'phone',
            headerName: 'Phone',
            width: 150,
        },
        {
            field: 'address',
            headerName: 'Address',
            width: 200,
        },
        {
            field: 'product',
            headerName: 'Product',
            width: 200,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 100,
        },
        {
            field: 'note',
            headerName: 'Note',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            filterable: false,
            sortable: false,
            width: 100,
            renderCell: (params) => (
                <Link
                    href="/edit"
                    sx={{
                        fontSize: "23px",
                        color: "black"
                    }}
                >
                    <BiSolidEdit />
                </Link>
            )
        }
    ];




    const TextField_100 = styled(TextField)({
        '& .MuiInput-root': {
            height: "30px",
        },
        width: "100px",
    })
    const variant = "standard"


    // handel search box
    const handelSearch = (e) => {
        const value = e.target.value
        setSearchValue(value)
        clearTimeout(timer)

        timer = setTimeout(() => {
            if (!value) {
                setRows(tableData)
                return
            }
            const findUsr = tableData.filter((usr) => usr.phone === value || usr.id === parseInt(value))
            setRows(findUsr.length > 0 ? findUsr : tableData)
        });


        // console.log(findUsr)
    }


    // row data after click ordet status
    useEffect(() => {
    }, [rows])

    // code here for printing work
    useEffect(() => {
        console.log("printing data: ", printData);
    }, [printData])

    return (
        <Box >
            <OrderDitales CallBack={(buttonName) => {
                setRows(tableData.filter(row => row.status === buttonName))

            }} />
            <Box component={Paper} elevation={5} sx={{
                // m: 1
            }}>


                <h2 style={{
                    textAlign: "center",
                    paddingTop: "20px",
                }}>Total Order</h2>

                <LineBoxSapce >
                    <TextField_100
                        id="show-entiris"
                        variant={variant}
                        label="Show Entiris"
                        type="number"
                    />
                    <LineBoxSapce

                        width={600}

                    >
                        {
                            taskActions.map((action) => (
                                <Button key={action.id} variant="contained" color={action.color}
                                    sx={{
                                        width: "120px",
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                        height: "40px",
                                        "&:focus": {
                                            outline: "none"
                                        },
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: 'center'
                                    }}
                                    onClick={action.action}
                                >
                                    {action.icon}
                                    {action.name}
                                </Button>
                            ))
                        }

                    </LineBoxSapce>
                    <SearchBox
                        width={'300px'}
                        label={"Search by Number or Invoice ID"}
                        value={searchValue}
                        onChange={handelSearch}
                    />
                </LineBoxSapce>
                <Box sx={{
                    height: 400,
                    width: "100%",
                }}>
                    <DataGrid

                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5
                                }
                            }
                        }}
                        pageSizeOptions={[10]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        sx={{
                            m: 2,
                        }}
                        onRowSelectionModelChange={
                            (data) => {
                                const selectId = [...data.ids]
                                if (selectId[0]) {
                                    const selectData = selectId.map((id) => rows.find(data => data.id === id))
                                    setPintData([...selectData])
                                } else {
                                    setPintData(rows)
                                }
                                console.log(data);

                            }
                        }
                    />
                </Box>
            </Box>
        </Box>
    )


}




// action funtion  here

function PrintAction(data) {
    return () => {
        if (data.length === 0) {
            return
        } else {
            const printWindow = window.open("", "_blank", "width=800,height=600")
            printWindow.document.writeln(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Invoice</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background: #f9f9f9;
    }

    .invoice {
      width: 90%;
      margin: 20px auto;
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      page-break-after: always;
    }

    .header {
      text-align: center;
      margin-bottom: 20px;
    }

    .header img {
      width: 80px;
      height: auto;
      margin-bottom: 10px;
    }

    .details {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      text-align: center;
    }

    .box {
      width: 48%;
      background: #f1f1f1;
      padding: 15px;
      border-radius: 8px;
    }

    h3 {
      margin-bottom: 10px;
      color: #333;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
    }

    table, th, td {
      border: 1px solid #ddd;
    }

    th, td {
      padding: 10px;
      text-align: center;
    }

    th {
      background: #eee;
    }

    .footer {
      text-align: center;
      margin-top: 20px;
      font-size: 14px;
      color: #666;
    }
  </style>
</head>
<body>

  <!-- Invoice 1 -->
  ${data.map((usr) => (`<div class="invoice">
    <div class="header">
      <img src="/logo.webp" alt="Shop Logo">
      <h2>Sky Digital Shop BD</h2>
      <p>📞 01338-694449 |📍 House 2/1 Road-3, Block-B,  <br>  Dhaka Uddyan, Mohammodpur, Dhaka 1207.</p>
    </div>

    <div class="details">
      <div class="box">
        <h3>Shop Details</h3>
        <p>Name: My Shop</p>
        <p>Phone: 01234-567890</p>
        <p>Address: Dhaka</p>
      </div>
      <div class="box">
        <h3>Customer Details</h3>
        <p>Name: ${usr.name}</p>
        <p>Phone: ${usr.phone}</p>
        <p>Address: ${usr.a}</p>
      </div>
    </div>

    <table>
      <tr>
        <th>Product</th>
        <th>Qty</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
      <tr>
        <td>Shirt</td>
        <td>2</td>
        <td>500</td>
        <td>1000</td>
      </tr>
      <tr>
        <td>Pant</td>
        <td>1</td>
        <td>800</td>
        <td>800</td>
      </tr>
      <tr>
        <td colspan="3"><strong>Grand Total</strong></td>
        <td><strong>1800</strong></td>
      </tr>
    </table>

    <div class="footer">
      <p>Thank you for shopping with us ❤️</p>
    </div>
  </div>`))
                }
</body>
</html>
`)
            printWindow.print()
            printWindow.document.close()
        }
    }
}



