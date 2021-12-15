import { Container, Grid } from '@material-ui/core'
import React from 'react'
import imgEmpresa from '../resources/img/Interior/imagen-empresa.png'
import CircleEmpresa from './CircleEmpresa'


const section5 = ({ text }) => {

    return (
        <div style={{ textAlign: "left", display: "flex", flexDirection: "column"}}>
            <Container>
                <h2 className="tittle-s2">
                    {text.title}
                </h2>
            </Container>
            <Container>
                <Grid
                    style={{overflow:"hidden",backgroundColor:"rgba(130, 77, 230, 0.08)"}}
                    container
                    display="flex"
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid  sm={12} md={8} >
                        <div style={{padding:"1rem",display:"flex",flexDirection:"column"}}>
                            <div className="empresa">
                                {text.content.map(content=><CircleEmpresa content={content}/>)}
                            </div>
                            <div className="boton-empresa d-flex" style={{justifyContent:"center"}}>
                                <div style={{padding:"7px 24px", width:"fit-content"}} className="meet-btn bg-violet white boton-empresa">{text.button}</div>
                            </div>
                        </div>
                    </Grid>
                    <Grid style={{overflow:"hidden",textAlign:"right"}} sm={12} md={4}>
                        <img style={{objectFit:"contain", maxHeight:"600px"}} src={imgEmpresa}/>
                    </Grid>
                </Grid>
            </Container>


        </div>
    )
}

export default section5
