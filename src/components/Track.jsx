import { UserContext } from "../contexts/UserContext"
import { useContext, useEffect, useState } from "react"
import Food from "./Food";
import Header from './Header'
export default function Track()
{

    const loggedData = useContext(UserContext);

    const [foodItems,setFoodItems] = useState([]);

    const [food,setFood] = useState(null);
    let [name,setName] = useState("")
    
   useEffect(()=>{
    console.log(loggedData.loggedUser)
    setName(loggedData.loggedUser.name)
    console.log(name)
    
   },[])

    function searchFood(event)
    {
        if(event.target.value.length!==0)
        {

         fetch(`https://ntl-1.onrender.com/foods/${event.target.value}`,{
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${loggedData.loggedUser.token}`
                }

            })
            .then((response)=>response.json())
            .then((data)=>{

                console.log(data);
                
                    setFoodItems(data);
               
                
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        else 
        {
            setFoodItems([]);
        }

        
    }



    return (
        <>

            <section className="container track-container">

                <Header/>
                <h2>Welcome {name}</h2>
                <h4>Track Your Nutrition {name} By Just Searching any food Item That You have Eaten Tody </h4>
                

                <div className="search">

                    <input className="search-inp" onChange={searchFood}
                    type="search" placeholder="Search Food Item"/>

                    {
                        foodItems.length!==0?(
                            <div className="search-results">

                                {
                                    foodItems.map((item)=>{
                                        return (
                                            <p className="item" onClick={()=>{
                                                setFood(item);
                                                setTimeout(()=>{
                                                    setFoodItems([])
                                                },2000)
                                            }} key={item._id}>{item.name}</p>
                                        )
                                    })
                                }

                            </div> 
                        ):null
                    }

                     

                </div>

                {
                    food!==null?(
                        <Food food = {food}/>
                    ):null
                }  
               



            </section>

        </>
    )
}
