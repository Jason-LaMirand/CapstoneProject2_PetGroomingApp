import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ id, description, price, updatedAt, img }) => {




    return (
        <Link to={`/services/${id}`} className="ServicesCard">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={img} id="image" class="card-img-top" alt={description} />
                        <div class="card-body">
                            <h5 class="card-title">{description}</h5>
                            <p class="card-text">{price}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">{updatedAt}</small>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ServicesCard;

