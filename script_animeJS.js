anime({
    targets: '.square',
    translateX: 400,
    //translateY: 350,
    rotateZ: 2160,
    scale: 2.5,
    duration: 3000,
    easing: 'steps(550)',
    borderRadius: ['0%', '50%'],
    direction: 'alternate',
    loop: false
});

anime({
    targets: '.square2',
    translateX: 550,
    scale: 2.0, 
    duration: 1000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: false
});

const formBuild = document.querySelector('#formBuild');
formBuild.addEventListener('click', disappearForm());

function disappearForm(){
    anime({
        targets: '#formBuild',
        translateX: 250,
        duration: 1000,
        direction: 'alternate',
        loop: false
    });
}