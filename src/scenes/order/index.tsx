import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/1encomenda.jpeg";
import image2 from "@/assets/2encomenda.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Aurora",
    description:
    "Porta maternidade floral para menina de 20cm de diâmetro. Valor: R$ 180,00 + frete.",
    image: image1,
  },
  {
    name: "Bento",
    description:
      "Porta maternidade fundo do mar para menino de 20cm de diâmetro. Valor: R$ 180,00 + frete.",
    image: image2,
  },
  {
    name: "Aurora",
    description:
    "Porta maternidade floral para menina de 20cm de diâmetro. Valor: R$ 180,00 + frete.",
    image: image1,
  },
  {
    name: "Bento",
    description:
      "Porta maternidade fundo do mar para menino de 20cm de diâmetro. Valor: R$ 180,00 + frete.",
    image: image2,
  }
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Orders = ({ setSelectedPage }: Props) => {
  return (
    <section id="encomenda" className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Order)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="text-justify">
            <HText>ENCOMENDAS</HText>
            <p className="py-5">
              Sabe aqueles bordados que são amor a primeira vista e que fomos
              fazendo ao longo do tempo? Eles estão aqui disponíveis pra vocês!
              Dos nossos corações para a casa de vocês! 
            </p>
            </div>
        </motion.div>
        <div className="mt-10 h-[353px] overflow-x-auto overflow-y-hidden">
          <ul className="before:overflow-y-auto px-3 whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Orders;
