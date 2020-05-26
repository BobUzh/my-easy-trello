import React from "react";

const InputTitle = ( {setTitle} )=> {
    const inputValue = (e)=> {

        if (e.key == 'Enter') {
            setTitle(e.target.value);
            e.target.value = '';
        }
    }
    return(
        <span className="mx-2" style={{width:'100%'}}>
            <input  type="text" onKeyDown={ inputValue} placeholder="name" />
        </span>
    )
}

export  default InputTitle;