document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('material-title').value;
    const link = document.getElementById('material-link').value;

    addMaterialToList(title, link);

    // Clear input fields
    document.getElementById('material-title').value = '';
    document.getElementById('material-link').value = '';
});

function addMaterialToList(title, link) {
    const materialList = document.getElementById('material-list');
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link}" target="_blank">${title}</a> <button onclick="removeMaterial(this)">Remove</button>`;
    materialList.appendChild(li);
}

function removeMaterial(button) {
    const li = button.parentElement;
    li.remove();
}
