import {Col} from "react-bootstrap";
import TypeWriter from "../UI/TypeWriter.js";
import img1 from "../../assests/images/pr.svg";


const Home = () => {
    const data = [
        "<span class='text-info fs-md-1 fs-4'>Hello!!!</span>",
        "<span style='color: #27ae60;' class='fs-2'>I'm Rutuja Sathe</span>",
        "<span class='text-warning'>Fullstack Developer</span>",
    ]
    return(
        <section id="home" className="row justify-content-evenly mb-5">
            <Col  md={{order:'first',span:5}} xs={{order:'last',span:12}}>
                <img className="img-fluid w-md-75" src={img1} />
            </Col>
            <Col md={5} xs={12}>
                <TypeWriter string={data}/>
            </Col>
        </section>
    )
}

export default Home;