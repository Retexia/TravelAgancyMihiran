import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import TourPackages from '../components/TourPackages';
import ScrollReveal from '../components/ScrollReveal';
import heroBg from '../assets/praveen-maleesha-gCjCxFUugoQ-unsplash.jpg';

const PackagesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('search');
        if (query) {
            setSearchTerm(query);
        }
    }, [location]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div className="packages-page">
            <div className="secondary-hero" style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                <div className="hero-overlay" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8))'}}></div>
                <div className="hero-content">
                    <h1>Our Curated Collections.</h1>
                    <p>Discover every corner of the island with our signature tour plans.</p>
                </div>
            </div>
            
            <ScrollReveal><TourPackages searchTerm={searchTerm} /></ScrollReveal>
            
            <ScrollReveal>
                <section className="cta-section" style={{background: '#f5f5f7'}}>
                    <div className="cta-content">
                        <h2>Didn't find what you're looking for?</h2>
                        <p>Our travel designers can build a custom itinerary just for you.</p>
                        <button className="btn-modern btn-solid-green">Request Custom Plan</button>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
};

export default PackagesPage;
