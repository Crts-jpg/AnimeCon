import { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig";

const AnimeTop = () => {
  const [animeTrending, setAnimeTrending] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/trending/anime")
      .then((res) => {
        console.log(res.data);
        setAnimeTrending(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        console.error("gagal mengambil data" + err);
      });
  }, []);

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-4xl font-extrabold dark:text-black text-center mb-8" id="top">
          TOP ANIME
        </h2>
        <div className="cards flex flex-wrap justify-center">
          {animeTrending && animeTrending.map((result) => {
            return (
              <a
                className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
                key={result.id}
              >
                <div className="flex flex-col max-w-md mx-4 my-8">
                  <div className="flex-shrink-0 relative rounded-xl overflow-hidden h-80">
                    <img
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl w-full h-full"
                      src={result.attributes.posterImage.large}
                      alt="Image Description"
                    />
                  </div>
                  <div className="grow mt-4 px-4">
                    <h3 className="text-xl font-semibold text-black group-hover:text-gray-600 dark:text-gray-800 dark:group-hover:text-grey-100">
                      {result.attributes.canonicalTitle}
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-400 overflow-hidden h-20">
                      {result.attributes.synopsis}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
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

export default AnimeTop;
