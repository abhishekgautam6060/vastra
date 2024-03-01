import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCart = () => {

    const navigate = useNavigate();

  return (
    <div onClick={()=> navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    {/* setting image size in this manner */}
                    <img className='w-[5rem] h-[5rem] object-cover object-top'
                    src="https://valintaformens.com/cdn/shop/products/photo_2023-03-27_02-27-21.jpg?v=1681723151" alt="" />
                    <div className='ml-5 space-y-2'>

                        <p className=' '>Men Black printed kurta</p>
                        <p className='opacity-50 text-xs font-semibold'>Size M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>

                    </div>
                </div>
            </Grid>


            <Grid item xs={2}>
                <p>₹1200</p>

            </Grid>

            <Grid item xs={4}>
                {true && <div>
                    <p>
                    <AdjustIcon xs={{with:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Deliver On March 01
                    </span>                    
                </p>
                <p className='text-xs'>
                    You Item has been Delivered
                </p>
                </div> }
                { false && <p>
                    <span>
                        Expected Delivery On 29 Feb
                    </span>
                </p>}


            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCart