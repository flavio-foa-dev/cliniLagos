import { createBrowserRouter} from "react-router-dom"
import App from "../App"
import Agenda from "../pages/agenda"
import Sobre from "../pages/sobrenois"

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
  }
])