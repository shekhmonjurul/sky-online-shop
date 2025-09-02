import AppLayout from "../components/AppLayout";
import { Box, Grid, Paper, Typography } from "@mui/material";
import PerformanceOverview from "../components/PerformanceChart";
import OrderDitales from "../components/Order-Ditals"


export default function Dashboard() {
    return (
        <AppLayout>
            <OrderDitales />
            <PerformanceOverview/>
        </AppLayout>
    )
}







