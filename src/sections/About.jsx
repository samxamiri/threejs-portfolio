import React from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { useState } from 'react'

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('samamiri@hotmail.com')

    setHasCopied(true)

    setTimeout( () => {
      setHasCopied(false);
    }, 2000)
  }

  return (
    <section className='c-space my-20' id='about'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6
      md:grid-cols-2 grid-cols-1 gap-5 h-full'>
          <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                  <img src='/assets/grid1.png' alt='grid-1' 
                  className='w-full sm:h-[276px] h-fit 
                  object-contain'/>
                  <div>
                    <p className='grid-headtext'>Hi, I'm Sam</p>
                    <p className='grid-subtext'>I am currently studying Computer Science at Concordia University and I have a total of 8 months of experience in the field.</p>
                  </div>
              </div>
          </div>

          <div className='col-span-1 xl:row-span-3'>
              <div className='grid-container'>
                  <img src='/assets/techstack.png' alt='grid-2' 
                  className="w-full sm:h-[276px] h-fit object-contain" />
                  <div>
                      <p className='grid-headtext'>Tech Stack</p>
                      <p className='grid-subtext'>During my 8 months of internship, I used JavaScript/TypeScript with React.</p>
                  </div>
              </div>
          </div>

          <div className='col-span-1 xl:row-span-4'>
              <div className='grid-container'>
                  <div className='rounded-3xl w-full sm:h-[326px]
                  h-fit flex justify-center items-center'>
                      <Globe
                        height={326}
                        width={326}
                        backgroundColor="rgba(0,0,0,0)"
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        umpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"                       
                      />
                  </div>
                  <div>
                      <p className='grid-headtext'>I work remotely across most timezones.</p>
                      <p className='grid-subtext'>I'm based in Canada, with remote work available.</p>
                      <Button name="Contact Me" isBeam
                      containerClass="w-full mt-10"/>
                  </div>
              </div>
          </div>
          <div className='xl:col-span-2 xl:row-span-3'>
              <div className='grid-container'>
                  <img src='/assets/grid3.png' alt='grid-3'
                  className='w-full sm:h-[266px] h-fit object-contain' />
                  <div>
                      <p className='grid-headtext'> My Passion for Coding</p>
                      <p className='grid-subtext'> 
                      I enjoy tackling challenges and creating solutions through coding. It's more than just a job to me—it's something I truly care about.</p>
                  </div>
              </div>
          </div>
          <div className='xl:col-span-1 xl:row-span-2'>
              <div className='grid-container'>
                  <img src='/assets/grid4.png' alt='grid-4'
                  className='w-full md:h-[126px] sm:h-[276px]
                  h-fit object-cover sm:object-top' />
                  <div className='space-y-2'>
                      <p className='grid-subtext text-center'>
                        Contact me
                      </p>
                      <div className='copy-container' 
                      onClick={handleCopy}>
                          <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} 
                          alt='copy' />
                          <p className='lg:text-2xl md:text-xl font-medium
                          text-gray_gradient text-white'>samamiri@hotmail.com</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default About