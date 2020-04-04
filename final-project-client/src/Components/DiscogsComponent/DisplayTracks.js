import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Tracks = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction: column;
`;

const TrackCover = styled.div`
    display:flex;
    align-items: center;
`;

const TrackDetails = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    margin: 0 auto;
`;

const Image = styled.img`
    width: 120px;
    height: 110px;
    margin : 0 auto;
`;

const Button = styled.button`
    width:200px;
    margin:2px 0 10px 0 ;
    min-height: 2vh;
    border-radius: 10px;
`;

const TrackTitle = styled.div`
    text-align: center;
`

const DisplayTracks = (props) => {
    return (
        <Tracks>
            {props.data.map(dataObject => {
                return (<div key={dataObject.id}>
                    <TrackCover>
                        <Image src={dataObject.cover_image}/>
                    </TrackCover>
                    <TrackDetails>
                        <label>ID : {dataObject.id}</label>
                        <TrackTitle>Title : {dataObject.title}</TrackTitle>
                        <label>Genre : {dataObject.genre}</label>
                        <Button>Add to Playlist</Button>
                    </TrackDetails>
                </div>);
            })}
        </Tracks>
    );
};

DisplayTracks.propTypes = {
    data: PropTypes.array
};

export default DisplayTracks;
