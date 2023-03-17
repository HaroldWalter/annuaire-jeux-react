import { useParams } from "react-router-dom";
import { Component, useEffect, useState } from "react";


const Details = (props) => {
	// const params = useParams();
	const { slug } = useParams();

	const [details, setDetails] = useState({});

	useEffect(() => {
		const apiKey = "b1c7381cdcf6480c974e4180affadf92";
		const url = `https://api.rawg.io/api/games/${slug}?key=${apiKey}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				// setDetails(data.results);
				setDetails(data);

				// console.log(details);
			})
			.catch(() => {
				alert("Une erreur est survenue");
			});
	}, []);
	if (!details) return <div>Page non trouvée</div>;
	else
		return (
			// <div>Ceci est la page du jeu dont le slug est "{params.slug}"</div>
			<div className="container">
				<div>Ceci est la page du jeu dont le slug est "{slug}"</div>
				<ul>{details.name ? <li> {details.name} </li> : <></>}
            {/* {details.description ? <li> {details.description} </li> : <></>} */}
            <li dangerouslySetInnerHTML={{__html:details.description}}></li>
            <li>
               Publié le : {details.released}
            </li>
            </ul>
			</div>
		);
};
export default Details;
