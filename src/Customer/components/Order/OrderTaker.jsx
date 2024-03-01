import React from 'react'
import { Step, StepLabel, Stepper } from '@mui/material'

const steps=[
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]

const OrderTaker = (activeStep) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label )=><Step>
            <StepLabel sx={{color:"#9155DD",fontSize:"44px"}}>{label}</StepLabel>
        </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTaker