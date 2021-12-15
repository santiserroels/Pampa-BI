import React from 'react'
import { Container, Grid, Box } from '@material-ui/core'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import comillas from '../resources/img/Interior/comillas.png'
const Section7 = ({ text }) => {

    const [width, setwidth] = React.useState(window.innerWidth)
    const responsive = {
        0: {
            items: 1,
        },
        1000: {
            items: 2,

        }
    }

    return (
        <Container style={{ paddingBottom: "20px" }} >
            <div style={{ textAlign: "left", display: "flex", flexDirection: "column" }}>
                <h2 className="tittle-s3">
                    {text.title}
                </h2>
                <OwlCarousel items={2} responsive={responsive} navClass="nav-owl-" dots={true} className='owl-theme' loop margin={10} nav>
                    {text.citas.map(cita => {
                        if (width > 1000) {
                            return (
                                <div style={{ display: "flex", margin: "0 10% 0 10%" }}>
                                    <Grid style={{ margin: "auto", borderRadius: "0px 30px 0px  0px", }} className="cita-container">
                                        <div style={{ display: "flex", margin: "0 15px 0 0" }}>
                                            <img style={{ width: "160px", objectFit: "contain", margin: "5% 15px 40px -5%" }} src={cita.photo} />
                                            <div className="cita-text">
                                                <p className="lblue">{cita.name}</p>
                                                <p className="white">{cita.declaration}</p>
                                                <img style={{ width: "60px", marginLeft: "auto" }} src={comillas} />
                                            </div>
                                        </div>

                                    </Grid>
                                </div>

                            )
                        } else {
                            return (
                                <div style={{ display: "flex", margin: "0 10% 0 10%" }}>
                                    <Grid style={{ margin: "auto", borderRadius: "0px 30px 0px  0px", }} className="cita-container-mb">
                                        <div style={{ display: "flex", flexDirection: "column", margin: "0 15px 0 0" }}>
                                            <img style={{ width: "160px", objectFit: "contain", margin: "auto" }} src={cita.photo} />
                                            <div className="cita-text-mb">
                                                <p className="lblue">{cita.name}</p>
                                                <p className="white">{cita.declaration}</p>
                                                <img style={{ width: "60px", marginLeft: "auto" }} src={comillas} />
                                            </div>
                                        </div>

                                    </Grid>
                                </div>
                            )
                        }
                    })}
                </OwlCarousel>
            </div>
        </Container>
    )
}

export default Section7
