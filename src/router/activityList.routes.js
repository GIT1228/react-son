// import { Navigate } from "react-router-dom"
import PageOne from '../pages/activityList/pageOne.js'
import PageTow from '../pages/activityList/pageTow.js'
// import ActivityList from '../pages/activityList/index.js'
const rules = {
    path: "activityList",
    title: "活动页面",
    // component: <div></div>,
    // exact: true,
    children: [
        {
            path: "pageOne",
            title: "活动页面1",
            exact: true,
            element: <PageOne />
        },
        {
            path: "pageTow",
            title: "活动页面2",
            exact: true,
            element: <PageTow />
        },
    ]
}
export default rules