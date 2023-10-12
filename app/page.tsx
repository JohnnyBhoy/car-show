import { CarCard, Hero, SearchBar, ShowMore } from '@/components'
import CustomFilter from '@/components/CustomFilter'
import { fuels, yearsOfProduction } from '@/constants';
import {FilterProps } from '@/types';
import { fetchCars } from '@/utils'

export default async function Home({searchParams}:{searchParams:any}) {
  const allCars = await fetchCars({
    manufacturer: searchParams?.manufacturer || '',
    year: searchParams?.year || 2022,
    fuel: searchParams?.fuel || '',
    limit: searchParams?.limit || 10,
    model: searchParams?.model || '',
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className='font-extrabold text-4xl'>Car Catalogue</h1>

          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="years" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty 
        ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car:any) => (
              <CarCard car={car}/>
              ))}
            </div>
          </section>
        ) 
        : (
          <section>
            <div className='flex flex-col'>
              <span className='text-center text-2xl text-slate-800 font-bold'>Ooops! no data found</span>
            </div>
          </section>
          )
        }
      </div>

      <ShowMore
       pageNumber={(searchParams.limit || 10) / 10}
       isNext={(searchParams.limit || 10) > allCars.length}
      />
    </main>
  )
}
