import heroimage from '../assets/hero.jpg'

const Hero = () => {
    return (
        <section className='relative'>
            <img src={heroimage} alt='Black Hills Dogos Logo' className='md:flex md:w-full w-screen h-[40rem] md:h-[55rem] object-left-top md:object-top object-cover mr-3' />
            <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/10 sm:to-white/95">
        </div>
        </section>
    )
}

export default Hero