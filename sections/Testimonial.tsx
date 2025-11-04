import Header from '@/components/Header'
import TestimonialCard from '@/components/TestimonialCard'
import React from 'react'

const Testimonial = () => {
  return (
    <div className='p-10 flex flex-col items-center min-h-screen'>
        <Header head='Success Stories.' text="Hear from traders who've transformed their financial future." />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
        </div>
    </div>
  )
}

export default Testimonial