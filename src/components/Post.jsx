import {
  MoreVert,
  Share,
  ThumbDownAlt,
  ThumbDownOffAltOutlined,
  ThumbUp,
  ThumbUpOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../state";

const Post = ({ post }) => {
  const fullName = `${post.firstName} ${post.lastName}`;
  const postId = post._id;
  const dispatch = useDispatch();
  const loggedInUserId = useSelector((state) => state.user?._id);
  const token = useSelector((state) => state.token);
  const likeRef = useRef(false);
  const dislikeRef = useRef(false);

  const isLiked = likeRef.current.checked;
  const isDisliked = dislikeRef.current.checked;
  const likeCounts = Object.keys(post.likes).length;

  const patchLikes = async () => {
    const response = await fetch(
      `https://reddit-backend-hg03.onrender.com/posts/${postId}/like`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUserId }),
      }
    );
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {post.firstName.charAt(0)}
            {post.lastName.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={fullName}
        subheader={`${post.createdAt.slice(0, 10)}  ${post.createdAt.slice(
          11,
          16
        )}`}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          icon={<ThumbUpOutlined />}
          checkedIcon={<ThumbUp />}
          onChange={patchLikes}
          inputRef={likeRef}
          disabled={isDisliked || !token ? true : false}
        />
        {isDisliked ? likeCounts - 2 : likeCounts}
        <Checkbox
          icon={<ThumbDownOffAltOutlined />}
          checkedIcon={<ThumbDownAlt />}
          onChange={patchLikes}
          inputRef={dislikeRef}
          disabled={isLiked || !token ? true : false}
        />
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
