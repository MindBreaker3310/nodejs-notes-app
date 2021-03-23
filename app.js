// import notes from './notes.js';
// import validator from 'validator';
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const { describe } = require('yargs')
const notesSystem = require('./notes.js')

yargs.version('2.2.2')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notesSystem.addNotes(argv.title, argv.body)
    }

})

yargs.command({
    command:'remove',
    describe: '移除note',
    builder:{
        title:{
            describe:'要移除note的title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function (argv) {
        notesSystem.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    handler:function () {
        notesSystem.listNotes();
    }
})
yargs.command({
    command:'read',
    builder:{
        title:{
            describe: '要讀的note',
            demandOption: true,
            type: 'string'
        }
    },
    handler:function (argv) {
        notesSystem.readNotes(argv.title);
    }
})


yargs.parse()

// console.log(process.argv);
// console.log(yargs.argv);




//test zone

// const book={
//     title:'little woman',
//     author:'aaa'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// console.log(JSON.parse(bookJSON).title);
// console.log(bookJSON.author);