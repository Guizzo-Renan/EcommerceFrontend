import { useState } from "react";
import Button from "../Shared/Button";

import { useDispatch } from "react-redux";

import { addToCart } from "../../state";


const ProductCard = ({ data }) => {

  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const item = data;

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((item) => (
          <div
            data-aos="fade-up"
            data-aos-delay={item.aosDelay}
            className="group"
            key={item.id}
          >
            <div className="relative">
              <img
                src={"http://localhost:1337"+item.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                <Button
                  text={"Add to cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                  onClick={() => {
                    dispatch(addToCart({ item: { ...item, count } }));
                  }}
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{item.title}</h2>
              <h2 className="font-bold">${item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;


/*

import { useDispatch } from "react-redux";

import { addToCart } from "../../state";

  onClick={() => {
                dispatch(addToCart({ item: { ...item, count } }));
              }}

*/