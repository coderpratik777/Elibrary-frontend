import { Link } from "react-router-dom";
import List from "../List/list";


export default function MainContainer(){
    const categories=[
        "Novel","Drama","Motivational"
    ]

    const data=[
        {
            id:1,
            url:"https://rukminim1.flixcart.com/image/312/312/kcjexe80/book/3/7/8/rich-dad-poor-dad-original-imaftn7pnn7ykgyr.jpeg?q=70",
            price:"234",
            type:"financial",
            name:"Rich dad Poor dad",
            author:" Robert T. Kiyosaki"
        },
        {
            id:2,
            url:"https://rukminim1.flixcart.com/image/312/312/kcjexe80/book/3/7/8/rich-dad-poor-dad-original-imaftn7pnn7ykgyr.jpeg?q=70",
            price:"234",
            type:"financial",
            name:"Rich dad Poor dad",
            author:" Robert T. Kiyosaki"
        },
        {
            id:3,
            url:"https://rukminim1.flixcart.com/image/312/312/kcjexe80/book/3/7/8/rich-dad-poor-dad-original-imaftn7pnn7ykgyr.jpeg?q=70",
            price:"234",
            type:"financial",
            name:"Rich dad Poor dad",
            author:" Robert T. Kiyosaki"
        },
        {
            id:4,
            url:"https://rukminim1.flixcart.com/image/312/312/kcjexe80/book/3/7/8/rich-dad-poor-dad-original-imaftn7pnn7ykgyr.jpeg?q=70",
            price:"234",
            type:"financial",
            name:"Rich dad Poor dad",
            author:" Robert T. Kiyosaki"
        },
        {
            id:1,
            url:"https://rukminim1.flixcart.com/image/312/312/kcjexe80/book/3/7/8/rich-dad-poor-dad-original-imaftn7pnn7ykgyr.jpeg?q=70",
            price:"234",
            type:"financial",
            name:"Rich dad Poor dad",
            author:" Robert T. Kiyosaki"
        }
        
    ]

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