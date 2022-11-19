import sitting from '../assets/sitting.jpg'


const About = () => {
    return (
        <section class="relative pt-16 bg-blueGray-50">
            <div class="container mx-auto">
                <div class="flex flex-wrap items-center">
                    <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                        <div class="relative flex flex-col min-w-0 break-words bg-light-green w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                            <img alt="..." src={sitting} class="overflow-hidden object-cover w-full h-52 align-middle rounded-t-lg" />
                            <blockquote class="relative p-8 mb-4">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" class="absolute left-0 w-full block h-[95px] -top-[95px]">
                                    <polygon points="-30,95 583,95 580,65" class="text-light-green fill-current"></polygon>
                                </svg>
                                <h4 class="text-xl font-bold text-white">
                                    LOREM IPSUM
                                </h4>
                                <p class="text-md font-light mt-2 text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </blockquote>
                        </div>
                    </div>

                    <div class="w-full md:w-6/12 px-4">
                        <div class="flex flex-wrap">
                            <div class="w-full md:w-6/12 px-4">
                                <div class="relative flex flex-col mt-4">
                                    <div class="px-4 py-5 flex-auto">
                                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <i class="fas fa-paw"></i>
                                        </div>
                                        <h6 class="text-xl mb-1 font-semibold">LOREM IPSUM</h6>
                                        <p class="mb-4 text-blueGray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                                <div class="relative flex flex-col min-w-0">
                                    <div class="px-4 py-5 flex-auto">
                                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <i class="fas fa-dog"></i>
                                        </div>
                                        <h6 class="text-xl mb-1 font-semibold">
                                            LOREM IPSUM
                                        </h6>
                                        <p class="mb-4 text-blueGray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-6/12 px-4">
                                <div class="relative flex flex-col min-w-0 mt-4">
                                    <div class="px-4 py-5 flex-auto">
                                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                            <i class="fas fa-bone"></i>
                                        </div>
                                        <h6 class="text-xl mb-1 font-semibold">LOREM IPSUM</h6>
                                        <p class="mb-4 text-blueGray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                                <div class="relative flex flex-col min-w-0">
                                    <div class="px-4 py-5 flex-auto">
                                        <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160.9 286.2c4.8 1.2 9.9 1.8 15.1 1.8c35.3 0 64-28.7 64-64V160h44.2c12.1 0 23.2 6.8 28.6 17.7L320 192h64c8.8 0 16 7.2 16 16v32c0 44.2-35.8 80-80 80H272v50.7c0 7.3-5.9 13.3-13.3 13.3c-1.8 0-3.6-.4-5.2-1.1l-98.7-42.3c-6.6-2.8-10.8-9.3-10.8-16.4c0-2.8 .6-5.5 1.9-8l15-30zM160 160h40 8v32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32V176c0-8.8 7.2-16 16-16zm128 48c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16z"/></svg>
                                        </div>
                                        <h6 class="text-xl mb-1 font-semibold">LOREM IPSUM</h6>
                                        <p class="mb-4 text-blueGray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;