import React, { ReactNode } from 'react'

interface SectionPageProps {
  children: ReactNode;
  center:Boolean;
  paddingTop: Boolean;
}

const SectionPage: React.FC<SectionPageProps> = ({ children, center, paddingTop }) => {
  return (
    <main className={`min-h-screen pt-24 ${paddingTop ? '':'md:pt-0'} px-3 ${center ? 'md:flex md:justify-center md:items-center md:flex-col' : 'md:flex md:justify-center'} `}>
      {children}
    </main>
  )
}

export default SectionPage
