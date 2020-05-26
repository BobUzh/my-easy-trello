class Service {

    boards = [
        {title:'programming', id:1, notesList:[
            {name:'books', id:1, parentName:'programming', task:[
                {text:'OOP', id:1},
                {text:'algorithms', id:2}
                ]
            },
            {name:'practice 2', id:2, parentName:'programming', task:[
                {text:'todo-list',id:3},
                {text:'calculator', id:4},
                {text:'slider',id:5},
                {text:'photo-collage', id:6}
                ]
            }]
        },
        {title:'design', id:2, notesList:[
            {name:'basics', id:1, parentName:'design', task:[
                {text:'figures',id:7},
                {text:'lines', id:8}
                ]
            },
            {name:'color palette', id:2, parentName:'design', task:[
                {text:'empty', id:9}
                ]
            }]
        }
    ]

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