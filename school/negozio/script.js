function ciccio(){
    document.getElementById('animation').style.display='block'
    gsap.from('#animation', {duration: 3, x:'-700%', ease: Power0.easeNone})
    gsap.to('#animation', {duration: 3, x:'700%', delay: 3, ease: Power0.easeNone})
    
}

function lati(){
    gsap.from('#sx', {x:'-1000px', y:-700})
    gsap.to('#sx', {duration: 4,x:-440, y:-700})
    gsap.to('#sx', {x:-1000, y:-700, delay:5})
    document.getElementById('sx').style.display='block'
    document.getElementById('dx').style.display='block'
}