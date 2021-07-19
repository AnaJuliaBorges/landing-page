import React, { useState } from "react";
import * as S from "./App.styled";
import blackFriday from "./assets/BlackFriday.png";
import motog100 from "./assets/motog100.png";
import note7lite from "./assets/note7lite.png";
import xr from "./assets/xr.png";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	function setLocalStorage() {
		let usuario = {
			name: name,
			email: email,
		};
		localStorage.setItem("dados", JSON.stringify(usuario));
	}

	return (
		<>
			<S.SectionOne>
				<img src={blackFriday} alt="blackFriday"></img>
			</S.SectionOne>

			<S.SectionTwo>
				<S.Description>
					<span>Promoções nunca antes vistas nesse canal</span>
					<span>Confira um gostinho do que vem por aí</span>
				</S.Description>

				<S.ContainerProducts>
					<S.Products>
						<img src={note7lite} alt="note 7 Lite" />
						<span>Xiaomi Note 7 Lite</span>
						<span>R$ 900</span>
					</S.Products>

					<S.Products>
						<img src={motog100} alt="motog100" />
						<span>Moto G100</span>
						<span>R$ 1000</span>
					</S.Products>

					<S.Products>
						<img src={xr} alt="Iphone Xr" />
						<span>Iphone XR</span>
						<span>R$ 1200</span>
					</S.Products>
				</S.ContainerProducts>
			</S.SectionTwo>

			<S.SectionThree>
				<S.Newsletter>
					<h3>
						Inscreva-se em nossa newsletter para conhecer as
						promoções em primeira mão
					</h3>
				</S.Newsletter>

				<S.NewsletterInput>
					<input
						type="text"
						placeholder="Nome"
						onChange={(e) => setName(e.target.value)}
					></input>
					<input
						type="text"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					></input>
					<button onClick={setLocalStorage}>Inscrever</button>
				</S.NewsletterInput>
			</S.SectionThree>
		</>
	);
}

export default App;
