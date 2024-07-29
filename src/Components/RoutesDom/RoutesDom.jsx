import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import FirstComponent from '../FirstComponent/FirstComponent'
import SearchedCars from '../SearchedCars/SearchedCars'
import RecommendedCars from '../RecommendedCars/RecommendedCars'
import LatestCars from '../LatestCars/LatestCars'
import UpcomingCars from '../UpcomingCars/UpcomingCars'
import ElectricCars from '../ElectricCars/ElectricCars'

const RoutesDom = () => {
  
  return (
    <div className='h-screen w-screen'>
    <div className='h-[120px]'>
      <AppHeader/>
    </div>

    <div className='h-[calc(100%-120px)] bg-slate-100 overflow-auto'>
      <div className="h-[600px] bg-red-400">
        <FirstComponent/>
      </div>
      
      <div>
        <SearchedCars/>
      </div>

      <div>
        <RecommendedCars/>
      </div>

      <div>
        <LatestCars/>
      </div>
      <div> 
        <UpcomingCars/> 
      </div>
      <div> 
        <ElectricCars/> 
      </div>
    </div>
  </div>
  )
}

export default RoutesDom