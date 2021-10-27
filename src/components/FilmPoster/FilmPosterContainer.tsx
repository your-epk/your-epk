import { useEffect, useState } from 'react';
import { FilmEPK } from '../../types';
import FilmPosterForm from '../FilmPoster/FilmPosterForm';
import FilmPosterDisplay from '../FilmPoster/FilmPosterDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface IFilmPoster {
	filmEPK: FilmEPK;
	addFilmInfo: any;
	epk_id: string
}

const FilmPosterContainer = ({ filmEPK, addFilmInfo, epk_id }: IFilmPoster) => {
  const [isEditing, setIsEditing] = useState<boolean>(true)

  return (
		<div className='film-poster-container'> 
		{ !filmEPK.attributes ? <p>loading</p> :
			<div >
				{!isEditing &&
					<Fab color='secondary' aria-label='edit' onClick={() => setIsEditing(true)}>
						<EditIcon />
					</Fab>
				}
				{isEditing && <FilmPosterForm filmEPK={filmEPK} addFilmInfo={addFilmInfo} setIsEditing={setIsEditing} />}
				{!isEditing && <FilmPosterDisplay  epk_id={epk_id}/> }
			</div> }
		</div>
  )
};

export default FilmPosterContainer;
