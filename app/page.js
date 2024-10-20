"use client";

import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";


export default function Home() {
  const [work, setWork] = useState("")
  const [todos, setTodos] = useState([])

  function submit(e) {
    e.preventDefault()

    setTodos([work, ...todos])
    setWork("")
  }

  function HeadlerClick(classList) {
    classList.toggle("doIt")
  }

  function deleteHendler(i) {
    document.getElementById(`work${i}`).remove()
  }

  return (
    <div className="min-w-lvw min-h-lvh py-10 bg-gray-900 flex justify-center items-center">
      <div className="bg-teal-400 w-3/5  shadow-[0_2px_30px_6px] shadow-teal-400 text-center rounded-xl p-2">
        <h1 className="font-semibold text-4xl mb-4 mt-4 font-[family-name:var(--font-geist-sans)]">To Do List</h1>
        <form onSubmit={submit} className="flex items-center mt-4 mx-4 gap-2">
          <div className="relative w-4/5 input-groupe my-2">
            <input onChange={(e) => setWork(e.target.value)} value={work} type="text" required className="focus:shadow-sm focus:shadow-gray-400 w-full pt-1 pb-1 pl-3 pr-3 rounded-md outline-none bg-teal-200 focus:border-2 valid:border-2 focus:border-gray-500 valid:border-gray-500 duration-200 text-black" />
            <label className="absolute left-3 bottom-1/2 translate-y-1/2 text-sm duration-200 px-1 pointer-events-none">Enrty a Work To Do</label>
          </div>
          <button className="decoration-slate-950 outline-none font-semibold py-1 text-sm bg-slate-500 pl-5 pr-5 rounded-lg text-[#ccc] hover:bg-slate-400 hover:text-[#333] duration-300 flex-grow h-full">Set</button>
        </form>
        <ul>
          {todos.map((t, i) =>
            <div className="relative" key={i} id={`work${i}`} >
              <li onClick={(e) => HeadlerClick(e.currentTarget.classList)} className="text-black hover:text-gray-400 hover:bg-teal-200 cursor-pointer rounded-xl my-2 text-xl py-3 shadow-[0_-3px_20px_5px] shadow-gray-200 duration-200">{t}</li>
              <MdDeleteOutline onClick={() => deleteHendler(i)} className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-red-400 hover:text-red-600 cursor-pointer z-10" />
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
