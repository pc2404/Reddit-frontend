import { Box, List } from "@mui/material";
import React from "react";
import ListItemCard from "./ListItemCard";
import RightbarBottomCard from "./RightbarBottomCard";

const Rightbar = () => {
  const objectArray = [
    {
      title: <small>POPULAR COMMUNITIES</small>,
      icon: "",
      subTitle: [
        "AskReddit NoStupidQuestions DestinyTheGame explainlikeimfive AskMen leagueoflegends Minecraft",
      ],
    },
    {
      title: <small>GAMING</small>,
      icon: "",
      subTitle: [
        "StardewValley FortniteCompetitive Warframe totalwar Fallout RocketLeague fo76 yugioh eu4",
      ],
    },
    {
      title: <small>SPORTS</small>,
      icon: "",
      subTitle: [
        "running soccer bjj MMA hockey formula1 CFB barstoolsports airsoft rugbyunion golf MTB cycling",
      ],
    },
    {
      title: <small>TV</small>,
      icon: "",
      subTitle: [
        "Naruto BokuNoHeroAcademi marvelstudios rupaulsdragrace 90DayFiance dbz Boruto",
      ],
    },
    {
      title: <small>TRAVEL</small>,
      icon: "",
      subTitle: [
        "vancouver brasil australia mexico argentina melbourne ottawa korea ireland travel Calgary portugal",
      ],
    },
    {
      title: <small>HEALTH & FITNESS</small>,
      icon: "",
      subTitle: [
        "orangetheory bodybuilding bodyweightfitness vegan crossfit nattyorjuice EatCheapAndHealthy loseit",
      ],
    },
    {
      title: <small>FASION</small>,
      icon: "",
      subTitle: [
        "MakeupAddiction Watches BeautyGuruChatter femalefashionadvice frugalmalefashion curlyhair poshmark",
      ],
    },
  ];
  return (
    <Box
      bgcolor="#cfd8dc"
      // bgcolor="yellow"
      p={2}
      pt={6}
      flex={1}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <List>
        {objectArray.map((obj) => {
          return <ListItemCard obj={obj} />;
        })}
      </List>
      <RightbarBottomCard />
    </Box>
  );
};

export default Rightbar;
