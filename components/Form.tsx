'use client'
import { toast, ToastContainer } from "react-toastify";

export default function Form() {

  const createProsp = async (formdata: FormData) => {
    const email = formdata.get('email')
    try {
      const req = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await req.json();
      console.log(data);


      if (!req.ok) {
        throw new Error(`HTTP error! status: ${req.status}`);
      }

      if (req.ok) {
        toast.success("Votre inscription a bien été prise en compte!")
      } else {
        toast.error(data.error || "Une erreur s'est produite lors de l'inscription")
      }

    } catch (error) {
      toast.error(error as string || "Une erreur s'est produite lors de l'inscription")
    }

  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        draggable
        pauseOnHover
      />
      <form action={createProsp} className="flex items-center w-full">
        <input name="email" type="text" className="input input-bordered w-full" placeholder="email@gmail.com" />
        <button type="submit" className="btn ml-2 btn-primary">S'abonner</button>
      </form>
    </>
  );

}