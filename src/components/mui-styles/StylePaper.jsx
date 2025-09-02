import { Paper, styled } from "@mui/material"

const StylePaper = styled(Paper)(({theme}) => ({
        width: 200,
        height: 60,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(1),
        ...theme.typography.body2,
        margin: "10px",
        verticalAlign: "center",
        
    }))

export default StylePaper