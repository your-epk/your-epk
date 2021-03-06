import { useState } from 'react';
import { FilmEPK } from '../../types';
import TrailerForm from './TrailerForm';
import TrailerDisplay from './TrailerDisplay';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

interface ITrailer {
  filmEPK: FilmEPK;
  addFilmInfo: any;
}

const TrailerContainer = ({ filmEPK, addFilmInfo }: ITrailer) => {
  const [isEditing, setIsEditing] = useState<boolean>(true);

  return (
    <section className="trailer-container trailer-display">
      <h2>Trailer</h2>
      {!isEditing && (
        <Fab
          size="small"
          aria-label="edit"
          onClick={() => setIsEditing(true)}
          className="trailer-edit-btn"
        >
          <EditIcon />
        </Fab>
      )}
      {isEditing && (
        <TrailerForm
          filmEPK={filmEPK}
          addFilmInfo={addFilmInfo}
          setIsEditing={setIsEditing}
        />
      )}
      {!isEditing && <TrailerDisplay filmEPK={filmEPK} />}
    </section>
  );
};

export default TrailerContainer;
