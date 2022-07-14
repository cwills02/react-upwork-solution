import TopNav from "./TopNav.js";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CategoryMenu from "./CategoryMenu.js";
import BodySearch from "./BodySearch";

export default function JobBoard() {
  return (
    <>
      <TopNav />
      <Box
        sx={{
          p: "50px 4%",
          background: "green",
          height: "500px",
          display: "flex"
        }}
      >
        <Box sx={{ textAlign: "left", background: "orange", width: "30%" }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ marginBottom: "30px" }}
          >
            Find Work
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Categories
          </Typography>
          <CategoryMenu />
        </Box>
        <Box sx={{ background: "blue", width: "70%" }}>
          <BodySearch />
        </Box>
      </Box>
    </>
  );
}
