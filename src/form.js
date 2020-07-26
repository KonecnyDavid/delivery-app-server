import React, { useState } from 'react';
import { Form } from 'semantic-ui-react'

const defaultData = {
  name: "",
  contact: "",
  description: "",
  address: "",
}

export default ({saveHandler}) => {
  const [data, setData] = useState(defaultData);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({...data, [name]: value});
  }

  const handleSave = () => {
    saveHandler(data)
    setData(defaultData)
  }

  return(
  <Form style={{marginBottom: "1rem"}}>
      <Form.Input fluid type="text" value={data.name} onChange={handleChange} label="Jmeno" name="name"/>
      <Form.Input fluid type="text" value={data.contact} onChange={handleChange} label="Kontakt" name="contact"/>
      <Form.Input fluid type="text" value={data.address} onChange={handleChange} label="Adresa" name="address"/>  
      <Form.TextArea fluid type="text" value={data.description} onChange={handleChange} label="Popis" name="description"/> 
      <Form.Button fluid primary onClick={handleSave}>Ulozit</Form.Button>
  </Form>
  )
}