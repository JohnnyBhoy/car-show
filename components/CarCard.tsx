"use client";

import { CarProps } from '@/types'
import React, { useState } from 'react'
import { CardDetails, CustomButton } from '.';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import Image from 'next/image';

interface CarCardProps {
    'car' : CarProps;
}

function CarCard({car}:CarCardProps) {

  const {city_mpg, year, make, model, transmission, drive} = car;
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
        <div className="car-card__content">
            <h2 className='car-card__content-title'>
                {make} {model}
            </h2>
        </div>

        <p className='flex mt-6 text-[32px] font-extabold'>
            <span className='self-start text-[14px] font-semibold'>
                $
            </span>
                {carRent}
            <span className='self-end text-[14px] font-medium'>
                /day
            </span>
        </p>

        <div className="relative w-full h-40 my-3 object-contain">
            <Image 
            src={generateCarImageUrl(car)}  
            alt="car model" 
            sizes="fill" 
            fill priority 
            className="object-contain"
            />
        </div>

        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center">

                    <Image 
                    src="/steering-wheel.svg" 
                    width={30} 
                    height={20} 
                    alt="steering-wheel" 
                    />

                    <p className='text-[14px]'>
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>
            </div>

            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center">
                    <Image 
                    src="/tire.svg" 
                    width={30} 
                    height={20} 
                    alt="tire" 
                    />

                    <p className='text-[14px]'>
                        {drive.toUpperCase()}
                    </p>
                </div>
            </div>

            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center">
                    <Image 
                    src="/gas.svg" 
                    width={30} 
                    height={20} 
                    alt="gas" 
                    />

                    <p className='text-[14px]'>
                        {city_mpg}
                    </p>
                </div>
            </div>

            <div className="car-card__btn-container">
                <CustomButton
                btnType='button'
                title="View More"
                containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                textStyles="text-white text-[14px] leading-[17px] font-bold"
                rightIcon="/right-arrow.svg"
                isDisabled={false}
                handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>
        
        <CardDetails 
        isOpen={isOpen} 
        closeModal={() => setIsOpen(false)} 
        car={car} 
        />
    </div>
  )
}

export default CarCard