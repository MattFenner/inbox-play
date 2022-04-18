import { Box, CssBaseline, Typography } from "@mui/material";
import "./App.css";
import Grid from "@mui/material/Grid";
import React from "react";
import Header from "./Header";
import ToolPanel from "./ToolPanel";
import TabPanel from "./TabPanel";
import MailItems from "./MailItems";

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
            <MailItems />
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  );
}

export default App;
