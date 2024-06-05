'use client';
import Countup from 'react-countup'


const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
    <Countup 
    decimals={2} 
    decimal=','
    prefix='₹ ' 
    duration={2} 
    end={amount}/>
    </div>
  )
}

export default AnimatedCounter