import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';


const Section1Add = ({ text }) => {
    return (
        <div>
            <Container style={{ textAlign: "left", display: "flex", flexDirection: "column" }}>
                <h2 className="tittle-s2">
                    {text.title}
                </h2>
            </Container>

            <Container>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {text.content.map((content, i) => {
                        return <Grid sm={12} md={3} 
                            justifyCenter="center"
                            alignItems="center"
                            align="center">
                            <div className={i===text.content.length-1 ? 'steped-component' : 'none-last-steped steped-component'}>
                                <h2>{content.title}</h2>
                                <p>{content.text}</p>
                            </div>    
                        </Grid>
                    })}

                </Grid>
            </Container>

        </div>
    )
}

export default Section1Add
