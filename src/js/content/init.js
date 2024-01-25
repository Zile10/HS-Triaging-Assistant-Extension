let url;
function checkURL() {
    if (url !== window.location.href) {
        url = window.location.href

        if (url.includes('secure.helpscout.net/conversation')) {
            main()
            // activateNoteTemplate()
            // setCustomFields()
        } else if(document.querySelector('div#aid-menu')) {
            document.querySelector('div#aid-menu').remove()
        }
    }
}

// Initial check on page load
checkURL();

const observer = new MutationObserver(checkURL);
observer.observe(document.documentElement, { childList: true, subtree: true });