import React from 'react'

const CardCountry = ({content,mobile}) => {
    const [width, setwidth] = React.useState(window.innerWidth)
    React.useEffect(() => {
        setwidth(window.innerWidth);
    },[])
    return (
        <div style={{display:"flex",flexDirection:"column",width:width < 430 ? "300px" : "200px"}} className={mobile?"map-location-name-mb "+ content.country:"map-location-name " + content.country}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <h2>{content.country}</h2>
                <img src={content.flag}/>
            </div>
            <p>{content.adress}</p>
            {content.phones.map(phone=><a href={`tel:${phone}`}><p>{phone}</p></a>)}
        </div>
    )
}

export default CardCountry
