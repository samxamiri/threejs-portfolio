import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300
    flex justify-center items-center flex-wrap gap-5'>

        <div className='flex justify-center gap-3'>
          <div className='social-icon'>
            <a className='flex justify-center' href='https://github.com/samxamiri'>
              <img src='/assets/github.svg'  alt='github' className='w-1/2 h-1/2' />
            </a>
          </div>
          <div className='social-icon'>
            <a className='flex justify-center' href='https://www.linkedin.com/in/samamiri/'>
              <img src='/assets/linkedin.svg' alt='github' className='w-1/2 h-1/2' />
            </a>
          </div>
        </div>
        <p className='text-white-500'>© 2024 Sam. All rights reserved.</p>
   
    </section>
  )
}

export default Footer