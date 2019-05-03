let isDown = false
let logo = document.getElementsByClassName('logo')[0]
let menu = document.createElement('div')
menu.classList = 'style-scope ytmusic-app'

let constructMenu = function () {

    let itemRenderer = document.createElement('ytd-compact-link-renderer')
    itemRenderer.querySelector('#label').innerHTML = 'Exit'

    let menuItems = document.createElement('div')
    menuItems.id = 'items'
    menuItems.classList = 'style-scope yt-multi-page-menu-section-renderer'
    menuItems.appendChild(itemRenderer)

    let ytdMultiPageMenuRenderer = document.createElement('ytd-multi-page-menu-renderer')
    ytdMultiPageMenuRenderer.classList = 'dropdown-content style-scope ytmusic-popup-container'
    ytdMultiPageMenuRenderer.tabIndex = 0
    ytdMultiPageMenuRenderer.menuStyle="multi-page-menu-style-type-account"
    ytdMultiPageMenuRenderer.style='outline: none; box-sizing: border-box; max-width: 300px; max-height: 427px';
    ytdMultiPageMenuRenderer.querySelector('#sections').appendChild(menuItems)

    

    let ironDropDown = document.createElement('iron-dropdown')
    ironDropDown.style.zIndex = 103;
    ironDropDown.querySelector('#contentWrapper').appendChild(ytdMultiPageMenuRenderer)

    let ytmusicPopupContainer = document.createElement('ytmusic-popup-container')
    ytmusicPopupContainer.appendChild(ironDropDown)

    menu.appendChild(ytmusicPopupContainer)
}


let showMenu = function () {
    let logoRect = logo.getBoundingClientRect()
    menu.style.position = 'absolute'
    // menu.style.zIndex = '999'
    menu.style.left = `${logoRect.left}px`
    menu.style.top = `${logoRect.top + logoRect.height + 10}px`
    menu.style.height = menu.style.width ='30%'
    document.body.appendChild(menu)
}

let hideMenu = function () {
    document.body.removeChild(menu)
}

let registerEventListeners = function () {
    window.addEventListener('mousedown', (event) => {
        isDown = event.target.classList.contains('ytmusic-nav-bar')
        if (isDown) event.preventDefault()
    })
    window.addEventListener('mousemove', function (event) {
        event.preventDefault()
        if (isDown) {
            window.moveBy(event.movementX, event.movementY)
        }
    }, true);
    window.addEventListener('mouseup', (event) => {
        isDown = false
    })
    logo.addEventListener('mouseenter', showMenu)
    logo.addEventListener('mouseleave', hideMenu)
}

registerEventListeners()
constructMenu()