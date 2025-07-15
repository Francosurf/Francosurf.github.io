document.addEventListener('DOMContentLoaded', function() {
    // Inizializzazione Google Maps
    window.initMaps = function() {
        console.log('Google Maps ready');
    };
    
    // Funzione elegante per aprire la busta
    window.openEnvelope = function() {
        const envelope = document.getElementById('envelope');
        const invitation = document.getElementById('invitation');
        
        if (envelope && invitation) {
            // Feedback tattile su mobile
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
            
            // Animazione di apertura
            envelope.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            envelope.style.transform = 'scale(0.9) translateY(-50px)';
            envelope.style.opacity = '0.3';
            
            // Mostra l'invito con eleganza
            setTimeout(() => {
                invitation.classList.add('show');
                invitation.style.display = 'flex';
                invitation.style.transform = 'translateY(20px)';
                invitation.style.opacity = '0';
                invitation.style.transition = 'all 1s cubic-bezier(0.23, 1, 0.32, 1)';
                
                setTimeout(() => {
                    invitation.style.transform = 'translateY(0)';
                    invitation.style.opacity = '1';
                }, 100);
            }, 400);
        }
    };
    
    // Funzione minimale per gestire le mappe
    window.toggleMap = function(mapId) {
        const mapElement = document.getElementById(mapId);
        const button = mapElement.previousElementSibling;
        
        if (!mapElement || !button) return;
        
        const isHidden = mapElement.classList.contains('hidden');
        
        // Animazione fluida
        mapElement.style.transition = 'all 0.4s ease-out';
        
        if (isHidden) {
            mapElement.classList.remove('hidden');
            mapElement.style.maxHeight = '0px';
            mapElement.style.opacity = '0';
            
            // Frame successivo per attivare l'animazione
            requestAnimationFrame(() => {
                mapElement.style.maxHeight = '400px';
                mapElement.style.opacity = '1';
            });
            
            button.textContent = '📍 Nascondi mappa';
        } else {
            mapElement.style.maxHeight = '0px';
            mapElement.style.opacity = '0';
            
            setTimeout(() => {
                mapElement.classList.add('hidden');
            }, 400);
            
            const locationName = mapId === 'church-map' ? 'chiesa' : 'ristorante';
            button.textContent = `📍 Mostra mappa della ${locationName}`;
        }
    };
    
    // Gestione eventi touch e click per la busta
    const envelope = document.getElementById('envelope');
    if (envelope) {
        let touchStartY = 0;
        
        // Touch events
        envelope.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        envelope.addEventListener('touchend', (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const swipeDistance = touchStartY - touchEndY;
            
            if (swipeDistance > 30) {
                openEnvelope();
            }
        }, { passive: true });
        
        // Click event
        envelope.addEventListener('click', openEnvelope);
        
        // Hover effect per desktop
        envelope.addEventListener('mouseenter', () => {
            envelope.style.transform = 'scale(1.02)';
            envelope.style.transition = 'transform 0.3s ease';
        });
        
        envelope.addEventListener('mouseleave', () => {
            envelope.style.transform = 'scale(1)';
        });
    }
    
    // Gestione responsive per orientamento
    function handleResize() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    handleResize();
});

// Stili dinamici per animazioni eleganti
const style = document.createElement('style');
style.textContent = `
    .envelope {
        cursor: pointer;
        will-change: transform, opacity;
    }
    
    .envelope:hover {
        filter: brightness(1.05);
    }
    
    .invitation {
        display: none;
        will-change: transform, opacity;
    }
    
    .invitation.show {
        display: flex !important;
        opacity: 1 !important;
        visibility: visible !important;
        transform: scale(1) !important;
        pointer-events: all !important;
        z-index: 9999 !important;
    }
    
    .map {
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        will-change: max-height, opacity;
    }
    
    .map.hidden {
        max-height: 0 !important;
        opacity: 0 !important;
    }
    
    .map-toggle {
        transition: all 0.3s ease;
        will-change: transform;
    }
    
    .map-toggle:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }
    
    .gallery-image {
        transition: transform 0.3s ease;
    }
    
    .gallery-image:hover {
        transform: scale(1.05);
    }
    
    @media (max-width: 768px) {
        .map {
            border-radius: 8px;
        }
        
        .envelope:hover {
            transform: none;
        }
    }
`;
document.head.appendChild(style);