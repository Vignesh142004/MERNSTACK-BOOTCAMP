function loadData() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'https://jsonplaceholder.typicode.com/posts/3');
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            const data = JSON.parse(xhr.responseText);
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = `<h2>${data.id}</h2><p>${data.title}</p>`;
        } else {
            console.error('Request failed with status:', xhr.status);
        }
    }
    xhr.send();
}
