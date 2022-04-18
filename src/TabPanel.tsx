import { Paper, Tab, Tabs } from "@mui/material";
import PrimaryIcon from "@mui/icons-material/Inbox";
import SocialIcon from "@mui/icons-material/People";
import PromotionsIcon from "@mui/icons-material/LocalOffer";

export default function TabPanel() {
  return (
    <Paper elevation={0}>
      <Tabs value={0} textColor="secondary" indicatorColor="secondary">
        <Tab icon={<PrimaryIcon />} iconPosition="start" label="Primary" />
        <Tab icon={<SocialIcon />} iconPosition="start" label="Social" />
        <Tab
          icon={<PromotionsIcon />}
          iconPosition="start"
          label="Promotions"
        />
      </Tabs>
    </Paper>
  );
}
