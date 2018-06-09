const NotesApp = (() => {
  // This function only generates an id used for a note;
  const createNoteId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const removeNotesList = () => document.getElementById('notesList').innerHTML = '';

  const onClick = (event, cb) => {
    event.preventDefault();
    const target = event.target;
    const note_id = target.getAttribute('id');
    cb(note_id);
  };

  // Render li items helper manipulating the DOM
  const renderNotesList = () => {
    removeNotesList();

    // Gets <ul></ul> node with given id
    const notesListNode = document.getElementById('notesList');

    notes.forEach((note) => {

      // Creates <a href></a> node
      const aNode = document.createElement('a');
      aNode.classList.add('link');
      aNode.setAttribute('href', '#');
      aNode.addEventListener('click', onClickNote);

      // Creates <li></li> node
      const listNode = document.createElement('li');
      listNode.classList.add('list-item');
      listNode.setAttribute('id', note._id);
      const textnode = document.createTextNode(note.title);

      // Add it inside the its root element
      listNode.appendChild(textnode);
      aNode.appendChild(listNode);
      notesListNode.appendChild(aNode);
    });
  };

  const showNote = (note) => {
    document.getElementById('noteText').value = note.text;
    document.getElementById('noteTitle').value = note.title;
    document.getElementById('noteId').value = note._id;
  };

  const addNewNote = () => {
    // Clear textarea and title input
    document.getElementById('noteText').value = '';
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteId').value = '';
  };

  const saveNote = (cb) => {
    const text = document.getElementById('noteText').value;
    const _id = document.getElementById('noteId').value || createNoteId();
    const title = document.getElementById('noteTitle').value;
    cb(_id, title, text);
  };

  return {
    addNewNote,
    createNoteId,
    onClick,
    renderNotesList,
    showNote,
    saveNote,
  };
})();
