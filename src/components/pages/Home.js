/** @format */

import MainLayout from "../layouts/MainLayout";
import "./Home.css";


function Home() {
	const apiKey = process.env.REACT_APP_API_KEY;
	let n = 1;
	let search = "hola";
	fetch(
		`https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&q=${encodeURIComponent(
			search
		)}&part=snippet&maxResults=${n}`
	)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.error(error);
		});
	return (
		<MainLayout>
			<div className="search-form">
				<form>
					<input
						className="search-input"
						type="text"
						placeholder="Search.."
					/>
					<input
						className="search-button"
						type="submit"
						value={"Search"}
					/>
				</form>
			</div>
		</MainLayout>
	);
}

export default Home;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "kTVBaVHvR-05ftbhBKmNIdR2AnA",
//     "nextPageToken": "CAEQAA",
//     "regionCode": "CO",
//     "pageInfo": {
//         "totalResults": 1000000,
//         "resultsPerPage": 1
//     },
//     "items": [
//         {
//             "kind": "youtube#searchResult",
//             "etag": "4emrzmgTajyhWL0QhDabmjOIDMs",
//             "id": {
//                 "kind": "youtube#video",
//                 "videoId": "nlXqp3FVrq8"
//             },
//             "snippet": {
//                 "publishedAt": "2019-11-01T04:00:10Z",
//                 "channelId": "UCeSCejKJS0W4LTptFuBYU0g",
//                 "title": "Dalex - Hola Remix ft. Lenny Tavárez, Chencho Corleone, Juhn &quot;El All Star&quot; (Video Lírico Oficial)",
//                 "description": "Escúchalo en Spotify: http://socialhive.us/sp_HolaRMX Escúchalo en Apple: http://socialhive.us/ap_HolaRMX Sencillo producido ...",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://i.ytimg.com/vi/nlXqp3FVrq8/default.jpg",
//                         "width": 120,
//                         "height": 90
//                     },
//                     "medium": {
//                         "url": "https://i.ytimg.com/vi/nlXqp3FVrq8/mqdefault.jpg",
//                         "width": 320,
//                         "height": 180
//                     },
//                     "high": {
//                         "url": "https://i.ytimg.com/vi/nlXqp3FVrq8/hqdefault.jpg",
//                         "width": 480,
//                         "height": 360
//                     }
//                 },
//                 "channelTitle": "Dalex",
//                 "liveBroadcastContent": "none",
//                 "publishTime": "2019-11-01T04:00:10Z"
//             }
//         }
//     ]
// }
