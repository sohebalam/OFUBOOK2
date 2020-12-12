import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createCourseReducer}from '../reducers/course/createCourseReducer'

import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = [thunk]

const reducer = combineReducers({
    createCourse: createCourseReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))


export {store}