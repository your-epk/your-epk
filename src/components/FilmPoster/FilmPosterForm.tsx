import { useState, useEffect } from 'react';
import { getPresignedUrl, putToAWS, postToDatabase } from '../../awsS3/helperFunctions';


const FilmPosterDisplay = ({ filmEPK, setIsEditing, isEditing }: any) => {
  const [filmPoster, setFilmPoster] = useState<any>({});
  const [reminder, setReminder] = useState<boolean>(false)

  useEffect(() => {
    if (filmPoster.size > 0) {
      makeAWSpost();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filmPoster])

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const input = document.querySelector<any>('#test-input').files[0]

    if (input) {
      setReminder(false)
      setFilmPoster(input) 
    } else {
      setReminder(true)

    }
  }

  const makeAWSpost = async () => {
    const presignedFileParams = await getPresignedUrl(filmPoster)
    await putToAWS(presignedFileParams, filmPoster)
    await postToDatabase(presignedFileParams, filmEPK, 'movie_posters')
  }

  return (
    <div className='poster-form-wrapper'>
      <h2>Film Poster</h2>
      <form className='film-poster-form'>
        <input id='test-input' type="file" accept="image/*" />
        {reminder && <p>Must choose a file to save</p>}
        <button onClick={(event) => { handleSubmit(event) }}>Save</button>
        <button onClick={() => setIsEditing(!isEditing)} >Done editing</button>
      </form>
    </div>
  )
}


export default FilmPosterDisplay;
