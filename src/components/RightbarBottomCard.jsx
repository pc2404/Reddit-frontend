import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Divider from "@mui/material/Divider";

export default function RightbarBottomCard() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <ListItem>
        <ListItemText secondary="User Agreement" />
        <ListItemText secondary="Content policy" />
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem>
        <ListItemText secondary="Privacy Policy" />
        <ListItemText secondary="Moderator Code Of Conduct" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemText secondary="English" />
        <ListItemText secondary="Deutsch" />
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem>
        <ListItemText secondary="Français" />
        <ListItemText secondary="Español" />
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <ListItem>
        <ListItemText secondary="Italiano" />
        <ListItemText secondary="Português" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemText secondary="Reddit Inc © 2023. All rights reserved" />
      </ListItem>
    </List>
  );
}
