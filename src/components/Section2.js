import React from 'react'
import { Container, Grid, Box } from '@material-ui/core'

const Section2 = ({ text }) => {

    const i = window.innerWidth;

    return (
        <div>
            <Container style={{ textAlign: "left", display: "flex", flexDirection: "column" }}>
                <h2 className="tittle-s2">
                    {text.title}
                </h2>
                <p style={{marginBottom: '1rem'}}>{text.subtitle}</p>
                <img src={text.img} style={{width:'300px',marginBottom: '3rem'}}></img>
            </Container>
        </div>
    )
}

export default Section2
