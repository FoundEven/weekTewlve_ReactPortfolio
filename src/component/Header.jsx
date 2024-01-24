import Nav from './Navigation';

export default function header() {
  return (
    <div className='border border-dark rounded' style={{backgroundColor: "rgba(250, 224, 62, .7)"}}>
      <h1 className='m-3 border-dark border-bottom'>Evan Rice</h1>
      <Nav/>
    </div>
  );
}