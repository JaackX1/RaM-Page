import React from 'react'
import SectionPage from '../../components/Section'
import { urlData, githubProfile } from '../../data/navigation'
import TransparentButton from '../../components/Button/Transparent'

const HomePage = () => {
  
  return (
    <SectionPage center={true} paddingTop={false}>
        <section className='flex justify-center items-center flex-col gap-4 text-center text-white drop-shadow-lg'>
          <header className='flex justify-center items-center flex-col gap-4 text-center text-white drop-shadow-lg'>
            <a href={githubProfile.link} target='_blank' rel="noreferrer" >
              <div className='w-40 h-40 bg-black rounded-full overflow-hidden'>
                  <img src={githubProfile.image} alt='pictureGithub' title={githubProfile.name} width={500} height={500} />
              </div>
              <p>{githubProfile.name}</p>
            </a>
            <div>
                <h1 className='text-5xl font-semibold'>This is Amazing</h1>
            </div>
            <div className='my-2'>
                <p className='text-2xl font-medium relative pb-1 before:absolute before:content-[""] before:left-1/4 before:bottom-0 before:h-3 before:w-2/4 before:border-b-2 before:border-white'>
                  A little Subtitle.
                </p>
            </div>
          </header>

          <main className='max-w-2xl my-5'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, optio reprehenderit at soluta placeat nostrum similique tempore impedit. Iusto aperiam minima ut. Dignissimos maxime quam at incidunt, sunt itaque cum officia temporibus. Fugit officia labore dolorum consequuntur minima iste, dolorem quos iure nihil quibusdam unde ducimus? Soluta nam unde in aut ea ipsa alias veniam reiciendis cum ullam. Tempora, nihil.
            </p>
          </main>
          <footer className='flex justify-center gap-7 flex-wrap my-5 text-white [&>a]:border-2 [&>a]:border-white [&>a]:rounded-lg '>
            {urlData.map((item,i)=>(
              <TransparentButton title={item.title} href={item.href} key={i}/>
            ))}
          </footer>

        </section>
        
      
    </SectionPage>
    
  )
}

export default HomePage
