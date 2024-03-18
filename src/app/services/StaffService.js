import axios from "axios"
import ConstantList from "../appConfig"
const API_STAFF = ConstantList.API_ENPOINT + '/employee'


export const searchByPageService = async (objectPage) => {
    const response = await axios.get(API_STAFF + '/search', { params: { ...objectPage } })
    return response?.data
}

export const addStaffService = async (data) => {
    const response = await axios.post(API_STAFF, data)
    return response?.data
}