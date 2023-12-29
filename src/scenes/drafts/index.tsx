import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { DraftType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Drafts";
import DraftsPageGraphic from "@/assets/DraftsPageGraphic.jpg"

const drafts: Array<DraftType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Risco 1",
    description:
      "Em construção",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Risco 2",
    description:
    "Em construção",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Risco 3",
    description:
    "Em construção",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Drafts = ({ setSelectedPage }: Props) => {
  return (
    <section id="riscos" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Drafts)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>COMPRE AQUI O SEU RISCO!</HText>
          <p className="my-5 text-sm text-justify">
          Explore nossa coleção de riscos prontos e dê vida às suas criações instantaneamente, 
          ou opte por riscos personalizados feitos sob medida para transformar suas ideias em bordados únicos. 
          Cada linha conta uma história, e cada ponto é um reflexo do seu estilo. 
          Descubra a arte de bordar com a facilidade dos riscos prontos 
          ou crie algo verdadeiramente exclusivo com nossos riscos personalizados por encomenda. 
          Deixe sua imaginação fluir, e nós transformaremos seus sonhos em realidade com cada agulhada!
          
          </p>
        </motion.div>

        {/* DRAFTS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {drafts.map((benefit: DraftType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-5 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="before:absolute mt-20 before:-top-20 before:-left-20 before:z-[-1] "
            alt="drafts-page-graphic"
            src={DraftsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    ENTRE PARA O NOSSO CLUBE DE RISCOS{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              "Junte-se ao nosso exclusivo Clube de Riscos e experimente a emoção
               de desbloquear um novo mundo de criatividade a cada mês! 
               Como membro privilegiado, você receberá um risco cuidadosamente selecionado 
               e inspirador diretamente em sua porta. Cada mês é uma nova jornada de expressão 
               artística, uma oportunidade de transformar fios em obras de arte. 
               Explore, crie e descubra a alegria contínua do bordado com o Clube de Riscos — 
               onde a inspiração é entregue mensalmente."
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Entre para o Clube de Riscos
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Drafts;
