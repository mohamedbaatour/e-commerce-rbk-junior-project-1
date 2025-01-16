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
  
  const [image, setImage] = useState("")
  
  const [phone, setPhone] = useState("")

  const [price , setPrice] = useState("")
  
   const formRef = useRef(null)

  const productRef = useRef(null);

  const cardsRef = useRef(null);
  
  const modelsRef = useRef(null)


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
  
 const handlePrice = (e) => {
  setPrice(e.target.value)
    }
  
 const handlePhone = (e) => {
  setPhone(e.target.value)
}
  
  const handlePost = async () => {
    const body = {name , description , image, phone, price}
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
      }, "500")
      
      
      } catch (error) {
        console.error(error)
      }
  }
  
  const handleUpdate = async (body) => {
      console.log(body)
    try {
        let url = ""
        if (current === "mustang") {
          url = `http://localhost:5000/api/mustangs/${body.id}`
        } else if(current === "bmwm") {
          url = `http://localhost:5000/api/bmwm/${body.id}`
        }
      await axios.put(url, body);
      
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
        <li><a onClick={() => formRef.current.scrollIntoView({ behavior: "smooth" })} href="#" >Sell A Car</a></li>
        <li><a onClick={() => modelsRef.current.scrollIntoView({behavior: "smooth"})}  href="#">Models</a></li>
        <li><a href="https://github.com/mohamedbaatour" target="_blank">About <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#cccccc" d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"/></svg></a></li>
      </ul>
    
       {/* <div class="sign-in">
        <a href="#">Sign In</a>
      </div> 
      <button class="goCart">Cart</button>  */}
        
    </nav>
        <h1 className='h1'>Unleash the Power <br/> Find Your Dream Sports Car Today!</h1>
        <p className='h1-p'>filter , add cars for sale, and much more! <br></br>
        </p>
        
        <div className="actions">
               <div ref={productRef} className='search'>
          <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#cccccc" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
          <input onChange={handleSearch} className='search-input' type='search' placeholder='SEARCH...'></input>
        </div>
        
        <div className="category-buttons" ref={modelsRef}>
          <span className="category-filter">Filtering</span>
          <button className={current === 'mustang' ? 'showMustang active': 'showMustang'} onClick={() => setCurrent("mustang")}>Show Mustangs</button>
          <button className={current === 'bmwm' ? 'showBMW active': 'showBMW'} onClick={() => setCurrent("bmwm")}>Show BMWs</button>
        </div>
        </div>
   

        <h2  className='fords'>{changeH2()}</h2>
        <div className='cards'  ref={cardsRef}>
        {filteredData.map((mustang) => {
          return (
          <div key={mustang.id} className='card'>
              <img className='card-image' src={mustang.image} alt={mustang.name} />
              <div className='card-content'>
                <h3 className='card-name edit' contentEditable
                  onInput={(e) => handleUpdate({ ...mustang, name: e.target.textContent })}
                >
                  {mustang.name}</h3>
                <p className='card-description edit' contentEditable  onInput={(e) => handleUpdate({ ...mustang, description: e.target.textContent })} >{mustang.description}</p>
                
                <p className='card-price'  >
                  <span className="card-price-text">Price</span>
                  <span className="edit" contentEditable  onInput={(e) => handleUpdate({ ...mustang, price: e.target.textContent })}>{mustang.price || '-'}</span>
                   <pre> TND</pre></p>
                
                <p className='card-phone' >
                  <span className="card-phone-text">Phone</span>
                  <span className="edit" contentEditable  onInput={(e) => handleUpdate({ ...mustang, phone: e.target.textContent })}>{mustang.phone || '-'}</span>
                  </p>
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
            <h3 className='input-h3'>{current === "bmwm" ? "BMW Model" : "Mustang Model"}</h3>
            <input onChange={handleName} className='sell-input' type='text' placeholder='Car Name'></input>
            <h3 className='input-h3'>{current === "bmwm" ? "BMW Description" : "Mustang Description"}</h3>
            <input onChange={handleDescription} className='sell-input' type='text' placeholder='Car Description'></input>
            <h3 className='input-h3'>{current === "bmwm" ? "BMW Image URL" : "Mustang Image URL"}</h3>
              <input onChange={handleImage} className='sell-input' type='text' placeholder='Car Image URL'></input>
              
                          <h3 className='input-h3'>Selling Price</h3>
              <input onChange={handlePrice} className='sell-input' type='number' placeholder='Price in TND'></input>
              
            <h3 className='input-h3'>Owner Phone Number</h3>
              <input onChange={handlePhone} className='sell-input' type='number' placeholder='Phone number'></input>
              


              <button onClick={handlePost} className='submit-button' type='submit'>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className='sell-icon' viewBox="0 0 24 24"><path fill="#cccccc" d="M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.837t.95-.088l15.4 6.5q.625.275.625.925t-.625.925z"/></svg>
                {current === "bmwm" ? "Sell your BMW" : "Sell your Mustang"}</button>
          </form>
          </div>
       
          </div>
        </main>
 </div>    
  )
}

export default App
