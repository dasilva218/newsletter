import Form from "./Form";

export default function FormContent() {
  return (
    <section className="flex md:w-[600px] bg-base-300 rounded-3xl p-3 m-5">
      <div className="flex flex-col items-center w-full">
        <div className="h-[200px] w-full bg-[url(/img/bgForm.png)] bg-cover bg-center rounded-xl "></div>
        <div className="w-full p-10 pt-0">
          <h1 className="text-2xl font-bold" >Abonne toi</h1>
          <p className="my-4 text-sm" >
            Recevez des astuces Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur nulla dolore esse ipsa odio quas commodi repellendus tempore quasi provident, dolorem dicta expedita sunt nam asperiores molestias est magni! Dicta?
          </p>
          <Form/>
          <p className="text-sm mt-2">
            Pas de spam promis !
          </p>
        </div>
      </div>
    </section>
  );
}