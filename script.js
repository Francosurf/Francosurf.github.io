document.addEventListener('DOMContentLoaded', function() {
    console.log('Script caricato');
    
    // Funzione di inizializzazione per Google Maps (non più necessaria)
    window.initMaps = function() {
        console.log('Google Maps iframe ready');
    };
    
    // Crea particelle di luce celestiale per lo sfondo
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
        
        // Stelle e particelle di luce celestiale
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            const isLarge = Math.random() > 0.7;
            particle.style.cssText = `
                position: absolute;
                width: ${isLarge ? Math.random() * 6 + 4 : Math.random() * 3 + 1}px;
                height: ${isLarge ? Math.random() * 6 + 4 : Math.random() * 3 + 1}px;
                background: radial-gradient(circle, rgba(77,126,168,0.9) 0%, rgba(107,155,209,0.6) 50%, transparent 70%);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: ${isLarge ? 'twinkle' : 'floatParticle'} ${20 + Math.random() * 20}s linear infinite;
                animation-delay: ${Math.random() * 20}s;
                box-shadow: 0 0 ${isLarge ? '10px' : '5px'} rgba(77,126,168,0.3);
            `;
            particlesContainer.appendChild(particle);
        }
    }
    
    // Funzione per aprire la busta
    window.openEnvelope = function() {
        const envelope = document.getElementById('envelope');
        const invitation = document.getElementById('invitation');
        
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
            envelope.style.zIndex = '10'; // Assicuriamo che la busta vada in secondo piano
            
            // Mostra invito con animazione migliorata
            setTimeout(function() {
                // Assicuriamoci che l'invito sia davanti a tutto
                invitation.style.zIndex = '1000';
                invitation.classList.add('show');
                
                // Rimuoviamo eventuali ostacoli e rendiamo l'invito cliccabile
                invitation.style.pointerEvents = 'all';
                
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
        } else {
            mapElement.style.transition = 'all 0.3s ease';
            mapElement.style.opacity = '0';
            mapElement.style.transform = 'translateY(20px)';
            setTimeout(() => {
                mapElement.classList.add('hidden');
            }, 300);
            button.textContent = mapId === 'church-map' ? 
                '📍 Mostra la via per la Chiesa' : 
                '📍 Mostra la via per il Ristorante';
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
            opacity: 0.8;
        }
        90% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes twinkle {
        0%, 100% {
            opacity: 0.3;
            transform: scale(1);
        }
        50% {
            opacity: 1;
            transform: scale(1.2);
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
    
    /* Stili specifici per Google Maps */
    .gm-style-iw {
        border-radius: 8px;
    }
    
    .gm-style-iw-d {
        overflow: hidden !important;
    }
`;
document.head.appendChild(style);