import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

const AddButton = styled.button`
    margin: 5px;
    padding : 4px;
    display: inline; 
    border-radius: 5px;
`;

const AddTrack = props => {
    const [update, setUpdate] = useState(false);
    const sendReq = async () => {
        console.log(JSON.stringify(props.trackData));
        const options = {
            method: 'POST',
            body: JSON.stringify(props.trackData),
            headers: { 'Content-Type': 'application/json' }
        };
        const response = await fetch('http://localhost:3500/api/playlist', options);
        const jsonResponse = await response.json();
        return jsonResponse;
    }

    const addTrack = (e) => {
        e.preventDefault();
        sendReq().then(response => {
            console.log(response);
        });
    }
    return (
        <AddButton onClick = {e => addTrack(e) }>
            Add to Playlist
        </AddButton>
    );
};

AddTrack.propTypes = {
    trackData: PropTypes.object
};

export default AddTrack;
