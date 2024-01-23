import photo2 from '../assets/pass3.png'
import photo1 from '../assets/wizardl.png'
import viteLogo from '../assets/FinalP3.png'

function portfolio() {

    return (
        <div className="row">
          <div className="col-md-6">
            <div className="thumbnail hover-overlay ripple shadow-1-strong bg-image" >
                <img src={viteLogo} alt="Lights" className='img-thumbnail card-img-top img-responsive' />
                    <a  href="#!">
                        <div className="mask text-light d-flex justify-content-center flex-column text-center" style={{backgroundColor: "lightblue"}}>
                        <p>Project</p>
                         </div>
                    </a>
            </div>
          </div>
            <div className="col-md-6">
            <div className="thumbnail hover-overlay ripple shadow-1-strong bg-image" >
                <img src={photo1} alt="Lights" className='img-thumbnail card-img-top img-responsive' />
                    <a  href="#!">
                        <div className="mask text-light d-flex justify-content-center flex-column text-center" style={{backgroundColor: "lightblue"}}>
                        <p>Project</p>
                         </div>
                    </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="thumbnail hover-overlay ripple shadow-1-strong bg-image" >
                <img src={photo2} alt="Lights" className='img-thumbnail card-img-top img-responsive' />
                    <a  href="#!">
                        <div className="mask text-light d-flex justify-content-center flex-column text-center" style={{backgroundColor: "lightblue"}}>
                        <p>Project</p>
                         </div>
                    </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="thumbnail hover-overlay ripple shadow-1-strong bg-image" >
                <img src={viteLogo} alt="Lights" className='img-thumbnail card-img-top img-responsive' />
                    <a  href="#!">
                        <div className="mask text-light d-flex justify-content-center flex-column text-center" style={{backgroundColor: "lightblue"}}>
                        <p>Project</p>
                         </div>
                    </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="thumbnail hover-overlay ripple shadow-1-strong bg-image" >
                <img src={viteLogo} alt="Lights" className='img-thumbnail card-img-top img-responsive' />
                    <a  href="#!">
                        <div className="mask text-light d-flex justify-content-center flex-column text-center" style={{backgroundColor: "lightblue"}}>
                        <p>Project</p>
                         </div>
                    </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="thumbnail hover-overlay ripple shadow-1-strong bg-image" >
                <img src={viteLogo} alt="Lights" className='img-thumbnail card-img-top img-responsive' />
                    <a  href="#!">
                        <div className="mask text-light d-flex justify-content-center flex-column text-center" style={{backgroundColor: "lightblue"}}>
                        <p>Project</p>
                         </div>
                    </a>
            </div>
          </div>
        </div>
    );
}

export default portfolio;