import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CustomFormContact from './CustomFormContact'

const Section8 = ({ text }) => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.onresize = setWidth(window.innerWidth);
    },[width]);
    return (
        <div className="second-form" id="contact">
            <Container>
                <Grid
                    style={{ overflow: "hidden", paddingBottom: "20px" }}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid style={{paddingTop:"0px"}} md={6} sm={12}>
                        <h2 className="tittle-s3 lblue">
                            {text.title}
                        </h2>
                        <p className={width > 959 ? "white" : "black"}>
                            {text.content}
                        </p>
                        
                    </Grid>
                    <Grid md={6} style={{marginTop:"-50px"}} sm={12}>
                        <CustomFormContact text={text.form} />
                    </Grid> 
                    

                </Grid>

            </Container>

        </div>
    )
}

export default Section8
