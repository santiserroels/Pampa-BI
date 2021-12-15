import { Accordion, AccordionDetails, AccordionSummary, Container, Grid } from '@material-ui/core'
import React from 'react'
import arrowDown from '../resources/img/Interior/flecha-abajo.png'

const Section6 = ({ text }) => {
    return (

        <Container>
            <h2 className="tittle-s3">
                {text.title}
            </h2>

            {text.faqs.map(all => {
                return (
                    <Accordion>
                        <AccordionSummary expandIcon={<img src={arrowDown} />}>
                            <p style={{ margin: "15px 0" }} className="violet big">{all.faq}</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            {all.ans}
                        </AccordionDetails>
                    </Accordion>)
            })}


        </Container>

    )
}

export default Section6
