import { CREATE_COURSE_FAIL, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS } from "./actionTypes"
import axios from 'axios'

const createCourseAction = (courseData) => {


try {
    return async (dispatch) =>
    dispatch({
        type: CREATE_COURSE_REQUEST,
    
    })
    const config = {
        'Content-Type': 'application/json',
    }
    const {data} = await axios.post('/api/course', courseData, config)
    dispatch({
        type: CREATE_COURSE_SUCCESS,
        payload: data,
    })
    
    
} catch (error) {
    dispatch({
        type: CREATE_COURSE_FAIL,
        payload: error.response && error.response.data.message,
    })
}
  


}

export {createCourseAction}