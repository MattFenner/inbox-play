import { Box, CssBaseline, Typography } from "@mui/material";
import "./App.css";
import Grid from "@mui/material/Grid";
import React, { ReducerAction, useReducer } from "react";
import Header from "./Header";
import ToolPanel from "./ToolPanel";
import TabPanel from "./TabPanel";
import MailItems, { MailItem } from "./MailItems";
import { faker } from "@faker-js/faker";
import _ from "lodash";

const initialMailItems = _.sortBy(_.range(20)
  .map((_) => {
    return {
      date: faker.date.past(),
      from: faker.company.companyName(),
      subject: `There are ${faker.datatype.number({min:2, max:100})} ${faker.animal.type()}s in your area!`,
      isRead: faker.datatype.boolean()  
    } as MailItem;
  }), ["date"])

type Action =
 | { type: 'select-all' }

function mailItemsReducer(state: MailItem[], action: Action) {
  console.log(action);
  switch (action.type) {
    case 'select-all' :
      // FIXME: implement
      return state;
    default:
      return state;
  }
}

function App() {

  const [mailItems, dispatch] = useReducer(mailItemsReducer, initialMailItems);

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
            <ToolPanel onSelectAll={() => dispatch({type: 'select-all'})} />
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
