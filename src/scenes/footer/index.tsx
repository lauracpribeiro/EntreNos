import Logo2 from "@/assets/logo2.png";
import Whats from "@/assets/whats.png";
import Insta from "@/assets/insta.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-10">
      <div className=" mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-10 basis-2/3 md:mt-0">
          <img className="w-[250px]" alt="logo2" src={Logo2} />
        </div>

        <div className="mt-10 basis-1/3 md:mt-10">
          <h4 className="font-bold">Entre em Contato</h4>
          <div className="my-6 md:flex">
            <a
              href="https://www.instagram.com/bordadosentrenos/"
              target="_blank"
            >
              <img className="w-10" alt="insta" src={Insta} />
            </a>
            <p className="mx-2"> @bordadosentrenos</p>
          </div>
          <div className="md:flex">
            <a
              href="https://www.instagram.com/bordadosentrenos/"
              target="_blank"
            >
              <img className="w-10" alt="whats" src={Whats} />
            </a>
            <p className="mx-2">+55 (31)99946-2235</p>
          </div>
        </div>
      </div>
      <div className=" mx-auto w-1/3">
        <p> @ 2023 - Powered by Laura Ribeiro. All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
