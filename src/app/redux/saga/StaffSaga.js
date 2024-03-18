import { takeEvery, put, call } from "redux-saga/effects"
import { ADD_STAFF, SEARCH_BY_PAGE, addStaffActionSuccess, searchByPageActionSuccess } from "../actions/StaffAction"
import { addStaffService, searchByPageService } from "app/services/StaffService"

function* searchByPage(actions) {
    try {
        const res = yield call(searchByPageService, actions.payload)
        if (res) {
            yield put(searchByPageActionSuccess(res?.data))
        } else {
            console.log("thất bại");
        }
    } catch (error) {

    }

}
function* addStaffPage(actions) {
    try {
        const res = yield call(addStaffService, actions.payload)
        if (res) {
            yield put(addStaffActionSuccess(res?.data))
        } else {
            console.log("thất bại");
        }
    } catch (error) {

    }
}

export default function* StaffSaga() {
    yield takeEvery(SEARCH_BY_PAGE, searchByPage)
    yield takeEvery(ADD_STAFF, addStaffPage)
}