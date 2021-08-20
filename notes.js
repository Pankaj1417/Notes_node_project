const chalk = require('chalk');
const fs = require('fs');


const addNotes = (title , content) => {

    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title )

    if(!duplicateNote){
        notes.push({
            title: title,
            content: content
        })

        saveNotes(notes)
        console.log('New Note Added !')

    }else{

        console.log('Title Already Taken !')

    }
}

const removeNote = (title) => {
   const notes = loadNotes();
   const notesToKeep = notes.filter((note) => note.title !== title)

    if(notesToKeep.length !== notes.length){
        console.log(chalk.bgGreen('Note Removed !'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.bgRed('Note not Found !'))
    }

}

const listNotes = () => {
    const allNotes = loadNotes()
    console.log(chalk.bgGrey.bold('Your notes are : '))
    allNotes.forEach(element => {
        console.log(chalk.yellow(element.title) + ' : '+ element.content)
    });
}

const readNote = (title) => {
    const allNotes = loadNotes()
    const duplicate = allNotes.find((note) => note.title === title)
    if(duplicate){
        console.log(chalk.yellow(title)+' : '+duplicate.content)
    }else{
        console.log(chalk.red('No such Note found !'))
    }
}


const loadNotes = () => {
    try{
        const notes = fs.readFileSync('notes.json').toString();
        return JSON.parse(notes);

    }catch(e){
        return []
    }
}

const saveNotes = (data) => {

    fs.writeFileSync('notes.json',JSON.stringify(data))

}

module.exports = {
    addNotes : addNotes,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}