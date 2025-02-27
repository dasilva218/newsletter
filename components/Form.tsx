'use client'
import { useState } from "react";

export default function Form() {

  const [email, setEmail] = useState('')

  return (
    <form className="flex items-center w-full">
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input input-bordered w-full" placeholder="email@gmail.com" />
      <button className="btn ml-2 btn-primary">S'abonner</button>
    </form>
  );
}