class Service {
    boards = []

    initialLocalStorage(){
        localStorage.setItem( 'boards', JSON.stringify( this.boards ) );
    }

    parseLocalStore(){
        const data = localStorage.getItem('boards' );
        return  JSON.parse( data );
    }

    findBoard( arr, title ){
        return arr.find( e => e.title == title );
    }

    getAllBoards = () => {
        const boards = this.parseLocalStore();
        let boardsCollection = [];
        if( boards ) {
            boardsCollection = boards.map( e => {
                return { title:e.title, id: e.id }
            } );
        }

        return boardsCollection
    }

    cleanAll = () => {
        localStorage.clear();
    }

    getDataBoard = ( title )=> {
        const boards = this.parseLocalStore();
        const boardData = boards.find( (e) => e.title == title );
        return boardData
    }

    addBoard = ( el ) => {
        const boards = this.parseLocalStore();

        let newBord = boards ?  [...boards, el ] : [el]
        localStorage.setItem( 'boards', JSON.stringify( newBord ));
    }

    addNote = ( el, parentName ) => {
        const boards = this.parseLocalStore();
        boards.find( (e) => e.title == parentName ).notesList.push( el );
        localStorage.setItem( 'boards', JSON.stringify( boards ) );
    }

    addTask = ( el, parentName, nameBoard ) => {
       const boards = this.parseLocalStore();
       const itemBoard = this.findBoard( boards, nameBoard );
       const note = itemBoard.notesList.find( (e) => e.name == parentName );
       note.task.push( el );
       localStorage.setItem( 'boards', JSON.stringify( boards ) );
    }


}

export default Service;
