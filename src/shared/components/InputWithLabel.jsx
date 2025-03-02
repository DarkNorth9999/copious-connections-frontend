import React from "react"
import { styled } from "@mui/material"

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  marginTop: "2rem",
})

const Label = styled("div")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "16px",
})

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid",
  borderRadius: "5px",
  color: "#dcddde",
  background: "#35393f",
  margin: 0,
  fontSize: "16px",
  padding: "0 5px",
  marginTop: "0.7rem",
})

function InputWithLabel(props) {
  const { value, setValue, label, type, placeholder } = props

  const handleValueChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      ></Input>
    </Wrapper>
  )
}

export default InputWithLabel
