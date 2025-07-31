import { Header } from "../assets/header/Header";
import './CardTesting.css'
import * as React from 'react';
import { useState } from 'react';

type ImageText = {
  children: string,
  image?: string
}

function Card(props: ImageText) {

  return (
    <div className="card">
      <img src={props.image} />
      <p>{ props.children }</p>
    </div>
  )
}

function ImageForm() {
  const [formSent, setFormStatus] = useState(false);

  async function createCard(e: React.SyntheticEvent) {
    setFormStatus(true);
  } 

  function uploadedImage(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;

  }

  return (    
    <form action={createCard}>
      <label>
        Text: <br />
        <textarea name="text-field"></textarea>
      </label>
      <label>
        Image: <br />
        <input type="image" name="image" onChange={uploadedImage} />
      </label>
      <button>Submit</button>
    </form>
  );
}

function CardPage() {

  return (
    <>
    <Header />
    <div className="container">
      <ImageForm />
    </div>
    </>
  );
}

export default CardPage;