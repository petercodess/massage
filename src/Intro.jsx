import image from '/WhatsApp Image 2024-08-21 at 23.20.09_d590df8e.jpg';

const Intro = () => {  
  return (
    <div className="bg-slate-900 flex items-center justify-around px-16 py-10 text-white md:flex-row flex-col" id='but'>
        <div className='md:px-9 mb-4'>
            <h1 className="text-6xl font-extrabold">Hi!</h1>
            <p className="text-4xl mt-8 text-red-600">I'm Danielle!</p>
            <p className="text-2xl mt-8">I am a fully qualified and insured massage therapist willing to chip in a happy ending.</p>
        </div>
        <img src={image} />
    </div>
  );
}

export default Intro;