import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
import { useRef } from 'react';


function App() {


  const [mustangData, setMustangData] = useState([])
  
   const [bmwm , setBmwm] = useState([])

  const [current , setCurrent] = useState("mustang")
  
  const [search, setSearch] = useState("")
  
  const [name, setName] = useState("")
  
  const [description, setDescription] = useState("")
  
  const [image , setImage] = useState("")
  
   const formRef = useRef(null)


    const fetchMustangs = async () => {
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


  useEffect(() => {
    fetchBmwms()
    fetchMustangs()
  },[])



  

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
    return "Ford Mustangs";
  } else {
    return "BMW M Power";
  }
};
  
  const handleName = (e) => {
    setName(e.target.value)
  }
  
    const handleDescription = (e) => {
    setDescription(e.target.value)
    }
    const handleImage = (e) => {
    setImage(e.target.value)
  }
  
  const handlePost = async () => {
    const body = {name , description , image}
    try {
        let url = ""
        if (current === "mustang") {
          url = "http://localhost:5000/api/mustangs"
        } else if(current === "bmwm") {
          url = "http://localhost:5000/api/bmwm"
        }
      const post = axios.post(url, body)
      setTimeout(() => {
window.location.reload()
      }, "6000")
      
      
      } catch (error) {
        console.error(error)
      }
    }


  return (
    <div className='body'>

      <main>
        <div className="bg-blob"></div>
        <nav>
      <img className="logo" src="https://api.iconify.design/mdi:car-turbocharger.svg?color=%23cccccc" alt="ToolVault" />
      <ul className="nav-links">
        <li><a onClick={() => formRef.current.scrollIntoView({ behavior: 'smooth' })} href="#" >Sell A Car</a></li>
        <li><a href="#">Models</a></li>
        <li><a href="https://github.com/mohamedbaatour" target="_blank">About Us</a></li>
      </ul>
      <button className="search-input-nav">Search...</button>
       {/* <div class="sign-in">
        <a href="#">Sign In</a>
      </div> 
      <button class="goCart">Cart</button>  */}
        
    </nav>
        <h1 className='h1'>Unleash the Power - Find Your Dream Sports Car Today!</h1>
        <p className='h1-p'>filter , add cars for sale, and much more! <br></br>
         </p>
        <div className='search'>
          <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#cccccc" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
          <input onChange={handleSearch} className='search-input' type='search' placeholder='SEARCH...'></input>
        </div>
        
        <div className="category-buttons">
          <button className={current === 'mustang' ? 'showMustang active': 'showMustang'} onClick={() => setCurrent("mustang")}>Show Mustangs</button>
          <button className={current === 'bmwm' ? 'showBMW active': 'showBMW'} onClick={() => setCurrent("bmwm")}>Show BMWs</button>
        </div>

        <h2 className='fords'>{changeH2()}</h2>
        <div className='cards'>
        {filteredData.map((mustang) => {
          return (
          <div key={mustang.id} className='card'>
              <img className='card-image' src={mustang.image} alt={mustang.name} />
              <div className='card-content'>
          <h3 className='card-name'>{mustang.name}</h3>
              <p className='card-description'>{mustang.description}</p>
              </div>

              <button className='card-delete' onClick={() => handleDeleteOne(mustang.id, current)}>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="#cccccc" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17"/></svg>
                <div className="delete-text">Delete</div>
              
              </button>
            </div>
            )
        })}
          
         
          
        </div>

        <div className='sell'>
          <div className="sell-content">
   <h2>{current === "bmwm" ? "want to sell your BMW?" : "want to sell your Mustang?"}</h2>
          <p className='sell-p'>Sell it here Quickly and easily!</p>
          <form ref={formRef}>
            <h3 className='input-h3'>{current === "bmwm" ? "BMW Name" : "Mustang Name"}</h3>
            <input onChange={handleName} className='sell-input' type='text' placeholder='Car Name'></input>
            <h3 className='input-h3'>{current === "bmwm" ? "BMW Description" : "Mustang Description"}</h3>
            <input onChange={handleDescription} className='sell-input' type='text' placeholder='Car Description'></input>
            <h3 className='input-h3'>{current === "bmwm" ? "BMW Image URL" : "Mustang Image URL"}</h3>
            <input onChange={handleImage} className='sell-input' type='text' placeholder='Car Image URL'></input>
            <button onClick={handlePost} className='submit-button' type='submit'>{current === "bmwm" ? "sell your BMW" : "sell your Mustang"}</button>
          </form>
          </div>
       
          </div>
        </main>
 </div>    
  )
}

export default App
