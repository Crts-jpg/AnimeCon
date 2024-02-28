import { useEffect, useState } from "react";
import axios from "axios";
const AnimeList = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    axios
      .get("https://kitsu.io/api/edge/anime")
      .then((response) => {
        setAnimeList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2
          class="text-4xl font-extrabold dark:text-black text-center mb-8"
          id="animelist"
        >
          LIST ANIME
        </h2>
        <div className="flex flex-wrap justify-center cards">
          {animeList.map((result) => {
            return (
              <a
                class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <div class="flex flex-col max-w-md mx-4 my-8">
                  {" "}
                  {/* Tambahkan margin horizontal dan vertical */}
                  <div class="flex-shrink-0 relative rounded-xl overflow-hidden h-80">
                    <img
                      class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl w-full h-full"
                      src={result.attributes.posterImage.large}
                      alt="Image Description"
                    />
                  </div>
                  <div class="grow mt-4 px-4">
                    <h3 class="text-xl font-semibold text-black group-hover:text-gray-600 dark:text-gray-800 dark:group-hover:text-grey-100">
                      {result.attributes.canonicalTitle}
                    </h3>
                    <p class="mt-3 text-gray-600 dark:text-gray-400 overflow-hidden h-20">
                      {result.attributes.synopsis}
                    </p>
                    <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                      Rating: {result.attributes.averageRating}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnimeList;