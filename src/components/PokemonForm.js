import React,{useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
  const [formData,setFormData]=useState({
    name:'',
    hp:'',
    sprites:{
      front:'',
      back:''
    }
  })



  function handleSubmitChange(e){
    setFormData({
      ...formData,[e.target.name]: e.target.value
    })
  }


  function handleSubmit(e){
    e.preventDefault()
    const updatedFormData={...formData}
    fetch("http://localhost:3001/pokemon",{
      method: "POST",
      headers:{
        "Content-Type":"applicaton/json"
      },
      body:JSON.stringify(updatedFormData)
    })
    .then(res=>res.json())
    .then(data=>addPokemon(data))
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleSubmitChange} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleSubmitChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={handleSubmitChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={handleSubmitChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
