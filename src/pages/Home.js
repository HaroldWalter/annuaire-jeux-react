import { useState } from "react";

const Home = () => {
	const [searchText, setSearchText] = useState("");

	const [games, setGames] = useState([
		{ id: 1, name: "Jeux 1", rating: 4.6 },
		{ id: 2, name: "Jeux 2", rating: 3.5 },
		{ id: 3, name: "Jeux 3", rating: 4.2 },
		{ id: 4, name: "Jeux 4", rating: 1.5 },
		{ id: 5, name: "Jeux 5", rating: 3.7 },
		{ id: 6, name: "Jeux 6", rating: 5 },
	]);

	const handleSearch = () => {
		alert("La recherche est lancée !");
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
						<button className="btn btn-primary" type="button" onClick={handleSearch}>
							Rechercher
						</button>
					</div>
					{searchText}
				</div>
			</div>

			<ul className="list-group">
				{games.map((game) => (
					<li className="list-group-item" key={game.id}>
						<div className="h3">{game.name}</div>
						<div>{game.rating}</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
