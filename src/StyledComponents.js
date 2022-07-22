import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

export const PRIMARY_GREEN = "#39B54A";
export const SECONDARY_NAVY = "#2B5468";

export const MainBody = styled(Box)(() => ({
  padding: "50px 10%",
  height: "500px",
  display: "flex",
  textAlign: "left",
  justifyContent: "space-between"
}));

export const LoginBox = styled(Box)(() => ({
  background: "white",
  height: "325px",
  width: "400px",
  padding: "40px",
  boxSizing: "border-box"
}));

export const LoginContainer = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

export const LoginInput = styled(Input)(() => ({
  border: `1px solid ${PRIMARY_GREEN}`,
  borderRadius: "5px",
  margin: "8px 0",
  padding: "2px 5px",
  width: "100%"
}));

export const PrimaryButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  borderRadius: "30px",
  color: "white"
}));

export const SecondaryButton = styled(Button)(() => ({
  background: "none",
  borderRadius: "30px",
  color: PRIMARY_GREEN,
  border: `1px solid ${PRIMARY_GREEN}`,
  padding: "0px"
}));
