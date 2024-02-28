import React from "react";

const Intro = () => {
    return (

        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-black">Welcome To AnimeCon</h2>
                <p class="mt-1 text-gray-600 dark:text-gray-800">Selamat datang di dunia kami, di mana rating anime dan daftar terkini bersatu secara alami. Nikmati pengalaman menemukan anime terbaik dan terbaru tanpa batas, seperti mengikuti alur cerita yang terus berkembang dan menciptakan momen tak terlupakan bersama karakter-karakter yang kita cintai.</p>
            </div>



            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <a class="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
                    <div class="aspect-w-16 aspect-h-10">
                        <img class="w-full object-cover rounded-xl" src="https://twinfinite.net/wp-content/uploads/2022/05/Who-created-Anime.jpeg" alt="Image Description"/>
                    </div>
                    <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-800 dark:hover:text-gray-500">
                        Temukan lebih banyak anime menarik! Ketuk tombol di bawah untuk menjelajahi daftar lengkap anime terbaru dan terpopuler.
                    </h3>
                    <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-black">
                        Learn more
                        <svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </p>
                </a>



                <a class="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
                    <div class="aspect-w-16 aspect-h-10">
                        <img class="w-full object-cover rounded-xl" src="https://i1.wp.com/anitrendz.net/news/wp-content/uploads/2018/12/Fall-2018-Anticipation-Feature.png?fit=1070%2C602&ssl=1" alt="Image Description"/>
                    </div>
                    <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-800 dark:hover:text-gray-500">
                        Jelajahi daftar anime teratas! Tekan tombol di bawah untuk menemukan koleksi anime terbaik yang mendebarkan dan populer saat ini.
                    </h3>
                    <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-black">
                        Learn more
                        <svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </p>
                </a>


                <a class="group hover:bg-gray-100 rounded-xl p-5 transition-all dark:hover:bg-white/[.05]" href="#">
                    <div class="aspect-w-16 aspect-h-10">
                        <img class="w-full object-cover rounded-xl" src="https://bracketfights.com/images/hero/2019/animes-characters-power-tornament-33383/1640705057.jpeg" alt="Image Description"/>
                    </div>
                    <h3 class="mt-5 text-xl text-gray-800 dark:text-gray-800 dark:hover:text-gray-500">
                        Temukan lebih banyak tentang dunia magis anime! Sentuh 'Learn More' untuk menggali lebih dalam.
                    </h3>
                    <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-black">
                        Learn more
                        <svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </p>
                </a>

            </div>

        </div>


    )
};

export default Intro;