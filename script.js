import request from "superagent"

let notes = []

function id (thatString) {
    return document.getElementById(thatString)
}

function glitchAPI (query) {
    return `https://notes-api.glitch.me/api/${query}`
}

function getAndUpdateNotes () {
    request 
    .get(glitchAPI('notes'))
    .auth('benjamesmiller', 'nash13')
    .then(Response => {
        notes = Response.body.notes
        updateNotes(notes)
    })
}

function updateNotes (divID, notes) {
    const div = id(divID)
    const bodyNotes = section.querySelector('note-dis')
    bodyNotes.innerHTML = notesToHTML(notes)
}

function notesToHTML (notes) {
    return notes.map(notesToHTML).join('')
}

function notetoHTML (note) {
    return `<div data-note-id="">${note}
    </div>
    <button type="button" class="button-delete button-danger" data-note-id="">Delete</button>
    <button type="button" class="button-delete button-warning" data-note-id="">Edit</button>`
}

var input = (id("input").value) 

id("sendNote").addEventListener('click', function () {
  id("note-dis") = notetoHTML(input)
})