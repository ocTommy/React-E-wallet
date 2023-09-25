import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Root from "./pages/Root"
import NewCard from "./pages/newCard"
import Cards from "./pages/cards"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Cards/>}/>
      <Route path="/addCard" element={<NewCard/>}/>
    </Route>
  )
)
export default function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}


