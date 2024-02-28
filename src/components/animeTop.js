import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../axiosConfig";

const AnimeTop = () => {
  const [animeTrending, setAnimeTrending] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    axiosInstance
      .get("/anime/ranking", {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_ID_CLIENT}`,
        },
      })
      .then((res) => {
        setAnimeTrending(res.data.bypopularity);
      })
      .catch((err) => {
        console.log(err);
        console.error("gagal mengambil data" + err);
      });
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_TOP_URL}/anime/ranking`, {
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_ID_CLIENT}`,
        },
      })
      .then((res) => {
        console.log(res.data.bypopularity);
        setAnimeTrending(res.data.bypopularity);
      })
      .catch((err) => {
        console.log(err);
        console.error("gagal mengambil data" + err);
      });
  }, []);

  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 class="text-4xl font-extrabold dark:text-black" id="top">TOP ANIME</h2>
      <br></br>
      <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        <a
          class="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          <div class="sm:flex">
            <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              {/* eslint-disable-next-line no-undef */}
              <img
                class="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                src="https://th.bing.com/th/id/OIP.rjMYzZL0hjLKOZTmUdJqaAHaHa?rs=1&pid=ImgDetMain"
                alt="Image Description"
              />
            </div>
            <div class="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
              <h3 class="text-xl font-semibold text-black group-hover:text-gray-600 dark:text-gray-800 dark:group-hover:text-grey-100">
                Studio by Preline
              </h3>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Produce professional, reliable streams easily leveraging
                Preline's innovative broadcast studio
              </p>
              <p class="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
                Read more
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

export default AnimeTop;
