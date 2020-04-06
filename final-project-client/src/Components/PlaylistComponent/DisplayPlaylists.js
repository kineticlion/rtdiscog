import React from 'react';
import PropTypes from 'prop-types';

const DisplayPlaylists = (props) => {
    function playlistHandler (e) {
        props.setSelection(e.target.selectedIndex + 1);
    }

    return (
        <select onChange={e => playlistHandler(e)}>
            {props.data.map(genre => {
                return <option id={genre.id} key = {genre.id}>
                    {genre.title}
                </option>;
            })}
        </select>
    );
};

DisplayPlaylists.propTypes = {
    setSelection: PropTypes.func,
    data: PropTypes.array
}

export default DisplayPlaylists;
