import React from 'react'
import SectionPage from '../../components/Section'
import ProfileCard from '../../components/Card/ProfileCard1'
import Pagination from '../../components/Pagination/Pagination'

interface CharacterPageProps {
  characters: any[];
  totalItems:string;
  filterStatus:string;
  filterGender:string;
  filterSpecies:string;
  errorMessage:string;
  page:number;
  totalPages:number;
  onSelectChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
  onNameChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handlePageChange: (newPage: number) => void;
}

const CharactersPageView: React.FC<CharacterPageProps> =({
  characters,
  totalItems,
  filterStatus,
  filterGender,
  filterSpecies,
  errorMessage,
  onNameChange,onSelectChange,
  page,totalPages,handlePageChange,handleReset,handleSubmit
}) => {
  return (
    <SectionPage center={false} paddingTop={true}>
      <section className='grid gap-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl w-full relative'>
        <aside>
          <form onSubmit={handleSubmit} id='filtros' className='sticky top-24 mx-4 bg-white/10 rounded-lg p-5 border border-white/40'>
            <header className=''>
              <h1 className="text-base font-semibold leading-7 text-gray-900 mb-2">Characters Page</h1>
              <hr/>
              <div className='flex flex-col-reverse'>
                <p className="mt-1 text-sm leading-6 text-gray-600">This form is designed to enhance the user experience by providing an efficient and personalized means to explore the character database.</p>
                <h2 className="text-base font-semibold leading-7 text-gray-900 mt-2">Filters</h2>
                <hr/>
                <h2 className="text-base font-semibold leading-7 text-gray-900 my-2">Results: {totalItems}</h2>
              </div>
              
            </header>
            
            <section className="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-6">

              <div className="md:col-span-6">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div className="mt-2">
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    autoComplete="given-name" 
                    placeholder="Enter the Name"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 sm:max-w-sm"
                    onChange={onNameChange}
                  />
                </div>
              </div>

              <div className="md:col-span-6">
                <label htmlFor="Status" className="block text-sm font-medium leading-6 text-gray-900">Status</label>
                <div className="mt-2">
                  <select 
                    id="Status" 
                    value={filterStatus}
                    onChange={onSelectChange} 
                    name="status" 
                    autoComplete="Status-name" 
                    className={`block w-full rounded-md border-0 p-1.5 ${filterStatus ? 'text-gray-900' : 'text-gray-400'} [&>option]:text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-sm sm:text-sm sm:leading-6`}
                  >
                    <option value=''>No selection</option>
                    <option value='Alive'>Alive</option>
                    <option value='Dead'>Dead</option>
                    <option value='Unknown'>Unknown</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-6">
                <label htmlFor="Gender" className="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                <div className="mt-2">
                  <select 
                    id="Gender" 
                    value={filterGender}
                    onChange={onSelectChange}  
                    name="gender" 
                    autoComplete="Gender-name" 
                    className={`block w-full rounded-md border-0 p-1.5 ${filterGender ? 'text-gray-900' : 'text-gray-400'} [&>option]:text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-sm sm:text-sm sm:leading-6`}
                  >
                    <option value=''>No selection</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='GenderLess'>GenderLess</option>
                    <option value='Unknown'>Unknown</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-6">
                <label htmlFor="Species" className="block text-sm font-medium leading-6 text-gray-900">Species</label>
                <div className="mt-2">
                  <select 
                    id="Species" 
                    value={filterSpecies}
                    onChange={onSelectChange}  
                    name="species" 
                    autoComplete="Species-name" 
                    className={`block w-full rounded-md border-0 p-1.5 ${filterSpecies ? 'text-gray-900' : 'text-gray-400'} [&>option]:text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-sm sm:text-sm sm:leading-6`}
                  >
                    <option value=''>No selection</option>
                    <option value='Human'>Human</option>
                    <option value='Alien'>Alien</option>
                    <option value='Humanoid'>Humanoid</option>
                    <option value='Robot'>Robot</option>
                    <option value='Animal'>Animal</option>
                    <option value='Disease'>Disease</option>
                    <option value='Cronenberg'>Cronenberg</option>
                    <option value='Mythological Creature'>Mythological Creature</option>
                    <option value='Poopybutthole'>Poopybutthole</option>
                    <option value='Unknown'>Unknown</option>
                  </select>
                </div>
              </div>

            </section>

            <footer className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" onClick={handleReset} className="text-sm font-semibold leading-6 text-gray-900">
                Reset
              </button>
              <button type="submit" className="rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Search
              </button>
            </footer>

          </form>
        </aside>
        
        <div className='md:col-span-2'>
          {errorMessage ? (
            <div className='flex justify-center items-center h-1/2 w-full'>{errorMessage}</div>
          ) :(
            <>
              <section className='w-full px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {characters.map((e:any, i:number)=>(
                  <ProfileCard 
                    key={i} 
                    id={e.id} 
                    name={e.name} 
                    image={e.image} 
                    status={e.status}
                    gender={e.gender}
                    species={e.species}
                  />
                ))}
                
              </section>
              <div className='pt-10'>
                <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange}/>
              </div>
            </>
          )}
          
        </div>
      </section>
    </SectionPage>
  )
}

export default CharactersPageView
