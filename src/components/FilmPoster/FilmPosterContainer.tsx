import { useState } from 'react';
import { FilmEPK } from '../../types';
import FilmPosterForm from '../FilmPoster/FilmPosterForm';
import FilmPosterDisplay from '../FilmPoster/FilmPosterDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface IFilmPoster {
	filmEPK: FilmEPK;
	addFilmInfo: any;
}

const FilmPosterContainer = ({ filmEPK, addFilmInfo }: IFilmPoster) => {
	const [isEditing, setIsEditing] = useState<boolean>(true);
	const [poster, setPoster] = useState<string>('');

	// console.log(poster)

	return (
		<div className="film-poster-container">
			{!isEditing && (
				<Fab
					// color="secondary"
					size="small"
					aria-label="edit"
					onClick={() => setIsEditing(true)}
					className="film-poster-edit-btn"
				>
					<EditIcon />
				</Fab>
			)}
			{isEditing && (
				<FilmPosterForm
					filmEPK={filmEPK}
					addFilmInfo={addFilmInfo}
					setPoster={setPoster}
					setIsEditing={setIsEditing}
				/>
			)}
			{!isEditing && <FilmPosterDisplay filmEPK={filmEPK} />}
		</div>
	);

	// const [isEditing, setIsEditing] = useState<boolean>(true);

	// return (
	// 	<div className="film-poster-container">
	// 		{!isEditing && (
	// 			<Fab
	// 				color="secondary"
	// 				aria-label="edit"
	// 				onClick={() => setIsEditing(true)}
	// 			>
	// 				<EditIcon />
	// 			</Fab>
	// 		)}
	// 		{isEditing && (
	// 			<FilmPosterForm
	// 				filmEPK={filmEPK}
	// 				addFilmInfo={addFilmInfo}
	// 				setIsEditing={setIsEditing}
	// 			/>
	// 		)}
	// 		{!isEditing && <FilmPosterDisplay filmEPK={filmEPK} />}
	// 	</div>
	// );
};

export default FilmPosterContainer;
