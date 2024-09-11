import { configureStore } from "@reduxjs/toolkit";

// maybe it should be topicsReducer ??
import topicsReducer from '../features/topics/topicsSlice'
import quizzesReducer from '../features/quizzes/quizzesSlice'
import cardsReducer from "../features/cards/cardsSlice";


// import reducers


export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer
    
  },
});
