import resume from '../assets/ResumeRice.pdf'

export default function Resume() {
  return (
    <div className='text-white'>
      <h1>Resume</h1>
      <a href={resume}>Link to resume</a>
      <h2>FrontEnd Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>bootstrap</li>
        <li>React</li>
        <li>Jquery</li>
      </ul>
      <h2>BackEnd Proficiencies</h2>
      <ul>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Webpack</li>
        <li>Express</li>
      </ul>
    </div>
  );
}
