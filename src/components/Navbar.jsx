import React, { useState } from "react";
import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Button,
  Menu,
  MenuItem,
  Switch,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import {
  Pets,
  QrCodeScanner,
  PersonOutlineOutlined,
  ExpandMore,
  ModeNightOutlined,
  HelpOutline,
  CampaignOutlined,
  LoginOutlined,
} from "@mui/icons-material";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../state";
import logo from "../assets/5a5a6b3b14d8c4188e0b0887.png";
import circleLogo from "../assets/reddit-icon-25853.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  console.log(token);

  function handleExpand() {
    setOpen((prev) => !prev);
  }

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const moreArray = [
    "Reddit iOS",
    "Reddit Android",
    "Rereddit",
    "Best Communities",
    "Communities",
    "About Reddit",
    "Blog",
    "Career",
    "Press",
  ];

  const TnPArray = ["User Agreement", "Private Policy", "Content Policy"];

  const StyledToolbar = styled(Toolbar)({
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
  });

  const SearchBar = styled("div")({
    backgroundColor: "#eceff1",
    padding: "0 10px",
    color: "black",
    width: "50%",
    height: "40px",
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
  });
  const Login = styled("div")({
    backgroundColor: "white",
    padding: "0 10px",
    color: "black",
  });

  const MyButton = styled(Button)({
    borderRadius: "30px",
    width: "120px",
  });

  return (
    <Box>
      <AppBar position="sticky">
        <StyledToolbar>
          <Box
            component="img"
            alt="Logo"
            src={logo}
            sx={{ height: 30, display: { xs: "none", md: "block" } }}
          />
          <Box
            component="img"
            alt="Logo"
            src={circleLogo}
            sx={{ height: 30, display: { xs: "block", md: "none" } }}
          />

          <Pets sx={{ display: { xs: "block", sm: "none" } }} />
          <SearchBar>
            <InputBase placeholder="Search Reddit" sx={{ width: "100%" }} />
          </SearchBar>
          <Login>
            <Stack spacing={2} direction="row">
              <Stack
                direction="row"
                spacing={2}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <MyButton startIcon={<QrCodeScanner />} variant="outlined">
                  Get App
                </MyButton>
                {token ? (
                  <MyButton
                    variant="contained"
                    onClick={() => dispatch(setLogout())}
                  >
                    Logout
                  </MyButton>
                ) : (
                  <MyButton
                    variant="contained"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </MyButton>
                )}
              </Stack>
              <Stack direction="row">
                <PersonOutlineOutlined sx={{ color: "grey" }} />
                <ExpandMore sx={{ color: "grey" }} onClick={handleExpand} />
              </Stack>
            </Stack>
          </Login>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>
            <Stack direction="row" spacing={2}>
              <Stack direction="row" spacing={1}>
                <ModeNightOutlined />
                Dark Mode
              </Stack>
              <Switch {...label} />
            </Stack>
          </MenuItem>
          <MenuItem>
            <Stack direction="row" spacing={2}>
              <Stack direction="row" spacing={1}>
                <HelpOutline />
                Help Center
              </Stack>
            </Stack>
          </MenuItem>
          {["More", "Terms & Policies"].map((listItem) => {
            return (
              <MenuItem>
                <Accordion sx={{ width: "100%" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{listItem}</Typography>
                  </AccordionSummary>

                  {(listItem === "More" ? moreArray : TnPArray).map((item) => {
                    return (
                      <AccordionDetails>
                        <Typography>{item}</Typography>
                      </AccordionDetails>
                    );
                  })}
                </Accordion>
              </MenuItem>
            );
          })}
          <MenuItem>
            <Stack direction="row" spacing={2}>
              <Stack direction="row" spacing={1}>
                <CampaignOutlined />
                Advertise on Reddit
              </Stack>
            </Stack>
          </MenuItem>
          <MenuItem>
            <Stack direction="row" spacing={2}>
              <Stack direction="row" spacing={1}>
                <LoginOutlined onClick={() => navigate("/login")} />
                Log In/ Sign Up
              </Stack>
            </Stack>
          </MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
};

export default Navbar;
