import MgnPageOne from '../pages/activityMgn/mgnPageOne.js'
import MgnPageTow from '../pages/activityMgn/mgnPageTow.js'
const rules = {
    path: "activityMgn",
    title: "管理页面",
    component: <div></div>,
    exact: true,
    children: [
        {
            path: "pageOne",
            title: "管理页面1",
            element: <MgnPageOne />
        },
        {
            path: "mgnPageTow",
            title: "管理页面2",
            element: <MgnPageTow />
        },
    ]
}
export default rules