import { Grid } from '@material-ui/core'
import React from 'react'
import borde from '../resources/img/Interior/circle-blue.png'
import CountUp from 'react-countup';

const CircleEmpresa = ({content}) => {
    return (
        <Grid className="circulo-azul" container direction="column" justify="" alignItems="center" sm={4} md={4}>
            <img src={borde}/>
            <h3 className="black"><CountUp start={0} end={content.num} prefix="+" duration={5} ></CountUp></h3>
            <p style={{position:"relative",padding:"0 20px",margin:"10px 0"}}>{content.text}</p>
        </Grid>
    )
}

export default CircleEmpresa