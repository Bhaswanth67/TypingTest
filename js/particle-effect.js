// particle-effect.js
document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('particleCanvas');
    var ctx = canvas.getContext('2d');
    var particles = [];
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    function createParticle(x, y) {
        var count = 10; // Reduced number of particles
        while (count--) {
            particles.push({
                x: x,
                y: y,
                size: Math.random() * 8 + 4, // Slightly smaller size
                speedX: Math.random() * 4 - 2, // Reduced speed range
                speedY: Math.random() * 4 - 2, // Reduced speed range
                life: Math.random() * 15 + 10 // Slightly shorter life
            });
        }
    }

    function updateParticles() {
        for (var i = particles.length - 1; i >= 0; i--) {
            var p = particles[i];
            p.x += p.speedX;
            p.y += p.speedY;
            p.life -= 0.1;
            if (p.life <= 0) particles.splice(i, 1);
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 150, 255, 0.5)'; // Softer color
            ctx.fill();
        }
    }

    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('mousemove', function(e) {
        createParticle(e.clientX, e.clientY);
    });

    document.body.addEventListener('touchmove', function(e) {
        var x = e.touches[0].clientX;
        var y = e.touches[0].clientY;
        e.preventDefault();
        createParticle(x, y);
    });
});
