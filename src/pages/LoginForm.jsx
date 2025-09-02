import { Box, Button, colors, Input, InputAdornment, Link, styled, TextField, Typography } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

export default function Component() {
    return (
        <>
            <h1 style={{textAlign: "center"}}>Componet pages</h1>
            <LoginForm />
        </>
    )
}



function LoginForm() {
    // const [show,] = useState(false)

    return (
        <Box sx={{ display: 'grid', placeItems: "center", }}>
            <Typography variant="h5" fontWeight={"bold"} textAlign={"center"} >Login</Typography>
            <FormInput label={"User Name | Email"} type={"text"}>
                <PersonIcon />
            </FormInput>
            <FormInput label={"Password"} type={"password"}>
                <VisibilityIcon />
                {/* togole er logic hobe */}
            </FormInput>
            <LinkDerection children={"Forgot Password"} fontSize={12}/>
            <RoundButton>Login</RoundButton>
            <Typography variant="caption" sx={{fontSize: 12,width: "300px", textAlign: 'center'}}>
                Don't have account? Let's <Link href="/">Get Started For Free</Link>
            </Typography>

        </Box>
    )
}


function FormInput({ children, type, label }) {
    const FormInputStyle = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            width: "100%",
            height: "40px",
            borderRadius: "7px",

        },
        '& .MuiOutlinedInput-input': {
            color: "black",
            fontSize: "12px",
            padding: "10px",
            width: "300px",
        },
        '& label': {
            fontSize: "11px",
            color: "black",
            textAlign: "center",
        }
    })
    return (
        <Box sx={{ mb: 1, mt: 1, }}>
            <FormInputStyle
                id="form-input"
                label={label}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment>
                                {children}
                            </InputAdornment>
                        )
                    }
                }}
                type={type}
                variant="outlined"
            />
        </Box>


    )
}

function LinkDerection({ children, href="#", fontSize }) {
    return (
        <Box sx={{ textAlign: "right", mb: 2, width: "300px" }}>
            <Link href={href} underline="hover"
                sx={{
                    fontSize: fontSize,
                }}
            >
                {children}
            </Link>
        </Box>
    )
}

function RoundButton({ children, variant = "contained" }) {
    return (
        <Button variant={variant}
            sx={{
                borderRadius: "50px",
                width: "350px",
                background: 'linear-gradient(90deg, #5eaffca4, #0004ffff)',
                '&:focus': {
                    outline: "none"
                },
                '&:hover': {
                    background: 'linear-gradient(90deg, #011274ff, #1f5ed198)',
                },
                mb: 2,
                fontWeight: "bold"

            }}
        >{children}</Button>
    )
}