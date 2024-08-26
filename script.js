function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

document.getElementById('create-group-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const groupName = this.querySelector('input').value;
    createGroup(groupName);
    showPage('home-page');
});

function createGroup(name) {
    const groupItem = document.createElement('div');
    groupItem.className = 'group-item';
    groupItem.textContent = name;
    groupItem.onclick = function () {
        enterGroup(name);
    };
    document.getElementById('groups-list').appendChild(groupItem);
}

function enterGroup(name) {
    document.getElementById('group-name').textContent = name;
    document.getElementById('group-admin').textContent = 'Vous'; // Simplification
    document.getElementById('group-members-count').textContent = '1'; // Simplification
    showPage('group-page');
}

function uploadPhoto() {
    alert('Fonction pour importer une photo.');
}

function takePhoto() {
    alert('Fonction pour prendre une photo.');
}

function publishPhoto() {
    alert('Fonction pour publier une photo.');
}

function ratePhoto() {
    alert('Fonction pour noter une photo.');
}

function guessAuthor() {
    alert('Fonction pour deviner l\'auteur de la photo.');
}
