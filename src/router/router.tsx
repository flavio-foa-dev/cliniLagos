import { createBrowserRouter} from "react-router-dom"
import App from "../App"
import Agenda from "../pages/agenda"
import Sobre from "../pages/sobrenois"
import Notfound404 from "../pages/notfound404"

export const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/agendamento",
    element: <Agenda/>
  },
  {
    path:"/sobre",
    element: <Sobre/>
  },
  {
    path:"/*",
    element: <Notfound404/>
  }
])