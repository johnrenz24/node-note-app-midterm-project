const fs = require('fs')

const add = function(note=[],oldnote)
{
    let finalNote = JSON.parse(oldNote)

    finalNote.push(note)

    let objectNote = JSON.stringify(finalNote)
    
    fs.writeFileSync('note.txt', objectNote)
}

module.experts = add