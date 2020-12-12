import { CREATE_COURSE_FAIL, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS } from "../../actions/actionTypes";

const createCourseReducer = (state={}, action) => {
    switch(action.type){
        case CREATE_COURSE_REQUEST:
        return{ 
            loading: true,
        }
        case CREATE_COURSE_SUCCESS:
        return{ 
            loading: false,

            course: action.payload
        }
        
        case CREATE_COURSE_FAIL:
        return{ 
            loading: false,

            error: action.payload
        }
        default:
            return state
    }
}

export {createCourseReducer }