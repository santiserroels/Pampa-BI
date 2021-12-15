import React from 'react'
import { Grid } from '@material-ui/core'

const Steps = ({content}) => {
    return (
        <Grid className="" style={{textAlign:"center",marginBottom:"30px"}} container direction="column" justify="center" alignItems="center" md={4} sm={12}>
            <h2 style={{fontSize:"70px",margin:"10px 0"}} className="violet">{content.numb+"."}</h2>
            <h2 style={{fontSize:"36px",margin:"0px",fontWeight:"500"}}>{content.title}</h2>
            <div style={{padding:"0 10%"}}>{content.content}</div>
        </Grid>
    )
}

export default Steps
