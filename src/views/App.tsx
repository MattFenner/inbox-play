import { Box, CssBaseline, Typography } from "@mui/material";
import "./App.css";
import Grid from "@mui/material/Grid";
import React, { ReducerAction, useContext, useReducer } from "react";
import Header from "./Header";
import ToolPanel from "./ToolPanel";
import TabPanel from "./TabPanel";
import MailItems from "./MailItems";
import { faker } from "@faker-js/faker";
import _ from "lodash";
import { MailItemAction, MailItemsDispatchContext, useMailItemsReducer } from "../state/mailItems";



function App() {

  const [mailItems, dispatchMailItems] = useMailItemsReducer();

  return (
    <MailItemsDispatchContext.Provider value={dispatchMailItems}>
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
    </MailItemsDispatchContext.Provider>
  );
}

export default App;
