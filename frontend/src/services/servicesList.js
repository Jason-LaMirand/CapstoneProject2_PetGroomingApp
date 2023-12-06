import React, { useState, useEffect } from 'react';


import PGAApi from '../common/api';
import ServicesCard from './servicesCard';
import LoadingSpinner from '../common/LoadingSpinner';


// Shows list of all companies. 

const ServicesList = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function getServicesOnMount() {
        console.debug('ServicesList useEffect getServicesOnMount');
        search();
    }, []);

    //  Triggered by search form submit; reloads companies. 
    async function search(description) {
        let services = await PGAApi.getServices(description);
        setServices(services);
        setIsLoading(false);
    }

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="ServiceList col-md-8 offset-md-2">
            {services.length ? (
                <div className="ServicesList-list">
                    {services.map(s => (
                        <ServicesCard
                            key={s.id}
                            description={s.description}
                            price={s.price}
                            img={s.img}
                            createdAt={s.createdAt}
                            updatedAt={s.updatedAt}
                        />
                    ))}
                </div>
            ) : (
                <p className="message">Sorry, no results were found!</p>
            )}
        </div>
    );
};

export default ServicesList;
