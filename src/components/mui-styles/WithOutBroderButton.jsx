import { Button, styled } from "@mui/material";

const WithOutBroderButton = styled(Button)(({
    // backgroundColor: "white",
    color: "black",
    fontSize: "16px",
    fontWeight: "bold",
    '&:focus':{
        outline: 'none',
    },
    width: '100%'
}))

export default WithOutBroderButton