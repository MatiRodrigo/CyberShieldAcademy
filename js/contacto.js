  /**
         * Gestión del formulario de contacto:
         * Simula un proceso de encriptación y envío de datos.
         */
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalContent = btn.innerHTML;

            btn.disabled = true;
            btn.innerHTML = '<span class="material-symbols-outlined spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> PROCESANDO CIFRADO...';

            setTimeout(() => {
                btn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> TRANSMISIÓN EXITOSA';
                btn.style.backgroundColor = 'transparent';
                btn.style.border = '1px solid var(--secondary-neon)';
                btn.style.color = 'var(--secondary-neon)';

                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = originalContent;
                    btn.removeAttribute('style');
                    form.reset();
                }, 3000);
            }, 2000);
        });

        /**
         * Efecto de partículas flotantes.
         */
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.backgroundColor = 'rgba(64, 229, 108, 0.2)';
            particle.style.pointerEvents = 'none';
            particle.style.borderRadius = '50%';
            const size = Math.random() * 3 + 1 + 'px';
            particle.style.width = size;
            particle.style.height = size;
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = '100vh';
            particle.style.zIndex = '5';
            document.body.appendChild(particle);

            const duration = Math.random() * 10000 + 5000;
            const animation = particle.animate([
                { transform: 'translateY(0) scale(1)', opacity: 0.5 },
                { transform: 'translateY(-110vh) scale(0)', opacity: 0 }
            ], {
                duration: duration,
                easing: 'linear'
            });

            animation.onfinish = () => particle.remove();
        };

        setInterval(createParticle, 20);