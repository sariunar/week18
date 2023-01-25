let comment = document.querySelector('.form__comment');
let btn = document.querySelector('.form__btn');
let listNotes = document.querySelector('#list-Notes');
let important = document.querySelector('#important')
let normal = document.querySelector('#normal')
let saveNotes = (dateKey, commItem) => {
    localStorage.setItem(`${dateKey}`, `${commItem}`);
}


let create_Card = (comm, dateKey) => {
    let div = document.createElement('div');
    let p = document.createElement('p');
    let span = document.createElement('span');
    span.className = "span";
    span.textContent = dateKey;
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
            addComm(listNotes, create_Card(localStorage.getItem(key), key));
        }
    }
}

const addNotes = () => {
    const date = new Date();
    saveNotes(`1${date}`, comment.value);
    addComm(listNotes, create_Card(comment.value, date));
    clean(comment);
}
