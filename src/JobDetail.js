import TopNav from "./TopNav";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PlaceIcon from "@mui/icons-material/Place";
import Link from "@mui/material/Link";

import {
  MainBody,
  PRIMARY_GREEN,
  PrimaryButton,
  SecondaryButton
} from "./StyledComponents";

export const SpacerBox = styled(Box)(() => ({
  padding: "20px"
}));

export default function JobDetail({ allJobs }) {
  let { id: idFromUrl } = useParams();

  const selectedJob = allJobs.find((job) => {
    return job.id === Number(idFromUrl);
  });

  console.log(selectedJob, idFromUrl);

  return (
    <>
      <TopNav />
      <MainBody>
        <Box sx={{ width: "60%" }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ marginBottom: "30px" }}
          >
            {selectedJob.title}
          </Typography>
          <Divider />
          <Box sx={{ p: "20px 0" }}>
            <Typography
              sx={{ color: PRIMARY_GREEN }}
              variant="subtitle2"
              gutterBottom
              component="div"
            >
              {selectedJob.category}
            </Typography>
            <Typography
              sx={{ fontWeight: "400" }}
              variant="subtitle2"
              gutterBottom
              component="div"
            >
              Posted {selectedJob.postedTime}
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              <LocationOnRoundedIcon
                sx={{ height: "20px", marginRight: "5px", color: "green" }}
              />
              {selectedJob.remote ? "Remote, " : ""}, {selectedJob.location}
            </Typography>
          </Box>
          <Divider />
          <Typography
            sx={{ margin: "20px 0", color: "#8b8b8b8b" }}
            variant="body2"
            gutterBottom
          >
            {selectedJob.description}
          </Typography>
          <Divider />
        </Box>
        <Box
          sx={{
            background: "white",
            width: "35%",
            boerderRadius: "3px",
            height: "420px"
          }}
        >
          <SpacerBox>
            <PrimaryButton
              sx={{
                textTransform: "none",
                fontWeight: "400",
                fontSize: "12px",
                width: "100%"
              }}
            >
              Submit a Proposal
            </PrimaryButton>
            <SecondaryButton
              sx={{
                textTransform: "none",
                fontWeight: "400",
                fontSize: "12px",
                width: "100%",
                marginTop: "10px"
              }}
            >
              <FavoriteBorderIcon sx={{ margin: "3px" }} />
              Save a Job
            </SecondaryButton>
          </SpacerBox>
          <Divider />
          <SpacerBox>
            <Typography variant="subtitle2" gutterBottom component="div">
              About the client
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ margin: "15px 0", fontSize: "12px", color: "#8b8b8b8b" }}
            >
              {selectedJob.paymentVerified ? (
                <>
                  <CheckCircleOutlineIcon
                    fontSize="inherit"
                    sx={{ color: PRIMARY_GREEN, marginRight: "3px" }}
                  />
                  Payment Verified
                </>
              ) : (
                <>Payment Not Verified</>
              )}
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              About the client
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ margin: "15px 0", fontSize: "12px", color: "#8b8b8b8b" }}
            >
              <PlaceIcon fontSize="inherit" sx={{ color: PRIMARY_GREEN }} />
              {selectedJob.location}
            </Typography>
          </SpacerBox>
          <Divider />
          <SpacerBox>
            <Typography variant="subtitle2" gutterBottom component="div">
              Job Link
            </Typography>
            <TextField
              disabled
              id="standard-disabled"
              defaultValue="https://job-url.com"
              variant="standard"
            />
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                fontWeight: "600",
                marginTop: "15px",
                fontSize: "12px",
                display: "block"
              }}
              color={PRIMARY_GREEN}
            >
              Copy Link
            </Link>
          </SpacerBox>
        </Box>
      </MainBody>
    </>
  );
}
