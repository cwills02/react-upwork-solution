import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function JobList({ jobs }) {
  return (
    <Paper>
      {jobs.map((job) => {
        return (
          <Fragment key={job.id}>
            <Box sx={{ padding: "15px", textAlign: "left" }}>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={`/job/${job.id}`}
              >
                <Typography variant="h6" sx={{ marginBottom: "15px" }}>
                  {job.title}
                </Typography>
              </Link>
              <Typography variant="subtitle2" gutterBottom component="div">
                Hourly ${job.hourlyUSD}
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                {job.postedTime}
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                <LocationOnRoundedIcon
                  sx={{ height: "20px", marginRight: "5px", color: "green" }}
                />
                {job.remote ? "Remote, " : ""} {job.location}
              </Typography>
              <Typography
                sx={{ marginTop: "15px" }}
                variant="body2"
                gutterBottom
              >
                {job.description}
              </Typography>
            </Box>
            <Divider />
          </Fragment>
        );
      })}
    </Paper>
  );
}
