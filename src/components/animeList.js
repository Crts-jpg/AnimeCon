import React from "react";

const AnimeList = () => {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 class="text-4xl font-extrabold dark:text-black" id="animelist">ANIME LIST</h2>
      <br></br>
      <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        <a
          class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div class="sm:flex">
            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                src="https://th.bing.com/th/id/OIP.NvHLmUONVsMBZSOxiIs3QwHaHa?w=188&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                alt="Image Description"
              />
            </div>

            <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-500 dark:text-gray-800 dark:group-hover:text-grey">
                Naruto Shippudent
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Naruto adalah sebuah serial manga dan anime yang bercerita
                tentang kehidupan tokoh utamanya, Naruto Uzumaki, seorang ninja
                yang hiperaktif, periang, dan ambisius yang ingin mewujudkan
                keinginannya untuk mendapatkan gelar Hokage, pemimpin dan ninja
                terkuat di desanya
              </p>
              <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                Rating
                <svg
                  class="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </div>
        </a>

        <a
          class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div class="sm:flex">
            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                src="https://th.bing.com/th/id/OIP.iz43io7dWABw44pwXGpoYQHaD4?w=276&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                alt="Image Description"
              />
            </div>

            <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-500 dark:text-gray-800 dark:group-hover:text-grey">
                Demon Slayer: Kimetsu No yaiba
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Demon Slayer: Kimetsu no Yaiba adalah sebuah seri manga Jepang
                yang ditulis dan diilustrasikan oleh Koyoharu Gotoge. Cerita
                dalam anime ini berkisah tentang seorang anak laki-laki bernama
                Tanjiro Kamado. Dia bekerja menjadi seorang pembasmi iblis
                karena keluarganya dibunuh dan adiknya diubah menjadi Iblis.
              </p>
              <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                Rating
                <svg
                  class="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </div>
        </a>
        <a
          class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div class="sm:flex">
            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                src="https://th.bing.com/th/id/OIP.DUZ_82v0LVDvB5becqRKcAHaHZ?rs=1&pid=ImgDetMain"
                alt="Image Description"
              />
            </div>

            <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-500 dark:text-gray-800 dark:group-hover:text-grey">
                Jujutsu Kaisen
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Jujutsu Kaisen mengisahkan Yuuji Itadori, seorang siswa SMA
                berbakat, memiliki fisik yang kuat dan cocok untuk ikut klub
                olahraga di sekolahnya. Namun, alih-alih bergabung ke klub
                olahraga, ia justru bergabung ke klub penelitian gaib.
                Kehidupannya berubah drastis ketika dia harus membantu
                teman-temannya yang menghadapi bahaya karena sebuah kutukan
              </p>
              <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                Rating
                <svg
                  class="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </div>
        </a>
        <a
          class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div class="sm:flex">
            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                src="https://th.bing.com/th/id/OIP.lnYdgVbuthkRbf72g2OIxAHaFM?rs=1&pid=ImgDetMain"
                alt="Image Description"
              />
            </div>

            <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
              <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-500 dark:text-gray-800 dark:group-hover:text-grey">
                Tokyo Ghoul
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Tokyo Ghoul mengisahkan Ken Kaneki, seorang mahasiswa yang
                hampir tewas setelah bertemu dengan Rize Kamishiro, seorang
                wanita yang berubah menjadi ghoul. Ghouls adalah makhluk mirip
                manusia yang memburu dan memakan daging manusia. Akibat
                transplantasi organ dari seorang ghoul, Ken Kaneki pun menjadi
                setengah ghoul dan harus beradaptasi dengan kehidupan baru yang
                penuh bahaya dan misteri
              </p>
              <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                Rating
                <svg
                  class="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AnimeList;
