import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    Grid,
    TextField,
    IconButton,
    Avatar,
    Chip,
    Paper,
} from "@mui/material";
import {
    Search as SearchIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    AddBox as AddBoxIcon,
    ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import AppLayout from "../components/AppLayout"

// --- Sample Data ---
const products = [
    {
        id: 1,
        name: "Premium Spinning Golden Necklace",
        category: "Jewellery",
        image: "https://placehold.co/50x50/e0e0e0/ffffff?text=Product",
        price: 410,
        stock: 10,
        hotDeals: true,
        topFeature: false,
        status: "Active",
        aging: "20 days",
    },
    {
        id: 2,
        name: "Star Spinning Silver Necklace",
        category: "Jewellery",
        image: "https://placehold.co/50x50/e0e0e0/ffffff?text=Product",
        price: 360,
        stock: 15,
        hotDeals: true,
        topFeature: false,
        status: "Active",
        aging: "25 days",
    },
    {
        id: 3,
        name: "Purple Crystal Earrings",
        category: "Jewellery",
        image: "https://placehold.co/50x50/e0e0e0/ffffff?text=Product",
        price: 430,
        stock: 8,
        hotDeals: false,
        topFeature: true,
        status: "Inactive",
        aging: "10 days",
    },
];

// --- Table Columns ---
const columns = [
    { field: "id", headerName: "SL", width: 70 },
    {
        field: "image",
        headerName: "Image",
        width: 100,
        renderCell: (params) => (
            <Avatar
            variant="square"
            src={params.value}
            sx={{ width: 50, height: 50, borderRadius: 1 }}
            />
        ),
    },
    { field: "name", headerName: "Name", flex: 1, minWidth: 200 },
    { field: "category", headerName: "Category", width: 150 },
    {
        field: "price",
        headerName: "Price",
        width: 120,
        renderCell: (params) => `$${params.value}`,
    },
    { field: "stock", headerName: "Stock", width: 100 },
    {
        field: "dealFeature",
        headerName: "Deal & Feature",
        width: 200,
        renderCell: (params) => (
            <Box>
                <Typography variant="body2">
                    Hot Deals: {params.row.hotDeals ? "Yes" : "No"}
                </Typography>
                <Typography variant="body2">
                    Top Feature: {params.row.topFeature ? "Yes" : "No"}
                </Typography>
            </Box>
        ),
    },
    {
        field: "status",
        headerName: "Status",
        width: 120,
        renderCell: (params) => (
            <Chip
            label={params.value}
            color={params.value === "Active" ? "success" : "default"}
            size="small"
            sx={{ textTransform: "uppercase" }}
            />
        ),
    },
    {
        field: "action",
        headerName: "Action",
        width: 120,
        sortable: false,
        renderCell: () => (
            <>
                <IconButton>
                    <EditIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </>
        ),
    },
];

const ProductList = () => {
    return (
        <AppLayout>
            <Box component={Paper} elevation={5}>

                {/* --- Management Buttons + Search --- */}
                <Container>
                    <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={8}
                            sx={{ display: "flex", flexWrap: "wrap", gap: 1, m: 1 }}
                        >
                            <Button variant="contained" color="primary" sx={{ borderRadius: 2 }}>
                                <AddBoxIcon sx={{ mr: 1 }} /> Add Product
                            </Button>
                            <Button variant="contained" color="warning" sx={{ borderRadius: 2 }}>
                                Deal
                            </Button>
                            <Button variant="contained" color="success" sx={{ borderRadius: 2 }}>
                                Active
                            </Button>
                            <Button variant="contained" color="inherit" sx={{ borderRadius: 2 }}>
                                Inactive
                            </Button>
                        </Grid>
                        <Grid item size={4} gap={2}>
                            <Box sx={{ display: "flex", borderRadius: 2, overflow: "hidden" }}>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder="Search"
                                    fullWidth
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 0,
                                        },
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    sx={{ borderRadius: "0 8px 8px 0", px: 3 }}
                                >
                                    <SearchIcon />
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* --- DataGrid Table --- */}
                    <DataGrid
                        rows={products}
                        columns={columns}
                        pageSize={5}
                        // rowsPerPageOptions={[5, 10]}
                        disableSelectionOnClick
                        checkboxSelection
                        sx={{ borderRadius: 2, backgroundColor: "#fff", m: 1, width: "100%" }}
                    />
                </Container>
            </Box>
        </AppLayout>
    );
};

export default ProductList;
