import React, { useContext } from "react";
import {
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarBorderOutlined";
import moment from "moment";
import { MailItemsDispatchContext, MailItemState } from "../state/mailItems";

function ListItemPrimary(props: MailItemState) {
  return (
    <Grid container>
      <Grid item xs={3}>
        {props.from}
      </Grid>
      <Grid item xs={7}>
        {props.subject}
      </Grid>
      <Grid item xs={2}>
        {moment(props.date).fromNow()}
      </Grid>
    </Grid>
  );
}

function MailItem(props: MailItemState) {
  const mailItemsDispatch = useContext(MailItemsDispatchContext);

  const handleSelectedChanged = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    mailItemsDispatch({ type: "select-item", id: props.id, select: checked });
  };

  const typographyProps = { fontWeight: props.isRead ? "bold" : "normal" };
  return (
    <ListItem disablePadding>
      <Checkbox
        aria-label="selected"
        checked={props.selected}
        onChange={handleSelectedChanged}
      />
      <Checkbox
        aria-label="favorited"
        checkedIcon={<StarIcon color="warning" />}
        icon={<StarOutlineIcon />}
      />
      <ListItemButton>
        <ListItemText
          primaryTypographyProps={typographyProps}
          primary={<ListItemPrimary {...props} />}
        />
      </ListItemButton>
    </ListItem>
  );
}

interface MailItemsProps {
  items: MailItemState[];
}

export default function MailItems({ items }: MailItemsProps) {
  return (
    <Paper sx={{ marginTop: 2 }}>
      <List>
        {items.map((item) => (
          <MailItem key={item.subject} {...item} />
        ))}
      </List>
    </Paper>
  );
}
