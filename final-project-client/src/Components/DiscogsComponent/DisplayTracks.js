import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import AddTrack from './AddTrack';

const TrackContainer = styled.div`
    border : 2px solid #f1f1f1;
    margin : 5px;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const TrackArt = styled.img`
    width: 120px;
    height: 110px;
    margin : 0 auto;
`;

const DisplayTracks = (props) => {
    // to use prop in Tracks css
    const Tracks = styled.div` 
    border-radius: 10px;
    padding:5px;
    height: 85vh;
    width:45vw;
    overflow-y: scroll;
    visibility : ${props.visibility};
`;
    return (
        <Tracks>
            {props.data.map(tracksObject => {
                const playlistId = props.selection;
                const { cover_image: coverImage, id, title, genre, master_id: masterId, uri } = tracksObject;
                const trackData = { "id": id, "playlist_id": playlistId, "title": title, "uri": uri, "master_id": masterId };
                return (<TrackContainer key={id}>
                    <TrackArt src={coverImage}/>
                    <label>ID : {id}</label>
                    <label>Title : {title}</label>
                    <label>Genre : {genre}</label>
                    <AddTrack trackData = {trackData} setUpdate={props.setUpdate}>Add to Playlist</AddTrack>
                </TrackContainer>);
            })}
        </Tracks>
    );
};

DisplayTracks.propTypes = {
    data: PropTypes.array,
    visibility: PropTypes.string,
    selection: PropTypes.number,
    setUpdate: PropTypes.func
};

export default DisplayTracks;
