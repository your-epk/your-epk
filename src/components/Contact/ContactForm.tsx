import { useState } from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

const ContactForm = ({ addFilmInfo }: any) => {
  const [name, setName] = useState<string>('')
  const [phoneNum, setPhoneNum] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [company, setCompany] = useState<string>('')

  const handleSubmit = () => {
    let currentContact = {
      contact_name: name, 
      contact_number: phoneNum, 
      contact_email: email, 
      production_company: company
    }
    addFilmInfo(currentContact, 77)
    clearForm()
    // console.log('currentContact: ', currentContact)
  }

  const clearForm = () => {
    setName('')
    setPhoneNum('')
    setEmail('')
    setCompany('')
  }

  return (
    <section className='contact-form-container'>
      <h2>Contact</h2>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <TextField 
          id="outlined-basic" 
          label="Name" 
          variant="outlined" 
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField 
          id="outlined-basic" 
          label="Phone Number" 
          variant="outlined" 
          type='text'
          name='phoneNum'
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
        />
        <TextField 
          id="outlined-basic" 
          label="Email" 
          variant="outlined" 
          type='text'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
          id="outlined-basic" 
          label="Company" 
          variant="outlined" 
          type='text'
          name='company'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <Button 
          variant="text"
          onClick={handleSubmit}
          >save
        </Button>
      </FormControl>
    </section>
  )
}


export default ContactForm;


// CONTACT FORM
// -needs input for name, phone number, email, company
// -needs edit btn
// -needs save btn

// renders inside the header component
