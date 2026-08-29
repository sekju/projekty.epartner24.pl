document.addEventListener('DOMContentLoaded', function () {
    const navPanelList = document.getElementById('nav-panel-list');
    if (!navPanelList) return;

    [
        { href: '#cel-projektu', label: 'Cel projektu' },
        { href: '#metadane-projektu', label: 'Metadane projektu' }
    ].forEach((item) => {
        if (!document.querySelector(item.href) || navPanelList.querySelector(`a[href="${item.href}"]`)) return;

        const li = document.createElement('li');
        li.className = 'nav-panel-subitem';
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.label;
        li.appendChild(a);
        navPanelList.appendChild(li);
    });
});
