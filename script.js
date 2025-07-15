document.addEventListener('DOMContentLoaded', function() {
    // Inizializzazione Google Maps
    window.initMaps = function() {
        console.log('Google Maps ready');
    };
    
    // Crea animazioni di sfondo per la busta
    function createEnvelopeBackground() {
        const container = document.querySelector('.container');
        
        // Particelle fluttuanti per la busta - AUMENTATE E PIÙ GRANDI
        for (let i = 0; i < 35; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            const size = Math.random() * 20 + 8; // Dimensioni aumentate (8-28px)
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, 
                    rgba(135,206,235,0.9) 0%, 
                    rgba(176,224,230,0.7) 40%, 
                    rgba(173,216,230,0.4) 70%,
                    transparent 100%);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatParticleEnhanced ${12 + Math.random() * 8}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
                pointer-events: none;
                z-index: 1;
                box-shadow: 
                    0 0 ${size}px rgba(135,206,235,0.4),
                    inset 0 0 ${size/2}px rgba(255,255,255,0.3);
                filter: blur(0.5px);
            `;
            container.appendChild(particle);
        }
        
        // Onde di luce celestiale - MIGLIORATE
        for (let i = 0; i < 8; i++) {
            const wave = document.createElement('div');
            wave.className = 'light-wave';
            const size = 300 + Math.random() * 400;
            wave.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, 
                    rgba(135,206,235,0.2) 0%, 
                    rgba(176,224,230,0.1) 30%,
                    rgba(255,255,255,0.05) 60%,
                    transparent 80%);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: pulseWaveEnhanced ${6 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 3}s;
                pointer-events: none;
                z-index: 0;
                filter: blur(1px);
            `;
            container.appendChild(wave);
        }
        
        // Stelle scintillanti - NUOVE
        for (let i = 0; i < 25; i++) {
            const star = document.createElement('div');
            star.className = 'twinkling-star';
            const starSize = Math.random() * 6 + 3;
            star.style.cssText = `
                position: absolute;
                width: ${starSize}px;
                height: ${starSize}px;
                background: radial-gradient(circle, 
                    rgba(255,255,255,1) 0%, 
                    rgba(135,206,235,0.8) 30%,
                    transparent 70%);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: twinkleStar ${2 + Math.random() * 3}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                pointer-events: none;
                z-index: 2;
                box-shadow: 0 0 ${starSize * 2}px rgba(255,255,255,0.8);
            `;
            container.appendChild(star);
        }
    }
    
    // Crea animazioni di sfondo per l'invito aperto - IRRADIAZIONE
    function createOpenedBackground() {
        const openedInvitation = document.getElementById('opened-invitation');
        
        // Effetto di irradiazione centrale
        const radiationCenter = document.createElement('div');
        radiationCenter.className = 'radiation-center';
        radiationCenter.style.cssText = `
            position: absolute;
            width: 50px;
            height: 50px;
            background: radial-gradient(circle, 
                rgba(255,255,255,1) 0%,
                rgba(255,223,0,0.9) 20%,
                rgba(135,206,235,0.7) 40%,
                transparent 60%);
            border-radius: 50%;
            left: 50%;
            bottom: 20%;
            transform: translateX(-50%);
            animation: radiationPulse 3s ease-in-out infinite;
            pointer-events: none;
            z-index: 5;
            box-shadow: 
                0 0 50px rgba(255,255,255,0.8),
                0 0 100px rgba(255,223,0,0.6),
                0 0 200px rgba(135,206,235,0.4);
        `;
        openedInvitation.appendChild(radiationCenter);
        
        // Onde di irradiazione concentrica - UN SOLO CERCHIO ALLA VOLTA
        for (let i = 0; i < 3; i++) {
            const radiationWave = document.createElement('div');
            radiationWave.className = 'radiation-wave';
            radiationWave.style.cssText = `
                position: absolute;
                width: 100px;
                height: 100px;
                border: 3px solid rgba(255,255,255,0.8);
                border-radius: 50%;
                left: 50%;
                bottom: 20%;
                transform: translateX(-50%) translateY(50%);
                animation: radiationCycle 6s ease-in-out infinite;
                animation-delay: ${i * 6}s;
                pointer-events: none;
                z-index: 4;
                box-shadow: 
                    0 0 30px rgba(255,255,255,0.6),
                    inset 0 0 30px rgba(255,223,0,0.4),
                    0 0 60px rgba(135,206,235,0.3);
            `;
            openedInvitation.appendChild(radiationWave);
        }
        
        // Raggi di luce che irradiano verso l'esterno
        for (let i = 0; i < 16; i++) {
            const radiationRay = document.createElement('div');
            radiationRay.className = 'radiation-ray';
            const angle = (360 / 16) * i;
            radiationRay.style.cssText = `
                position: absolute;
                width: 4px;
                height: 80vh;
                background: linear-gradient(to top,
                    rgba(255,255,255,0.9) 0%,
                    rgba(255,223,0,0.7) 10%,
                    rgba(135,206,235,0.5) 30%,
                    rgba(255,255,255,0.3) 60%,
                    transparent 100%);
                left: 50%;
                bottom: 20%;
                transform-origin: bottom center;
                transform: translateX(-50%) rotate(${angle}deg);
                animation: radiationBeam ${3 + Math.random() * 2}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                pointer-events: none;
                z-index: 2;
                filter: blur(1px);
            `;
            openedInvitation.appendChild(radiationRay);
        }
        
        // Particelle che implodono verso l'alto
        for (let i = 0; i < 30; i++) {
            const implodingParticle = document.createElement('div');
            implodingParticle.className = 'imploding-particle';
            const size = Math.random() * 8 + 4;
            implodingParticle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle,
                    rgba(255,255,255,1) 0%,
                    rgba(255,223,0,0.8) 50%,
                    transparent 100%);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                bottom: ${Math.random() * 30 + 10}%;
                animation: implodeToTop ${4 + Math.random() * 2}s ease-in infinite;
                animation-delay: ${Math.random() * 3}s;
                pointer-events: none;
                z-index: 3;
                box-shadow: 0 0 ${size * 2}px rgba(255,255,255,0.7);
            `;
            openedInvitation.appendChild(implodingParticle);
        }
    }
    
    // Funzione elegante per aprire la busta con animazioni avanzate
    window.openEnvelope = function() {
        const envelope = document.getElementById('envelope');
        const openedInvitation = document.getElementById('opened-invitation');
        const envelopeImage = envelope.querySelector('.envelope-image');
        
        if (envelope && openedInvitation) {
            // Feedback tattile su mobile
            if ('vibrate' in navigator) {
                navigator.vibrate([50, 100, 50]);
            }
            
            // Animazione della busta con effetti avanzati
            envelopeImage.style.animation = 'envelopeFloat 0.8s ease-out';
            envelope.style.transition = 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            envelope.style.transform = 'scale(0.7) rotateY(20deg) rotateX(10deg) translateY(-150px)';
            envelope.style.opacity = '0';
            envelope.style.filter = 'blur(8px) brightness(1.3)';
            
            // Effetto particelle esplosive durante la transizione
            createTransitionParticles();
            
            // Fase 2: Mostra l'invito aperto con animazioni spettacolari
            setTimeout(() => {
                envelope.style.display = 'none';
                
                // Crea sfondo animato per l'invito aperto
                createOpenedBackground();
                
                // Prepara l'invito aperto
                openedInvitation.style.display = 'flex';
                openedInvitation.style.opacity = '0';
                openedInvitation.style.transform = 'scale(0.3) rotateX(45deg) rotateY(-15deg)';
                openedInvitation.style.filter = 'brightness(0.3) saturate(0.3) blur(5px)';
                
                const openedImage = openedInvitation.querySelector('.opened-image');
                openedImage.style.animation = 'imageReveal 2s ease-out forwards';
                
                // Animazione di entrata maestosa
                setTimeout(() => {
                    openedInvitation.style.transition = 'all 2s cubic-bezier(0.23, 1, 0.32, 1)';
                    openedInvitation.style.opacity = '1';
                    openedInvitation.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
                    openedInvitation.style.filter = 'brightness(1) saturate(1.2) blur(0px)';
                    
                    // Effetto shimmer divino dopo l'apparizione
                    setTimeout(() => {
                        openedInvitation.classList.add('divine-shimmer');
                        openedImage.style.animation += ', imagePulse 4s ease-in-out infinite';
                    }, 1200);
                }, 300);
            }, 800);
        }
    };
    
    // Crea particelle esplosive durante la transizione - MIGLIORATE
    function createTransitionParticles() {
        const container = document.querySelector('.container');
        
        // Esplosione principale
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'explosion-particle';
            const size = Math.random() * 18 + 8;
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, 
                    rgba(255,255,255,1) 0%,
                    rgba(255,223,0,0.9) 30%,
                    rgba(135,206,235,0.7) 60%,
                    transparent 80%);
                border-radius: 50%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                animation: explodeParticleEnhanced ${1.5 + Math.random() * 1}s ease-out forwards;
                animation-delay: ${Math.random() * 0.4}s;
                pointer-events: none;
                z-index: 100;
                box-shadow: 
                    0 0 ${size * 2}px rgba(255,255,255,0.9),
                    0 0 ${size * 4}px rgba(255,223,0,0.5);
            `;
            container.appendChild(particle);
            
            // Rimuovi particella dopo l'animazione
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 3000);
        }
        
        // Onde d'urto luminose
        for (let i = 0; i < 5; i++) {
            const shockwave = document.createElement('div');
            shockwave.className = 'shockwave';
            shockwave.style.cssText = `
                position: absolute;
                width: 100px;
                height: 100px;
                border: 3px solid rgba(255,255,255,0.8);
                border-radius: 50%;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                animation: shockwaveExpand ${1 + i * 0.2}s ease-out forwards;
                animation-delay: ${i * 0.1}s;
                pointer-events: none;
                z-index: 99;
                box-shadow: 
                    0 0 20px rgba(255,255,255,0.6),
                    inset 0 0 20px rgba(255,223,0,0.4);
            `;
            container.appendChild(shockwave);
            
            setTimeout(() => {
                if (shockwave.parentNode) {
                    shockwave.parentNode.removeChild(shockwave);
                }
            }, 2000);
        }
    }
    
    // Funzione minimale per gestire le mappe (se necessario)
    window.toggleMap = function(mapId) {
        console.log('Toggle map:', mapId);
        // Funzione placeholder per compatibilità
    };
    
    // Gestione eventi touch e click per la busta con animazioni
    const envelope = document.getElementById('envelope');
    if (envelope) {
        let touchStartY = 0;
        const envelopeImage = envelope.querySelector('.envelope-image');
        
        // Animazione iniziale della busta - MIGLIORATA
        envelopeImage.style.animation = 'envelopeIdle 4s ease-in-out infinite';
        
        // Touch events
        envelope.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
            envelopeImage.style.animation = 'envelopePress 0.3s ease-out';
        }, { passive: true });
        
        envelope.addEventListener('touchend', (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const swipeDistance = touchStartY - touchEndY;
            
            if (swipeDistance > 30) {
                openEnvelope();
            } else {
                envelopeImage.style.animation = 'envelopeIdle 4s ease-in-out infinite';
            }
        }, { passive: true });
        
        // Click event
        envelope.addEventListener('click', openEnvelope);
        
        // Hover effect per desktop con animazioni
        envelope.addEventListener('mouseenter', () => {
            envelopeImage.style.animation = 'envelopeHover 0.6s ease-out forwards';
        });
        
        envelope.addEventListener('mouseleave', () => {
            envelopeImage.style.animation = 'envelopeIdle 4s ease-in-out infinite';
        });
    }
    
    // Inizializza animazioni di sfondo per la busta
    createEnvelopeBackground();
    
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
    /* CSS globale per centrare l'invito */
    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, #f0f4ff 0%, #e6f0ff 50%, #d9e7ff 100%);
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
    }
    
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
        position: relative;
        padding: 20px;
        box-sizing: border-box;
    }
    
    /* Animazioni per la busta - MIGLIORATE */
    @keyframes envelopeIdle {
        0%, 100% { 
            transform: translateY(0) scale(1) rotate(0deg);
            filter: brightness(1) saturate(1) drop-shadow(0 10px 20px rgba(0,0,0,0.2));
        }
        25% { 
            transform: translateY(-8px) scale(1.01) rotate(0.5deg);
            filter: brightness(1.05) saturate(1.05) drop-shadow(0 15px 25px rgba(0,0,0,0.25));
        }
        50% { 
            transform: translateY(-20px) scale(1.03) rotate(1deg);
            filter: brightness(1.1) saturate(1.1) drop-shadow(0 20px 35px rgba(0,0,0,0.3));
        }
        75% { 
            transform: translateY(-12px) scale(1.02) rotate(-0.5deg);
            filter: brightness(1.07) saturate(1.07) drop-shadow(0 18px 30px rgba(0,0,0,0.28));
        }
    }
    
    @keyframes envelopeHover {
        0% { 
            transform: translateY(0) scale(1) rotate(0deg);
            filter: brightness(1) drop-shadow(0 10px 20px rgba(0,0,0,0.2));
        }
        100% { 
            transform: translateY(-25px) scale(1.08) rotate(-3deg);
            filter: brightness(1.2) drop-shadow(0 25px 50px rgba(0,0,0,0.4));
        }
    }
    
    @keyframes envelopePress {
        0% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(0.92) rotate(3deg); }
        100% { transform: scale(0.95) rotate(1deg); }
    }
    
    @keyframes envelopeFloat {
        0% { 
            transform: translateY(0) scale(1) rotate(0deg);
            filter: brightness(1);
        }
        50% {
            transform: translateY(-15px) scale(1.05) rotate(2deg);
            filter: brightness(1.15) blur(0.5px);
        }
        100% { 
            transform: translateY(-40px) scale(1.15) rotate(8deg);
            filter: brightness(1.4) blur(3px);
        }
    }
    
    /* Animazioni per l'invito aperto */
    @keyframes imageReveal {
        0% { 
            transform: scale(0.8) rotateX(15deg);
            filter: brightness(0.5) saturate(0.5) blur(3px);
            opacity: 0.7;
        }
        50% {
            transform: scale(1.05) rotateX(-5deg);
            filter: brightness(1.2) saturate(1.3) blur(1px);
            opacity: 0.9;
        }
        100% { 
            transform: scale(1) rotateX(0deg);
            filter: brightness(1) saturate(1.1) blur(0px);
            opacity: 1;
        }
    }
    
    @keyframes imagePulse {
        0%, 100% { 
            transform: scale(1);
            filter: brightness(1) saturate(1.1);
        }
        50% { 
            transform: scale(1.02);
            filter: brightness(1.1) saturate(1.2);
        }
    }
    
    /* Animazioni particelle migliorate */
    @keyframes floatParticleEnhanced {
        0% {
            transform: translateY(100vh) translateX(0px) rotate(0deg) scale(0.5);
            opacity: 0;
        }
        10% { 
            opacity: 1; 
            transform: translateY(90vh) translateX(${Math.random() * 50 - 25}px) rotate(45deg) scale(1);
        }
        50% {
            opacity: 1;
            transform: translateY(50vh) translateX(${Math.random() * 100 - 50}px) rotate(180deg) scale(1.2);
        }
        90% { 
            opacity: 1;
            transform: translateY(10vh) translateX(${Math.random() * 150 - 75}px) rotate(315deg) scale(0.8);
        }
        100% {
            transform: translateY(-10vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg) scale(0.3);
            opacity: 0;
        }
    }
    
    @keyframes pulseWaveEnhanced {
        0% {
            transform: scale(0.6);
            opacity: 0.4;
            filter: blur(3px);
        }
        25% {
            transform: scale(0.9);
            opacity: 0.3;
            filter: blur(2px);
        }
        50% {
            transform: scale(1.3);
            opacity: 0.15;
            filter: blur(1px);
        }
        75% {
            transform: scale(1.1);
            opacity: 0.2;
            filter: blur(1.5px);
        }
        100% {
            transform: scale(0.6);
            opacity: 0.4;
            filter: blur(3px);
        }
    }
    
    @keyframes twinkleStar {
        0%, 100% {
            opacity: 0.3;
            transform: scale(0.8) rotate(0deg);
        }
        25% {
            opacity: 1;
            transform: scale(1.3) rotate(90deg);
        }
        50% {
            opacity: 0.7;
            transform: scale(1.1) rotate(180deg);
        }
        75% {
            opacity: 1;
            transform: scale(1.5) rotate(270deg);
        }
    }
    
    /* Animazioni di irradiazione per l'invito aperto */
    @keyframes radiationPulse {
        0%, 100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.8;
            filter: brightness(1);
        }
        50% {
            transform: translateX(-50%) scale(1.5);
            opacity: 1;
            filter: brightness(1.5);
        }
    }
    
    @keyframes radiationCycle {
        /* Esplosione verso l'esterno */
        0% {
            transform: translateX(-50%) translateY(50%) scale(0);
            opacity: 1;
            border-width: 4px;
            filter: brightness(1.5);
        }
        15% {
            transform: translateX(-50%) translateY(50%) scale(4);
            opacity: 0.9;
            border-width: 3px;
            filter: brightness(1.3);
        }
        30% {
            transform: translateX(-50%) translateY(50%) scale(10);
            opacity: 0.7;
            border-width: 2px;
            filter: brightness(1.1);
        }
        /* Massima espansione */
        45% {
            transform: translateX(-50%) translateY(50%) scale(15);
            opacity: 0.5;
            border-width: 1px;
            filter: brightness(1);
        }
        /* Inizio implosione */
        55% {
            transform: translateX(-50%) translateY(50%) scale(15);
            opacity: 0.6;
            border-width: 1px;
            filter: brightness(1.1);
        }
        70% {
            transform: translateX(-50%) translateY(50%) scale(8);
            opacity: 0.8;
            border-width: 2px;
            filter: brightness(1.3);
        }
        85% {
            transform: translateX(-50%) translateY(50%) scale(2);
            opacity: 0.95;
            border-width: 3px;
            filter: brightness(1.4);
        }
        /* Implosione completa */
        95% {
            transform: translateX(-50%) translateY(50%) scale(0.2);
            opacity: 1;
            border-width: 5px;
            filter: brightness(1.6);
        }
        /* Reset per nuovo ciclo */
        100% {
            transform: translateX(-50%) translateY(50%) scale(0);
            opacity: 1;
            border-width: 4px;
            filter: brightness(1.5);
        }
    }
    
    @keyframes radiationBeam {
        0% {
            transform: translateX(-50%) rotate(var(--rotation, 0deg)) scaleY(0);
            opacity: 0;
        }
        20% {
            transform: translateX(-50%) rotate(var(--rotation, 0deg)) scaleY(1);
            opacity: 0.8;
        }
        80% {
            transform: translateX(-50%) rotate(var(--rotation, 0deg)) scaleY(1);
            opacity: 0.6;
        }
        100% {
            transform: translateX(-50%) rotate(var(--rotation, 0deg)) scaleY(0);
            opacity: 0;
        }
    }
    
    @keyframes implodeToTop {
        0% {
            transform: translateY(0) scale(1);
            opacity: 0;
        }
        20% {
            opacity: 1;
            transform: translateY(-20vh) scale(1.2);
        }
        60% {
            opacity: 1;
            transform: translateY(-40vh) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-80vh) scale(0.3);
        }
    }
    
    @keyframes explodeParticleEnhanced {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
            filter: brightness(2);
        }
        30% {
            opacity: 1;
            filter: brightness(1.5);
        }
        100% {
            transform: translate(
                calc(-50% + ${Math.random() * 800 - 400}px), 
                calc(-50% + ${Math.random() * 800 - 400}px)
            ) scale(1.5) rotate(${Math.random() * 720}deg);
            opacity: 0;
            filter: brightness(0.5);
        }
    }
    
    @keyframes shockwaveExpand {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
        100% {
            transform: translate(-50%, -50%) scale(8);
            opacity: 0;
        }
    }
    
    /* Effetto shimmer divino */
    .divine-shimmer::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255,255,255,0.8) 50%,
            rgba(255,223,0,0.6) 60%,
            transparent 70%
        );
        animation: divineShimmer 3s ease-in-out infinite;
        pointer-events: none;
        z-index: 1000;
    }
    
    @keyframes divineShimmer {
        0% { left: -100%; }
        100% { left: 100%; }
    }
    .envelope {
        cursor: pointer;
        will-change: transform, opacity;
        perspective: 1000px;
        max-width: 400px;
        max-height: 300px;
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        position: relative;
        z-index: 10;
    }
    
    .envelope-image {
        will-change: transform, filter;
        transition: all 0.3s ease;
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
        object-position: center;
    }
    
    .opened-invitation {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        justify-content: flex-start;
        align-items: center;
        background: 
            radial-gradient(ellipse at 25% 25%, rgba(255,223,0,0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 75%, rgba(135,206,235,0.1) 0%, transparent 50%),
            linear-gradient(135deg, #f0f4ff 0%, #e6f0ff 50%, #d9e7ff 100%);
        z-index: 1000;
        will-change: transform, opacity, filter;
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;
        padding: 2vh 2vw;
        box-sizing: border-box;
        flex-direction: column;
    }
    
    .opened-invitation::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(255,223,0,0.1) 0%, transparent 40%);
        animation: backgroundPulse 8s ease-in-out infinite;
        pointer-events: none;
        z-index: 1;
    }
    
    @keyframes backgroundPulse {
        0%, 100% {
            opacity: 0.5;
            transform: scale(1);
        }
        50% {
            opacity: 0.8;
            transform: scale(1.1);
        }
    }
    
    .opened-image {
        max-width: 90vw;
        max-height: none;
        width: auto;
        height: auto;
        object-fit: contain;
        object-position: center;
        border-radius: 15px;
        box-shadow: 
            0 25px 80px rgba(0,0,0,0.3),
            0 0 0 1px rgba(255,255,255,0.1),
            inset 0 1px 0 rgba(255,255,255,0.2),
            0 0 100px rgba(255,223,0,0.2);
        transition: all 0.3s ease;
        will-change: transform, filter;
        position: relative;
        z-index: 10;
        display: block;
        margin: 2vh auto;
        min-height: 40vh;
    }
    
    /* Scrollbar personalizzata per l'invito aperto */
    .opened-invitation::-webkit-scrollbar {
        width: 8px;
    }
    
    .opened-invitation::-webkit-scrollbar-track {
        background: rgba(255,255,255,0.1);
        border-radius: 10px;
    }
    
    .opened-invitation::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, 
            rgba(135,206,235,0.6) 0%, 
            rgba(255,223,0,0.4) 100%);
        border-radius: 10px;
        border: 2px solid rgba(255,255,255,0.1);
    }
    
    .opened-invitation::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, 
            rgba(135,206,235,0.8) 0%, 
            rgba(255,223,0,0.6) 100%);
    }
    
    /* Smooth scrolling per Firefox */
    .opened-invitation {
        scrollbar-width: thin;
        scrollbar-color: rgba(135,206,235,0.6) rgba(255,255,255,0.1);
        scroll-behavior: smooth;
    }
    
    .opened-image:hover {
        transform: scale(1.02);
        box-shadow: 
            0 35px 100px rgba(0,0,0,0.4),
            0 0 0 1px rgba(255,255,255,0.1),
            inset 0 1px 0 rgba(255,255,255,0.2),
            0 0 150px rgba(255,223,0,0.3);
        filter: brightness(1.05) saturate(1.1);
    }
    
    .shimmer-effect {
        position: relative;
        overflow: hidden;
    }
    
    .shimmer-effect::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.6),
            transparent
        );
        animation: shimmer 2s ease-in-out;
        pointer-events: none;
    }
    
    @keyframes shimmer {
        0% {
            left: -100%;
        }
        100% {
            left: 100%;
        }
    }
    
    /* Responsive design per tutti i dispositivi con scroll */
    @media (max-width: 480px) {
        body {
            padding: 10px;
        }
        
        .container {
            padding: 10px;
            min-height: 100vh;
        }
        
        .envelope {
            max-width: 300px;
            max-height: 200px;
            margin: auto;
        }
        
        .envelope-image {
            max-width: 100%;
            max-height: 100%;
        }
        
        .opened-image {
            max-width: 95vw;
            min-height: 50vh;
            border-radius: 8px;
            margin: 1vh auto;
        }
        
        .opened-image:hover {
            transform: none; /* Disabilita zoom su mobile piccolo */
        }
        
        .opened-invitation {
            padding: 1vh 2.5vw;
        }
    }
    
    @media (max-width: 768px) and (min-width: 481px) {
        .container {
            padding: 15px;
        }
        
        .envelope {
            max-width: 350px;
            max-height: 250px;
            margin: auto;
        }
        
        .opened-image {
            max-width: 92vw;
            min-height: 45vh;
            border-radius: 10px;
            margin: 1.5vh auto;
        }
        
        .opened-image:hover {
            transform: scale(1.01); /* Zoom ridotto su tablet */
        }
        
        .opened-invitation {
            padding: 1.5vh 4vw;
        }
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
        .container {
            padding: 20px;
        }
        
        .envelope {
            max-width: 380px;
            max-height: 280px;
            margin: auto;
        }
        
        .opened-image {
            max-width: 88vw;
            min-height: 40vh;
            border-radius: 12px;
            margin: 2vh auto;
        }
        
        .opened-invitation {
            padding: 2vh 6vw;
        }
    }
    
    @media (min-width: 1025px) and (max-width: 1440px) {
        .container {
            padding: 20px;
        }
        
        .envelope {
            max-width: 400px;
            max-height: 300px;
            margin: auto;
        }
        
        .opened-image {
            max-width: 85vw;
            min-height: 35vh;
            border-radius: 15px;
            margin: 2vh auto;
        }
        
        .opened-invitation {
            padding: 2vh 7.5vw;
        }
    }
    
    @media (min-width: 1441px) {
        .container {
            padding: 20px;
        }
        
        .envelope {
            max-width: 450px;
            max-height: 350px;
            margin: auto;
        }
        
        .opened-image {
            max-width: 80vw;
            min-height: 30vh;
            border-radius: 20px;
            margin: 3vh auto;
        }
        
        .opened-invitation {
            padding: 3vh 10vw;
        }
    }
    
    /* Orientamento landscape per mobile con scroll */
    @media (max-height: 500px) and (orientation: landscape) {
        body {
            padding: 5px;
        }
        
        .container {
            padding: 5px;
            min-height: 100vh;
        }
        
        .envelope {
            max-width: 280px;
            max-height: 200px;
            margin: auto;
        }
        
        .opened-image {
            max-width: 75vw;
            min-height: 60vh;
            margin: 1vh auto;
        }
        
        .opened-invitation {
            padding: 1vh 5vw;
        }
    }
    
    /* Dispositivi molto piccoli con scroll ottimizzato */
    @media (max-width: 320px) {
        body {
            padding: 5px;
        }
        
        .container {
            padding: 5px;
        }
        
        .envelope {
            max-width: 280px;
            max-height: 180px;
            margin: auto;
        }
        
        .opened-image {
            max-width: 98vw;
            min-height: 55vh;
            border-radius: 5px;
            margin: 0.5vh auto;
        }
        
        .opened-invitation {
            padding: 0.5vh 1vw;
        }
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

// Gestore del ridimensionamento finestra con scroll
window.addEventListener('resize', function() {
    const openedInvitation = document.querySelector('.opened-invitation');
    
    if (openedInvitation && openedInvitation.style.display === 'flex') {
        // Forza il ricalcolo delle dimensioni con scroll
        setTimeout(() => {
            openedInvitation.scrollTop = 0; // Torna in cima
            const openedImage = openedInvitation.querySelector('.opened-image');
            if (openedImage) {
                // Aggiorna l'altezza dell'immagine per il nuovo viewport
                openedImage.style.minHeight = Math.max(window.innerHeight * 0.3, 200) + 'px';
            }
        }, 100);
    }
});