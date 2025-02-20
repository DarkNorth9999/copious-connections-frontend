import React from "react"
import { Typography } from "@mui/material"

function LoginPageHeader() {
  return (
    <>
      <Typography variant="h5" sx={{ color: "white" }}>
        Welcome Back!
      </Typography>

      <Typography sx={{ color: "#b9bbbe" }}>
        We are so excited to see you again!
      </Typography>
    </>
  )
}

export default LoginPageHeader
