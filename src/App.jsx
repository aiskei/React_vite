import HouseList from './components/HouseList.jsx'
import Banner from './components/Banner.jsx'
import Home from './components/Home.jsx'

function App() {
    return [
        <div className="container">
            <Banner />
            <Home />
            <HouseList />
        </div>
    ]
}

export default App
