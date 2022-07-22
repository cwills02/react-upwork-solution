import { useState } from "react";

import TopNav from "./TopNav.js";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CategoryMenu from "./CategoryMenu.js";
import BodySearch from "./BodySearch";
import JobList from "./JobList.js";
import { MainBody } from "./StyledComponents";

export default function JobBoard({ allJobs }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [];

  for (let job of allJobs) {
    if (!categories.includes(job.category)) {
      categories.push(job.category);
    }
  }

  console.log(categories);

  return (
    <>
      <TopNav />
      <MainBody>
        <Box sx={{ textAlign: "left", width: "30%" }}>
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
          <CategoryMenu
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        </Box>
        <Box sx={{ width: "70%" }}>
          <BodySearch />
          <JobList
            jobs={allJobs.filter((job) => {
              if (!selectedCategory) {
                return true;
              }
              return job.category === selectedCategory;
            })}
          />
        </Box>
      </MainBody>
    </>
  );
}
