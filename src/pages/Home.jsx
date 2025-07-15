import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="container border rounded">

			<div className="d-flex mt-3">{/*Div contacto */}

				<div> {/*Div foto */}
					<img src="https://essenciainmobiliaria.com/wp-content/uploads/2021/03/Foto-Gines-Perfil-CV-2049-Cuadrada-250px.png" alt="Mike Anamendolla" class="rounded-circle mx-5 d-block img-fluid"></img>
				</div>

				<div>{/*Div informacion del contacto */}
					<p>
						Mike Anamendolla
					</p >
					<p className="text-secondary">
						<i className="fa-solid fa-location-dot"></i> 5842 Hillcrest Rd
					</p>
					<p className="text-secondary">
						<i className="fa-solid fa-phone"></i> 685 675 675
					</p>
					<p className="text-secondary">
						<i className="fa-solid fa-envelope"></i> mike.ana@example.com
					</p>
				</div>
				<div className="iconos me-5"> {/*Div iconos para editar y borrar el contacto */}
					<ul class="nav nav-link d-flex">
						<li class="nav-item">
							<a href="#" class="nav-link active text-dark link-dark"><i class="fa-solid fa-pencil"></i></a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link text-dark link-dark"><i class="fa-solid fa-trash-can"></i></a>
						</li>
					</ul>

				</div>
			</div>

		</div>
	);
};
