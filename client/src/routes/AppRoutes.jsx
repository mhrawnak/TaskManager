import {Routes , Route} from "react-router-dom"
import Dashbaord from "../components/pages/Dashboard"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashbaord />} />
        </Routes>
    )
}