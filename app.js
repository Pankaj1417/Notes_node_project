// installing chalk and validator module 
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
// getting user created file using ./
const notes = require('./notes.js');
const { argv, describe } = require('yargs');

// adding note

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: 'true',
            type: 'string'
        },
        content:{
            describe: 'Note Content',
            demandOption: 'true',
            type:'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title , argv.content)
    }
});


//remove command
yargs.command({
    command:'remove',
    describe:'Remove a Note',
    builder:{
        title:{
            describe:'Remove a Note With This Title',
            demandOption:'true',
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//list command
yargs.command({
    command : 'list',
    describe : 'Listing all notes',
    handler(){
        notes.listNotes()
    }
})

//read command
yargs.command({
    command : 'read',
    describe : 'Read Note',
    builder : {
        title:{
            describe : 'Note with the given title',
            demandOption : 'true',
            type : 'string'
        }
       
    },
    handler(argv){
        notes.readNote(argv.title)
    }

})

yargs.parse()