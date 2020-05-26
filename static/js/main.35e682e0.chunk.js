(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{29:function(e,t,a){e.exports=a(42)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),i=a(10),l=a(4),s=a(7),d=a(12),u=a(2),p={boardsCollection:[],activeBoardData:{notesList:[]},activeNoteList:{task:[]},activeBoard:null,isAddNewEl:!1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOARDS_LOADED":return Object(u.a)(Object(u.a)({},e),{},{boardsCollection:t.payload});case"SET_ACTIVE_BOARD":return Object(u.a)(Object(u.a)({},e),{},{activeBoard:t.payload});case"SET_ACTIVE_NOTE_LIST":return Object(u.a)(Object(u.a)({},e),{},{activeNoteList:t.payload});case"ADD_NEW_BOARD":return Object(u.a)(Object(u.a)({},e),{},{isAddNewEl:!1,boardsCollection:[].concat(Object(d.a)(e.boardsCollection),[t.payload])});case"ADD_NEW_NOTE":return Object(u.a)(Object(u.a)({},e),{},{isAddNewEl:!1,activeBoardData:Object(u.a)(Object(u.a)({},e.activeBoardData),{},{notesList:[].concat(Object(d.a)(e.activeBoardData.notesList),[t.payload])})});case"ADD_NEW_TASK":var a=e.activeBoardData.notesList.findIndex((function(e){return e.name==t.payload.parentName}));return Object(u.a)(Object(u.a)({},e),{},{activeBoardData:Object(u.a)(Object(u.a)({},e.activeBoardData),{},{notesList:[].concat(Object(d.a)(e.activeBoardData.notesList.slice(0,a)),[Object(u.a)(Object(u.a)({},e.activeNoteList),{},{task:[].concat(Object(d.a)(e.activeNoteList.task),[t.payload])})],Object(d.a)(e.activeBoardData.notesList.slice(a+1)))}),activeNoteList:Object(u.a)(Object(u.a)({},e.activeNoteList),{},{task:[].concat(Object(d.a)(e.activeNoteList.task),[t.payload])})});case"IS_CREATE_ELEMENT":return Object(u.a)(Object(u.a)({},e),{},{isAddNewEl:!e.isAddNewEl});case"DATA_BOARD_LOADED":return Object(u.a)(Object(u.a)({},e),{},{activeBoardData:t.payload});case"CLEAN_ALL":return Object(u.a)({},p);default:return e}},v=a(27),b=s.c,E=Object(s.d)(m,b(Object(s.a)(v.a))),N=a(8),f=a(9),h=a(14),O=a(13),y=a(15),w=function(){function e(){var t=this;Object(N.a)(this,e),this.boards=[{title:"programming",id:1,notesList:[{name:"books",id:1,parentName:"programming",task:[{text:"OOP",id:1},{text:"algorithms",id:2}]},{name:"practice 2",id:2,parentName:"programming",task:[{text:"todo-list",id:3},{text:"calculator",id:4},{text:"slider",id:5},{text:"photo-collage",id:6}]}]},{title:"design",id:2,notesList:[{name:"basics",id:1,parentName:"design",task:[{text:"figures",id:7},{text:"lines",id:8}]},{name:"color palette",id:2,parentName:"design",task:[{text:"empty",id:9}]}]}],this.getAllBoards=function(){var e=t.parseLocalStore(),a=[];return e&&(a=e.map((function(e){return{title:e.title,id:e.id}}))),a},this.cleanAll=function(){localStorage.clear()},this.getDataBoard=function(e){return t.parseLocalStore().find((function(t){return t.title==e}))},this.addBoard=function(e){var a=t.parseLocalStore(),n=a?[].concat(Object(d.a)(a),[e]):[e];localStorage.setItem("boards",JSON.stringify(n))},this.addNote=function(e,a){var n=t.parseLocalStore();n.find((function(e){return e.title==a})).notesList.push(e),localStorage.setItem("boards",JSON.stringify(n))},this.addTask=function(e,a,n){var r=t.parseLocalStore();t.findBoard(r,n).notesList.find((function(e){return e.name==a})).task.push(e),localStorage.setItem("boards",JSON.stringify(r))}}return Object(f.a)(e,[{key:"initialLocalStorage",value:function(){localStorage.setItem("boards",JSON.stringify(this.boards))}},{key:"parseLocalStore",value:function(){var e=localStorage.getItem("boards");return JSON.parse(e)}},{key:"findBoard",value:function(e,t){return e.find((function(e){return e.title==t}))}}]),e}(),A=new w,g=function(e){return{type:"BOARDS_LOADED",payload:e}},j=function(e){return{type:"DATA_BOARD_LOADED",payload:e}},L=function(e){return{type:"SET_ACTIVE_BOARD",payload:e}},D=function(e){var t={title:e,id:Date.now().toString(),notesList:[]};return A.addBoard(t),{type:"ADD_NEW_BOARD",payload:t}},B=function(e,t){var a={name:e,id:Date.now().toString(),parentName:t,task:[]};return A.addNote(a,t),{type:"ADD_NEW_NOTE",payload:a}},k=function(){return{type:"IS_CREATE_ELEMENT"}},T=function(){return r.a.createElement("div",{className:"container valign-wrapper",style:{height:"20vh"}},r.a.createElement("div",{className:"m-auto"},r.a.createElement(l.b,{to:"/"},r.a.createElement("h1",{style:{fontFamily:"Modak"}},'"trello"'))))},S=function(e){var t=e.title;return r.a.createElement("div",{className:"m-auto"},r.a.createElement("h6",{className:"center white-text text-darken-1",style:{textTransform:"uppercase"}},t))},_=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"valign-wrapper white",style:{height:"100px",boxShadow:"inset 0 0 7px #000000",borderRadius:"2px",justifyContent:"center"}},r.a.createElement(l.b,{to:"#",className:"btn "+this.props.color,onClick:this.props.addNewEl},r.a.createElement("i",{className:"material-icons"},"add"),this.props.isAddNewEl?"cancel":this.props.title))}}]),a}(n.Component),x=_,C=function(e){var t=e.setTitle;return r.a.createElement("span",{className:"mx-2",style:{width:"100%"}},r.a.createElement("input",{type:"text",onKeyDown:function(e){"Enter"==e.key&&(t(e.target.value),e.target.value="")},placeholder:"name"}))},I=(a(39),function(e){return e.boards.map((function(e){return r.a.createElement("div",{className:"col s3 mb-2",key:e.id},r.a.createElement(l.b,{to:"board/".concat(e.id)},r.a.createElement("div",{className:"board teal lighten-2 valign-wrapper"},r.a.createElement(S,{title:e.title}))))}))}),R=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).service=new w,e.showInputTitle=function(){e.props.showInputForTitle()},e.addNewBoard=function(t){""!=t.trim()&&e.props.addNewBoard(t)},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){if(!this.props.boardsCollection.length){var e=this.service.getAllBoards();this.props.boardsLoaded(e)}}},{key:"render",value:function(){var e=this.props,t=e.boardsCollection,a=e.isAddNewEl,n=a?r.a.createElement("div",{className:"col s3 mb-2"},r.a.createElement("div",{className:"board valign-wrapper"},r.a.createElement(C,{setTitle:this.addNewBoard}))):null;return r.a.createElement("div",{className:"container",style:{height:"80vh"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s3"},r.a.createElement(x,{title:"new board",addNewEl:this.showInputTitle,isAddNewEl:a})),r.a.createElement(I,{boards:t}),n))}}]),a}(n.Component),F=Object(i.b)((function(e){return{boardsCollection:e.boardsCollection,isAddNewEl:e.isAddNewEl}}),(function(e){return Object(s.b)({boardsLoaded:g,addNewBoard:D,showInputForTitle:k},e)}))(R),J=(a(40),function(){return r.a.createElement("div",{className:"loadingio-spinner-pulse-wp2pireaalc"},r.a.createElement("div",{className:"ldio-s33ercn25u"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),M=function(e){var t=e.task;return r.a.createElement(l.b,{to:"#",className:"collection-item z-depth-1 my-1",style:{borderTopRightRadius:"15px",borderBottomLeftRadius:"15px"}},t)},W=Object(i.b)(null,{addNewTask:function(e,t,a){var n={text:e,id:Date.now().toString(),parentName:t};return A.addTask(n,t,a),{type:"ADD_NEW_TASK",payload:n}},setActiveNoteList:function(e){return{type:"SET_ACTIVE_NOTE_LIST",payload:e}}})((function(e){var t=e.data,a=e.addNewTask,n=e.setActiveNoteList,o=t.task.map((function(e){return r.a.createElement(M,{task:e.text,key:e.id})}));return r.a.createElement("div",{className:"col s12 m4",onClick:function(){n(t)}},r.a.createElement("div",{className:"collection card-panel "},r.a.createElement("h5",{className:"center collection-item blue-grey-text darken-4",style:{fontFamily:"Modak"}},t.name),r.a.createElement("input",{type:"text",className:" z-depth-4",placeholder:"task ",onKeyDown:function(e){"Enter"==e.key&&(a(e.target.value,t.name,t.parentName),e.target.value="")}}),o))})),K=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).service=new w,e.showInputTitle=function(){e.props.showInputForTitle()},e.addNewList=function(t){e.props.addNewNote(t,e.props.activeBoard.title)},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match,a=e.setActiveBoard,n=e.dataBoardLoaded,r=this.service.getAllBoards().find((function(e){return e.id==t.params.id}));r?(a(r),n(this.service.getDataBoard(r.title))):this.props.history.push("/")}},{key:"render",value:function(){var e=this.props,t=e.activeBoardData,a=e.activeBoard,n=e.isAddNewEl,o=t.notesList?t.notesList.map((function(e){return r.a.createElement(W,{data:e,key:e.id})})):null,c=n?r.a.createElement("div",{className:"col s12 m3"},r.a.createElement("div",{className:"collection card-panel "},r.a.createElement(C,{setTitle:this.addNewList}))):null;return r.a.createElement("div",{className:"container teal",style:{height:"80vh"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s3 mt-2 push-s9"},r.a.createElement(_,{title:"new list",addNewEl:this.showInputTitle,isAddNewEl:n})),r.a.createElement("div",{className:"col s9 center pull-s3"},r.a.createElement("h3",{className:"white py-2 grey-text text-darken-1 mt-2",style:{height:"100px",textTransform:"uppercase"}},a?a.title:r.a.createElement(J,null)))),r.a.createElement("div",{className:"row"},o,c))}}]),a}(n.Component),V=Object(i.b)((function(e){return{activeBoard:e.activeBoard,boardsCollection:e.boardsCollection,activeBoardData:e.activeBoardData,isAddNewEl:e.isAddNewEl}}),(function(e){return Object(s.b)({setActiveBoard:L,boardsLoaded:g,dataBoardLoaded:j,showInputForTitle:k,addNewNote:B},e)}))(Object(y.g)(K)),z=function(e){Object(h.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).service=new w,e}return Object(f.a)(a,[{key:"cleanLocalStorage",value:function(){this.service.cleanAll(),this.props.cleanAll()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{to:"/",className:"waves-effect waves-light btn",style:{position:"absolute",top:0,left:0},onClick:function(){return e.cleanLocalStorage()}},"clean all"),r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(y.d,null,r.a.createElement(y.b,{path:"/",exact:!0,component:F}),r.a.createElement(y.b,{path:"/board/:id",component:V}),r.a.createElement(y.a,{to:"/"}))))}}]),a}(n.Component),P=Object(i.b)(null,{cleanAll:function(){return{type:"CLEAN_ALL"}}})(z);a(41);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:E},r.a.createElement(l.a,null,r.a.createElement(P,null)))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.35e682e0.chunk.js.map