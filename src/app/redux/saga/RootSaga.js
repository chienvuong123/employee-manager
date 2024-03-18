import { all } from "redux-saga/effects"
import StaffSaga from "./StaffSaga"


export function* rootSaga() {
    yield all([
        StaffSaga()
    ])
}