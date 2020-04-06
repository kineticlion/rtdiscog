import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const TracksContainer = styled.div`
    display: flex; 
    border-radius: 10px;
    padding:5px;
    height: 85vh;
    width:45vw;
    overflow-y: scroll;
    flex-direction: column;
`
const Track = styled.div`
    border : 2px solid #f1f1f1;
    margin : 5px;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const DeleteTrack = styled.button`
    margin: 5px;
    padding : 4px;
    display: inline; 
    border-radius: 5px;
`

const DisplayPlaylistTracks = props => {
    return (
        <TracksContainer>
            {props.playlist.map(playlistObject => {
                const { id, playlist_id: playlistId, title, master_id: masterId, uri } = playlistObject;
                return (<Track key={id}>
                    <label>ID : {id}</label>
                    <label>Playlist ID : {playlistId}</label>
                    <label>Title : {title}</label>
                    <label>Master ID : {masterId}</label>
                    <label>URI : {uri}</label>
                    <DeleteTrack>Delete track</DeleteTrack>
                </Track>);
            })}
        </TracksContainer>
    );
};

DisplayPlaylistTracks.propTypes = {
    playlist: PropTypes.array
};

export default DisplayPlaylistTracks;
