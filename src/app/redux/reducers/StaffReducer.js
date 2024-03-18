import { ADD_STAFF_SUCCESS, SEARCH_BY_PAGE_SUCCESS } from "../actions/StaffAction";


const initialState = {
    dataList: [],
    item: {},
    totalElements: 0
}

const StaffReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BY_PAGE_SUCCESS:
            return {
                ...state,
                dataList: action.payload,
                totalElements: action.payload?.totalElements
            }
        case ADD_STAFF_SUCCESS:
            return {
                ...state,
                item: action.payload,
                // dataList: action.payload,
                // totalElements: totalElements + 1
            }
        default:
            {
                return state;
            }
    }
}

export default StaffReducer
