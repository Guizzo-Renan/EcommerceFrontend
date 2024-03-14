import React from "react";
import Image1 from "../../assets/category/Clothes.png";
import Image2 from "../../assets/category/Clothes2.png";
import Image3 from "../../assets/category/Backpack.png";
import Button from "../Shared/Button";
import { Link } from 'react-router-dom';


const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Ver os novos</p>
                <p className="text-2xl font-semibold mb-[2px]"> </p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                 Novidades
                </p>
              
                <Link to="/items/All">
                <Button
                  text="Ver Itens"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
                </Link>
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* Second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white"> </p>
                <p className="text-2xl font-semibold mb-[2px]"> </p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Roupas
                </p>
                
                <Link to="/items/Roupas">
                  <Button
                  text="Ver Itens"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                /></Link>

              </div>
            </div>
            <img src={Image2} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* Third col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white"> </p>
                <p className="text-2xl font-semibold mb-[2px]"> </p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Mochilas
                </p>
                
                <Link to="/items/Mochilas">
                <Button
                                  text="Ver Itens"
                                  bgColor={"bg-white"}
                                  textColor={"text-brandBlue"}
                                />
                </Link>
                
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[200px] absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
