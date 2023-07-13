import { appData } from "../data/data";

export const initialState = {
  meetupData: appData,
  sortType: "BOTH",
  searchKey: "",
};

export function dataReducer(state, action) {
  switch (action.type) {
    case "CHANGE_SORT": {
      console.log(action.payload);
      return { ...state, sortType: action.payload };
    }

    case "CHANGE_SEARCH_KEY": {
      return { ...state, searchKey: action.payload };
    }
    default:
      return state;
  }
}
