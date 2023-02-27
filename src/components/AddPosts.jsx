import {
  EmojiEmotions,
  PersonAddAlt1,
  PhotoSizeSelectActual,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Modal,
  styled,
  Tooltip,
  Typography,
  Box,
  Stack,
  InputBase,
} from "@mui/material";

import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../state";

const AddPosts = () => {
  const [open, setOpen] = useState(false);
  const isToken = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const fullName = isToken ? `${user.firstName} ${user.lastName}` : "Ken Den";
  const dispatch = useDispatch();
  const inputRef = useRef("");

  function handlePostSubmit() {
    console.log(user._id);
    console.log("inside", inputRef.current.value);
    const obj = { userId: user._id, description: inputRef.current.value };
    console.log("obj", obj);

    async function getAllPosts() {
      const response = await fetch(
        "https://reddit-backend-hg03.onrender.com/posts/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(obj),
        }
      );
      const allPosts = await response.json();
      console.log(allPosts);

      dispatch(
        setPosts({
          posts: allPosts,
        })
      );
      inputRef.current.value = "";
      setOpen(false);
    }
    getAllPosts();
  }

  // ----Avtar function

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  // ------
  const StyledModel = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const StyledBox = styled(Box)({
    height: "400px",
    width: "500px",
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "30px",

    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
  });

  const UserBox = styled(Box)({
    display: "flex",

    flexDirection: "column",
  });

  const MyButton = styled(Button)({
    borderRadius: "30px",
    width: "120px",
  });
  return (
    <>
      {/* <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        onClick={() => setOpen(!open)}
        disabled={!isToken && "disabled"}
      >
        <MyButton variant="contained">Add Post</MyButton>
      </Box> */}

      <Tooltip
        title={isToken ? "Add Post" : "Please login to add post"}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 50px)", md: 30 },
        }}
        onClick={() => setOpen(!open)}
      >
        <MyButton variant="contained" disabled={!isToken && "disabled"}>
          Add Post
        </MyButton>
      </Tooltip>
      {/* ------Modal----- */}
      <StyledModel
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <Typography variant="h6" sx={{ color: "grey", textAlign: "center" }}>
            Create post
          </Typography>
          <UserBox>
            <Stack direction="col" gap={2} my={4} alignItems="center">
              <Avatar {...stringAvatar(fullName)} />
              <Typography variant="span">{fullName}</Typography>
            </Stack>

            <InputBase
              placeholder="What's on your mind..."
              inputRef={inputRef}
              type="text"
              style={{
                borderRadius: "2rem",
                padding: "1rem 2rem",
                width: "100%",
              }}
            />

            <Stack direction="row" gap={2} m={2}>
              <EmojiEmotions color="primary" />
              <PhotoSizeSelectActual color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAddAlt1 color="error" />
            </Stack>
            <Button
              variant="contained"
              onClick={handlePostSubmit}
              // onClick={() => console.log("refvalue", inputRef.current.value)}
              type="submit"
            >
              Post
            </Button>
          </UserBox>
        </StyledBox>
      </StyledModel>
    </>
  );
};

export default AddPosts;
