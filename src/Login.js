import {
  PrimaryButton,
  LoginBox,
  LoginContainer,
  LoginInput
} from "./StyledComponents";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Login({ setLoggedIn }) {
  return (
    <LoginContainer>
      <LoginBox>
        <Typography
          sx={{ color: "#666666", mb: "25px" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Log In
        </Typography>
        <FormControl sx={{ width: "80%" }}>
          <LoginInput
            id="email"
            placeholder="Email or Username"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          <LoginInput placeholder="Password" id="password" />
          <PrimaryButton
            onClick={() => setLoggedIn(true)}
            sx={{ margin: "20px 0" }}
            variant="contained"
          >
            Continue with email
          </PrimaryButton>
        </FormControl>
      </LoginBox>
    </LoginContainer>
  );
}
