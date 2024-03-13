import photo2 from '../assets/project23.png'
import photo1 from '../assets/wizardl.png'
import photo3 from '../assets/logo_Ex.svg'
import photo4 from '../assets/weather343.png'
import photo5 from '../assets/work43.png'
import viteLogo from '../assets/FinalP3.png'

import "bootstrap/js/src/collapse.js";

function portfolio() {

    return (
        <div className="row">
          <div className='row m-5 w-100'>
            <div className="col-md-5 m-5 ">
              <div className=" ripple shadow-1-strong bg-image " >
                <a data-bs-toggle="collapse" href="#collapseExample">
                  <img src={viteLogo} alt="Lights" className='img-thumbnail card-img-top img-responsive' />
                </a>    
                        <div className='collapse' id="collapseExample">
                          <div className=" text-light d-flex justify-content-center flex-row text-center" style={{backgroundColor: "rgba(250, 224, 62, .7)"}}>
                            <a className='m-3' href="https://github.com/Cbaca4/project01-game-picker">
                              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                              </svg>
                            </a>
                            <p className='m-3'>Pokémon Team Manager</p>
                            <a className='m-3' href="https://cbaca4.github.io/project01-game-picker/">
                              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                              </svg>
                            </a>
                          </div>
                        </div>
              </div>
            </div>
              <div className="col-md-5 m-5">
              <div className=" ripple shadow-1-strong bg-image" >
                <a data-bs-toggle="collapse" href="#co">
                  <img src={photo1} alt="Lights" className='img-thumbnail card-img-top img-responsive' />
                </a>
                      <div className='collapse' id="co">
                          <div className=" text-light d-flex justify-content-center flex-row text-center" style={{backgroundColor: "rgba(250, 224, 62, .7)"}}>
                            <a className='m-3' href="https://github.com/drewhouses/wizard-escape">Github</a>
                            <p className='m-3'>Wizard-Escape</p>
                            <a className='m-3' href="https://murmuring-springs-90075-ee5dfd14bef1.herokuapp.com/">Deploy</a>
                           </div>
                      </div>
              </div>
            </div>
          </div>
          <div className='row m-5 w-100'>
            <div className="col-md-5 m-5">
              <div className=" ripple shadow-1-strong bg-image" >
                  <img src={photo2} alt="Lights" className='img-thumbnail card-img-top img-responsive' />
                      <a  href="#!">
                          <div className=" text-light d-flex justify-content-center flex-row text-center" style={{backgroundColor: "rgba(250, 224, 62, .7)"}}>
                            <a className='m-3' href="https://github.com/cazthetraveler/Hobby-E-Commerce">Github</a>
                            <p className='m-3'>Hobby-E-Commerce</p>
                            <a className='m-3' href="https://hobby-ecommerce.onrender.com">Deploy</a>
                           </div>
                      </a>
              </div>
            </div>
            <div className="col-md-5 m-5">
              <div className=" ripple shadow-1-strong bg-image" >
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
              <div className=" ripple shadow-1-strong bg-image" >
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
              <div className=" ripple shadow-1-strong bg-image" >
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