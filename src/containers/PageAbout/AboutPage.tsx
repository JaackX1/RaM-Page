import React from 'react'
import SectionPage from '../../components/Section';
import image from '../../join.svg'
import TransparentButton from '../../components/Button/Transparent';
import { urlData } from '../../data/navigation';

const AboutPage = () => {
  return (
    <SectionPage center={true} paddingTop={false}>
      <section className='flex gap-8 md:gap-4 flex-wrap md:flex-nowrap justify-center text-white drop-shadow-lg mb-5'>
        <article className='max-w-[700px] w-full '>
          <header>
            <p className='text-2xl font-semibold text-gray-300'>About</p>
            <h1 className='text-3xl md:text-5xl font-bold my-4 '>Purpose of the website</h1>
          </header>
          
          <main className='my-4'>
            <p>The purpose of this page is to practice API consumption. It should be noted that I am a beginner in this field and I think it is a good idea to use it as an opportunity to study and learn.</p>
            <p className='text-gray-300'>La finalidad de esta página es practicar el consumo de APIs. Cabe recalcar que soy principiante en este campo y me parece una buena idea utilizarlo como una oportunidad para estudiar y aprender.</p>
          </main>
          <footer className='mx-3 flex gap-4 flex-wrap font-semibold [&>a]:border-2 [&>a]:border-white [&>a]:rounded-lg'>
            {urlData.map((item,i)=>(
              <TransparentButton title={item.title} href={item.href} key={i}/>
            ))}
          </footer>
        </article>
        <article className='w-full max-w-[500px] object-cover flex justify-center items-center'>
          <img src={image} alt='pictureAbout' title='JaackX1' width={1920} height={1080} className='rounded-lg'/>
        </article>
      </section>
    </SectionPage>
    
  )
}

export default AboutPage
