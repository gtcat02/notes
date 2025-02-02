let inputNote = document.querySelector('.input__item');
let addNote = document.querySelector('.input__button');
let listNote = document.querySelector('.added__list');

const notes = [
  {
    title: 'Купить молоко',
    completed: false,
  },
  {
    title: 'Программировать',
    completed: true,
  },
]

function render() {
  listNote.innerHTML = '';
  
  for (let i = 0; i < notes.length; i++) {
    listNote.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i));
  }

  // for (let note of notes) {
  //   listNote.insertAdjacentHTML('beforeend', getNoteTemplate(note));
  // }
}

render();

addNote.onclick = function() { 
  if (inputNote.value.length === 0) {
    return
  }

  const newNote = {
    title: inputNote.value,
    completed: false,
  }
  notes.push(newNote);
  render();
  inputNote.value = '';
}

listNote.onclick = function(event) {
  if (event.target.dataset.index) {
    const index = Number(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === 'toggle') {
      notes[index].completed = !notes[index].completed;
    } else {
      notes.splice(index, 1);
    }

    render();
  }
}

function getNoteTemplate(note, i) {
  return `
    <li class="added__item">
      <p class="added__item-title ${note.completed ? 'item-title--through' : ''}">${note.title}</p>
      <div class="added__button-container">
        <button class="added__button" data-index="${i}" data-type="toggle">+</button>
        <button class="added__button" data-index="${i}" data-type="remove">-</button>
      </div>
    </li>
  `
}