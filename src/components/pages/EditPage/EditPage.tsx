import { useEffect, useState } from 'react'
import { getUser, patchData } from '../../../utils/apiCalls';
import { FilmEPK, Attributes } from '../../../types';
import { Link } from 'react-router-dom';
import "./EditPage.scss";
import AwardsPressContainer from '../../AwardsPress/AwardsPressContainer';
import HeaderContainer from '../../Header/HeaderContainer';
import TrailerContainer from '../../Trailer/TrailerContainer';
import FilmPosterContainer from '../../FilmPoster/FilmPosterContainer';

interface FilmProps {
  filmEPK: FilmEPK;
}

const EditPage = ({ epk_id }: any) => {
  const [film, setFilm] = useState<FilmEPK>({} as FilmEPK);
  const [title, setTitle] = useState('')

  useEffect(() => {
    getUser(1)
      .then((data: any) => {
        setFilm(data.included[0].attributes)
        setTitle(formatTitle(data.included[0].attributes.movie_title))
        console.log('film', data.included[0].attributes.movie_title)
      })
      // .then((data: any) => console.log(data.included[0].attributes))
      .catch(err => console.log(err))
  }, [])

  const addFilmInfo = (filmInfo: object) => {
    patchData(filmInfo, 77).then(data => setFilm(data))
  }

  const formatTitle = (title: string) => {
    return title.split(' ').join('-')
  }

  return (
    <main className='edit-page'>
      <HeaderContainer />
      <AwardsPressContainer filmEPK={film} addFilmInfo={addFilmInfo} />
      <TrailerContainer />
      <FilmPosterContainer />
      <Link to={`/${epk_id}/${title}`}>Go to Film Page</Link>
    </main>
  )
}

export default EditPage;