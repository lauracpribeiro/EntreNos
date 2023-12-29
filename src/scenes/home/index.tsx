import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.jpg";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute mt-20 before:-top-20 before:-left-20 before:z-[-1] ">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm text-justify">
            Bem-vindo ao mundo encantador de "Entrenós"! 
            Aqui, convidamos você a explorar a magia dos bordados, onde fios se entrelaçam para criar arte e histórias que se eternizam. 
            Somos apaixonados por transformar tecidos em obras de arte, e nossa missão 
            é levar a nossa paixão até a sua casa!

            Em nosso site, você encontrará um universo de possibilidades, 
            desde delicados bordados tradicionais de porta alianças e porta maternidades, até designs contemporâneos 
            e personalizados. Cada ponto e cada detalhe é uma manifestação de amor e dedicação. 
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Faça o seu pedido
            </ActionButton>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center mt-10 md:z-10
              md:ml-40 md:mt-20 md:justify-center"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
