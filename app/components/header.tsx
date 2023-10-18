import React, { FC } from 'react';
import Logo from '../assets/logo.png'
import { Link } from '@remix-run/react';

export const WebsiteHeader: FC = () => {
  return (
    <>
      <header className='max-w-xl mx-auto px-4 flex flex-col flex-wrap'>
        <div className='flex items-center px-2'>
          <Link to={"/"} className='h-8 w-8 my-10 mx-auto'>
            <img src={Logo} className='h-full w-full' />
          </Link>
          <span className='flex flex-1' />
          <div
            onClick={() => document.documentElement.classList.value = "theme-default"}
            className='h-6 w-6 rounded-xl overflow-hidden border-2 border-white bg-white flex flex-row mx-1 cursor-pointer'
          >
            <div className='flex-1 bg-[#122523] rounded-lg'></div>
            <div className='flex-1 bg-[#bdff34] rounded-lg'></div>
          </div>
          <div
            onClick={() => document.documentElement.classList.value = "theme-red"}
            className='h-6 w-6 rounded-xl overflow-hidden border-2 border-white bg-white flex flex-row mx-1 cursor-pointer'
          >
            <div className='flex-1 bg-[#621313] rounded-lg'></div>
            <div className='flex-1 bg-[#fffb20] rounded-lg'></div>
          </div>
          <div
            onClick={() => document.documentElement.classList.value = "theme-purple-light"}
            className='h-6 w-6 rounded-xl overflow-hidden border-2 border-white bg-white flex flex-row mx-1 cursor-pointer'
          >
            <div className='flex-1 bg-[#ea95ff] rounded-lg'></div>
            <div className='flex-1 bg-[#c8b6ff] rounded-lg'></div>
          </div>
          <div
            onClick={() => document.documentElement.classList.value = "theme-blue"}
            className='h-6 w-6 rounded-xl overflow-hidden border-2 border-white bg-white flex flex-row mx-1 cursor-pointer'
          >
            <div className='flex-1 bg-[#0046ff] rounded-lg'></div>
            <div className='flex-1 bg-[#81ffd1] rounded-lg'></div>
          </div>
          <div
            onClick={() => document.documentElement.classList.value = "theme-dark"}
            className='h-6 w-6 rounded-xl overflow-hidden border-2 border-white bg-white flex flex-row mx-1 cursor-pointer'
          >
            <div className='flex-1 bg-[#121113] rounded-lg'></div>
            <div className='flex-1 bg-[#222725] rounded-lg'></div>
          </div>
        </div>
      </header>
    </>
  )
}