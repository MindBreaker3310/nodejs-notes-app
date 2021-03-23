const chalk = require('chalk');
const fs = require('fs');



const addNotes = function (title, body) {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(note=>{
    //     return note.title === title
    // })
    const duplicateNote = notes.find(note=>note.title === title);

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNote(notes);
        console.log('note加入成功');
    }else{
        console.log('title 已存在');
    }
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (e) {
        return [] //notes.json不存在或怎樣，從空Array開始
    }
}

const saveNote = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note=>note.title !== title);
    if(notes>notesToKeep){
        saveNote(notesToKeep);
        console.log(chalk.green('已刪除'));
    }else{
        console.log(chalk.red.inverse('Title not found'));
    }
    
}

const listNotes = function () {
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNotes = function (title) {
    const notes = loadNotes();
    const readId = notes.findIndex(note=> note.title === title);
    if (readId !== -1){
        console.log(notes[readId]);
    }else{
        console.log(chalk.red.inverse('note not found'));
    }
}

module.exports = {
    addNotes,
    removeNote,
    listNotes,
    readNotes
}
