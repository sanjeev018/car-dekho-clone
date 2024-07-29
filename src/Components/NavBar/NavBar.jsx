import React from 'react'
// import {IconCaretDown , IconMapPin} from "@tabler/icons-react";


const NavBar = () => {

  
  return (
    <div className='mt-3'>
<div  className='d-flex items-center ml-32 pl-1'> 

      <ul
       className='flex gap-6 text-sm font-semibold text-slate-600'> 

        <li className='flex cursor-pointer'> 
          NEW CARS 
          {/* <IconCaretDown className='mt-0.5' height={16}/>  */}
        </li>

        <li className='flex cursor-pointer'> 
          BUY & SELL USED CARS 
          {/* <IconCaretDown className='mt-0.5' height={16}/>        */}
        </li>

        <li className='flex cursor-pointer'> 
          NEWS , REVIEWS & VIDEOS
          {/* <IconCaretDown className='mt-0.5' height={16}/>        */}

        </li>

        <li className='flex cursor-pointer'> 
         CAR SERVICES
         {/* <IconCaretDown className='mt-0.5' height={16}/>        */}
        </li>

        <li className='text-slate-500 font-normal flex ml-96 pl-20'> 
        {/* <IconMapPin height={18}/>  */}
         Hoshangabad
         {/* <IconCaretDown className='mt-0.5' height={16}/>     */}
        </li>
      </ul>

      </div>
         

    </div>
  )
}

export default NavBar
