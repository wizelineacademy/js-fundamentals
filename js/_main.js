const notes = [{
  _id: createNoteId(),
  title: 'Note title goes here!',
  text: 'This is my very first note text! 😀',
}, {
  _id: createNoteId(),
  title: 'Second awesome note!',
  text: 'This is my second note text!',
}];

// Declaring named functions;
function createNoteId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

function getNoteById(note_id) {
  return notes.find(function(item) {
    return item._id === note_id;
  });
};

const removeNotesList = function() {
  const notesListNode = document.getElementById('notesList').innerHTML = '';
};

const renderNotesList = function() {
  removeNotesList();
  // Gets <ul></ul> node with given id
  const notesListNode = document.getElementById('notesList');
  notes.forEach(function(note) {
    // Creates <a href></a> node
    const aNode = document.createElement('a');
    aNode.classList.add('link');
    aNode.setAttribute('href', '#');
    aNode.addEventListener('click', clickNote);

    // Creates <li></li> node
    const listNode = document.createElement('li');
    listNode.classList.add('list-item');
    listNode.setAttribute('id', note._id);
    const textnode = document.createTextNode(note.title);

    listNode.appendChild(textnode);
    aNode.appendChild(listNode);
    notesListNode.appendChild(aNode);
  });
};

const showNote = function(note) {
  document.getElementById('noteText').value = note.text;
  document.getElementById('noteTitle').value = note.title;
  document.getElementById('noteId').value = note._id;
};

// Assigning functions to variables
const clickNote = function(listItemNode) {
  console.log('Clicked a note item 🗒');
  const target = listItemNode.target;
  const note_id = target.getAttribute('id');
  const note = getNoteById(note_id);
  showNote(note);
};

const addNewNote = function() {
  // Clear textarea and title input
  document.getElementById('noteText').value = '';
  document.getElementById('noteTitle').value = '';
  document.getElementById('noteId').value = '';
};

const putNote = function(_id, title, text) {
  const found = notes.some(function(note) {
    if (note._id === _id) {
      note.title = title;
      note.text = text;
      return note;
    };
  });
  if (!found) {
    notes.push({
      _id: _id,
      title: title,
      text: text,
    });
  }
  renderNotesList();
};

const saveNote = function() {
  console.log('Click button Add Note🖱');
  const text = document.getElementById('noteText').value;
  if (!text) {
    return;
  }
  const title = document.getElementById('noteTitle').value;
  let _id = document.getElementById('noteId').value || createNoteId();
  // Look for note
  // If note is found, update it, if not insert it into array
  putNote(_id, title, text);
};

document.addEventListener('DOMContentLoaded', function(event) {
  console.log('DOM fully loaded and parsed');
  renderNotesList();
});

console.log('You already imported your js file 😎');
