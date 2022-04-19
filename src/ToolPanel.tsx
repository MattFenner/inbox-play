import React, { useEffect } from "react";
import "./App.css";
import { Box, Checkbox, Grid, IconButton, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreIcon from "@mui/icons-material/MoreVert";

interface Props {
  onSelectAll: () => void
}

export default function ToolPanel({onSelectAll}: Props) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      onSelectAll();
    }
  }

  return (
    <Box display="flex">
      <Box flexGrow={1} >
        <Checkbox aria-label="select all" onChange={handleChange} />
        <IconButton aria-label="refresh">
          <RefreshIcon />
        </IconButton>
        <IconButton aria-label="more">
          <MoreIcon />
        </IconButton>
      </Box>
      <Box>
        <Typography>1-50 of 2,678</Typography>
      </Box>
    </Box>
  );
}
