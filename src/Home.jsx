
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cs1 from '../src/assets/images/banner/1.jpg'
import cs2 from '../src/assets/images/banner/2.jpg'
import cs3 from '../src/assets/images/banner/3.jpg'
import cs4 from '../src/assets/images/banner/4.jpg'
import './Home.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import s2_1 from './assets/images/about_us/person.jpg'
import s2_2 from './assets/images/about_us/parts.jpg'
import { useEffect, useState } from "react";
import Service from "./Service";
import { useTitle } from "./useHook";

const Home = () => {
    useTitle('CAR Doctor')
    const [jsonData, setJsonData] = useState([])
    useEffect(() => {
        fetch('https://car-doctor-server-beige-tau.vercel.app/service')
            .then(res => res.json())
            .then(data => setJsonData(data))
    }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="container">
            <div className="position-relative">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    customLeftArrow={<FaArrowLeft className="ppp"></FaArrowLeft>}
                    customRightArrow={<FaArrowRight className="pppp"></FaArrowRight>}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className="gr"><img src={cs1} style={{ height: "600px" }} alt="" className="img-fluid w-100 imggra" /></div>
                    <img src={cs3} style={{ height: "600px" }} alt="" className="img-fluid w-100 imggra" />
                    <img src={cs4} style={{ height: "600px" }} alt="" className="img-fluid w-100 imggra" />
                    <img src={cs2} style={{ height: "600px" }} alt="" className="img-fluid w-100 imggra" />
                </Carousel>
                <div className="row position-absolute bt">
                    <div className="col-12 col-md-6">
                        <div className="w-md-50 ">
                            <h1 className="display-4 fw-bolder text-white">For Car Servicing Affordable Price</h1>
                            <p className="my-3 text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className="btn btn-danger me-3">show details</button>
                            <button className="btn btn-outline-light">show details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <div className="mt-5 position-relative">
                        <img src={s2_1} alt="" className="img-fluid rounded w-75" />
                        <img src={s2_2} alt="" className="img-fluid rounded position-absolute w-50 border border-light border-4 s2_2" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div>
                        <h4 className="text-danger fw-bolder ">About Us</h4>
                        <h1 className="display-4 fw-bolder">We are qualified & of experience in this field</h1>
                        <p className="my-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="my-3">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                        <button className="btn btn-danger">show more</button>
                    </div>
                </div>
            </div>
            <div className="s3">
                <div className="text-center">
                    <h4 className="fw-bolder text-danger">Service</h4>
                    <h1 className="fw-bolder my-4">Our Service Area</h1>
                    <p className="mb-5">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <div className="row g-5">
                    {jsonData.map(j => <Service key={j._id} data={j}></Service>)}
                </div>
            </div>
        </div>
    );
};

export default Home;