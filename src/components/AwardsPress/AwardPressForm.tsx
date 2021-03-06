import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
// import FormHelperText from '@mui/material/FormHelperText';
import './AwardPress.scss';
// import PressCard from './PressCard';
// import { createTheme, ThemeProvider } from '@mui/system';

interface IAwardPressForm {
  addFilmInfo: (filmInfo: object) => void;
  setIsEditting: React.Dispatch<React.SetStateAction<boolean>>;
  isEditting: boolean;
  epk_id: string;
  postAwardsPress: (endpoint: string, newItem: object) => Promise<void>;
}

const AwardPressForm = ({
  postAwardsPress,
  setIsEditting,
  isEditting,
  epk_id,
}: IAwardPressForm) => {
  const [select, setSelect] = useState('');
  const [publication, setPublication] = useState('');
  const [link, setLink] = useState('');
  const [quote, setQuote] = useState('');
  const [awardName, setAwardName] = useState('');
  const [awardType, setAwardType] = useState('');
  const [awardYear, setAwardYear] = useState('');

  const newAward = {
    award: {
      film_epk_id: epk_id,
      name: awardName,
      award_type: awardType,
      year: awardYear,
    },
  };

  const newPress = {
    press: {
      film_epk_id: epk_id,
      name_of_publication: publication,
      link: link,
      description: quote,
    },
  };

  const submitAndClear = (endpoint: string, newItem: object, e: any) => {
    e.preventDefault();
    if (
      (newAward.award.name && newAward.award.year) ||
      (newPress.press.name_of_publication && newPress.press.link)
    ) {
      setPublication('');
      setLink('');
      setQuote('');
      setAwardName('');
      setAwardType('');
      setAwardYear('');
      postAwardsPress(endpoint, newItem);
    }
  };

  return (
    <section className="awards-press-form-wrapper">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <div className="press-awards-form">

          <FormControl className='type-select-form-wrapper'>
            <InputLabel id="award-or-press-label">type</InputLabel>

            <Select
              style={{
                // width: '25%',
                // minWidth: '85px',
                // marginRight: '3%',
                // padding: 0,
              }}
              labelId="award-or-press-label"
              id="award-or-press"
              label="select type"
              name="Select"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <MenuItem value={'award'}>award</MenuItem>
              <MenuItem value={'press'}>press</MenuItem>
            </Select>
          </FormControl>

          {select === 'award' && (
            <div className='award-form-wrapper'>
              <TextField
                // style={{ marginRight: '3%' }}
                id="outlined-basic"
                name="festival"
                label="festival"
                variant="outlined"
                value={awardType}
                onChange={(e) => setAwardType(e.target.value)}
                helperText="festival required"
                required
              />

              <TextField
                // style={{ marginRight: '3%' }}
                id="outlined-basic"
                name="award type"
                label="award type"
                variant="outlined"
                value={awardName}
                onChange={(e) => setAwardName(e.target.value)}
                helperText="award type required"
                required
              />

              <TextField
                // style={{ marginRight: '3%' }}
                id="outlined-basic"
                name="year"
                label="year"
                variant="outlined"
                value={awardYear}
                onChange={(e) => setAwardYear(e.target.value)}
                helperText="year required"
                required
              />

              <FormControl>
                <Button
                  // style={{
                  //   background: '#ec5f27',
                  //   height: '57px',
                  //   marginRight: '3%',
                  // }}
                  variant="text"
                  onClick={(e) => submitAndClear('awards', newAward, e)}
                  >save
                </Button>
              </FormControl>
            </div>
          )}

          {select === 'press' && (
            <div className='press-form-wrapper'>
              <TextField
                // style={{ marginRight: '3%' }}
                id="outlined-basic"
                name="publication"
                label="publication"
                variant="outlined"
                value={publication}
                onChange={(e) => setPublication(e.target.value)}
                helperText="publication required"
                required
              />

              <TextField
                // style={{ marginRight: '3%' }}
                id="outlined-basic"
                name="link"
                label="link"
                variant="outlined"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                helperText="link required"
                required
              />
              
              <TextField
                // style={{ marginRight: '3%' }}
                id="outlined-basic"
                name="description"
                label="description"
                variant="outlined"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                helperText="description/quote required"
                required
              />

              <FormControl>
                <Button
                  // style={{
                  //   background: '#ec5f27',
                  //   height: '57px',
                  //   marginRight: '3%',
                  // }}
                  variant="text"
                  onClick={(e) => submitAndClear('presses', newPress, e)}
                  >save
                </Button>
              </FormControl>
            </div>
          )}

          <FormControl>
            <Button
              className='done-editing-btn'
              // style={{ background: '#ec5f27', height: '57px', width: '150px' }}
              variant="text"
              onClick={() => setIsEditting(!isEditting)}
              >done editting
            </Button>
          </FormControl>  

        </div>
      </FormControl>
    </section>
  );
};

export default AwardPressForm;
