import { Link } from "react-router-dom";
import List from "../List/list";
import { categories ,data } from "../Constants/constants";


export default function MainContainer(){

    return(
        <>
  
        <div className="px-5 py-5">
            <div>
                <div>
                    <img className="h-full" src="https://rukminim1.flixcart.com/flap/1800/1800/image/b3fe381767050079.jpg?q=80"/>
                </div>
                <div className="flex items-center justify-around my-4 px-5 py-5 text-[20px] shadow-lg">
                    <Link className="px-12 py-5 bg-gray-200 border border-black" to="/">
                        Hindi
                    </Link >
                    <Link to="/" className="px-12 py-5 bg-gray-200 border border-black">
                        English
                    </Link>
                    <Link to="/about" className="px-12 py-5 bg-gray-200 border border-black">
                        Marathi 
                    </Link>
                </div>
                <div className="py-4 px-7">
                    {categories.map((category)=>{
                        console.log("category calling");
                        return(<List bookList={data} category={category}/>);
                    })}
                </div>
                
            </div>
        </div>
        
        </>
    );

}