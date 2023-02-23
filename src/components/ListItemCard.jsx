import React, { useState } from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { Container } from "@mui/system";

const ListItemCard = ({ obj }) => {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <Container sx={{ backgroundColor: "white" }}>
      <ListItemButton onClick={handleClick}>
        {obj.icon ? <ListItemIcon>{obj.icon}</ListItemIcon> : null}

        <ListItemText primary={obj.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {obj.subTitle.map((item) => {
        return (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4, color: "grey" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </List>
          </Collapse>
        );
      })}
      {!obj.icon ? <hr /> : null}
    </Container>
  );
};

export default ListItemCard;
