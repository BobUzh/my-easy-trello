const initialState = {
    boardsCollection: [],
    activeBoardData:{
        notesList: []
    },
    activeNoteList:{
        task:[]
    },
    activeBoard:null,
    isAddNewEl:false
}

const reducer = ( state = initialState, actions) => {

    switch ( actions.type ){

        case 'BOARDS_LOADED':
            return {
                ...state,
                boardsCollection: actions.payload
            };

        case 'SET_ACTIVE_BOARD':
            return {
                ...state,
                activeBoard: actions.payload
            };

        case 'SET_ACTIVE_NOTE_LIST':
            return {
                ...state,
                activeNoteList: actions.payload
            };

        case 'ADD_NEW_BOARD':
            return {
                ...state,
                isAddNewEl: false,
                boardsCollection:[
                    ...state.boardsCollection,
                    actions.payload
                ]
            }

        case 'ADD_NEW_NOTE':
            return {
                ...state,
                isAddNewEl: false,
                activeBoardData: {
                    ...state.activeBoardData,
                    notesList: [
                        ...state.activeBoardData.notesList,
                        actions.payload
                    ]
                }
            }

        case 'ADD_NEW_TASK':
            const idx = state.activeBoardData.notesList.findIndex( e=> e.name == actions.payload.parentName );
            return {
                ...state,
                activeBoardData: {
                    ...state.activeBoardData,
                    notesList: [
                        ...state.activeBoardData.notesList.slice(0,idx),
                        {...state.activeNoteList,
                            task:[...state.activeNoteList.task,actions.payload]
                        },
                        ...state.activeBoardData.notesList.slice(idx+1)
                    ]
                },
                activeNoteList:{
                    ...state.activeNoteList,
                    task:[
                        ...state.activeNoteList.task,
                        actions.payload
                    ]
                }
            }

        case 'IS_CREATE_ELEMENT':
            return {
                ...state,
                isAddNewEl: !state.isAddNewEl
            }

        case 'DATA_BOARD_LOADED':
            return {
                ...state,
                activeBoardData: actions.payload
            }

        case 'CLEAN_ALL':
            return {
                ...initialState
            }

        default:
            return state
    }
}

export default reducer;