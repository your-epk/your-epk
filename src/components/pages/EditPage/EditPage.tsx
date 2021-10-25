import { useEffect, useState } from 'react';
import { patchData, getEPK } from '../../../utils/apiCalls';
import {
  FilmEPK,
  EPKData,
  Award,
  Press,
  Image,
  Included,
} from '../../../types';
import { filterIncluded } from '../../../utils/cleanData';
import AwardsPressContainer from '../../AwardsPress/AwardsPressContainer';
import HeaderContainer from '../../Header/HeaderContainer';
import TrailerContainer from '../../Trailer/TrailerContainer';
import FilmPosterContainer from '../../FilmPoster/FilmPosterContainer';
import Navigation from '../../Navigation/Navigation';
import SynopsisContainer from '../../Synopsis/SynopsisContainer';
import FilmDetailsContainer from '../../FilmDetails/FilmDetailsContainer';
import TaglinesContainer from '../../Taglines/TaglinesContainer';
import './EditPage.scss';
import ImagesContainer from '../../Images/ImagesContainer';
import ImagesForm from '../../Images/ImagesForm';

// interface FilmProps {
//   filmEPK: FilmEPK;
// }

const EditPage = ({ epk_id }: any) => {
  const [error, setError] = useState<any>('');
  const [loading, setLoading] = useState(false);
  const [film, setFilm] = useState<FilmEPK>({} as FilmEPK);
  const [title, setTitle] = useState('');
  const [awards, setAwards] = useState<Array<Included>>([]);
  const [presses, setPress] = useState<Array<Included>>([]);
  const [images, setImages] = useState<Image[] | []>([]);
  const [included, setIncluded] = useState<Array<Included>>([]);

  const dummyAward = {
    id: '20',
    type: 'award',
    attributes: {
      name: 'Award Name',
      year: '2020',
      award_type: 'Sundance',
      film_epk_id: epk_id,
    },
  };

  const dummyPress = {
    id: '1',
    type: 'presses',
    attributes: {
      name_of_publication: 'ExamplePub',
      description: 'ExampleDesc',
      link: 'ex.com',
      film_epk_id: epk_id,
    },
  };

  const getFilmShit = () => {
    getEPK(epk_id).then((data) => {
      setFilm(data.data);
      setIncluded(data.included);
      setTitle(formatTitle(data.data.attributes.movie_title));
      console.log(data.included, 'inthe useEffect on edit page');
    });
    setLoading(false);
  };

  // const getFilmShit = async () => {
  //   try {
  //     const data = await getEPK(epk_id);
  //     setFilm(data.data);
  //     setIncluded(data.included);
  // console.log(data);
  // const awardsData = filterIncluded(data.included, 'award');
  // const pressesData = filterIncluded(data.included, 'press');
  // console.log(awardsData, 'awardsData');
  // console.log(pressesData, 'pressesData');

  // we are setting film to data.data which means that we do
  // not have access to included.
  // should we set the whole thing to state?

  // setTitle(formatTitle(data.data.attributes.movie_title));
  // setAwards([...awardsData, dummyAward]);
  // setPress([...pressesData, dummyPress]);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // useEffect(() => {
  //   setLoading(true);
  //   getFilmShit();
  // }, [awards, presses]);

  useEffect(() => {
    setLoading(true);
    getFilmShit();
  }, []);

  // console.log('filmEPK in editPage: ', film)

  const addFilmInfo = (filmInfo: object) => {
    patchData(filmInfo, 133).then((data) => setFilm(data.data));
  };

  const formatTitle = (title: string) => {
    return title.split(' ').join('-');
  };

  return (
    <div>
      {loading && <p>Loading</p>}
      <Navigation onEdit={true} epk_id={epk_id} title={title} />
      <main className="edit-page">
        <HeaderContainer filmEPK={film} addFilmInfo={addFilmInfo} />
        {/* <AwardsPressContainer filmEPK={film} addFilmInfo={addFilmInfo} /> */}
        {included.length > 0 && (
          <AwardsPressContainer
            awards={awards}
            presses={presses}
            addFilmInfo={addFilmInfo}
            epk_id={epk_id}
            included={included}
          />
        )}
        <TrailerContainer filmEPK={film} addFilmInfo={addFilmInfo} />
        <div className="container-wrapper">
          <SynopsisContainer filmEPK={film} addFilmInfo={addFilmInfo} />
          <FilmPosterContainer filmEPK={film} addFilmInfo={addFilmInfo} />
        </div>
        {/* <ImagesContainer epk_id={epk_id} images={images} /> */}
        <ImagesForm />
        <FilmDetailsContainer filmEPK={film} addFilmInfo={addFilmInfo} />
        <TaglinesContainer filmEPK={film} addFilmInfo={addFilmInfo} />
      </main>
    </div>
  );
};

export default EditPage;
