import {Routes , Route} from "react-router-dom"
import { Dashboard } from "../components/pages/Dashboard"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    )
}