import React from 'react'
import { Grid } from '@material-ui/core'

const People = ({content}) => {
    return (
        <Grid className="" style={{textAlign:"center",marginBottom:"30px"}} container direction="column" justify="center" alignItems="center" md={4} sm={12}>
            <img src={content.img} />

            <h2 style={{fontSize:"25px",margin:"0px",fontWeight:"900"}}>{content.title}</h2>
            <div style={{padding:"1rem 10%",fontWeight:"700",fontSize:"1.1rem"}}>{content.content}</div>
            <div style={{padding:"0 10%",fontSize:"0.9rem"}}>{content.content2}</div>
            <div style={{marginTop:"1rem"}}><a href={content.url} target="_blank" className="boton-talentos">{content.content3}</a></div>
        </Grid>
    )
}

export default People
