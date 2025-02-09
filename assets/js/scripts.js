function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const btsidebar = document.getElementById('btsidebar');
    if (sidebar.style.display === '') {
        sidebar.style.display = 'inline';
        btsidebar.innerText = 'Hide Sidebar'
    } else {
        sidebar.style.display = '';
        btsidebar.innerText = 'Show Sidebar'
        
    }
    //sidebar.style.display = sidebar.style.display === '' ? 'inline' : '';

}

function cookieConsent() {
    console.log("Consent")
    localStorage.setItem('cookiesAccepted', true);
    document.getElementById('cookie-banner').style.display = 'none';
    loadThirdPartyScripts();
}
