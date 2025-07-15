document.addEventListener('DOMContentLoaded', function() {
    console.log('Script caricato');
    
    // Inizializza le variabili per le mappe
    let churchMap = null;
    let restaurantMap = null;
    
    // Crea particelle di luce per lo sfondo
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
        `;
        document.body.appendChild(particlesContainer);
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: radial-gradient(circle, rgba(255,215,0,0.8) 0%, transparent 70%);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatParticle ${20 + Math.random() * 20}s linear infinite;
                animation-delay: ${Math.random() * 20}s;
            `;
            particlesContainer.appendChild(particle);
        }
    }
    
    // Funzione per aprire la busta
    window.openEnvelope = function() {
        const envelope = document.getElementById('envelope');
        const invitation = document.getElementById('invitation');
        const waxSeal = document.querySelector('.wax-seal');
        
        if (envelope && invitation) {
            // Suono di rottura del sigillo (opzionale)
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHGm98tKBS');
            audio.volume = 0.3;
            audio.play().catch(() => {}); // Ignora errori se l'audio non può essere riprodotto
            
            // Effetto vibrazione su mobile
            if ('vibrate' in navigator) {
                navigator.vibrate(50);
            }
            
            // Animazione busta
            envelope.classList.add('open');
            envelope.style.animation = 'none';
            
            // Mostra invito con animazione migliorata
            setTimeout(function() {
                invitation.classList.add('show');
                
                // Scroll automatico per mobile
                if (window.innerWidth <= 768) {
                    setTimeout(() => {
                        invitation.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                }
            }, 400);
        }
    };
    
    // Funzione per mostrare/nascondere le mappe
    window.toggleMap = function(mapId) {
        const mapElement = document.getElementById(mapId);
        const button = mapElement.previousElementSibling;
        
        if (!mapElement || !button) return;
        
        if (mapElement.classList.contains('hidden')) {
            mapElement.classList.remove('hidden');
            button.textContent = '📍 Nascondi mappa';
            
            // Animazione smooth per la mappa
            mapElement.style.opacity = '0';
            mapElement.style.transform = 'translateY(20px)';
            setTimeout(() => {
                mapElement.style.transition = 'all 0.5s ease';
                mapElement.style.opacity = '1';
                mapElement.style.transform = 'translateY(0)';
            }, 10);
            
            // Inizializza la mappa se non esiste già
            if (mapId === 'church-map' && !churchMap) {
                setTimeout(() => {
                    churchMap = L.map('church-map').setView([38.6891, 16.1542], 15);
                    
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '© OpenStreetMap contributors'
                    }).addTo(churchMap);
                    
                    const churchIcon = L.divIcon({
                        html: '<div style="background: #1e3c72; color: white; padding: 8px; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 3px 10px rgba(0,0,0,0.3);">⛪</div>',
                        iconSize: [40, 40],
                        className: 'custom-church-marker'
                    });
                    
                    L.marker([38.6891, 16.1542], {icon: churchIcon})
                        .addTo(churchMap)
                        .bindPopup('<b style="font-size: 16px;">Chiesa Maria SS. Assunta</b><br>San Marco di Cessaniti')
                        .openPopup();
                }, 100);
            } else if (mapId === 'restaurant-map' && !restaurantMap) {
                setTimeout(() => {
                    restaurantMap = L.map('restaurant-map').setView([38.8167, 16.1167], 15);
                    
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '© OpenStreetMap contributors'
                    }).addTo(restaurantMap);
                    
                    const restaurantIcon = L.divIcon({
                        html: '<div style="background: #e65100; color: white; padding: 8px; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 3px 10px rgba(0,0,0,0.3);">🍽️</div>',
                        iconSize: [40, 40],
                        className: 'custom-restaurant-marker'
                    });
                    
                    L.marker([38.8167, 16.1167], {icon: restaurantIcon})
                        .addTo(restaurantMap)
                        .bindPopup('<b style="font-size: 16px;">Ristorante Parco degli Ulivi</b><br>Francavilla Angitola')
                        .openPopup();
                }, 100);
            }
        } else {
            mapElement.style.transition = 'all 0.3s ease';
            mapElement.style.opacity = '0';
            mapElement.style.transform = 'translateY(20px)';
            setTimeout(() => {
                mapElement.classList.add('hidden');
            }, 300);
            button.textContent = mapId === 'church-map' ? 
                '📍 Mostra mappa della chiesa' : 
                '📍 Mostra mappa del ristorante';
        }
    };
    
    // Gestione orientamento dispositivo
    function handleOrientation() {
        const invitation = document.getElementById('invitation');
        if (invitation && invitation.classList.contains('show')) {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
    }
    
    window.addEventListener('resize', handleOrientation);
    window.addEventListener('orientationchange', handleOrientation);
    
    // Migliora l'esperienza touch
    let touchStartY = 0;
    const envelope = document.getElementById('envelope');
    
    if (envelope) {
        console.log('Envelope trovato, aggiungo listener');
        
        envelope.addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        envelope.addEventListener('touchend', function(e) {
            const touchEndY = e.changedTouches[0].clientY;
            const swipeDistance = touchStartY - touchEndY;
            
            // Se swipe verso l'alto di almeno 50px, apri la busta
            if (swipeDistance > 50 && !envelope.classList.contains('open')) {
                openEnvelope();
            }
        }, { passive: true });
        
        envelope.addEventListener('click', function(e) {
            console.log('Click rilevato su envelope');
            if (!envelope.classList.contains('open')) {
                openEnvelope();
            }
        });
        
        // Click anche sulla ceralacca
        if (waxSeal) {
            waxSeal.addEventListener('click', function(e) {
                console.log('Click su ceralacca');
                e.stopPropagation();
                if (!envelope.classList.contains('open')) {
                    openEnvelope();
                }
            });
        }
    } else {
        console.error('Envelope non trovato!');
    }
    
    // Inizializza particelle
    createParticles();
});

// Aggiungi animazioni al CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes gentleHover {
        0%, 100% { transform: translate(-50%, -50%) scale(1) rotateZ(0deg); }
        25% { transform: translate(-50%, -50%) scale(1.02) rotateZ(-1deg); }
        75% { transform: translate(-50%, -50%) scale(1.02) rotateZ(1deg); }
    }
    
    @keyframes breakSeal {
        0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
        50% { transform: translate(-50%, -50%) scale(1.1) rotate(10deg); }
        100% { 
            transform: translate(-50%, -50%) scale(0) rotate(180deg); 
            opacity: 0;
        }
    }
    
    @keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }
        100% {
            background-position: 1000px 0;
        }
    }
    
    .invitation.show::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255,255,255,0.7) 50%,
            transparent 60%
        );
        animation: shimmer 2s ease-in-out;
        pointer-events: none;
    }
    
    .custom-church-marker,
    .custom-restaurant-marker {
        animation: markerPulse 2s ease-in-out infinite;
    }
    
    @keyframes markerPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);