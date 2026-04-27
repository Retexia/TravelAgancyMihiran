import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { tourPackages } from '../data/tours';

const Hero = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearchChange = (e) => {
        const val = e.target.value;
        setSearchTerm(val);
        
        if (val.length > 1) {
            const matches = tourPackages.filter(p => 
                p.name.toLowerCase().includes(val.toLowerCase())
            ).slice(0, 5);
            setSuggestions(matches);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
        
        if (onSearch) onSearch(val);
    };

    const executeSearch = (term) => {
        if (location.pathname !== '/packages') {
            navigate(`/packages?search=${encodeURIComponent(term)}`);
        } else {
            if (onSearch) onSearch(term);
            const toursSection = document.getElementById('tours');
            if (toursSection) {
                toursSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const handleSuggestionClick = (name) => {
        setSearchTerm(name);
        setShowSuggestions(false);
        executeSearch(name);
    };

    const handleSearchSubmit = () => {
        executeSearch(searchTerm);
    };

    return (
        <section className="hero">
            <div className="hero-video-container">
                <iframe
                    src="https://www.youtube.com/embed/KCn5Gc38oO4?autoplay=1&mute=1&loop=1&playlist=KCn5Gc38oO4&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3"
                    title="Hero Background"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
            
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <div className="reveal active">
                    <h1>Journey Through the <br/> Soul of the Island</h1>
                    <p>From misty emerald tea plantations to pristine azure shores, we curate authentic experiences that reveal the hidden magic of Sri Lanka.</p>
                    
                    <div className="hero-search-wrapper">
                        <div className="hero-search">
                            <input 
                                type="text" 
                                className="hero-search-input" 
                                placeholder="Where would you like to go?" 
                                value={searchTerm}
                                onChange={handleSearchChange}
                                onFocus={() => searchTerm.length > 1 && setShowSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                            />
                            <button className="hero-search-btn" onClick={handleSearchSubmit}>
                                <i className="bi bi-search"></i>
                            </button>
                        </div>

                        {showSuggestions && suggestions.length > 0 && (
                            <div className="search-suggestions">
                                {suggestions.map(s => (
                                    <div 
                                        key={s.id} 
                                        className="suggestion-item"
                                        onClick={() => handleSuggestionClick(s.name)}
                                    >
                                        <i className="bi bi-geo-alt"></i>
                                        <span>{s.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="hero-bottom-icons">
                <div className="hero-icon-circle" title="Volunteer Experiences">
                    <i className="fa-solid fa-hand-holding-heart"></i>
                </div>
                <div className="hero-icon-circle" title="Local Experiences">
                    <i className="fa-solid fa-compass"></i>
                </div>
                <div className="hero-icon-circle" title="Pristine Beaches">
                    <i className="fa-solid fa-umbrella-beach"></i>
                </div>
                <div className="hero-icon-circle" title="Memorable Captures">
                    <i className="fa-solid fa-camera"></i>
                </div>
            </div>
        </section>
    );
};

export default Hero;
