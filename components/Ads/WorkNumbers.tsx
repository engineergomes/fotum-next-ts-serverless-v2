// @ts-ignore
import AnimatedNumber from "react-animated-number";

function WorkNumbers() {
    return (
        <div id="work-numbers" className="">
            <div
                className="work-numbers flex flex-col gap-6  text-[#00324b] px-10 pb-10 lg:grid lg:grid-cols-3 lg:max-w-[1400px] lg:mx-auto z-[100]"
                data-aos="fade-right"
            >
                <div className="flex flex-col items-center justify-center border-2 border-[#00324b] rounded-3xl p-2">
                    <AnimatedNumber
                        style={{
                            transition: "0.8s ease-out",
                            transitionProperty: "background-color, color",
                            fontSize: 36,
                            fontWeight: 500,
                        }}
                        duration={3000}
                        stepPrecision={0}
                        value={100}
                        formatValue={(n: number) =>
                            `+${n.toLocaleString("pt-BR")} `
                        }
                    />
                    <p className="text-2xl text-[#00324b]">
                        Clientes satisfeitos
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center border-2 border-[#00324b] rounded-3xl p-2">
                    <AnimatedNumber
                        style={{
                            transition: "0.8s ease-out",
                            transitionProperty: "background-color, color",
                            fontSize: 36,
                            fontWeight: 500,
                        }}
                        duration={3000}
                        stepPrecision={0}
                        value={245}
                        formatValue={(n: number) =>
                            `+${n.toLocaleString("pt-BR")} Mwh`
                        }
                    />
                    <p className="text-2xl text-[#00324b]">
                        Gerados anualmente
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center border-2 border-[#00324b] rounded-3xl p-2">
                    <AnimatedNumber
                        style={{
                            transition: "0.8s ease-out",
                            transitionProperty: "background-color, color",
                            fontSize: 36,
                            fontWeight: 500,
                        }}
                        duration={3000}
                        stepPrecision={0}
                        value={180}
                        formatValue={(n: number) =>
                            `+ R$ ${n.toLocaleString("pt-BR")} mil`
                        }
                    />
                    <p className="text-2xl text-[#00324b]">Economizados</p>
                </div>
            </div>
        </div>
    );
}

export default WorkNumbers;
