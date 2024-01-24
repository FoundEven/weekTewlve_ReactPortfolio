import photo2 from '../assets/pass3.png'
import photo1 from '../assets/wizardl.png'
import photo3 from '../assets/logo_Ex.svg'
import photo4 from '../assets/weather343.png'
import photo5 from '../assets/work43.png'
import viteLogo from '../assets/FinalP3.png'

function portfolio() {

    return (
        <div className="row">
          <div className='row m-5 w-100'>
            <div className="col-md-5 m-5">
              <div className="thumbnail hover-overlay ripple shadow-1-strong bg-image" >
                  <img src={viteLogo} alt="Lights" className='img-thumbnail card-img-top img-responsive' />
                      <a  href="#!">
                          <div className=" text-light d-flex justify-content-center flex-row text-center" style={{backgroundColor: "rgba(250, 224, 62, .7)"}}>
                            <a className='m-3' href="https://github.com/Cbaca4/project01-game-picker">Github</a>
                            <p className='m-3'>Pokémon Team Manager</p>
                            <a className='m-3' href="https://cbaca4.github.io/project01-game-picker/">Deploy</a>
                          </div>
                      </a>
              </div>
            </div>
              <div className="col-md-5 m-5">
              <div className="thumbnail hover-overlay ripple shadow-1-strong bg-image" >
                  <img src={photo1} alt="Lights" className='img-thumbnail card-img-top img-responsive' />
                      <a  href="#!">
                          <div className=" text-light d-flex justify-content-center flex-row text-center" style={{backgroundColor: "rgba(250, 224, 62, .7)"}}>
                            <a className='m-3' href="https://github.com/drewhouses/wizard-escape">Github</a>
                            <p className='m-3'>Wizard-Escape</p>
                            <a className='m-3' href="https://murmuring-springs-90075-ee5dfd14bef1.herokuapp.com/">Deploy</a>
                           </div>
                      </a>
              </div>
            </div>
          </div>
          <div className='row m-5 w-100'>
            <div className="col-md-5 m-5">
              <div className="thumbnail hover-overlay ripple shadow-1-strong bg-image" >
                  <img src={photo2} alt="Lights" className='img-thumbnail card-img-top img-responsive' />
                      <a  href="#!">
                          <div className=" text-light d-flex justify-content-center flex-row text-center" style={{backgroundColor: "rgba(250, 224, 62, .7)"}}>
                            <a className='m-3' href="https://github.com/FoundEven/weekThreeChallenge_PasswordGenerator">Github</a>
                            <p className='m-3'>Password Generator</p>
                            <a className='m-3' href="https://foundeven.github.io/weekThreeChallenge_PasswordGenerator/">Deploy</a>
                           </div>
                      </a>
              </div>
            </div>
            <div className="col-md-5 m-5">
              <div className="thumbnail hover-overlay ripple shadow-1-strong bg-image" >
                  <img src={photo3} alt="Lights" className='img-thumbnail card-img-top img-responsive object-fit-fill' />
                      <a  href="#!">
                          <div className=" text-light d-flex justify-content-center flex-row text-center" style={{backgroundColor: "rgba(250, 224, 62, .7)"}}>
                            <a className='m-3' href="https://drive.google.com/file/d/1SzJOYIc9XGO2K_Cz_2nTlj6yOz-yCpqP/view?usp=sharing">Github</a>
                            <p className='m-3'>Logo Creator</p>
                            <a className='m-3' href="https://github.com/FoundEven/WeekTenChallenge_LogoCreator">Deploy</a>
                           </div>
                      </a>
              </div>
            </div>
          </div>
          <div className='row m-5 w-100'>
            <div className="col-md-5 m-5">
              <div className="thumbnail hover-overlay ripple shadow-1-strong bg-image" >
                  <img src={photo4} alt="Lights" className='img-thumbnail card-img-top img-responsive' />
                      <a  href="#!">
                          <div className=" text-light d-flex justify-content-center flex-row text-center" style={{backgroundColor: "rgba(250, 224, 62, .7)"}}>
                            <a className='m-3' href="https://github.com/FoundEven/WeekSixChallenge_WeatherDashboard">Github</a>
                            <p className='m-3'>WeatherDashboard</p>
                            <a className='m-3' href="https://foundeven.github.io/WeekSixChallenge_WeatherDashboard/">Deploy</a>
                           </div>
                      </a>
              </div>
            </div>
            <div className="col-md-5 m-5">
              <div className="thumbnail hover-overlay ripple shadow-1-strong bg-image" >
                  <img src={photo5} alt="Lights" className='img-thumbnail card-img-top img-responsive' />
                      <a  href="#!">
                          <div className=" text-light d-flex justify-content-center flex-row text-center" style={{backgroundColor: "rgba(250, 224, 62, .7)"}}>
                            <a className='m-3' href="https://github.com/FoundEven/WeekFiveChallenge_WorkScheduler">Github</a>
                            <p className='m-3'>Work Scheduler</p>
                            <a className='m-3' href="https://foundeven.github.io/WeekFiveChallenge_WorkScheduler/">Deploy</a>
                           </div>
                      </a>
              </div>
            </div>
          </div>
        </div>
    );
}

export default portfolio;