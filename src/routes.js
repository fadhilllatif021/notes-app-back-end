const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNotesByHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        options: {
          cors: {
            origin: ['*'],
          },
        },
    },
    {
        method : 'GET',
        path : '/notes',
        handler : getAllNotesHandler,
    },
    {
        method : 'GET',
        path : '/notes/{id}',
        handler : getNoteByIdHandler,
    },
    {
        method : 'PUT',
        path : '/notes/{id}',
        handler : editNotesByHandler,
    },
    {
        method : 'DELETE',
        path : '/notes/{id}',
        handler : deleteNoteByIdHandler,
    },
];

module.exports = routes;