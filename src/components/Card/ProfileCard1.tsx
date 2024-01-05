import React from 'react'
import TagsSocial from '../Tags/TagsSocial';

interface ProfileCardProps {
  id:number;
  name:string;
  image:string;
  status:string;
  gender:string;
  species:string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ id, name, image, status, gender, species}) => {
  return (
    <article className='bg-white/10 rounded-lg p-5 border border-white/40 text-white'>
      <header className='flex justify-center items-center'>
        <div className='w-full max-w-[130px] object-cover flex justify-center items-center rounded-full overflow-hidden border-2 border-white'>
          <img
            src={image}
            alt={`Profile-${id}`}
            title={name}
            className='w-full h-full object-cover rounded-full'
          />
        </div>
      </header>
      
      <h3 className='text-2xl font-bold my-3 text-center line-clamp-1 hover:line-clamp-none drop-shadow-lg'>{name}</h3>
      <footer
        className="flex flex-col gap-1 justify-center items-start bg-transparent py-4 border-t border-white"
      >
        <p className="font-semibold text-xl text-gray-600 mb-2">Tags</p>
        <section className="flex flex-wrap gap-2">
          <TagsSocial id={id} title={status} type='Status' />
          <TagsSocial id={id} title={gender} type='Gender' />
          <TagsSocial id={id} title={species} type='Species' />
        </section>
      </footer>
    </article>
  )
}

export default ProfileCard
