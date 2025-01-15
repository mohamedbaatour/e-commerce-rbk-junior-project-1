import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {


  const [mustangData, setMustangData] = useState([])
  
   const [bmwm , setBmwm] = useState([])

  const [current , setCurrent] = useState("mustang")
  
  const [search , setSearch] = useState("")
  
  useEffect(() => {

    const fetchMustangs = async () => {
      // eslint-disable-next-line no-useless-catch
      try {
        const fetchMustang = await axios("http://localhost:5000/api/mustangs")
        setMustangData(fetchMustang.data)
      } catch (error) {
        console.error(error)
      }
    }

    const fetchBmwms = async () => {
  try {
    const fetchBmwm = await axios("http://localhost:5000/api/bmwm")
    setBmwm(fetchBmwm.data)
    console.log(bmwm)
  } catch (error) {
    console.error(error)
  }
}
    fetchBmwms()
    fetchMustangs()
  }, [])
  

  const handleDeleteOne = async (id , current) => {
    // eslint-disable-next-line no-useless-catch
    try {
      let url = ""
      if (current === "mustang") {
        url = `http://localhost:5000/api/mustangs/${id}`
      } else {
        url = `http://localhost:5000/api/bmwm/${id}`
      }
      // eslint-disable-next-line no-unused-vars
      const deleteOne = await axios.delete(url)
      window.location.reload()
         } catch (error) {
          throw error
         }
  }

  
  const handleSearch = (e) => {
setSearch(e.target.value)
  }

let filteredData;

if (current === "mustang") {
  filteredData = mustangData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
} else {
  filteredData = bmwm.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
}
  
const changeH2 = () => {
  if (current === "mustang") {
    return "Ford Mustangs:";
  } else {
    return "BMW M Power:";
  }
};


  return (
    <div className='body'>

      <main>
        <nav>
      <img className="logo" src="https://api.iconify.design/mdi:car-turbocharger.svg?color=%23cccccc" alt="ToolVault" />
      <ul className="nav-links">
        <li><a href="#">Sell A Car</a></li>
        <li><a href="#">Models</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
      <button className="search-input-nav">Search...</button>
       {/* <div class="sign-in">
        <a href="#">Sign In</a>
      </div> 
      <button class="goCart">Cart</button>  */}
        
    </nav>
        <h1 className='h1'>Unleash the Power - Find Your Dream Sports Car Today!</h1>
        <p className='h1-p'>filter , add cars for sale, and much more! <br></br>
          (work in progress...)</p>
        <div className='search'>
          <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#cccccc" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
          <input onChange={handleSearch} className='search-input' type='search' placeholder='search...'></input>
        </div>
        
 <div className="category-buttons">
          <button className='showMustang' onClick={() => setCurrent("mustang")}>Show Mustangs</button>
          <button className='showBMW' onClick={() => setCurrent("bmwm")}>Show BMWs</button>
        </div>

        <h2 className='fords'>{changeH2()}</h2>
        <div className='cards'>
        {filteredData.map((mustang) => {
          return (
          <div key={mustang.id} className='card'>
            <img className='card-image' src={mustang.image} alt={mustang.name} />
          <h3 className='card-name'>{mustang.name}</h3>
              <p className='card-description'>{mustang.description}</p>
              <button className='card-delete' onClick={() => handleDeleteOne(mustang.id , current)}>Delete</button>
            </div>
            )
        })}
          
          
          </div>
        </main>
 </div>    
  )
}

export default App
