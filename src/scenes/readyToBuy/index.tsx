import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Lar Doce Lar",
    description:
      "Quadro decorativo lar doce lar de 20cm de diâmetro. Valor: 150,00 + frete.",
    image: image1,
  },
  {
    name: "Ipê",
    description:
      "Quadro decorativo ipê rosa (árvore da vida) de 20cm de diâmetro. Valor: R$ 199,00 + frete.",
    image: image2,
  },
  {
    name: "Nossa Senhora Aparecida",
    description:
      "Quadro decorativo de Nossa Senhora Aparecida de 20cm de diâmetro bordado todo em preto. Valor: R$ 150,00 + frete.",
    image: image3,
  },
  {
    name: "Coragem",
    description:
      "Quadro decorativo de 20cm de diâmetro de coração e flores. Valor: R$ 99,00 + frete.",
    image: image4,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ReadyToBuy = ({ setSelectedPage }: Props) => {
  return (
    <section id="prontaentrega" className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ReadyToBuy)}
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
            <HText>PRODUTOS EM PRONTA ENTREGA</HText>
            <p className="py-5">
              Sabe aqueles bordados que são amor a primeira vista e que fomos
              fazendo ao longo do tempo? Eles estão aqui disponíveis pra vocês!
              Dos nossos corações para a casa de vocês! 
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
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

export default ReadyToBuy;
