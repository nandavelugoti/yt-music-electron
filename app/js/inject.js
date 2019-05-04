let isDown = false
let logo = document.getElementsByClassName('logo')[0]
let menu = document.createElement('div')
// menu.classList = 'style-scope ytmusic-app'

let constructMenu = function () {

    let itemRenderer = document.createElement('ytd-compact-link-renderer')
    itemRenderer.classList = 'style-scope yt-multi-page-menu-section-renderer'
    itemRenderer.querySelector('#label').innerHTML = 'Exit'

    let menuItems = document.createElement('div')
    menuItems.id = 'items'
    menuItems.classList = 'style-scope yt-multi-page-menu-section-renderer'
    menuItems.appendChild(itemRenderer)

    let ytdMultiPageMenuRenderer = document.createElement('ytd-multi-page-menu-renderer')
    ytdMultiPageMenuRenderer.classList = 'dropdown-content style-scope ytmusic-popup-container'
    ytdMultiPageMenuRenderer.tabIndex = 0
    ytdMultiPageMenuRenderer.menuStyle="multi-page-menu-style-type-account"
    ytdMultiPageMenuRenderer.style='outline: none; box-sizing: border-box;';
    ytdMultiPageMenuRenderer.querySelector('#sections').appendChild(menuItems)

    let ironDropDown = document.createElement('iron-dropdown')
    ironDropDown.style.zIndex = 103;
    ironDropDown.style.position = 'fixed';
    ironDropDown.style.display = 'block'
    ironDropDown.ariaDisabled= 'false'
    ironDropDown.horizontalAlign = 'auto'
    ironDropDown.classList = 'style-scope ytmusic-popup-container'
    ironDropDown.querySelector('#contentWrapper').appendChild(ytdMultiPageMenuRenderer)

    let ytmusicPopupContainer = document.createElement('ytmusic-popup-container')
    ytmusicPopupContainer.classList = 'style-scope ytmusic-app'
    ytmusicPopupContainer.appendChild(ironDropDown)

    menu.appendChild(ytmusicPopupContainer)

    let logoRect = logo.getBoundingClientRect()
    menu.style.position = 'absolute'
    menu.style.left = `${logoRect.left}px`
    menu.style.top = `${logoRect.top + logoRect.height + 10}px`
    menu.style.height = 'auto'
    menu.style.width = 'auto'
    menu.addEventListener('mouseleave', hideMenu)
    hideMenu()

    document.body.appendChild(menu)
}


let showMenu = function () {
    menu.style.display = 'block'
}

let hideMenu = function () {
    menu.style.display = 'none'
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
    
}

registerEventListeners()
constructMenu()