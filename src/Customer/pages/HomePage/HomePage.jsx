import React from 'react'




import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarsoel/HomeSectionCarsoel'
import { mens_kurta } from '../../../Data/mens_kurta'
import { womens_kurta } from '../../../Data/womens_kurta'
import { mens_shirts } from '../../../Data/mens_shirt'
import { womens_saree } from '../../../Data/womens_saree'
import { mens_shoes } from '../../../Data/men\'s_shoes'

export const HomePage = () => {
  return (
    <div>
        <div>
          <MainCrosel/>
        </div>
        
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarosel data={womens_kurta} sectionName={"Women's Kurtas"}/>
            <HomeSectionCarosel data={mens_shirts} sectionName={"Men's Shirt"}/>
            <HomeSectionCarosel data={womens_saree} sectionName={"Women's Saree"}/>
            <HomeSectionCarosel data={mens_shoes} sectionName={"Men's Shoes"}/>
        </div>        
    </div>
  )
}
