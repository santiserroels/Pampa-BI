import React from 'react'
import { Container, Grid, Box } from '@material-ui/core'
import Circle from './Circle'
const Section1 = ({text}) => {
    return (
        <div>
            <Container style={{textAlign:"left",display:"flex",flexDirection:"column"}} id="services">
                <h2 className="tittle-s2">
                    {text.title}
                </h2>
                
                <Grid 
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        style={{alignItems:"flex-start"}}
                        >
                        {text.circles.map(content=><Circle content={content}/>)}
                </Grid>
            </Container>
        </div>
    )
}

export default Section1
