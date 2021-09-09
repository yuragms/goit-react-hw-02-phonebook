import React, { Component } from "react";
// import { v4 as uuidv4 } from 'uuid';

import { ContactForm, Label, Input, Button } from "./ContactForm.styled";

class Form extends Component {
  render() {
    return (
      <ContactForm>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </ContactForm>
    );
  }
}

export default Form;
