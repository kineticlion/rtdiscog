import React, {useState} from 'react';

const SearchBox = (props) => {

    return (
        <div>
                <input type="text" placeholder={props.placeholder}/>
        </div>
    );
};

export default SearchBox;
