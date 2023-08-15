import { Navigate } from "react-router-dom";
import { Outlet } from 'react-router-dom'

export default function ActivityMgn() {
    return (
        <div>
            <Navigate to="/activityMgn/mgnPageOne" />
            <Outlet />
        </div>

    )
}