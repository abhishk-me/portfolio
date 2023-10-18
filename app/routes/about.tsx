import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import { ArrowRight, ArrowUpRight, Bell, GitHub, Globe, Instagram, Mail, MapPin, Star, X } from "react-feather"
import ProfilePicture from '../assets/profile.jpg';
import StoreEditorDemo from '../assets/store-editor-demo.mov';
import EdifloDemo from '../assets/ediflo-demo.gif';
import ElevatrDemo from '../assets/entstaack-demo.gif';
import { useState } from 'react';
import { Link } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "About me - Abhishek Bhaskar" },
    { name: "description", content: "Hey, This is Abhishek Bhaskar! Welcome to my page" },
    {
      property: "og:title",
      content: "Hey, This is Abhishek Bhaskar! Welcome to my page",
    },
    {
      property: "og:image",
      content: "https://i.ibb.co/8N8pzjH/Screenshot-2023-10-19-at-12-24-29-AM.png",
    },
    {
      property: "og:description",
      content: "Hey, This is Abhishek Bhaskar! Welcome to my page",
    },
    {
      property: "og:url",
      content: "https://abhishekbhaskar.in",
    },
    {
      property: "keywords",
      content: "Abhishek Bhaskar, Abhishek kumar bhaskar, abhikbhasker, abhishk.me, full-stack developer, designer, UI/UX designer, React developer, front-end developer, back-end developer, Abhishek Bhaskar instagram, Abhishek Bhaskar linkedin",
    },
    {
      property: "og:site_name",
      content: "Abhishek Bhaskar",
    },
    {
      property: "og:image:width",
      content: "800",
    },
    {
      property: "og:image:height",
      content: "627",
    },
  ];
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "https://i.ibb.co/zV8bbst/ab-logo.png",
      type: "image/png"
    }
  ];
};


export default function Index() {
  const [menuExpanded, setMenuExpanded] = useState(false)

  return (
    <>
      <div className='max-w-xl mx-auto px-4 flex flex-col flex-wrap'>
        <div className='flex flex-row flex-wrap items-center px-3 py-2 bg-[#fffae0] rounded-3xl rounded-bl-lg'>
          <div className='h-16 w-16 '>
            <img src={"https://cdn3d.iconscout.com/3d/premium/thumb/profile-6073860-4996977.png?f=webp"} className='h-full w-full' />
          </div>
          <div className='flex flex-col pl-2 flex-1 w-auto pt-0'>
            <p className='text-lg lg:text-xl text-black font-bold leading-snug'>
              About Me
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className='text-2xl lg:text-2xl font-bold leading-snug'>
              I'm Abhishek. A designer, maker and problem solver.
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg'>
              I've always been intrigued by the intersection of art and technology, and I've never hesitated to dive right in and experiment, whether it's working with tools like Photoshop, Figma, Illustrator, Procreate, Blender, or CSS. My journey in computer-based design started from the very moment I first launched Microsoft Paint.
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg'>
              During my first year of college, I delved into the world of development. I undertook website projects for college festivals, ensuring they not only showcased the events but also added an aesthetic touch that resonated with our culture.<br />
              I also built a social networking application specifically designed to serve the unique needs of college students. This greatly help me enhance my technical abilities.
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg'>
              Throughout my later college years, I engaged in a multitude of freelance projects.
            </p>
          </div>
        </div>
        <div className='inline-flex self-start flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col pr-3'>
            <p className='text-[var(--accent)] font-medium text-sm leading-snug'>
              Scroll to see more
            </p>
          </div>
          <div className='w-5 h-8 bg-white rounded-full flex flex-col items-center py-1'>
            <div className='scroll-dot bg-black'></div>
          </div>
        </div>
      </div>
      <div className='py-60'></div>
    </>
  );
}
