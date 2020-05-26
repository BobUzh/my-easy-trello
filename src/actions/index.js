import Service from '../services/service';

const service = new Service();

const boardsLoaded = ( boards )=> {
    return {
        type: 'BOARDS_LOADED',
        payload: boards
    };
};

const dataBoardLoaded = ( activeBoard )=> {
    return {
        type: 'DATA_BOARD_LOADED',
        payload: activeBoard
    };
};

const setActiveBoard = ( activeBoard )=> {
    return {
        type: 'SET_ACTIVE_BOARD',
        payload: activeBoard
    };
};

const setActiveNoteList = ( activeNoteList )=> {
    return {
        type: 'SET_ACTIVE_NOTE_LIST',
        payload: activeNoteList
    };
};

const addNewBoard = ( title )  => {
    const newBoard = { title:title, id:Date.now().toString(), notesList:[] };
    service.addBoard( newBoard );
    return {
        type: 'ADD_NEW_BOARD',
        payload: newBoard
    }
}

const addNewNote = ( title, parentName )  => {
    const newNote = { name:title, id:Date.now().toString(), parentName:parentName, task:[] };
    service.addNote( newNote, parentName );
    return {
        type: 'ADD_NEW_NOTE',
        payload: newNote
    }
}
const addNewTask = ( title, parentName, nameBoard )  => {
    const newTask = { text:title, id:Date.now().toString(), parentName:parentName };
    service.addTask( newTask, parentName, nameBoard );
    return {
        type: 'ADD_NEW_TASK',
        payload: newTask
    }
}

const showInputForTitle = () => {
    return{
        type: 'IS_CREATE_ELEMENT'
    }
}

const cleanAll = () => {
    return{
        type: 'CLEAN_ALL'
    }
}

export {
    boardsLoaded,
    setActiveBoard,
    addNewBoard,
    showInputForTitle,
    dataBoardLoaded,
    addNewNote,
    addNewTask,
    setActiveNoteList,
    cleanAll
};