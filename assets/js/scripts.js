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
    //document.getElementById('cookie-banner').remove();
    document.getElementById('cookie-banner').style.display = 'none';
    loadThirdPartyScripts();
}

function btReverseBlogOrder(state,url) {
    let order = state;
    if (order === 'asc') {
        order = 'desc';
    } else {
        order = 'asc';
    }
    window.open(url + "?order=" + order,"_self")
}
