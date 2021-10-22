import { useState, useEffect} from 'react'
import { film } from "../../utils/mockData";
import { patchData } from '../../utils/apiCalls';
import ContactForm from '../Contact/ContactForm';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const HeaderForm = () => {
  const [filmTitle, setFilmTitle] = useState<string>('')
  const [headerDescription, setHeaderDescription] = useState<string>('')
  const [headerImg, setHeaderImg] = useState<string>('')

  useEffect(() => {
    setFilmTitle(film.title)
  }, [])

  const handleSubmit = () => {
    let currentDescription = {
      user_id: 1,
      header_img: headerImg,
      header_description: headerDescription
    }
    patchData(currentDescription, 14)
    console.log('currentDescription: ', currentDescription)
  }

  return (
    <section className='header-container'>

      {/* this is the header img upload area */}
      <div className='header-img'>
      <FormControl sx={{ m: 1, minWidth: 480 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Img URL"
            type='text'
            name='headerImg'
            value={headerImg}
            onChange={(e) => setHeaderImg(e.target.value)}
          />
          <Button 
            variant="text"
            onClick={handleSubmit}
            >save
          </Button>
        </FormControl>
      </div>

      {/* this is the header info area */}
      <div className='header-info-container'>
        <h1>{filmTitle}</h1>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            minRows={4}
            maxRows={4}
            type='text'
            name='headerDescription'
            value={headerDescription}
            onChange={(e) => setHeaderDescription(e.target.value)}
          />
          <Button 
            variant="text"
            onClick={handleSubmit}
            >save
          </Button>
        </FormControl>
        <ContactForm />
      </div>

    </section>
  )
}


export default HeaderForm;



// HEADER FORM
// -needs input for description and img
// -needs an edit btn
// -needs a save btn

// renders img across the entire page
// there will be a container on top of the img 
  // -displays the film title and description
    // -title is passed from parent/from network request
    // -description is rendered from the form

// the container that holds the title and description will also hold the contact component

// IMG UPLOAD
// user will have an input for a string value just like all other "text fields" 
// then a save btn
