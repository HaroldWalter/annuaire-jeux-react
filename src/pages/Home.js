import { useState } from "react";

const Home = () => {
	const [searchText, setSearchText] = useState("");

	const [games, setGames] = useState([]);

	const handleSearch = () => {
		const url = "https://www.formacitron.com/games-api-fallback/games/";
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setGames(data.results);
			})
			.catch(() => {
				alert("Une erreur est survenue");
			});
	};

	return (
		<div className="container">
			<div className="row mt-4">
				<div className="col">
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							autoFocus={true}
							onChange={(e) => {
								setSearchText(e.target.value);
							}}
							placeholder="Rechercher"
						/>
						<button
							className="btn btn-primary"
							type="button"
							onClick={handleSearch}
						>
							Rechercher
						</button>
					</div>
				</div>
			</div>

			<ul className="list-group">
				{games.map((game) => (
					<li className="list-group-item" key={game.id}>
						<div className="row">
							<div className="col-2">
								<img
									src={game.background_image}
									alt=""
									className="img-fluid w-10"
								/>
							</div>
                     <div className="col">
							<div className="h3">{game.name}</div>
							<div>{game.rating}</div>
						</div>
                  </div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
