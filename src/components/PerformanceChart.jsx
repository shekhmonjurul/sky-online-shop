import React, { useState } from "react";
import {
    Box,
    Typography,
    ToggleButton,
    ToggleButtonGroup,
    Paper,
    List,
    ListItem,
    ListItemText,
    Divider,
    Grid,
    Avatar,
} from "@mui/material";
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const dataSets = {
    day: [
        { name: "Mon", value: 30 },
        { name: "Tue", value: 45 },
        { name: "Wed", value: 20 },
        { name: "Thu", value: 60 },
        { name: "Fri", value: 35 },
        { name: "Sat", value: 50 },
        { name: "Sun", value: 40 },
    ],
    week: [
        { name: "Week 1", value: 200 },
        { name: "Week 2", value: 350 },
        { name: "Week 3", value: 280 },
        { name: "Week 4", value: 400 },
    ],
    month: [
        { name: "Jan", value: 1200 },
        { name: "Feb", value: 1600 },
        { name: "Mar", value: 1400 },
        { name: "Apr", value: 1800 },
        { name: "May", value: 2100 },
        { name: "Jun", value: 1700 },
    ],
};

// Dummy Top Product Sales Data
const topProducts = [
    { name: "Laptop", price: "$1200" },
    { name: "Smartphone", price: "$950" },
    { name: "Headphones", price: "$200" },
    { name: "Smartwatch", price: "$400" },
    { name: "Tablet", price: "$650" },
];


const teamMember = [
    { name: "Alice", role: "Developer", img: "https://i.pravatar.cc/50?img=1" },
    { name: "Bob", role: "Designer", img: "https://i.pravatar.cc/50?img=2" },
    { name: "Charlie", role: "Manager", img: "https://i.pravatar.cc/50?img=3" },
]

export default function Dashboard() {
    const [range, setRange] = useState("day");

    const handleChange = (event, newRange) => {
        if (newRange !== null) {
            setRange(newRange);
        }
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3
        }}>

            <Box display={"flex"} gap={5}>
                {/* Product Sales Card */}
                <Paper elevation={3} sx={{ p: 3, borderRadius: 3, flex: "1 1 100%" }}>
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                        Top  Product Sales
                    </Typography>
                    <List>
                        {topProducts.map((product, index) => (
                            <React.Fragment key={index}>
                                <ListItem
                                    sx={{ py: 0.5, px: 0 }}
                                    secondaryAction={
                                        <Typography fontWeight="bold" color="primary">
                                            {product.price}
                                        </Typography>
                                    }
                                >
                                    <ListItemText primary={`${index + 1}. ${product.name}`} />
                                </ListItem>
                                {index < topProducts.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </List>
                </Paper>

                {/* Performance Overview Card */}
                <Paper elevation={3} sx={{ p: 3, borderRadius: 3, flex: "2 1 600px" }}>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={2}
                    >
                        <Typography variant="h6" fontWeight="bold" sx={{ mr: 20 }}>
                            Performance Overview
                        </Typography>

                        <ToggleButtonGroup
                            value={range}
                            exclusive
                            onChange={handleChange}
                            size="small"
                            sx={{
                                "& .MuiToggleButton-root": {
                                    mx: 0.7,
                                    borderRadius: 2,
                                    textTransform: "none",
                                },
                            }}
                        >
                            <ToggleButton value="day">Day</ToggleButton>
                            <ToggleButton value="week">Week</ToggleButton>
                            <ToggleButton value="month">Month</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>

                    <Box sx={{ width: "100%", height: 350 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={dataSets[range]}>
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="#1976d2" radius={[6, 6, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </Box>
                </Paper>
            </Box>

            <Box>
                <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h6" >
                        Team Member
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            teamMember.map((member, index) => (
                                < Grid key={index} size={12}>
                                    <Box display={"flex"} alignItems={"center"} gap={2}>
                                        <Avatar src={member.img} />
                                        <Box>
                                            <Typography variant="subtitle1">{member.name}</Typography>
                                            <Typography variant="body2">{member.role}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Paper>
            </Box>

        </Box >
    );
}
