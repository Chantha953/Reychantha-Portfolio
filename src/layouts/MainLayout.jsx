import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const MainLayout = () =>{
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div className="container">
                <Outlet/>
            </div>
        </div>
    )
}
export default MainLayout;