import {
  KeyboardDoubleArrowUpOutlined,
  LocalFireDepartment,
  PinDrop,
  SettingsOutlined,
} from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../state";
import Post from "./Post";

const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const getFeedPosts = async () => {
    const response = await fetch(
      "https://reddit-backend-hg03.onrender.com/posts",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const feedPosts = await response.json();
    dispatch(setPosts({ posts: feedPosts }));
  };

  useEffect(() => {
    getFeedPosts();
  }, []);

  const StyledNav = styled("div")({
    backgroundColor: "white",
    height: "50px",
    borderRadius: "5px",
  });

  const MyButton = styled(Button)({
    borderRadius: "30px",
    width: "80px",
    backgroundColor: "#eceff1",
  });

  return (
    <Box flex={3} p={2} m={4} bgcolor="#cfd8dc">
      <StyledNav sx={{ margin: 5, paddingTop: 2, paddingLeft: 2 }}>
        <Stack direction="row" gap={2}>
          <MyButton
            startIcon={<LocalFireDepartment />}
            variant="contained"
            sx={{ color: "rgb(24,118,209)" }}
          >
            Hot
          </MyButton>
          <MyButton
            startIcon={<PinDrop />}
            variant="contained"
            sx={{ color: "rgb(24,118,209)" }}
          >
            India
          </MyButton>
          <MyButton
            startIcon={<SettingsOutlined />}
            variant="contained"
            sx={{ color: "grey" }}
          >
            News
          </MyButton>
          <MyButton
            startIcon={<KeyboardDoubleArrowUpOutlined />}
            variant="contained"
            sx={{ color: "grey" }}
          >
            Top
          </MyButton>
        </Stack>
      </StyledNav>
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </Box>
  );
};

export default Feed;
