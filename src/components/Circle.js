import { Grid } from '@material-ui/core'
import React from 'react'
import borde from '../resources/img/Interior/circle-violet.png'

const Circle = ({content}) => {
    return (
        <Grid className="" style={{minHeight:"300px",textAlign:"center",marginBottom:"30px"}} container direction="column" justify="" alignItems="center" md={4} sm={12}>
            <img className="circular-img" style={{width:"210px",position:"absolute",pointerEvents:"none",marginTop:"23px"}} src={content.img}/>
            <img style={{width:"250px",position:"relative"}} src={borde}/>
            <h3 style={{position:"relative",fontStyle:"italic",margin:"10px 0"}} className="violet">{content.title}</h3>
            <p style={{position:"relative",padding:"0 20px",margin:"10px 0"}}>{content.content}</p>
        </Grid>
    )
}

export default Circle
