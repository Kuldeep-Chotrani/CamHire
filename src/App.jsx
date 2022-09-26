import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Gallery } from './components/gallery'

import { Footer } from './components/footer'
import {Contact} from './components/contact'
import KnowMore    from './components/knowmore.jsx'
import {Photographers} from './components/photographers'
import { Blogs } from './components/blogs'
// import {Popup} from './components/popup'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
// import Modal from './components/Modal'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setshowmodal(true)
    setLandingPageData(JsonData)
  }, [])
  const [showmodal, setshowmodal] = useState(false)
  const handleclick = () => setshowmodal(!showmodal)
  const [data, setData] = useState("")
  return (
    <div>
      {/* <Popup /> */}
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Photographers data={landingPageData.Photographers} />
      <Blogs data={landingPageData.Blogs} />
      <Gallery />
      
      <Contact data={landingPageData.Contact} setData={setData} handleclick={handleclick} />
      {/* { showmodal && (<Modal setData={setData} handleclick={handleclick} />)} */}
      <Footer />
      <Router>
      <Switch>
        <Route exact path={'/knowmore'} component={KnowMore}>
        </Route>
      </Switch>
      </Router>
    </div>
  )
}

export default App