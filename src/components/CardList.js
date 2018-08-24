import React from 'react';
import Card from '../containers/Card.js';


const CardList= ({robots}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                        key= {i}
                        id= {robots[i].id}
                        name= {robots[i].name}
                        email= {robots[i].email}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;