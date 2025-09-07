document.addEventListener("DOMContentLoaded", function(event){
    let circles = document.querySelectorAll('.circle');
    
    circles.forEach(function(progress) {
        let degree = 0;
        let targetDegree = 360 * (parseInt(progress.querySelector('.number').textContent) / 100);
        let color = progress.getAttribute('data-color');
        let number = progress.querySelector('.number');
        
        let interval = setInterval(function() {
            if (degree >= targetDegree) {
                clearInterval(interval);
                return;
            }
            
            degree += 1;
            progress.style.background = `conic-gradient(${color} ${degree}deg, #333 0deg)`;
        }, 10);
    });
});
