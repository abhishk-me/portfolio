import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import { ArrowRight, ArrowUpRight, Bell, GitHub, Globe, Instagram, Mail, MapPin, Star, X } from "react-feather"
import ProfilePicture from '../assets/profile.png';
import StoreEditorDemo from '../assets/store-editor-demo.mov';
import EdifloDemo from '../assets/ediflo-demo.gif';
import ElevatrDemo from '../assets/elevatr-demo.gif';
import { useState } from 'react';
import { Link } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Abhishek Bhaskar" },
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

        <div className='flex flex-row flex-wrap items-center p-6 bg-[#fffae0] rounded-3xl rounded-bl-lg'>
          <div className='h-32 w-32 rounded-full overflow-hidden bg-white border-4 border-white lg:hover:scale-[2] transition-transform duration-500'>
            <img src={ProfilePicture} className='h-full w-full' />
          </div>
          <div className='flex flex-col lg:pl-4 w-full lg:flex-1 lg:w-auto pt-3 lg:pt-0'>
            <p className='text-lg lg:text-xl text-black font-medium leading-snug'>
              👋 Hi, I am Abhishek Bhaskar!<br /> A <strong>full-stack developer</strong> who can also design <strong>beautiful interfaces</strong> and <strong>digital experiences</strong>.
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg leading-snug'>
              I've a bachelor's degree from <span className='font-semibold'>Indian Institute Of Technology, Mandi</span>
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg leading-snug'>
              I work primarily as a full-stack developer. But I can wear many hats 🎩
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg leading-snug'>
              My preferred tech stack includes ReactJS, NodeJS and MongoDB but I'm flexible with tools and frameworks.
            </p>
            <div className='flex flex-row flex-wrap mt-2 -mx-1.5 '>
              <p className='border border-[var(--text)] border-opacity-30 rounded-full text-xs font-medium px-4 py-1.5 m-0.5'>
                ReactJS
              </p>
              <p className='border border-[var(--text)] border-opacity-30 rounded-full text-xs font-medium px-4 py-1.5 m-0.5'>
                React Native
              </p>
              <p className='border border-[var(--text)] border-opacity-30 rounded-full text-xs font-medium px-4 py-1.5 m-0.5'>
                NodeJS
              </p>
              <p className='border border-[var(--text)] border-opacity-30 rounded-full text-xs font-medium px-4 py-1.5 m-0.5'>
                GraphQL
              </p>
              <p className='border border-[var(--text)] border-opacity-30 rounded-full text-xs font-medium px-4 py-1.5 m-0.5'>
                MongoDB
              </p>
              <p className='border border-[var(--text)] border-opacity-30 rounded-full text-xs font-medium px-4 py-1.5 m-0.5'>
                Couchbase
              </p>
            </div>
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
        <div className='inline-flex self-end flex-row flex-wrap items-center px-6 py-4 bg-white rounded-3xl rounded-br-lg mt-12'>
          <div className='flex flex-col'>
            <p className='text-black font-semibold leading-snug'>
              Back-end ?
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg leading-snug'>
              I have more than 4 years of experience building apps and implementing features using technologies like NodeJS, expressJS, NestJS, GraphQL, MongoDB, couchbase, etc.
            </p>
          </div>
        </div>
        <div className='inline-flex self-start flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col pr-3'>
            <p style={{ color: "var(--accent)" }} className='font-medium leading-snug'>
              Some highlights:
            </p>
          </div>
        </div>
        <div className='flex flex-row -m-0.5 flex-wrap mt-2 text-[var(--alt-text)]'>
          <div className='w-1/2 p-0.5'>
            <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-[var(--card-alt-1)] rounded-3xl rounded-bl-lg rounded-r-lg h-full'>
              <div className='flex flex-col lg:px-2 w-full h-full'>
                <svg height="26" id="icon" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="11 23.18 9 21.179 7.589 22.589 11 26 17 20 15.59 18.59 11 23.18" fill='#fff' />
                  <path d="M28,30H24V28h4V16H24V8a4.0045,4.0045,0,0,0-4-4V2a6.0067,6.0067,0,0,1,6,6v6h2a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,28,30Z" transform="translate(0 0)" fill='var(--alt-text)' />
                  <path d="M20,14H18V8A6,6,0,0,0,6,8v6H4a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V16A2,2,0,0,0,20,14ZM8,8a4,4,0,0,1,8,0v6H8ZM20,28H4V16H20Z" transform="translate(0 0)" fill='var(--alt-text)' />
                  <rect fill='none' data-name="&lt;Transparent Rectangle&gt;" height="32" id="_Transparent_Rectangle_" width="32" />
                </svg>
                {/* <img src='https://cdn3d.iconscout.com/3d/premium/thumb/login-verified-6251835-5117015.png' className='h-12 w-12' /> */}
                <p className=' leading-snug mt-2'>
                  Authentication and attribute base access control
                </p>
              </div>
            </div>
          </div>
          <div className='w-1/2 p-0.5'>
            <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-[var(--card-alt-2)] rounded-lg rounded-tr-3xl h-full'>
              <div className='flex flex-col lg:px-2 w-full h-full'>
                <Bell size={26} color='var(--alt-text)' />
                {/* <img src='https://static.vecteezy.com/system/resources/previews/010/872/317/original/3d-message-notification-icon-png.png' className='h-12 w-12' /> */}
                <p className=' leading-snug mt-2'>
                  Notification micro-service based on MQ and websockets
                </p>
              </div>
            </div>
          </div>
          <div className='w-1/2 p-0.5'>
            <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-[var(--card-alt-3)] rounded-lg rounded-bl-3xl h-full'>
              <div className='flex flex-col lg:px-2 w-full h-full'>
                <svg fill="none" height="26" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21H15M9 21V16M9 21H3.6C3.26863 21 3 20.7314 3 20.4V16.6C3 16.2686 3.26863 16 3.6 16H9M15 21V9M15 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H15.6C15.2686 3 15 3.26863 15 3.6V9M15 9H9.6C9.26863 9 9 9.26863 9 9.6V16" stroke="var(--alt-text)" strokeWidth="1.5" />
                </svg>
                {/* <img src='https://static.vecteezy.com/system/resources/previews/009/596/518/original/3d-illustration-of-report-icon-png.png' className='h-12 w-12' /> */}
                <p className=' leading-snug mt-2'>
                  APIs for generating reports and analytics
                </p>
              </div>
            </div>
          </div>
          <div className='w-1/2 p-0.5'>
            <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-[var(--card-alt-4)] rounded-lg rounded-br-3xl h-full'>
              <div className='flex flex-col lg:px-2 w-full h-full'>
                <MapPin size={26} color='var(--alt-text)' />
                {/* <img src='https://cdn3d.iconscout.com/3d/premium/thumb/location-pin-5739633-4817116.png' className='h-12 w-12' /> */}
                <p className=' leading-snug mt-2'>
                  APIs for GPS based tracking and reports with large data sets
                </p>
              </div>
            </div>
          </div>
          <div className='w-full p-0.5'>
            <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg h-full'>
              <div className='flex flex-col lg:px-2 w-full h-full'>
                <Star size={26} color='var(--text)' />
                {/* <img src='https://static.vecteezy.com/system/resources/previews/025/092/299/original/stars-3d-icon-illustration-png.png' className='h-12 w-12' /> */}
                <p className=' leading-snug mt-2'>
                  More including payment integration, orders and inventory, customer management, data modelling, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='inline-flex self-end flex-row flex-wrap items-center px-6 py-4 bg-white rounded-3xl rounded-br-lg mt-12'>
          <div className='flex flex-col'>
            <p className='text-black font-semibold leading-snug'>
              Design and front-end ?
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg leading-snug'>
              I like to make digital experiences easy and simple for users with eye catching interfaces.
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className='lg:text-lg leading-snug'>
              Most of the time I work on features end to end - from designing and testing to development. This translates to designing for optimal development efficiency. Plus I can develop pretty much any feature.
            </p>
          </div>
        </div>
        <div className='inline-flex self-start flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col pr-3'>
            <p style={{ color: "var(--accent)" }} className='font-medium leading-snug'>
              Some of my recent works:
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-3 py-3 bg-2 rounded-3xl mt-1'>
          <div className='flex flex-col w-full'>
            {/* <div className='rounded-xl overflow-hidden lg:hover:rounded-md lg:hover:scale-[2] transition-transform duration-500'>
              <video className='w-full' src={StoreEditorDemo} autoPlay loop muted />
            </div> */}
            <div className='rounded-xl overflow-hidden lg:hover:rounded-md lg:hover:scale-[2] transition-transform duration-500'>
              <img className='w-full' src={ElevatrDemo} />
            </div>
            <p className='leading-snug font-semibold px-3 mt-3'>
              Online store builder
            </p>
            <p className='leading-snug px-3 py-4'>
              I created an online store builder for elevatr. businesses can use templates or build an online store from scratch with custom design.
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-3 py-3 bg-2 rounded-3xl mt-1'>
          <div className='flex flex-col w-full'>
            <div className='rounded-xl overflow-hidden lg:hover:rounded-md lg:hover:scale-[2] transition-transform duration-500'>
              <img className='w-full' src={EdifloDemo} />
            </div>
            <p className='leading-snug font-semibold px-3 mt-3'>
              Video collaboration software
            </p>
            <p className='leading-snug px-3 py-4'>
              A video collaboration tool for producers and editors. Manage projects and tasks with Kanban board. Sharable video link to get reviews from anyone with features like comments on the timeline and highlighting frames.
            </p>
          </div>
        </div>
        <Link to="experience" className='inline-flex self-center flex-row flex-wrap items-center px-6 py-3 bg-[var(--accent)] rounded-3xl mt-1'>
          <div className='flex flex-row items-center'>
            <p style={{ color: "#000" }} className='font-semibold leading-snug pr-2'>
              See more
            </p>
            <ArrowRight color="#000" size={18} />
          </div>
        </Link>
      </div>
      <div className='py-20'></div>
    </>
  );
}
