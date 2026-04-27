import React, { useState } from 'react';
import { tourPackages } from '../data/tours';

const TourCard = ({ pkg, isExactMatch, isRecommendation }) => {
    const [showItinerary, setShowItinerary] = useState(false);
    const [transport, setTransport] = useState('taxi');

    const getPrice = () => {
        const basePriceVal = parseInt(pkg.price.replace('$', '').replace(',', ''));
        // Hardcoded override for pkg.id 1 as requested previously
        let currentBase = pkg.id === 1 ? 900 : basePriceVal;
        
        if (transport === 'tuktuk') {
            return `$${currentBase - 300}`;
        }
        return `$${currentBase}`;
    };

    return (
        <div className={`package-card ${isExactMatch ? 'exact-match' : ''} ${isRecommendation ? 'recommendation-card' : ''}`}>
            <div className="card-img-wrapper">
                <img src={pkg.image} alt={pkg.name} className="card-img" />
                
                {/* Modern Day Indicator */}
                <div className="modern-day-indicator" style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(18, 18, 18, 0.8)',
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    color: 'white',
                    padding: '12px 20px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    zIndex: 10,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    animation: 'fadeInUp 0.6s ease-out'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.4rem', fontWeight: 900, lineHeight: 1, color: 'var(--primary-green)' }}>{pkg.days.split(' ')[0]}</span>
                        <span style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 800, opacity: 0.8 }}>Days</span>
                    </div>
                    <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)' }}></div>
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '15px' }}>
                        {[...Array(Math.min(parseInt(pkg.days), 10))].map((_, i) => (
                            <div key={i} style={{ 
                                width: '3px', 
                                height: `${(i + 1) * (100 / Math.min(parseInt(pkg.days), 10))}%`, 
                                background: 'var(--primary-green)', 
                                borderRadius: '10px',
                                opacity: 0.3 + (i * 0.07)
                            }}></div>
                        ))}
                    </div>
                </div>

                {isExactMatch && <div className="result-badge" style={{position: 'absolute', top: '20px', left: '20px', background: 'var(--primary-green)', color: 'var(--pitch-black)', padding: '6px 15px', borderRadius: '50px', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px'}}>Top Result</div>}
                {isRecommendation && <div className="result-badge" style={{position: 'absolute', top: '20px', left: '20px', background: 'var(--pitch-black)', color: 'var(--white)', padding: '6px 15px', borderRadius: '50px', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px'}}>You May Also Like</div>}
            </div>
            <div className="card-body">
                <h3>{pkg.name}</h3>
                <p style={{marginBottom: '20px'}}>{pkg.description}</p>
                
                <div className="transport-selector-box" style={{marginBottom: '25px', padding: '15px', background: 'rgba(29, 185, 84, 0.05)', borderRadius: '12px', border: '1px solid rgba(29, 185, 84, 0.1)'}}>
                    <label style={{fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--primary-green)', display: 'block', marginBottom: '10px', letterSpacing: '1px'}}>Customize Transport</label>
                    <select 
                        className="form-control" 
                        value={transport}
                        onChange={(e) => setTransport(e.target.value)}
                        style={{
                            width: '100%',
                            background: 'white',
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                            padding: '10px',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            outline: 'none'
                        }}
                    >
                        <option value="taxi">Premium Private Taxi (Signature)</option>
                        <option value="tuktuk">Tuk Tuk Adventure (- $300)</option>
                    </select>
                </div>

                <div className="card-highlights" style={{display: 'flex', gap: '20px', marginBottom: '30px', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '15px 0'}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-green)', fontSize: '0.9rem'}}>
                            <i className="bi bi-geo-alt"></i>
                            <span style={{fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', color: '#888'}}>Destinations</span>
                        </div>
                        <span style={{fontSize: '0.85rem', fontWeight: 600}}>{pkg.itinerary.length} Major Stops</span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-green)', fontSize: '0.9rem'}}>
                            <i className="bi bi-shield-check"></i>
                            <span style={{fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', color: '#888'}}>Type</span>
                        </div>
                        <span style={{fontSize: '0.85rem', fontWeight: 600}}>{transport === 'tuktuk' ? 'Rustic Adventure' : 'Private Guided'}</span>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary-green)', fontSize: '0.9rem'}}>
                            <i className="bi bi-stars"></i>
                            <span style={{fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', color: '#888'}}>Includes</span>
                        </div>
                        <span style={{fontSize: '0.85rem', fontWeight: 600}}>All Breakfasts</span>
                    </div>
                </div>
                
                <button 
                    className="btn-itinerary-toggle" 
                    onClick={() => setShowItinerary(!showItinerary)}
                >
                    {showItinerary ? 'Hide Detailed Plan' : 'View Full Itinerary'}
                    <i className="bi bi-chevron-down" style={{transform: showItinerary ? 'rotate(180deg)' : 'none'}}></i>
                </button>

                {showItinerary && (
                    <div className="itinerary-detailed-view" style={{animation: 'slideDown 0.3s ease-out', marginTop: '20px'}}>
                        {/* Day-by-Day */}
                        <div className="itinerary-section">
                            <h4 style={{fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px', color: 'var(--primary-green)', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '10px'}}>Day-by-Day Itinerary</h4>
                            <div className="itinerary-timeline">
                                {pkg.itinerary.map((step) => (
                                    <div key={step.day} className="timeline-item" style={{marginBottom: '25px', paddingLeft: '30px', position: 'relative'}}>
                                        <div className="timeline-dot" style={{position: 'absolute', left: '0', top: '5px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary-green)', border: '3px solid #fff', boxShadow: '0 0 0 1px var(--primary-green)'}}></div>
                                        <div className="timeline-content">
                                            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
                                                <span style={{fontWeight: 900, color: 'var(--primary-green)', fontSize: '0.8rem'}}>DAY {step.day}</span>
                                                <strong style={{fontSize: '1rem', color: 'var(--pitch-black)'}}>{step.title}</strong>
                                            </div>
                                            <p style={{fontSize: '0.85rem', color: '#666', marginBottom: '10px', lineHeight: '1.5'}}>{step.desc}</p>
                                            {step.activities && (
                                                <div className="activities-list" style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                                                    {step.activities.map((act, i) => (
                                                        <span key={i} style={{fontSize: '0.7rem', background: '#f0f0f0', padding: '4px 10px', borderRadius: '4px', color: '#444'}}>
                                                            <i className="bi bi-check2" style={{marginRight: '4px', color: 'var(--primary-green)'}}></i>
                                                            {act}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Inclusions & Exclusions */}
                        <div className="inclusions-exclusions-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '30px', padding: '25px', background: '#f9f9f9', borderRadius: '12px'}}>
                            <div className="inclusions-box">
                                <h5 style={{fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--primary-green)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <i className="bi bi-check-circle-fill"></i> What's Included
                                </h5>
                                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                    {pkg.inclusions.map((item, i) => (
                                        <li key={i} style={{fontSize: '0.8rem', color: '#555', marginBottom: '8px', display: 'flex', gap: '8px'}}>
                                            <i className="bi bi-plus" style={{color: 'var(--primary-green)'}}></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="exclusions-box">
                                <h5 style={{fontSize: '0.8rem', textTransform: 'uppercase', color: '#e74c3c', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                                    <i className="bi bi-x-circle-fill"></i> Not Included
                                </h5>
                                <ul style={{listStyle: 'none', padding: 0, margin: 0, opacity: 0.8}}>
                                    {pkg.exclusions.map((item, i) => (
                                        <li key={i} style={{fontSize: '0.8rem', color: '#555', marginBottom: '8px', display: 'flex', gap: '8px'}}>
                                            <i className="bi bi-dash" style={{color: '#e74c3c'}}></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                <div className="card-footer" style={{marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px'}}>
                    <div className="price-label">
                        <span style={{fontSize: '0.65rem', opacity: 0.6, textTransform: 'uppercase', fontWeight: 800}}>Starting From</span>
                        <span className="price-val" style={{fontSize: '1.4rem', color: 'var(--primary-green)'}}>{getPrice()}</span>
                    </div>
                    <div style={{display: 'flex', gap: '10px'}}>
                        <a href="/contact" className="btn-black" style={{padding: '12px 25px', borderRadius: '500px', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', textDecoration: 'none', display: 'inline-block'}}>
                            Contact for Booking
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TourPackages = ({ searchTerm }) => {
    // Check if the searchTerm is an exact match
    const exactMatch = tourPackages.find(pkg => pkg.name.toLowerCase() === (searchTerm || "").toLowerCase());

    const otherPackages = tourPackages.filter(pkg => 
        pkg.id !== (exactMatch ? exactMatch.id : null) &&
        (pkg.name.toLowerCase().includes((searchTerm || "").toLowerCase()) ||
         pkg.description.toLowerCase().includes((searchTerm || "").toLowerCase()))
    );

    return (
        <section className="packages-section" id="tours">
            <div className="packages-header">
                <span className="about-tag">Handpicked Journeys</span>
                <h2>Curated Tour Plans.</h2>
                <p>From misty emerald tea plantations to pristine azure shores, find the perfect itinerary for your island escape.</p>
            </div>

            <div className="packages-grid">
                {exactMatch ? (
                    <>
                        <TourCard pkg={exactMatch} isExactMatch={true} />
                        {otherPackages.length > 0 && (
                            otherPackages.map((pkg) => (
                                <TourCard key={pkg.id} pkg={pkg} isRecommendation={true} />
                            ))
                        )}
                    </>
                ) : (
                    otherPackages.length > 0 ? (
                        otherPackages.map((pkg) => (
                            <TourCard key={pkg.id} pkg={pkg} />
                        ))
                    ) : (
                        <div style={{gridColumn: '1/-1', textAlign: 'center', padding: '100px 0', opacity: 0.5}}>
                            <i className="bi bi-search" style={{fontSize: '3rem', marginBottom: '20px', display: 'block'}}></i>
                            <h3>No tours found for "{searchTerm}"</h3>
                            <p>Try searching for something else or explore our all signature plans below.</p>
                            <button className="btn-modern btn-itinerary-toggle" onClick={() => window.location.href='/packages'} style={{margin: '20px auto'}}>View All Tours</button>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default TourPackages;
