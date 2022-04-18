import React from "react";
import AppBar from "@mui/material/AppBar";
import "./App.css";
import {
    CssBaseline,
  FilledInput,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  Paper,
  SxProps,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";

const searchAdornment = (
  <InputAdornment position="start">
    <SearchIcon />
  </InputAdornment>
);

function SearchInput(props: { sx?: SxProps }) {
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "60%",
        backgroundColor: "#fff2",
        ...props.sx,
      }}
    >
      <IconButton>
        <SearchIcon sx={{color:"#fff"}} />
      </IconButton>
      <InputBase
        placeholder="Search Mail"
        type="search"
        aria-label="search mail"
        sx={{ ml: 1, flex: 1, color: "#fff" }}
      />
    </Paper>
  );
}

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          Inbox
        </Typography>
        <SearchInput
          sx={{ flex: 1, marginLeft: "100px", marginRight: "50px" }}
        />
        <IconButton edge="end" color="inherit">
          <AppsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
