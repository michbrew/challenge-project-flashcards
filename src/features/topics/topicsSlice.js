import { createSlice } from "@reduxjs/toolkit"
import { addQuiz } from "../quizzes/quizzesSlice";

const initialState = {
    topics: {

    }
}

const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;

            const newTopicObject = {
                id: id, 
                name: name,
                icon: icon,
                quizIds: []
                
            }

            state.topics[id] = newTopicObject;


        }
    

    },
    extraReducers: (builder) => {
        builder
          .addCase( addQuiz, (state, action) => {
            const { id, topicId } = action.payload;
            if(state.topics[topicId]) {
            state.topics[topicId].quizIds.push(id);
}
          }

          )
    }
})


export const { addTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;