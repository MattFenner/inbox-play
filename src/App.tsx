import { Box, CssBaseline, Typography } from "@mui/material";
import "./App.css";
import Grid from "@mui/material/Grid";
import React from "react";
import Header from "./Header";
import ToolPanel from "./ToolPanel";
import TabPanel from "./TabPanel";
import MailItems, { MailItem } from "./MailItems";
import { faker } from "@faker-js/faker";
import _ from "lodash";

const mailItems = _.sortBy(_.range(20)
  .map((_) => {
    return {
      date: faker.date.past(),
      from: faker.company.companyName(),
      subject: `There are ${faker.random.number({min:2, max:100})} ${faker.animal.type()}s in your area!`,
      isRead: faker.random.boolean()  
    } as MailItem;
  }), ["date"])

function App() {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Header />
      <main>
        <Grid
          container
          alignItems="start"
          sx={{
            padding: "0px 40px 0px 40px",
          }}
        >
          <Grid item xs={12}>
            <ToolPanel />
          </Grid>
          <Grid item xs={12}>
            <TabPanel />
          </Grid>
          <Grid item xs={12}>
            <MailItems items={mailItems} />
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  );
}

export default App;
