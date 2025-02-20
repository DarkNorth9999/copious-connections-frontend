import { Typography, styled } from "@mui/material"
import React from "react"

const RedirectText = styled("span")({
  color: "#000AFF4",
  fontWeight: 500,
  cursor: "pointer",
})

function RedirectInfo({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) {
  return (
    <Typography
      sx={{
        color: "#72767d",
      }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  )
}

export default RedirectInfo
