// import { Navigate } from "react-router-dom"
import PageOne from '../pages/activityList/pageOne.js'
import PageTow from '../pages/activityList/pageTow.js'
// import ActivityList from '../pages/activityList/index.js'
const rules = {
    path: "activityList",
    title: "活动详情",
    // component: <div></div>,
    // exact: true,
    children: [
        {
            path: "pageOne",
            title: "活动详情1",
            exact: true,
            element: <PageOne />
        },
        {
            path: "pageTow",
            title: "活动详情2",
            exact: true,
            element: <PageTow />
        },
    ]
}
export default rules