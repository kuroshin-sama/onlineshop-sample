import { useState } from "react";
function search() {
  console.log("search");
}
function moke() {
  console.log("mock");
}

export default function Header() {
  const [iscategoryopen, setiscategoryopen] = useState(false);
  const [searchbar, setsearchbat] = useState(false);
  return (
    <header className="p-2 select-none bg-gray-500 h-fit">
      <div className="flex justify-between">
        <p className="text-xl font-bold m-1">فروشگاه من</p>
        <a href="#">
          <p className="border rounded-md p-1 m-1">ثبت نام|ورود</p>
        </a>
      </div>
      <div  className=" group bg-cyan-50 mx-auto w-fit h-fit border rounded-full text-[0.75rem]">
        <i
          onClick={search}
          className="fal fa-search bg-gray-300 px-1 py-2.5 min-w-8 min-h-8 mx-auto rounded-full cursor-pointer"
        ></i>
        <input
          type="text"
          onClick={()=> setsearchbat(!searchbar)}
          className={`  outline-none group-hover:w-64 transition-all duration-300 ${searchbar ?"w-64" :"w-0"} `}
        />
      </div>
      <div className="p-1 flex gap-1 m-1 border w-fit rounded-full">
        <p>دسته بندی محصولات</p>
        <div
          onClick={() => {
            setiscategoryopen(!iscategoryopen) & moke();
          }}
          className="flex py-1 bg-gray-800 rounded-full w-8 px-1 cursor-pointer"
        >
          <div
            className={`bg-gray-500 w-3 h-1 rounded-full -translate-x-[0.2rem] my-2  transition-all duration-300 ${
              iscategoryopen ? "rotate-45" : "-rotate-45"
            } `}
          ></div>
          <div
            className={`bg-gray-500 w-3 h-1 rounded-full translate-x-[0.2rem] my-2  transition-all duration-300 ${
              iscategoryopen ? "-rotate-45" : "rotate-45"
            } `}
          ></div>
        </div>
      </div>
    </header>
  );
}
