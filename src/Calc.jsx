import { useState } from "react";
import React from "react";
import "./App.css"
export default function Calc() {
  const [value,setValue] = useState('');
  return (
    <header className="flex justify-center items-center  bg-[#E5E5E5] w-full  h-[100vh]">
      <main className=" bg-[#2E2C2C] max-w-[411px] w-full h-[823px] flex flex-col gap-0">
        <input className=" min-h-[300px] text-white text-right  pt-[166px] pr-8 text-[48px] bg-[#2E2C2C]"  value={value}/>

        <div className="w-full max-w-[411px]  min-h-[523px] bg-[#F0F0F3] flex flex-col items-center gap-[24px] flex-wrap rounded-t-xl pt-3">
          <div className="w-full max-w-[411px] min-h-[6px] flex justify-center items-center"  id='block'>
            <div className="bg-white max-w-[118px]  min-h-[6px] w-full shadow-4xl  border-white	rounded-xl  block " id="block__item"></div>
          </div>
          <div className=" flex flex-wrap  max-w-[340px] min-h-[450px] w-full gap-5" id="numbers">
           <input type="button" value='C' onClick={e => setValue(value.slice(0,-1)) }  className=" cursor-pointer max-w-[70px] transition-all  hover:opacity-80  w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#898989]  " />
           <input type="button" value='AC' onClick={e => setValue('')} className=" cursor-pointer max-w-[70px] w-full h-[70px] transition-all hover:opacity-80  rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#898989]  " />
           <input type="button" value='%' onClick={e => setValue(value + e.target.value)} className=" transition-all hover:opacity-80  cursor-pointer max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#898989]  "/>
           <input type="button" value='/' onClick={e => setValue(value + e.target.value)}  className= "transition-all hover:opacity-80 cursor-pointer max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#745FF2]  " />
           <input type="button" value='7' onClick={e=> setValue(value + e.target.value)} className="  transition-all hover:opacity-80 cursor-pointer max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#728AB7]  " />
           <input type="button" value='8' onClick={e=> setValue(value + e.target.value)} className="  transition-all hover:opacity-80 cursor-pointer max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#728AB7]  " />
           <input type="button" value='9' onClick={e=> setValue(value + e.target.value)} className="  transition-all hover:opacity-80 cursor-pointer max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#728AB7]  " />
           <input type="button" value='*' onClick={e=> setValue(value + e.target.value)}  className=" transition-all hover:opacity-80 cursor-pointer  max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#745FF2]  "/>
           <input type="button" value='4' onClick={e=> setValue(value + e.target.value)} className="  transition-all hover:opacity-80 cursor-pointer max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#728AB7]  " />
           <input type="button" value='5' onClick={e=> setValue(value + e.target.value)} className="  transition-all hover:opacity-80 cursor-pointer max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#728AB7]  " />
           <input type="button" value='6' onClick={e=> setValue(value + e.target.value)} className="  transition-all hover:opacity-80 cursor-pointer max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#728AB7]  " />
           <input type="button" value='-' onClick={e=> setValue(value + e.target.value)} className="  transition-all hover:opacity-80 cursor-pointer max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#745FF2]  " />
           <input type="button" value='1' onClick={e=> setValue(value + e.target.value)} className="  transition-all hover:opacity-80 cursor-pointer max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#728AB7]  " />
           <input type="button" value='2' onClick={e=> setValue(value + e.target.value)} className="  transition-all hover:opacity-80 cursor-pointer max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#728AB7]  " />
           <input type="button" value='3' onClick={e=> setValue(value + e.target.value)} className="  transition-all hover:opacity-80 cursor-pointer max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#728AB7]  " />
           <input type="button" value='+' onClick={e=> setValue(value + e.target.value)} className="  transition-all hover:opacity-80 cursor-pointer max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#745FF2]  " />
           <input type="button" value='0' onClick={e=> setValue(value + e.target.value)} className="  transition-all hover:opacity-80 cursor-pointer text-left pl-5 max-w-[150px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#728AB7]  "/>
           <input type="button" value='.' onClick={e=> setValue(value + e.target.value)} className="  transition-all hover:opacity-80 cursor-pointer max-w-[70px] w-full h-[70px] rounded-2xl bg-[#F0F0F3] shadow-2xl text-[36px] font-normal text-[#728AB7]  "/>
           <input type="button" onClick={e=>setValue(eval(value))} value='=' className=" max-w-[70px] transition-all hover:opacity-80  w-full h-[70px] cursor-pointer rounded-2xl bg-[#2DD3C5] shadow-2xl text-[36px] font-normal text-white  "/>


          </div>
        </div>
      </main>
    </header>
  );
}
