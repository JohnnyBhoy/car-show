"use client";
import { useRouter } from 'next/navigation';
import { CustomButton } from '.'
import { ShowMoreProps } from '@/types';
import { updateSearchParams } from '@/utils';

function ShowMore({pageNumber, isNext}:ShowMoreProps) {
  
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName  = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName);
  }

  return (
    <div className="flex flex-1 items-center justify-center">
        {!isNext 
        ? (<CustomButton
        title="Show More..."
        btnType='button'
        containerStyles='text-white bg-blue-700 p-2 hover:font-bold rounded-full'
        handleClick={handleNavigation}
         />)
        : null
        }
    </div>
  )
}

export default ShowMore