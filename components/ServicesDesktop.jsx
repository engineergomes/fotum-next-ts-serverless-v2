import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

import engLucas from "../public/engLucas.jpg";
import sandro from "../public/Sandro.jpeg";
import img5 from "../public/img5.jpeg";
import img4 from "../public/img4.jpg";
import img6 from "../public/img6.jpeg";
import CME5 from "../public/CME5.png";

import Image from "next/image";

function Features() {
	const [tab, setTab] = useState(1);

	const tabs = useRef(null);

	const heightFix = () => {
		if (tabs.current.children[tab]) {
			tabs.current.style.height =
				tabs.current.children[tab - 1].offsetHeight + "px";
		}
	};

	useEffect(() => {
		heightFix();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tab]);

	return (
		<section id="servicos" className="relative">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className="absolute inset-0 bg-gray-100 pointer-events-none "
				aria-hidden="true"
			></div>
			<div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

			<div className="relative max-w-[1000px] mx-auto px-4 sm:px-6 lg:pb-16 xl:max-w-6xl">
				<div className="pt-12 md:pt-20">
					{/* Section header */}
					<div
						className="max-w-3xl mx-auto text-center pb-12 md:pb-16 "
						data-aos="fade-right"
					>
						<h1 className="text-4xl mb-4">
							Conheça nossos serviços
						</h1>
						<p className="text-xl text-gray-600">
							Temos a solução em engenharia elétrica que você
							precisa! Com excelência no atendimento e no
							acompanhamento de sua obra, proporcionamos a
							tranquilidade que você procura.
						</p>
					</div>

					{/* Section content */}
					<div className="md:grid md:grid-cols-12 md:gap-6">
						{/* Content */}
						<div
							className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 "
							data-aos="fade-right"
						>
							{/* Tabs buttons */}
							<div className="mb-8 md:mb-0 grid grid-rows-3">
								<a
									className={`grid grid-cols-[1fr,7fr] items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 gap-3 max-w-md xl:max-w-full ${
										tab !== 1
											? "bg-white shadow-md border-gray-200 hover:shadow-lg"
											: "bg-gray-200 border-transparent"
									}`}
									href="#0"
									onClick={(e) => {
										e.preventDefault();
										setTab(1);
									}}
								>
									<div className="flex justify-center items-center w-12 h-12 bg-white rounded-full shadow flex-shrink-0 ">
										<Image
											height={24}
											width={24}
											src={"/solar-panel-solid.svg"}
											alt={"solar panel logo"}
										/>
									</div>
									<div>
										<div className="font-bold leading-snug tracking-tight mb-1">
											Energia Solar Fotovoltaica
										</div>
										<div className="text-gray-600">
											Invista em energia solar e economize
											dinheiro gerando sua própria energia
											elétrica.
										</div>
									</div>
								</a>
								{/* <a
                  className={`grid grid-cols-[1fr,7fr] items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 gap-3 max-w-md xl:max-w-full ${
                    tab !== 2
                      ? 'bg-white shadow-md border-gray-200 hover:shadow-lg'
                      : 'bg-gray-200 border-transparent'
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full shadow flex-shrink-0 ">
                    <Image
                      height={24}
                      width={24}
                      src={'/pen-ruler-solid.svg'}
                      alt={'solar panel logo'}
                    />
                  </div>

                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Projetos
                    </div>
                    <div className="text-gray-600">
                      Projetos de instalações elétricas residenciais, comerciais
                      e prediais, entradas de energia elétrica em baixa e média
                      tensão, SPDA (para-raios) e bombeiros.
                    </div>
                  </div>
                </a> */}
								<a
									className={`grid grid-cols-[1fr,7fr] items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 gap-3 max-w-md xl:max-w-full ${
										tab !== 2
											? "bg-white shadow-md border-gray-200 hover:shadow-lg"
											: "bg-gray-200 border-transparent"
									}`}
									href="#0"
									onClick={(e) => {
										e.preventDefault();
										setTab(2);
									}}
								>
									<div className="flex justify-center items-center w-12 h-12 bg-white rounded-full shadow flex-shrink-0 ">
										<Image
											height={24}
											width={24}
											src={
												"/screwdriver-wrench-solid.svg"
											}
											alt={"solar panel logo"}
										/>
									</div>
									<div>
										<div className="font-bold leading-snug tracking-tight mb-1">
											Instalações Elétricas
										</div>
										<div className="text-gray-600">
											Projetamos e executamos instalações
											elétricas, incluindo infraestrutura,
											entradas de energia, luminotécnica,
											lustres, quadros, SPDA (para-raios),
											motores e bombeiros.
										</div>
									</div>
								</a>
								<a
									className={`grid grid-cols-[1fr,7fr] items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 gap-3 max-w-md xl:max-w-full ${
										tab !== 3
											? "bg-white shadow-md border-gray-200 hover:shadow-lg"
											: "bg-gray-200 border-transparent"
									}`}
									href="#0"
									onClick={(e) => {
										e.preventDefault();
										setTab(3);
									}}
								>
									<div className="flex justify-center items-center w-12 h-12 bg-white rounded-full shadow flex-shrink-0 ">
										<Image
											height={24}
											width={24}
											src={"/snowflake-solid.svg"}
											alt={"solar panel logo"}
										/>
									</div>
									<div>
										<div className="font-bold leading-snug tracking-tight mb-1">
											Ar-condicionado
										</div>
										<div className="text-gray-600">
											Eleve seu conforto com nossas
											instalações de Ar Condicionado e
											garanta ambientes agradáveis em
											todas as estações.
										</div>
									</div>
								</a>
							</div>
						</div>

						{/* Tabs items */}
						<div
							className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 "
							ref={tabs}
							data-aos="fade-left"
						>
							<div className="relative flex flex-col text-center lg:text-right">
								{/* Item 1 */}
								<Transition
									show={tab === 1}
									appear={true}
									className="w-full"
									enter="transition ease-in-out duration-700 transform order-first"
									enterStart="opacity-0 translate-y-16"
									enterEnd="opacity-100 translate-y-0"
									leave="transition ease-in-out duration-300 transform absolute"
									leaveStart="opacity-100 translate-y-0"
									leaveEnd="opacity-0 -translate-y-16"
								>
									<div className="relative inline-flex flex-col shadow-lg w-full">
										<div className="hidden lg:flex">
											<Image
												height={360}
												width={600}
												src={CME5}
												alt="Features bg"
											/>
										</div>
									</div>
								</Transition>
								{/* Item 2 */}
								{/* <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col shadow-lg w-full">
                    <div className="hidden lg:flex">
                      <Image
                        height={360}
                        width={600}
                        src={img5}
                        alt="Features bg"
                      />
                    </div>
                  </div>
                </Transition> */}
								{/* Item 2 */}
								<Transition
									show={tab === 2}
									appear={true}
									className="w-full"
									enter="transition ease-in-out duration-700 transform order-first"
									enterStart="opacity-0 translate-y-16"
									enterEnd="opacity-100 translate-y-0"
									leave="transition ease-in-out duration-300 transform absolute"
									leaveStart="opacity-100 translate-y-0"
									leaveEnd="opacity-0 -translate-y-16"
								>
									<div className="relative inline-flex flex-col shadow-lg w-full">
										<div className="hidden lg:flex">
											<Image
												height={360}
												width={600}
												src={img4}
												alt="Features bg"
											/>
										</div>
									</div>
								</Transition>
								{/* Item 3 */}
								<Transition
									show={tab === 3}
									appear={true}
									className="w-full"
									enter="transition ease-in-out duration-700 transform order-first"
									enterStart="opacity-0 translate-y-16"
									enterEnd="opacity-100 translate-y-0"
									leave="transition ease-in-out duration-300 transform absolute"
									leaveStart="opacity-100 translate-y-0"
									leaveEnd="opacity-0 -translate-y-16"
								>
									<div className="relative inline-flex flex-col shadow-lg w-fit">
										<div className="hidden lg:flex relative">
											<Image
												src={"/ar0.jpeg"}
												alt="Features bg"
												height={600}
												width={300}
											/>
											<Image
												src={"/ar1.jpeg"}
												alt="Features bg"
												height={600}
												width={300}
											/>
											<Image
												src={"/ar2.jpeg"}
												alt="Features bg"
												height={600}
												width={300}
											/>
											<Image
												src={"/ar3.jpeg"}
												alt="Features bg"
												height={600}
												width={300}
											/>
										</div>
									</div>
								</Transition>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
