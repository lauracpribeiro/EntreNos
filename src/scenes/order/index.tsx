import { SelectedPage, ClassType } from "@/shared/types";
import marcela from "@/assets/marcela.jpeg";
import oracaospace from "@/assets/oracaospace.jpg";
import oracaopearl from "@/assets/oracaopearl.jpeg";
import gabidiego from "@/assets/gabidiego.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Oração tema espaço",
    description:
    "Porta maternidade com oração do anjo + tema espaço 20cm de diâmetro. Valor: R$ 150,00 + frete.",
    image: oracaospace,
  },
  {
    name: "Oração Anjo da Guarda",
    description:
      "Porta maternidade com oração do anjo da guarda com 20cm de diâmetro. Valor: R$ 150,00 + frete.",
    image: oracaopearl,
  },
  {
    name: "Porta Aliança Gabi e Diego",
    description:
    "Porta aliança floral de 20cm de diâmetro. Valor: R$ 180,00 + frete.",
    image: gabidiego,
  },
  {
    name: "Porta Maternidade Marcela",
    description:
      "Porta maternidade arco-íris de 20cm de diâmetro. Valor: R$ 180,00 + frete.",
    image: marcela,
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
            Transforme suas ideias em arte! 
            Encomende bordados em bastidores feitos à mão, 
            onde cada ponto conta uma história única. 
            Personalize seu momento especial com detalhes artesanais e carinho. 
            Deixe-nos criar algo extraordinário para você! 
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
