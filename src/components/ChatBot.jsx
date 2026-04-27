import React, { useState } from 'react';

const ChatBot = ({ cookieVisible }) => {
    const [isOpen, setIsOpen] = useState(false);
    const whatsappNumber = "94754154119";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi!%20I'm%20interested%20in%20your%20Sri%20Lanka%20tour%20packages.`;

    return (
        <div className="chat-container" style={{ bottom: cookieVisible ? '100px' : '30px' }}>
            {/* Popup Window */}
            <div className="chat-window" style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'scale(1)' : 'scale(0.8) translateY(20px)',
                pointerEvents: isOpen ? 'all' : 'none',
                height: 'auto',
                maxHeight: '420px'
            }}>
                <div className="chat-header">
                    <div className="chat-avatar" style={{background: '#25D366'}}>
                        <i className="fa-brands fa-whatsapp" style={{fontSize: '1.2rem'}}></i>
                    </div>
                    <div>
                        <div style={{fontWeight: 800, fontSize: '0.95rem'}}>Ceylon Concierge</div>
                        <div style={{fontSize: '0.7rem', opacity: 0.7, display: 'flex', alignItems: 'center', gap: '5px'}}>
                            <div className="status-dot"></div> Online — Typically replies instantly
                        </div>
                    </div>
                </div>

                <div style={{padding: '30px 25px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    {/* Bot greeting */}
                    <div className="msg-bubble msg-bot" style={{maxWidth: '100%'}}>
                        Ayubowan! 🙏 Welcome to <strong>Logo.</strong> Travel. I'm here to help you plan your perfect Sri Lankan getaway. Tap below to chat with our travel expert directly on WhatsApp!
                    </div>

                    {/* Quick action buttons */}
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" 
                           style={{
                               display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                               background: '#25D366', color: 'white', padding: '15px 25px', borderRadius: '100px',
                               textDecoration: 'none', fontWeight: 800, fontSize: '0.95rem',
                               boxShadow: '0 8px 30px rgba(37, 211, 102, 0.3)', transition: 'all 0.3s ease'
                           }}>
                            <i className="fa-brands fa-whatsapp" style={{fontSize: '1.3rem'}}></i>
                            Chat on WhatsApp
                        </a>
                        <div style={{textAlign: 'center', fontSize: '0.8rem', color: '#888'}}>
                            <i className="fa-solid fa-phone" style={{marginRight: '5px'}}></i>
                            +94 75 415 4119
                        </div>
                    </div>

                    {/* Quick topic chips */}
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                        {['Tour Packages', 'Custom Itinerary', 'Group Booking', 'Pricing'].map(topic => (
                            <a key={topic} href={`https://wa.me/${whatsappNumber}?text=Hi!%20I'd%20like%20to%20know%20about%20${encodeURIComponent(topic)}.`}
                               target="_blank" rel="noopener noreferrer"
                               style={{
                                   padding: '8px 16px', borderRadius: '100px', fontSize: '0.75rem',
                                   fontWeight: 700, background: '#f0f0f0', color: '#444',
                                   textDecoration: 'none', border: '1px solid #e5e5e5',
                                   transition: 'all 0.3s ease'
                               }}>
                                {topic}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hi greeting bubble */}
            {!isOpen && (
                <div className="hi-bubble" onClick={() => setIsOpen(true)}>
                    Hi 👋 Need help?
                </div>
            )}

            {/* Floating WhatsApp Toggle Button */}
            <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)} title="Chat with us">
                {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-brands fa-whatsapp" style={{fontSize: '1.8rem'}}></i>}
            </button>
        </div>
    );
};

export default ChatBot;
