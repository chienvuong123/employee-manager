import React from 'react'
import { Redirect } from 'react-router-dom'
import homeRoutes from './views/home/HomeRoutes'
import sessionRoutes from './views/sessions/SessionRoutes'
import ConstantList from './appConfig'
import StaffRoutes from './views/AddStaff/StaffRoutes'

const redirectRoute = [
    {
        path: ConstantList.ROOT_PATH,
        exact: true,
        component: () => <Redirect to={ConstantList.HOME_PAGE} />, //Luôn trỏ về HomePage được khai báo trong appConfig
    },
]

const errorRoute = [
    // {
    //   component: () => <Redirect to={ConstantList.ROOT_PATH + "session/404"} />
    // }
]
const routes = [...homeRoutes, ...sessionRoutes, ...errorRoute, ...StaffRoutes]

export default routes
