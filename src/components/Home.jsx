import React, { useEffect } from "react";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";
import AddPosts from "./AddPosts";
import { Box, Stack } from "@mui/material";
import Feed from "./Feed";

const Home = () => {
  return (
    <Box>
      <Stack direction="col" justifyContent="space-between" spacing={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <AddPosts />
    </Box>
  );
};

export default Home;
