import Card from "../components/card"
import { component1 ,component2,component3 } from "../constant/indx"
export default function Home(){
    return (
        <>
          <div className="container py-20 "  dir="rtl" >
     <div className="flex justify-between px-[16rem] " >
     <Card iconlist={component1} route="/reactTailwindjs" />
       <Card iconlist={component2} route="/reactTailwindjs" />

       <Card iconlist={component3} route="/reactTailwindjs" />
     </div>


          </div>
        </>
    )
}