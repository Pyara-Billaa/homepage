import { luffy2Img } from "./images/images";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#1ca9c9] place-items-center">
        <div
          className="w-full sm:relative sm:h-120 sm:w-150 md:max-lg:w-180
        lg:w-235"
        >
          <div className="place-items-center 
          sm:place-items-start sm:bg-none sm:ml-5 sm:absolute sm:bottom-5 
          lg:right-1/2 lg:bottom-1/8 lg:left-0">
            <section className="place-items-center text-white sm:place-items-start">
              <h1 className="playfair text-4xl text-center mb-6 mt-20 pt-7 sm:ml-9 md:ml-5
              lg:ml-0">
                Contact
              </h1>

              <div className="w-70 sm:ml-10 md:w-100 md:ml-5 lg:ml-0">
                <p className="roboto text-xl mb-5 sm:text-[1rem] sm:w-52 md:w-70">
                  Please get in touch if you think you can join the crew for
                  adventures!
                </p>
                <p>Ida's Bar Elbaph</p>
                <p className="mb-5">New World, Grand Line</p>

                <p className="flex items-center gap-2"><svg className="hidden md:inline-flex mt-1 fill-none w-5 stroke-[white] stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v3.93a2 2 0 0 1-2.29 2A18 18 0 0 1 3.14 5.29 2 2 0 0 1 5.13 3H9a1 1 0 0 1 1 .89 10.7 10.7 0 0 0 1 3.78 1 1 0 0 1-.42 1.26l-.86.49a1 1 0 0 0-.33 1.46 14.1 14.1 0 0 0 3.69 3.69 1 1 0 0 0 1.46-.33l.49-.86a1 1 0 0 1 1.3-.38 10.7 10.7 0 0 0 3.78 1 1 1 0 0 1 .89 1"/></svg>56-5656-5656</p>
                <p className="flex items-center gap-2"><svg className="hidden md:inline-flex mt-1 fill-none w-5 stroke-[white] stroke-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.435 4.065H4.565a2.5 2.5 0 0 0-2.5 2.5v10.87a2.5 2.5 0 0 0 2.5 2.5h14.87a2.5 2.5 0 0 0 2.5-2.5V6.565a2.5 2.5 0 0 0-2.5-2.5m-14.87 1h14.87a1.49 1.49 0 0 1 1.49 1.39c-2.47 1.32-4.95 2.63-7.43 3.95a6 6 0 0 1-1.06.53 2.08 2.08 0 0 1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82a1.49 1.49 0 0 1 1.49-1.4m16.37 12.37a1.5 1.5 0 0 1-1.5 1.5H4.565a1.5 1.5 0 0 1-1.5-1.5V7.6c2.36 1.24 4.71 2.5 7.07 3.75a5.6 5.6 0 0 0 1.35.6 2.87 2.87 0 0 0 2-.41c1.45-.76 2.89-1.53 4.34-2.29 1.04-.56 2.07-1.1 3.11-1.65Z"/></svg>monkeydluffy@gmail.com</p>
              </div>
              <aside className="flex gap-4 mt-5 pb-15 sm:ml-9 md:ml-4 lg:ml-0">
                <span>
                  <svg
                    className="w-10"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688 3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" />
                  </svg>
                </span>

                <span>
                  <svg
                    className="w-10"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" />
                  </svg>
                </span>

                <span>
                  <svg
                    className="w-10"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M30.917 6.728a12.1 12.1 0 0 1-3.464.961l-.061.006a6.22 6.22 0 0 0 2.687-3.354l.013-.044a12.4 12.4 0 0 1-3.82 1.464l-.082.014a6.14 6.14 0 0 0-10.455 5.635l-.008-.042A17.38 17.38 0 0 1 3.098 5.002l-.025-.031a5.95 5.95 0 0 0-.831 3.052v.039-.002.005a6.14 6.14 0 0 0 2.709 5.093l.022.014a6.1 6.1 0 0 1-2.811-.785l.031.016v.077a6.145 6.145 0 0 0 4.884 6.014l.04.007a6.26 6.26 0 0 1-2.8.099l.039.006c.813 2.459 3.068 4.212 5.739 4.264h.006a12.23 12.23 0 0 1-7.602 2.627h-.014.001a13 13 0 0 1-1.521-.089l.061.006c2.663 1.729 5.92 2.757 9.418 2.757h.014-.001.126c9.578 0 17.343-7.765 17.343-17.343v-.116.006c0-.262 0-.524-.019-.786a12.5 12.5 0 0 0 3.042-3.136l.028-.044z" />
                  </svg>
                </span>
              </aside>
            </section>
          </div>
          <img
            className="w-full 
            sm:w-80 sm:absolute sm:top-1/8 sm:right-1 sm:h-90
            md:right-12 
            lg:w-120 lg:left-112"
            src={luffy2Img}
            alt="Luffy Image"
          />
        </div>
      </footer>
    </>
  );
}
