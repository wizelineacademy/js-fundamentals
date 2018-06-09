// Notes list that is going to be shown in the browser
const notes = [{
  _id: NotesApp.createNoteId(),
  title: 'Note title goes here!',
  text: 'This is my very first note text! 😀',
}, {
  _id: NotesApp.createNoteId(),
  title: 'Second awesome note!',
  text: 'This is my second note text!',
}];

const addNewNote = NotesApp.addNewNote;

// Named functions
function getNoteById(_id) {
  return notes.find(function(item) {
    return item._id === _id;
  });
};

const updateNote = function(_id, title, text, index) {
  notes[index].title = title;
  notes[index].text = text;
};

// Declared functions
const insertNote = function(_id, title, text) {
  notes.push({_id: _id, title: title, text: text});
};

const saveNote = () => NotesApp.saveNote(function(_id, title, text) {
  let index;
  const found = notes.some(function(note, i) {
    if (note._id === _id) {
      index = i;
      return note;
    };
  });

  console.log(found)
  if (found) {
    updateNote(_id, title, text, index);
  } else {
    insertNote(_id, title, text);
  }

  NotesApp.renderNotesList();
});

const onClickNote = (event) => NotesApp.onClick(event, function(_id) {
  console.log('Click button Add Note 🖱');
  const note = getNoteById(_id);
  NotesApp.showNote(note);
});

document.addEventListener('DOMContentLoaded', function(event) {
  console.log('DOM fully loaded and parsed');
  NotesApp.renderNotesList();
});



console.log('You already imported your js file 😎');
