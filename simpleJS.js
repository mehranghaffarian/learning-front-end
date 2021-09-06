let arr = [
    {
        id: 1,
        color: "white",
        title: "my first note",
        text: "junk",
        isDeleted: false,
        isPinned: false
    },
    {
        id: 2,
        color: "white",
        title: "my second note",
        text: "second junk",
        isDeleted: false,
        isPinned: false
    },
    {
        id: 3,
        color: "white",
        title: "my second note",
        text: "second junk",
        isDeleted: false,
        isPinned: false
    },
    {
        id: 4,
        color: "white",
        title: "my second note",
        text: "second junk",
        isDeleted: false,
        isPinned: false
    },
    {
        id: 5,
        color: "white",
        title: "my second note",
        text: "second junk",
        isDeleted: false,
        isPinned: false
    },
    {
        id: 6,
        color: "white",
        title: "my second note",
        text: "second junk",
        isDeleted: false,
        isPinned: false
    },
    {
        id: 7,
        color: "white",
        title: "my second note",
        text: "second junk",
        isDeleted: false,
        isPinned: false
    },
    {
        id: 8,
        color: "white",
        title: "my second note",
        text: "second junk",
        isDeleted: false,
        isPinned: false
    },
    {
        id: 9,
        color: "white",
        title: "my second note",
        text: "second junk",
        isDeleted: false,
        isPinned: false
    },
    {
        id: 10,
        color: "white",
        title: "my second note",
        text: "second junk",
        isDeleted: false,
        isPinned: false
    },
    {
        id: 11,
        color: "white",
        title: "my second note",
        text: "second junk",
        isDeleted: false,
        isPinned: false
    },
    {
        id: 12,
        color: "white",
        title: "my second note",
        text: "second junk",
        isDeleted: false,
        isPinned: false
    },
    {
        id: 13,
        color: "white",
        title: "my second note",
        text: "second junk",
        isDeleted: false,
        isPinned: false
    },
    {
        id: 14,
        color: "white",
        title: "my second note",
        text: "second junk",
        isDeleted: false,
        isPinned: false
    }
]

function createNote(title, text, color= 'white'){
    let n = {
        id: arr.length + 1,
        color: color,
        title: title,
        text: text,
        isDeleted: false,
        isPinned: false
    }
    arr.push(n)
    return n
}

function editText(id, title, text, color= "white"){
    let n = arr.find(function (item){
        return item.id === id;
    })

    n.title = title
    n.text = text
    n.color = color
}

function renderAllNotes(){
    const parent = document.getElementById('notes')

    for (let i = 0; i < arr.length; i++)
        parent.append(renderNote(arr[i]))
}

function renderNote(note){
    const node = document.createElement('div')

    node.innerHTML = '<h2>' + note.id + '. ' + note.title + '</h2><p>' + note.text + '</p>'

    return node
}

renderAllNotes()

const noteFm = document.getElementById('noteForm')
noteFm.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()

    let title = document.getElementById('noteTitle').value
    let text = document.getElementById('noteText').value

    document.getElementById('notes').append(renderNote(createNote(title, text)))

}