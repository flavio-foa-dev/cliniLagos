import { createBrowserRouter} from "react-router-dom"
import App from "../App"
import Logar from "../pages/logar"

export const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/login",
    element: <Logar/>
  }
])