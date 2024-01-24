import pho from '../assets/IMG-1789.jpg'

export default function About() {
  return (
    <div className='container'>
      <h1 className='text-center p-4'>About Page</h1>
      <img src={pho} className='col-md-3 rounded mx-auto d-block' alt="" />
      <div className='p-2' style={{backgroundColor: "white"}}>
      <p className='p-4' >
        Hello! My name is Evan Rice. I graduated from highschool. Now, I am a student at a UTSA coding bootcamp. I love the creativity of coding and all the unique ways to solve problems that I may come across. I like to learn as it allowes me to improve myself and get better at the things that I like to do.
      </p>
      </div>
    </div>
  );
}
