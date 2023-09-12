import CarCard from "@/components/CarCard/CarCard";
import Hero from "@/components/Hero/Hero";
import SearchBar from "@/components/SearchBar/SearchBar";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/util";
import Filter from '@/components/Filter/Filter'
import ShowMore from "@/components/ShowMore/ShowMore";
export default async function Home({ searchParams }) {
  const cars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrablod">Catalog</h1>
          <p>Epxlore the cars you might like!</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <Filter title="fuel" options={fuels}/>
            <Filter title="year" options={yearsOfProduction}/>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > cars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{cars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
