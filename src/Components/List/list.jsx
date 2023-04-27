import { useNavigate } from "react-router-dom";
import Book from "../Book/book";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './list.css'


export default function List(props) {
  console.log(props.bookList);
  console.log(props.category);
  const navigate = useNavigate();
 const settings = {
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
  return (
    <div>
      <div className="flex justify-between px-10 py-9">
        <div className="md:text-[20px]">{props.category}</div>
        <button className="px-3 py-3 text-white rounded-md bg-lime-500 md:text-[15px]">
          View all
        </button>
      </div>
      <div>
        <Slider {...settings}>
        {props.bookList.map((product) => {
          return (
            <div key={product.id} className="p-4 mb-6 md:w-1/3 sm:mb-0">
              <div className="flex justify-center h-auto px-4 py-4 overflow-hidden rounded-lg">
                <img
                  alt="content"
                  className="object-contain h-[200px]"
                  src={product.url}
                />
              </div>
             <div className="text-center">
             <h1 className="text-[15px] font-medium">
                {product.name}
              </h1>
              <h2 className="text-xl text-gray-900 ">
                {product.author}
              </h2>
              <p className="mt-2 text-base leading-relaxed">
                {product.description}
              </p>
              <p className="text-xl font-bold">
              <span>&#8377;{product.price}</span>
              </p>
             </div>
              <div
                onClick={() => {
                  navigate("/book", {
                    state: { product },
                  });
                }}
              >
                <button className="w-full bg-green-500 text-[13px] px-3 py-4 text-white">
                  Rent Now
                </button>
              </div>
            </div>
          );
        })}
        </Slider>
      </div>
    </div>
  );
}
