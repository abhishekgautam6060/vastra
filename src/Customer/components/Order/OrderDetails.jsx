import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTaker from './OrderTaker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StarIcon } from '@heroicons/react/24/outline'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useSelector } from 'react-redux'


const OrderDetails = () => {

  const { order } = useSelector((store) => store)
  
  return (
    <div className='px:5 lg:px-20'>
      <div>
          <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
          <AddressCard/>
      </div>
      <div className='py-20'>
          <OrderTaker activeStep={3}/>
      </div>

      <Grid className='space-y-5' container>

        {[1,1,1,1].map((item)=>
         <Grid item container className='shadow-xl rounded-md p-5 border'sx=
         {{alignItems:"center" , justifyContent:"space-between"}}>

           <Grid item xs={6}>
                 <div className='flex items-center space-x-4'>
                   <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://valintaformens.com/cdn/shop/products/photo_2023-03-27_02-27-21.jpg?v=1681723151" alt="" />
                   <div className='space-y-2 ml-5'>
                     <p className='font-semibold'>Mens Printed Kurta, Black, Cotton.</p>
                     <p className='space-x-5 opacity-50 text-xs font-semibold'> 
                       <span>Color : pink</span>
                       <span>Size : M</span>
                        </p>
                     <p>Seller: Raymonds</p>
                     <p>₹1299</p>
                   </div>
                 </div>
           </Grid>
           <Grid item>
             <Box sx={{color:deepPurple[500]}}>
                 <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2'/>
                 <span>Rate & Review Product</span>
             </Box>
           </Grid>
         </Grid>
        )}         
      </Grid>

    </div>
  )
}

export default OrderDetails
