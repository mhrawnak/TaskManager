import { Routes, Route, Outlet } from "react-router-dom"
import { NavBar } from "../common/NavBar"
import { Dashboard } from "../components/pages/Dashboard"

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
)

export const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />} />
    </Route>
  </Routes>
)