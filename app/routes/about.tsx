import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import { Music, Play } from "react-feather"
import { useState } from 'react';
import { Link } from '@remix-run/react';
import { Spotify } from 'react-spotify-embed';

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
              I'm Abhishek. A developer, designer, generalist.
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg'>
              I've always been intrigued by the intersection of art and technology, and I've never hesitated to dive right in and experiment, whether it's working with tools like Photoshop, Figma, Illustrator, Procreate, Blender, or Web technologies.
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
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg'>
              Zooming ahead to 2024, I've worked for multiple early-stage and growing startups in high-octane settings. I've been right there, shoulder to shoulder with the people making critical decisions, and more often than not, I've played a pivotal role in guiding their technical choices.
            </p>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg'>
              I like doing what I do, and I'm all about aiming for the best. I'm a stickler for quality and pay close attention to the finer details in everything I work on. I truly believe that even the smallest things, like a single pixel, a line of code, or a decision, can have a big impact. I'm all in when it comes to making those details count.
            </p>
          </div>
        </div>
        <div className='inline-flex self-start flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='w-5 h-8 bg-white rounded-full flex flex-col items-center py-1'>
            <div className='scroll-dot bg-black'></div>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg'>
              When I'm not working, I'm either hanging out with friends, playing games,hitting the gym, indulging in DIY projects, enjoying music, or binge-watching a series.
            </p>
          </div>
        </div>
        <div className='px-4 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-row'>
            <div className='w-8 h-8 rounded-full flex items-center justify-center bg-[var(--accent)]'>
              <span className='pl-0.5' />
              <Play color='#000' size={16} />
            </div>
            <div className='flex flex-col flex-1 pl-3'>
              <p className='opacity-60'>
                Watching right now
              </p>
              <p className='mt-1'>
                Lately I've been hooked to The mentalist. It's a crime show with a psychic-turned-detective who can read minds, well, sort of. It's very witty and entertaining and keeps me guessing with every episode.
              </p>
            </div>
          </div>
          <div className='flex flex-row mt-6'>
            <div className='w-8 h-8 rounded-full flex items-center justify-center bg-[var(--accent)]'>
              <Music color='#000' size={16} />
            </div>
            <div className='flex flex-col flex-1 pl-3'>
              <p className='opacity-60'>
                Listening to
              </p>
              <p className='mt-1 mb-4'>
                From time to time, I curate a playlist that I can happily shuffle through for a while. Right now, this is my top choice playlist.
              </p>
              <Spotify color='red' width={"100%"} height={500} link="https://open.spotify.com/playlist/64ufxrz9F6A8Xn3Z2SScGN?si=f7f55223426b4fff" />
            </div>
          </div>
        </div>
      </div>
      <div className='py-20'></div>
    </>
  );
}
