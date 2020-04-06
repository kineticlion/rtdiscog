import React, { useEffect, useState } from 'react';
import DisplayPlaylists from './DisplayPlaylists';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import DisplayPlaylistTracks from "./DisplayPlaylistTracks";

const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border : 8px solid #f1f1f1;
    padding:10px;
    border-radius:15px;
    background-color : #fefefe;
    width: 48.5vw;
`;

const Title = styled.h3`
`;

const PlaylistComponent = (props) => {
    const [genres, setGenres] = useState([]);
    const [playlist,setPlaylist] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3500/api/playlist/')
            .then(response => response.json())
            .then(data => setGenres(data))
            .catch(err => console.log(err));

        fetch(`http://localhost:3500/api/playlist/${props.selection}`)
            .then(response => response.json())
            .then(data => setPlaylist(data))
            .catch(err => console.log(err));
    }, []);


    return (
        <PlaylistsContainer>
            <Title>Select Playlist</Title>
            <DisplayPlaylists setSelection = { props.setSelection } data = {genres}/>
            <DisplayPlaylistTracks playlist={playlist} />
        </PlaylistsContainer>
    );
};

PlaylistComponent.propTypes = {
    setSelection: PropTypes.func,
    selection: PropTypes.number
};

export default PlaylistComponent;
