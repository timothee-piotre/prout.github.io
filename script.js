document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();
    showPage('home-page');
});

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Compte créé !");
    showPage('login-page');
});

document.getElementById('reset-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Lien de réinitialisation envoyé !");
    showPage('login-page');
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

function createGroup() {
    const groupName = prompt("Entrez le nom du groupe:");
    if (groupName) {
        const group = {
            name: groupName,
            admin: "Vous",
            members: 1
        };
        renderGroup(group);
        showPage('group-page');
        document.getElementById('group-name').innerText = group.name;
        document.getElementById('group-admin').innerText = `Admin: ${group.admin}`;
        document.getElementById('group-members').innerText = `Membres: ${group.members}`;
    }
}

function joinGroup() {
    alert("Rejoindre un groupe n'est pas encore implémenté.");
}

function renderGroup(group) {
    const groupElement = document.createElement('div');
    groupElement.classList.add('group');
    groupElement.innerHTML = `
        <p>${group.name}</p>
        <p>Admin: ${group.admin}</p>
        <p>Membres: ${group.members}</p>
        <button onclick="showPage('group-page')">Accéder</button>
    `;
    document.getElementById('groups').appendChild(groupElement);
}

function importPhoto() {
    alert("Importer une photo n'est pas encore implémenté.");
}

function takePhoto() {
    alert("Prendre une photo n'est pas encore implémenté.");
}

function publishPhoto() {
    alert("Publier anonymement n'est pas encore implémenté.");
}

function ratePhoto() {
    alert("Noter la photo n'est pas encore implémenté.");
}

function guessAuthor() {
    alert("Deviner l'auteur n'est pas encore implémenté.");
}
