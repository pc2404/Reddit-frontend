import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Box } from "@mui/system";

import {
  ConnectedTvOutlined,
  HomeOutlined,
  MoreHoriz,
  Outbound,
  SportsBaseballOutlined,
  SportsEsportsOutlined,
  StackedLineChartOutlined,
  StarBorderPurple500Outlined,
} from "@mui/icons-material";
import ListItemCard from "./ListItemCard";
import { useSelector } from "react-redux";
import { Avatar, Stack, Typography } from "@mui/material";

export default function Sidebar() {
  const objectArray = [
    {
      icon: <SportsEsportsOutlined />,
      title: "Gaming",
      subTitle: [
        "Valheim",
        "Genshin Impact",
        "Minecraft",
        "Pokimane",
        "Halo Infinite",
        "Call of Duty: Warzone",
        "Path of Exile",
        "Hollow Knight: Silksong",
        "Escape from Tarkov",
        "Watch Dogs: Legion",
      ],
    },
    {
      icon: <SportsBaseballOutlined />,
      title: "Sports",
      subTitle: [
        "NFL",
        "NBA",
        "Megan Anderson",
        "Atlanta Hawks",
        "Los Angeles Lakers",
        "Boston Celtics",
        "Arsenal F.C.",
        "Philadelphia 76ers",
        "Premier League",
        "UFC",
      ],
    },
    {
      icon: <StackedLineChartOutlined />,
      title: "Bussiness",
      subTitle: [
        "GameStop",
        "Moderna",
        "Pfizer",
        "Johnson & Johnson",
        "AstraZeneca",
        "Walgreens",
        "Best Buy",
        "Novavax",
        "SpaceX",
        "Tesla",
      ],
    },
    {
      icon: <ConnectedTvOutlined />,
      title: "Television",
      subTitle: [
        "The Real Housewives of Atlanta",
        "The Bachelor",
        "Sister Wives",
        "90 Day Fiance",
        "Wife Swap",
        "The Amazing Race Australia",
        "Married at First Sight",
        "The Real Housewives of Dallas",
        "My 600-lb Life",
        "Last Week Tonight with John",
      ],
    },
    {
      icon: <StarBorderPurple500Outlined />,
      title: "Celebrity",
      subTitle: [
        "Kim Kardashian",
        "Doja Cat",
        "Iggy Azalea",
        "Anya Taylor-Joy",
        "Jamie Lee Curtis",
        "Natalie Portman",
        "Henry Cavill",
        "Millie Bobby Brown",
        "Tom Hiddleston",
        "Keanu Reeves",
      ],
    },
    {
      icon: <MoreHoriz />,
      title: "More",
      subTitle: [
        "Animals and Pets",
        "Anime",
        "Art",
        "Cars and Motor Vehicles",
        "Crafts and DIY",
        "Culture, Race, and Ethnicity",
        "Ethics and Philosophy",
        "Fashion",
        "Food and Drink",
        "History",
        "Hobbies",
        "Law",
      ],
    },
  ];

  const isToken = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const fullName = isToken ? `${user.firstName} ${user.lastName}` : "Ken Den";
  console.log(typeof fullName);

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

  return (
    <Box pt={2} flex={1} ml={2} sx={{ display: { xs: "none", md: "block" } }}>
      <Box position="fixed">
        {isToken && (
          <Stack direction="row" gap={2} my={4} alignItems="center">
            <Avatar {...stringAvatar(fullName)} />
            <Typography variant="span">{fullName}</Typography>
          </Stack>
        )}
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Feeds
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <HomeOutlined />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Outbound />
            </ListItemIcon>
            <ListItemText primary="Popular" />
          </ListItemButton>
        </List>
        {/* ------------ */}
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Topics
            </ListSubheader>
          }
        >
          {objectArray.map((obj, i) => {
            return <ListItemCard obj={obj} />;
          })}
        </List>
      </Box>
    </Box>
  );
}
