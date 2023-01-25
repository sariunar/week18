let author = document.querySelector('#author');
let comment = document.querySelector('.form__comment');
let btn = document.querySelector('.form__btn');
let container = document.querySelector('#container');
let important = document.querySelector('#important')
let normal = document.querySelector('#normal')
let saveComm = (authorKey, commItem) => {
    localStorage.setItem(`${authorKey}`, `${commItem}`);
}

let create_Card = (comm, authorKey) => {
    let div = document.createElement('div');
    let p = document.createElement('p');
    let span = document.createElement('span');
    span.className = "span";
    span.textContent = authorKey;
    p.textContent = comm;
    p.className = "p";
    div.className = "text";

    div.append(span);
    div.append(p);
    return div;
}

let addComm = (list, item) => {
    list.append(item);
}

let clean = (textarea) => {
    textarea.value = '';
}

if (localStorage.length != 0) {
    for (key in localStorage) {
        if (key[0] == 1) {
            addComm(container, create_Card(localStorage.getItem(key), key));
        }
    }
}

const checkComm = () => {
    saveComm(`1${author.value}`, comment.value);
    addComm(container, create_Card(comment.value, author.value));
    clean(comment);
}
