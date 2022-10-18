anime({
    targets: '.square',
    translateX: 400,
    translateY: 350,
    rotateZ: 2160,
    scale: 3.5,
    duration: 3500,
    easing: 'steps(150)',
    borderRadius: ['0%', '50%'],
    direction: 'alternate',
    loop: true
});

anime({
    targets: '.square2',
    translateX: 550,
    rotateZ: 360,
    scale: 2.2, 
    duration: 5000,
    direction: 'alternate',
    loop: true
});

const formBuild = document.querySelector('#formBuild');
console.log(formBuild);

formBuild.addEventListener('click', disappearForm());

function disappearForm(){
    anime({
        targets: '#formBuild',
        translateX: 250,
        duration: 3500,
        direction: 'alternate'
    });
}