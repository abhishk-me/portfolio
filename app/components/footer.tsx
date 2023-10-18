import React, { FC } from 'react';
import whatsappIcon from "../assets/whatsapp-icon.png"

export const WebsiteFooter: FC = () => {
  return (
    <>
      <footer className='bg-[#22152d] py-10'>
        <div className="container-m">
          <div className='flex flex-row flex-wrap -mx-2'>
            <div className='w-full lg:w-1/4 p-2'>
              <div className='p-3 rounded-2xl inline-block bg-yellow-400'>
                <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 0 27.681 27.681">
                  <path id="Path_78" data-name="Path 78" d="M681.836,360a13.84,13.84,0,0,0,0,27.681q.62,0,1.226-.054a1.8,1.8,0,0,0,1.643-1.8v-7.314a1.806,1.806,0,0,0-1.806-1.805h-4.228a6.033,6.033,0,0,1-6.033-6.033h0a6.033,6.033,0,0,1,6.033-6.033h0a6.033,6.033,0,0,1,6.033,6.033V374.9a1.805,1.805,0,0,0,1.805,1.805h7.314a1.8,1.8,0,0,0,1.8-1.643q.053-.606.054-1.226A13.851,13.851,0,0,0,681.836,360Z" transform="translate(-668 -360)" fill="#000" />
                </svg>
              </div>
              <p className="text-white text-2xl font-semibold">elevatr.</p>
              <p className='text-white mt-4 text-xs'>© 2023 | Entstack pvt ltd | All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}