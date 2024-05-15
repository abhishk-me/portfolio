import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import ElevatrSite from '../assets/elevatr-site.png';
import EdifloVideoPlayer from '../assets/ediflo-video-player.gif';
import DidiDemo from '../assets/didi-demo.gif';

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Work experience - Abhishek Bhaskar" },
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
  return (
    <>
      <div className='max-w-xl mx-auto px-4 flex flex-col flex-wrap'>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-[#fffae0] rounded-3xl rounded-bl-lg'>
          <div className='h-16 w-16 '>
            <img src={"https://cdn3d.iconscout.com/3d/premium/thumb/flexible-work-time-5796820-4862968.png?f=webp"} className='h-full w-full' />
          </div>
          <div className='flex flex-col pl-4 flex-1 w-auto pt-0'>
            <p className='text-lg lg:text-xl text-black font-semibold leading-snug'>
              Work Experience
            </p>
          </div>
        </div>
        <div className='flex flex-col flex-wrap items-center bg-2 rounded-3xl rounded-bl-lg mt-6 overflow-hidden'>
          <div className='rounded-b-md overflow-hidden'>
            <div className='dot-bg flex flex-row px-2 -mx-4 lg:mx-0 lg:px-4 py-4 overflow-hidden' >
              <div className='flex flex-[3] flex-col -mt-8'>
                <div className='flex flex-row'>
                  <div className='flex flex-[3] flex-col'>
                    <div className='h-28 rounded-xl overflow-hidden shadow-lg'>
                      <img className='h-full w-full object-cover' src='https://i.ibb.co/nR5N8M5/Screenshot-2024-05-15-at-1-41-59-AM.png' />
                    </div>
                  </div>
                  <span className='px-2 lg:px-3' />
                  <div className='flex flex-[2] flex-col'>
                    <div className='h-28 rounded-xl overflow-hidden shadow-lg'>
                      <img className='h-full w-full object-cover' src='https://i.ibb.co/R30w0DD/Image-15-05-24-at-1-45-AM.jpg' />
                    </div>
                  </div>
                </div>
                <div className='h-40 rounded-xl overflow-hidden shadow-lg mt-4 lg:mt-6'>
                  <img className='w-full h-full object-cover' src={DidiDemo} />
                </div>
                <div className='flex flex-row mt-2 lg:mt-6 -mb-8'>
                  <div className='flex flex-[2] flex-col'>
                    <div className='h-24 rounded-xl overflow-hidden shadow-lg bg-black'>
                      <img className='h-full w-full object-cover' src='https://i.ibb.co/q0mrhnj/Screenshot-2024-05-15-at-1-48-40-AM.png' />
                    </div>
                  </div>
                  <span className='px-1' />
                  <div className='flex flex-[4] flex-col'>
                    <div className='h-24 rounded-xl overflow-hidden shadow-lg bg-black'>
                      <img className='w-full object-cover' src='https://i.ibb.co/994t3RF/Screenshot-2024-05-15-at-1-12-14-AM.png' />
                    </div>
                  </div>
                </div>
              </div>
              <span className='px-2 lg:px-3' />
              <div className='flex flex-[2] flex-col'>
                <div className='h-48 rounded-xl overflow-hidden shadow-lg -mt-8 bg-black'>
                  <img className='h-full w-full object-cover' src='https://i.ibb.co/9WvBL3w/Mac-Book-Pro-16-12.jpg' />
                </div>
                <div className='h-28 rounded-xl overflow-hidden shadow-lg mt-4 lg:mt-6 bg-black'>
                  <img className='w-full object-cover' src='https://i.ibb.co/NyPZj1G/Image-15-05-24-at-3-08-AM.jpg' />
                </div>
                <div className='h-16 rounded-xl overflow-hidden shadow-lg mt-4 lg:mt-6 -mb-8'>
                  <img className='w-full object-cover' src='https://i.ibb.co/ykxpd34/Screenshot-2024-05-15-at-1-47-20-AM.png' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col px-6 w-full lg:px-8 py-4'>
            <p className='text-4xl font-bold leading-snug flex items-center'>
              <span>Atlys</span>
              <span className='text-base font-medium ml-2 pt-1.5'>(Current)</span>
            </p>
            <p className='text-[var(--accent)] font-semibold leading-snug mt-3'>
              Full stack developer.
            </p>
            <p className='text-[var(--accent)] opacity-60 text-sm leading-snug mt-1'>
              Nov 2023 - Present
            </p>
            <p className='border self-start border-[var(--text)] border-opacity-30 rounded-full text-xs font-medium px-2 py-1 -mx-0.5 mt-4'>
              Design and front-end
            </p>
            <ul className='list-disc pl-3.5'>
              <li className='mt-2'>Revamped visa application process with a streamlined layout and impactful animations, driving a 30% increase in conversions.</li>
              <li className='mt-2'>Developed a streamlined application funnel for intricate visa processes, simplifying the user experience through a stunning and intuitive interface with complex business logic at it's core.</li>
              <li className='mt-2'>Refactored the entire front-end code, resulting in a performance boost that fueled SEO growth and conversion rate increases.</li>
              <li className='mt-2'>Saved the company over $100k annually by building internal tools, including a robust CMS. </li>
            </ul>
            <p className='border self-start border-[var(--text)] border-opacity-30 rounded-full text-xs font-medium px-2 py-1 -mx-0.5 mt-6'>
              Back-end
            </p>
            <ul className='list-disc pl-3.5'>
              <li className='mt-2'>Migrated APIs from latency tools and bad practices to improve performance</li>
              <li className='mt-2'>Developed a high-performance, in-house AI service using Python for OCR, data extraction, and document validation, achieving improved performance, data security and reduced costs compared to third-party solutions.</li>
              <li className='mt-2'>Developed a referral service to power Atlys's intricate referral program</li>
              <li className='mt-2'>Developed Node.js services to power internal tools, automating critical tasks for both visa processing and content management.</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col flex-wrap items-center bg-2 rounded-3xl rounded-bl-lg mt-6 overflow-hidden'>
          <div className='rounded-b-md overflow-hidden'>
            <div className='dot-bg flex flex-row px-2 -mx-4 lg:mx-0 lg:px-4 py-4 overflow-hidden' >
              <div className='flex flex-[3] flex-col -mt-8'>
                <div className='flex flex-row'>
                  <div className='flex flex-[3] flex-col'>
                    <div className='h-28 rounded-xl overflow-hidden shadow-lg'>
                      <img className='h-full w-full object-cover' src='https://imagedelivery.net/yu75guoeeZPimxdUQ98aHg/a9accb8f-8d17-437e-0e34-0edd6575f400/768' />
                    </div>
                  </div>
                  <span className='px-2 lg:px-3' />
                  <div className='flex flex-[2] flex-col'>
                    <div className='h-28 rounded-xl overflow-hidden shadow-lg'>
                      <img className='h-full w-full object-cover' src='https://imagedelivery.net/yu75guoeeZPimxdUQ98aHg/92c54ea7-2aa5-489b-b93d-16f048e21900/768' />
                    </div>
                  </div>
                </div>
                <div className='h-40 rounded-xl overflow-hidden shadow-lg mt-4 lg:mt-6'>
                  <img className='w-full object-cover image-scroll-animation' src={ElevatrSite} />
                </div>
                <div className='flex flex-row mt-2 lg:mt-6 -mb-8'>
                  <div className='flex flex-[2] flex-col'>
                    <div className='h-24 rounded-xl overflow-hidden shadow-lg bg-black'>
                      <img className='h-full w-full object-cover' src='https://imagedelivery.net/yu75guoeeZPimxdUQ98aHg/8aa76519-1ceb-4923-64d4-45271d6a7600/768' />
                    </div>
                  </div>
                  <span className='px-1' />
                  <div className='flex flex-[4] flex-col'>
                    <div className='h-24 rounded-xl overflow-hidden shadow-lg bg-black'>
                      <img className='w-full object-cover' src='https://imagedelivery.net/yu75guoeeZPimxdUQ98aHg/b27e75d5-fecf-473e-d790-70d5845a4e00/768' />
                    </div>
                  </div>
                </div>
              </div>
              <span className='px-2 lg:px-3' />
              <div className='flex flex-[2] flex-col'>
                <div className='h-48 rounded-xl overflow-hidden shadow-lg -mt-8 bg-black'>
                  <img className='h-full w-full object-cover' src='https://imagedelivery.net/yu75guoeeZPimxdUQ98aHg/1104f3b6-df28-447a-d4b5-cfbcf1723b00/768' />
                </div>
                <div className='h-28 rounded-xl overflow-hidden shadow-lg mt-4 lg:mt-6 bg-black'>
                  <img className='w-full object-cover' src='https://imagedelivery.net/yu75guoeeZPimxdUQ98aHg/1adc5410-6baf-4934-7650-516904c0d500/864' />
                </div>
                <div className='h-16 rounded-xl overflow-hidden shadow-lg mt-4 lg:mt-6 -mb-8'>
                  <img className='w-full object-cover' src='https://imagedelivery.net/yu75guoeeZPimxdUQ98aHg/62d71cc1-f6f4-4481-42be-f7a9850feb00/768 ' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col px-6 w-full lg:px-8 py-4'>
            <p className='text-4xl font-bold leading-snug'>
              elevatr.
            </p>
            <p className='text-[var(--accent)] font-semibold leading-snug mt-3'>
              Designer and full stack developer.
            </p>
            <p className='text-[var(--accent)] opacity-60 text-sm leading-snug mt-1'>
              Apr 2023 - Sept 2023
            </p>
            <p className='border self-start border-[var(--text)] border-opacity-30 rounded-full text-xs font-medium px-2 py-1 -mx-0.5 mt-4'>
              Design and front-end
            </p>
            <ul className='list-disc pl-3.5'>
              <li className='mt-2'>Full responsibility of designing interfaces and UX for mobile and web apps</li>
              <li className='mt-2'>Developed all the features for web and mobile apps</li>
              <li className='mt-2'>Features including - Orders and billing, Inventory management, Customer management, Purchases and billing, Online store, Employee management, Accounting, etc.</li>
              <li className='mt-2'>Created an online store builder from scratch.</li>
            </ul>
            <p className='border self-start border-[var(--text)] border-opacity-30 rounded-full text-xs font-medium px-2 py-1 -mx-0.5 mt-6'>
              Back-end
            </p>
            <ul className='list-disc pl-3.5'>
              <li className='mt-2'>Helped developing APIs for various features.</li>
              <li className='mt-2'>APIs including - Orders and billing, inventory management, Online store, Role management, etc.</li>
              <li className='mt-2'>Worked on back-end for e-commerce store.</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col flex-wrap items-center bg-2 rounded-3xl rounded-bl-lg mt-6 overflow-hidden'>
          <div className='rounded-b-md overflow-hidden'>
            <div className='dot-bg flex flex-row px-2 -mx-4 lg:mx-0 lg:px-4 py-4 overflow-hidden' >
              <div className='flex flex-[3] flex-col -mt-8'>
                <div className='flex flex-row'>
                  <div className='flex flex-[3] flex-col'>
                    <div className='h-28 rounded-xl overflow-hidden shadow-lg'>
                      <img className='h-full w-full object-cover' src='https://i.ibb.co/D9n5q6T/coastr-add-ons.png' />
                    </div>
                  </div>
                  <span className='px-2 lg:px-3' />
                  <div className='flex flex-[2] flex-col'>
                    <div className='h-28 rounded-xl overflow-hidden shadow-lg'>
                      <img className='h-full w-full object-cover' src='https://i.ibb.co/N2MTCJY/vehicle-state.png' />
                    </div>
                  </div>
                </div>
                <div className='h-48 rounded-xl overflow-hidden shadow-lg mt-4 lg:mt-6 -mb-8'>
                  <img className='w-full h-full object-cover' src="https://i.ibb.co/37LQ48W/Screenshot-2022-02-14-at-8-52-42-PM.png" alt="Dashboard thumbnail" />
                </div>
              </div>
              <span className='px-2 lg:px-3' />
              <div className='flex flex-[2] flex-col'>
                <div className='h-48 rounded-xl overflow-hidden shadow-lg -mt-8 bg-black pt-3'>
                  <img className='w-full h-full object-cover' src='https://i.ibb.co/wZq97ct/reports.png' />
                </div>
                <div className='h-28 rounded-xl overflow-hidden shadow-lg mt-4 lg:mt-6 -mb-8 bg-[rgba(255,255,255,0.2)]'>
                  <img className='w-full h-full object-cover' src='https://i.ibb.co/qkxhmd0/Screenshot-2021-07-19-at-3-07-42-PM.png' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col px-6 w-full lg:px-8 py-4'>
            <p className='text-4xl font-bold leading-snug'>
              Coastr
            </p>
            <p className='text-[var(--accent)] font-medium text-sm leading-snug mt-3'>
              Designer and full stack developer.
            </p>
            <p className='text-[var(--accent)] opacity-60 text-sm leading-snug mt-1'>
              Dec 2020 - Mar 2023
            </p>
            <p className='border self-start border-[var(--text)] border-opacity-30 rounded-full text-xs font-medium px-2 py-1 -mx-0.5 mt-4'>
              Design and front-end
            </p>
            <ul className='list-disc pl-3.5'>
              <li className='mt-2'>Standalone customer-facing booking portal with customizations.</li>
              <li className='mt-2'>Dashboard and reporting solution for car rental companies.</li>
              <li className='mt-2'>Live tracking and analytics solution for telematics-enabled vehicles.</li>
              <li className='mt-2'>Push notifications for platform-wide action triggers.</li>
              <li className='mt-2'>Other features like a business-customer portal, fleet movement, fleet transfer, pricing rules, etc.</li>
              <li className='mt-2'>Took end-to-end responsibility from designing to development for the above features.</li>
            </ul>
            <p className='border self-start border-[var(--text)] border-opacity-30 rounded-full text-xs font-medium px-2 py-1 -mx-0.5 mt-6'>
              Back-end
            </p>
            <ul className='list-disc pl-3.5'>
              <li className='mt-2'>Developed APIs for various features.</li>
              <li className='mt-2'>Optimised existing APIs resulting in about 50% increase in performance in most cases.</li>
              <li className='mt-2'>Developed notification micro-service using NestJS providing easy integration with actions.</li>
              <li className='mt-2'>Implemented APIs for dashboard and reports.</li>
              <li className='mt-2'>Implemented APIs for live tracking and analytics with large data sets.</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col flex-wrap items-center bg-2 rounded-3xl rounded-bl-lg mt-6 overflow-hidden'>
          <div className='rounded-b-md overflow-hidden bg-black'>
            <div className='dot-bg flex flex-row px-2 -mx-4 lg:mx-0 lg:px-4 py-4 overflow-hidden' >
              <div className='flex flex-[3] flex-col -mt-8'>
                <div className='flex flex-row'>
                  <div className='flex flex-[3] flex-col'>
                    <div className='h-28 rounded-xl overflow-hidden shadow-lg'>
                      <img className='h-full w-full object-cover' src='https://i.ibb.co/6gVBTKM/ediflo-project-view.png' />
                    </div>
                  </div>
                  <span className='px-2 lg:px-3' />
                  <div className='flex flex-[2] flex-col'>
                    <div className='h-28 rounded-xl overflow-hidden shadow-lg'>
                      <img className='h-full w-full object-cover' src='https://i.ibb.co/d4dFfrR/ediflo-profile.png' />
                    </div>
                  </div>
                </div>
                <div className='h-40 rounded-xl overflow-hidden shadow-lg mt-4 lg:mt-6'>
                  <img className='w-full h-full object-cover' src={EdifloVideoPlayer} />
                </div>
                <div className='flex flex-row mt-2 lg:mt-6 -mb-8'>
                  <div className='flex flex-[2] flex-col'>
                    <div className='h-24 rounded-xl overflow-hidden shadow-lg bg-black'>
                      <img className='w-full object-cover' src='https://i.ibb.co/R3Nh3bx/ediflo-task-card.png' />
                    </div>
                  </div>
                  <span className='px-1' />
                  <div className='flex flex-[4] flex-col'>
                    <div className='h-24 rounded-xl overflow-hidden shadow-lg bg-black'>
                      <img className='w-full object-cover' src='https://i.ibb.co/wBSxNs6/ediflo-project-board.png' />
                    </div>
                  </div>
                </div>
              </div>
              <span className='px-2 lg:px-3' />
              <div className='flex flex-[2] flex-col'>
                <div className='h-48 rounded-xl overflow-hidden shadow-lg -mt-8 bg-black'>
                  <img className='h-full w-auto object-cover' src='https://i.ibb.co/Csq7rWZ/ediflo-task-detail.png' />
                </div>
                <div className='h-28 rounded-xl overflow-hidden shadow-lg mt-4 lg:mt-6 bg-black'>
                  <img className='w-full h-full object-cover' src='https://i.ibb.co/23HWM94/edifo-project-info.png' />
                </div>
                <div className='h-16 rounded-xl overflow-hidden shadow-lg mt-4 lg:mt-6 -mb-8'>
                  <img className='w-full object-cover' src='https://i.ibb.co/6gVBTKM/ediflo-project-view.png' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col px-6 w-full lg:px-8 py-4'>
            <p className='text-4xl font-bold leading-snug'>
              Ediflo
            </p>
            <p className='text-[var(--accent)] font-medium text-sm leading-snug mt-3'>
              Design and developement consultant.
            </p>
            <p className='text-[var(--accent)] opacity-60 text-sm leading-snug mt-1'>
              July 2021 - Sept 2021
            </p>
            <p className='border self-start border-[var(--text)] border-opacity-30 rounded-full text-xs font-medium px-2 py-1 -mx-0.5 mt-4'>
              Design and front-end
            </p>
            <ul className='list-disc pl-3.5'>
              <li className='mt-2'>Full responsibility of designing interfaces and UX for the web app.</li>
              <li className='mt-2'>Developed all the features for the web app.</li>
              <li className='mt-2'>Built a kanban board for editors and producers to collaborate.</li>
              <li className='mt-2'>Implemented a video collaboration feature with timestamp commenting and version management.</li>
              <li className='mt-2'>Built a 3d collaboration prototype.</li>
            </ul>
            <p className='border self-start border-[var(--text)] border-opacity-30 rounded-full text-xs font-medium px-2 py-1 -mx-0.5 mt-6'>
              Back-end
            </p>
            <ul className='list-disc pl-3.5'>
              <li className='mt-2'>Helped developing APIs for various features.</li>
              <li className='mt-2'>APIs including - Video upload, video version management, collaboraion module for kanban boards, Role management, etc.</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-row flex-wrap items-center px-6 py-4 bg-2 rounded-3xl rounded-bl-lg mt-3'>
          <div className='flex flex-col lg:px-2 w-full'>
            <p className=' lg:text-lg'>
              In addition, I've taken on multiple freelance projects over the years, working with clients from the US, Europe, and India.
            </p>
          </div>
        </div>
      </div>
      <div className='py-20'></div>
    </>
  );
}
