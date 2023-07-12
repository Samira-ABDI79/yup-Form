import { Link } from "react-router-dom"
export default function Card({iconlist , route}){
    return (
       <>
     
    < Link  to={route} >
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
         
         <div className="flex" >
         {iconlist.map((item) => (
        <img className="w-24 h-24 " src={item.image} alt={item.title} />
        ))}
    
         </div>
   
  
  </div></Link>
   
     
  </>
    )
}