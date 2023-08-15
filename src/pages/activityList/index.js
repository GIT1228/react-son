import { Navigate } from "react-router-dom";
import { Outlet } from 'react-router-dom'
export default function ActivityList() {
    return (
        <div>
            <Navigate to="/activityList/pageOne" />
            <Outlet />
        </div>

    )
}
