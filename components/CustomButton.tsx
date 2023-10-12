"use client";

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

function CustomButton({title, textStyles, containerStyles, rightIcon, handleClick}: CustomButtonProps) {
  return (
    <button 
    disabled={false}
    type="button"
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon ? (
          <div className="relative w-6">
            <Image src={rightIcon}
            alt="right-icon"
            fill
            className='object-contain'
            />
          </div>
        ) : null}
    </button>
  )
}

export default CustomButton