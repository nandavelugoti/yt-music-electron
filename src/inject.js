let isDown = false

window.addEventListener('mousedown', (event) => {
    event.preventDefault();
    console.log('mousedown on ' + event.target.classList)
    isDown = event.target.classList.contains('ytmusic-nav-bar')
})

window.addEventListener('mousemove', function (event) {
    event.preventDefault()
    if (isDown) {
        window.moveBy(event.movementX, event.movementY)
    }
}, true);

window.addEventListener('mouseup', (event) => {
    event.preventDefault();
    isDown = false
})

document.getElementsByClassName('logo')[0].addEventListener('mouseenter', () => {
    console.log('mouseenter on logo')
})

document.getElementsByClassName('logo')[0].addEventListener('mouseleave', () => {
    console.log('mouseleave on logo')
})