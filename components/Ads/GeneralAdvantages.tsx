import {
	CurrencyCircleDollar,
	HouseLine,
	Lightbulb,
	Medal,
} from "phosphor-react";

export default function GeneralAdvantages() {
	return (
		<div className="bg-gray-200">
			<div className="flex flex-col p-4 gap-8  lg:max-w-[1400px] lg:mx-auto">
				{/* -- Mobile -- */}
				<div className="grid grid-rows-4 gap-5  text-[#ffaa00] mt-6 justify-center md:grid-cols-2  md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
					<div className="grid grid-cols-[2fr,8fr] px-8 py-4  gap-4 items-center justify-start bg-[#00324b] rounded-full lg:flex lg:flex-col lg:text-center lg:py-12 lg:rounded-3xl">
						<HouseLine size={72} weight="thin" />
						<p>
							Garanta a segurança e valorização de seu patrimônio
						</p>
					</div>
					<div className="grid grid-cols-[2fr,8fr] px-8 py-2 gap-4 items-center justify-start bg-[#00324b] rounded-full lg:flex lg:flex-col lg:text-center lg:py-12 lg:rounded-3xl">
						<Medal size={72} weight="thin" />
						<p>Equipamentos e materiais de alta qualidade</p>
					</div>
					<div className="grid grid-cols-[2fr,8fr] px-8 py-2 gap-4 items-center justify-start bg-[#00324b] rounded-full lg:flex lg:flex-col lg:text-center lg:py-12 lg:rounded-3xl">
						<Lightbulb size={72} weight="thin" />
						<p>Atendimento de excelência e 100% personalizado</p>
					</div>
					<div className="grid grid-cols-[2fr,8fr] px-8 py-2 gap-4 items-center justify-start bg-[#00324b] rounded-full lg:flex lg:flex-col lg:text-center lg:py-12 lg:rounded-3xl">
						<CurrencyCircleDollar size={72} weight="thin" />

						<p>Economize seus gastos com energia elétrica</p>
					</div>
				</div>

				<a
					href="https://wa.me/message/2KTISK2P7CG6E1"
					target="_blank"
					rel="noreferrer"
					className="flex flex-col gap-4 mt-6"
				>
					<div className="flex items-center justify-center bg-green-500 font-bold py-3 px-6 rounded-3xl text-lg hover:bg-green-200">
						Falar com o Técnico agora!
					</div>
				</a>
			</div>
		</div>
	);
}
