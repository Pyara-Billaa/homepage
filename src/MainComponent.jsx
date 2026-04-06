import {
  rocksImg,
  zoroImg,
  sanjiImg,
  namiImg,
  robinImg,
  shanksImg,
} from "./images/images.js";

export default function Main() {
  return (
    <>
      <main className="md:place-items-center sm:mb-20">
        <div className="md:max-lg:w-160">
          <h1 className="playfair text-4xl text-center mb-6 mt-20 md:text-start md:max-lg:ml-4">
            My fav
          </h1>
          <section className="md:grid md:grid-cols-2 md:gap-[20px_15px] lg:grid-cols-3 lg:gap-[0px_35px]">

            <div className="place-items-center mb-10">
              <figure className="w-70 h-120 sm:max-md:w-100 pb-10 shadow-[3px_3px_9px_4px_rgba(0,0,0,0.15)]">
                <img
                  className="w-70 sm:max-md:w-100 h-70 mb-2"
                  src={rocksImg}
                  alt="Rocks image"
                />
                <figcaption className="place-items-center">
                  <div className="w-60 flex justify-between">
                    <strong className="ml-4 playfair font-medium text-xl">
                      Davy D. Xebec
                    </strong>
                    <div className="flex gap-2">
                      <span>
                        <svg
                          className="w-7"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688 3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" />
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="w-7"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.707 10.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 1 1 1.414 1.414z"
                            fill="#000"
                          />
                          <path
                            d="M15 15v-3.5a1 1 0 1 1 2 0V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2H5v10zm2-7a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0z"
                            fill="#000"
                          />
                          <path
                            d="M12 5a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"
                            fill="#000"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <p className="w-58 mt-1 pr-3 roboto">
                    Rocks was a man of extreme ambition who dreamed of becoming
                    the "King of the World."
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="place-items-center mb-10">
              <figure className="w-70 h-120 sm:max-md:w-100 pb-10 shadow-[3px_3px_9px_4px_rgba(0,0,0,0.15)]">
                <img
                  className="w-70 sm:max-md:w-100 h-70 mb-2"
                  src={zoroImg}
                  alt="zoro image"
                />
                <figcaption className="place-items-center">
                  <div className="w-60 flex justify-between">
                    <strong className="ml-4 playfair font-medium text-xl">
                      Roronoa Zoro
                    </strong>
                    <div className="flex gap-2">
                      <span>
                        <svg
                          className="w-7"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688 3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" />
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="w-7"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.707 10.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 1 1 1.414 1.414z"
                            fill="#000"
                          />
                          <path
                            d="M15 15v-3.5a1 1 0 1 1 2 0V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2H5v10zm2-7a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0z"
                            fill="#000"
                          />
                          <path
                            d="M12 5a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"
                            fill="#000"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <p className="w-58 mt-1 pr-3 roboto">
                    Roronoa Zoro, is the right-hand man and number two of his
                    crew's captain, Monkey D. Luffy.
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="place-items-center mb-10">
              <figure className="w-70 h-120 sm:max-md:w-100 pb-10 shadow-[3px_3px_9px_4px_rgba(0,0,0,0.15)]">
                <img
                  className="w-70 sm:max-md:w-100 h-70 mb-2"
                  src={namiImg}
                  alt="Nami image"
                />
                <figcaption className="place-items-center">
                  <div className="w-60 flex justify-between">
                    <strong className="ml-4 playfair font-medium text-xl">
                      Nami
                    </strong>
                    <div className="flex gap-2">
                      <span>
                        <svg
                          className="w-7"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688 3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" />
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="w-7"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.707 10.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 1 1 1.414 1.414z"
                            fill="#000"
                          />
                          <path
                            d="M15 15v-3.5a1 1 0 1 1 2 0V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2H5v10zm2-7a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0z"
                            fill="#000"
                          />
                          <path
                            d="M12 5a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"
                            fill="#000"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <p className="w-58 mt-1 pr-3 roboto">
                    "Cat Burglar" Nami is the navigator of the Straw Hat Pirates
                    and one of the Senior Officers of the Straw Hat Grand Fleet.
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="place-items-center mb-10">
              <figure className="w-70 h-120 sm:max-md:w-100 pb-10 shadow-[3px_3px_9px_4px_rgba(0,0,0,0.15)]">
                <img
                  className="w-70 sm:max-md:w-100 h-70 mb-2"
                  src={sanjiImg}
                  alt="Sanji image"
                />
                <figcaption className="place-items-center">
                  <div className="w-60 flex justify-between">
                    <strong className="ml-4 playfair font-medium text-xl">
                      Sanji
                    </strong>
                    <div className="flex gap-2">
                      <span>
                        <svg
                          className="w-7"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688 3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" />
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="w-7"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.707 10.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 1 1 1.414 1.414z"
                            fill="#000"
                          />
                          <path
                            d="M15 15v-3.5a1 1 0 1 1 2 0V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2H5v10zm2-7a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0z"
                            fill="#000"
                          />
                          <path
                            d="M12 5a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"
                            fill="#000"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <p className="w-58 mt-1 pr-3 roboto">
                    "Black Leg" Sanji is the cook of the Straw Hat Pirates and
                    one of the Senior Officers of the Straw Hat Grand Fleet.
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="place-items-center mb-10">
              <figure className="w-70 h-120 sm:max-md:w-100 pb-10 shadow-[3px_3px_9px_4px_rgba(0,0,0,0.15)]">
                <img
                  className="w-70 sm:max-md:w-100 h-70 mb-2"
                  src={robinImg}
                  alt="Robin image"
                />
                <figcaption className="place-items-center">
                  <div className="w-60 flex justify-between">
                    <strong className="ml-4 playfair font-medium text-xl">
                      Nico Robin
                    </strong>
                    <div className="flex gap-2">
                      <span>
                        <svg
                          className="w-7"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688 3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" />
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="w-7"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.707 10.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 1 1 1.414 1.414z"
                            fill="#000"
                          />
                          <path
                            d="M15 15v-3.5a1 1 0 1 1 2 0V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2H5v10zm2-7a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0z"
                            fill="#000"
                          />
                          <path
                            d="M12 5a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"
                            fill="#000"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <p className="w-58 mt-1 pr-3 roboto">
                    Nico Robin, is the archaeologist of the Straw
                    Hat Pirates and one of the Senior Officers of the Straw Hat
                    Grand Fleet.
                  </p>
                </figcaption>
              </figure>
            </div>

            <div className="place-items-center mb-10">
              <figure className="w-70 h-120 sm:max-md:w-100 pb-10 shadow-[3px_3px_9px_4px_rgba(0,0,0,0.15)]">
                <img
                  className="w-70 sm:max-md:w-100 h-70 mb-2"
                  src={shanksImg}
                  alt="shanks image"
                />
                <figcaption className="place-items-center">
                  <div className="w-60 flex justify-between">
                    <strong className="ml-4 playfair font-medium text-xl">
                      Shanks
                    </strong>
                    <div className="flex gap-2">
                      <span>
                        <svg
                          className="w-7"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688 3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" />
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="w-7"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.707 10.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 1 1 1.414 1.414z"
                            fill="#000"
                          />
                          <path
                            d="M15 15v-3.5a1 1 0 1 1 2 0V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2H5v10zm2-7a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0z"
                            fill="#000"
                          />
                          <path
                            d="M12 5a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"
                            fill="#000"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <p className="w-58 mt-1 pr-3 roboto">
                    "Red-Haired" Shanks, is
                    the chief of the Red Hair Pirates and one of the Four
                    Emperors that rule over the New World.
                  </p>
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
