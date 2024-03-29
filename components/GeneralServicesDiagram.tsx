import Image from "next/image";
import {
    motion,
    Variants,
    useTime,
    useTransform,
    useAnimation,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
    Plug,
    NotePencil,
    ListChecks,
    Lightning,
    Lightbulb,
    HouseLine,
} from "phosphor-react";

const solarFlux: {
    name: string;
    icon: any;
    pathEnd: string;
    text: string;
    start: number;
}[] = [
    {
        name: "Projeto elétricos",
        icon: <NotePencil size={64} />,
        pathEnd: "/solEnd.png",
        start: 0,

        text: "Projeto elétricos",
    },
    {
        name: "Instalações elétricas",
        icon: <Plug size={64} />,
        pathEnd: "solarPanelEnd.png",
        start: 1,

        text: "Instalações elétricas",
    },
    {
        name: "Execução de projetos",
        icon: <ListChecks size={64} />,
        pathEnd: "/geradorEnd.png",
        start: 2,

        text: "Execução de projetos",
    },
    {
        name: "Poste CELESC",
        icon: <Lightning size={64} />,
        pathEnd: "/cozinhaEnd.png",
        start: 3,

        text: "Poste CELESC",
    },
    {
        name: "Entradas de energia CELESC",
        icon: <Lightbulb size={64} />,
        pathEnd: "/sustentabilidadeEnd.png",
        start: 4,

        text: "Entradas de energia CELESC",
    },
    {
        name: "Reformas e novas instalações",
        icon: <HouseLine size={64} />,
        pathEnd: "/investirEnd.png",
        start: 5,

        text: "Reformas e novas instalações",
    },
];

function GeneralServicesDiagram() {
    const animation = useAnimation();
    const [order, setOrder] = useState(0);
    const [animationStart, setAnimationStart] = useState(false);

    async function sequence() {
        await animation.start({
            y: -20,
            scale: 1.1,
            backgroundColor: "#ffaa00",
        });
        setOrder(order + 1);
    }

    useEffect(() => {
        if (!(order <= 5)) {
            setOrder(0);
        } else {
            sequence();
        }
    }, [order]);

    return (
        <div className="bg-white pb-10">
            <div className="flex flex-col p-4 gap-6  lg:max-w-[800px] lg:mx-auto">
                <h1 className="text-2xl font-bold">Como Funciona:</h1>
                <div className="grid grid-cols-2 gap-5  text-[#00324b] justify-center md:grid-cols-2  md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-12">
                    {solarFlux.map((stage) => (
                        <motion.div
                            key={stage.name}
                            className="relative grid grid-rows-2 border border-[#00324b] rounded-2xl  py-3 px-2  gap-3 text-center   place-items-center lg:grid-rows-[2fr,3fr]   lg:py-6 lg:px-4"
                            animate={stage.start == order ? animation : ""}
                            transition={{
                                duration: 1,
                                repeat: 1,
                                repeatType: "reverse",
                            }}
                            onViewportEnter={async () => {
                                if (!animationStart) {
                                    sequence();
                                    setAnimationStart(true);
                                }
                            }}
                        >
                            <div className="absolute top-2 left-2">
                                {stage.start + 1}
                            </div>
                            <div className="h-20 w-20 relative before flex items-center justify-center">
                                {stage.icon}
                            </div>
                            <p className=" font-medium">{stage.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GeneralServicesDiagram;
