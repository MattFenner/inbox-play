import React from "react";
import {
  Box,
  Checkbox,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

function MailItem(props: { from: String; subject: String, isRead?: Boolean }) {
  
  const typographyProps =  {fontWeight: props.isRead ? "bold" : "normal"} ;
  return (
    <ListItem disablePadding>
      <Checkbox />
      <ListItemButton>
        <ListItemText primary={props.from} primaryTypographyProps={typographyProps}/>
        <ListItemText primary={props.subject} primaryTypographyProps={typographyProps}/>
      </ListItemButton>
    </ListItem>
  );
}

export default function MailItems() {
  return (
    <Paper sx={{ marginTop: 2 }}>
      <List>
        <MailItem from="Someone 1" subject="Mail 1" />
        <MailItem from="Someone 2" subject="Mail 2" isRead={true} />
        <MailItem from="Someone 3" subject="Mail 3" isRead={true} />
        <MailItem from="Someone 4" subject="Mail 4" isRead={true} />
        <MailItem from="Someone 5" subject="Mail 5" />
      </List>
    </Paper>
  );
}
