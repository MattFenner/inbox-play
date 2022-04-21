import _ from "lodash";
import { faker } from "@faker-js/faker";
import { Dispatch, useReducer } from "react";
import React from "react";
import * as uuid from "uuid";

export interface MailItemState {
  id: string;
  selected: boolean;
  from: string;
  subject: string;
  date: Date;
  isRead?: boolean;
}

export type MailItemAction =
  | { type: "select-all"; select: boolean }
  | { type: "select-item"; id: string; select: boolean };

const initialMailItems: MailItemState[] = _.chain(_.range(50))
  .map(
    (_): MailItemState => {
      return {
        id: uuid.v4(),
        date: faker.date.past(),
        from: faker.company.companyName(),
        subject: `There are ${faker.datatype.number({
          min: 2,
          max: 100,
        })} ${faker.animal.type()}s in your area!`,
        isRead: faker.datatype.boolean(),
        selected: false,
      };
    }
  )
  .sortBy(["date"])
  .reverse()
  .value();

function mailItemsReducer(
  state: MailItemState[],
  action: MailItemAction
): MailItemState[] {
  console.log(action);
  switch (action.type) {
    case "select-all":
      return state.map((item) => {
        return {
          ...item,
          selected: action.select,
        };
      });
    case "select-item":
      return state.map((item) => {
        if (item.id == action.id) {
          return {
            ...item,
            selected: action.select,
          };
        } else {
          return item;
        }
      });
  }
}

export function useMailItemsReducer(): [
  MailItemState[],
  Dispatch<MailItemAction>
] {
  return useReducer(mailItemsReducer, initialMailItems);
}

export const MailItemsDispatchContext = React.createContext<
  Dispatch<MailItemAction>
>(null!);
