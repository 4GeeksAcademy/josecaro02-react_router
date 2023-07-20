import React from 'react';
import { useParams } from 'react-router-dom';

const Card = () => {
    const params = useParams();
    fetch('https://www.swapi.tech/api/people/' + params.idCard).then(response => response.json()).then(data => console.log(data)).catch(err => err)
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${params.idCard}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title con parametro:{params.idCard}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card