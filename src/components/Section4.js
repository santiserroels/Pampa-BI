import React from 'react'
import { Container, Grid, Box } from '@material-ui/core'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import arrow from '../resources/img/Interior/flecha-izquierda.png'
const Section4 = ({text}) => {
    const responsive = {  0: {
        items: 1,
    },
    600:{
        items:2
    },
    1000: {
        items: 4,

    }}
    return (
        <Container >
            <div style={{textAlign:"left",display:"flex",flexDirection:"column"}}>
                <h2 className="tittle-s2">
                    {text.title}
                </h2>
                <OwlCarousel responsive={responsive} navClass="nav-owl-car" dots={false} className='owl-theme' loop margin={10} nav>
                    {text.logos.map(logo=>{
                        return(
                            <Grid style={{display:"block",margin:"auto"}}>
                               <img style={{width:"200px",margin:"auto"}} src={logo}/>
                            </Grid>
                        )
                    })}
                </OwlCarousel>
            </div>
        </Container>
    )
}

export default Section4
