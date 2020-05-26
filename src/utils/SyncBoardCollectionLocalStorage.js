const loadState = () => {
    try {
        const serializedBoardCollectionState = localStorage.getItem('boards');
        if (serializedBoardCollectionState === null) {
            return undefined;
        }
        return JSON.parse(serializedBoardCollectionState);
    } catch (err) {
        return undefined;
    }
}

// const saveState = boards => {
//     try {
//         boards.boardsCollection.map( board => {
//             if (board.id === boards.activeBoard.id) {
//                 board.data = boards.activeBoardData.listItems
//             }
//         })
//         const serializeActiveBoardState = JSON.stringify(boards)
//         localStorage.setItem('boardsCollection', serializeActiveBoardState);
//     } catch (err) {
//         new Error(err);
//     }
// }

export {
    loadState,
    saveState
}