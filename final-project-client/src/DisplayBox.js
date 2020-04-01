import React from 'react';
import styled from '@emotion/styled'

const Tracks = styled.div`
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    height : 50vh;
    width : 100%;
    overflow-y : scroll;
`

const TrackCover = styled.div`
    display:flex;
    align-items: center;
`

const TrackDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction:column;
    align-items:center;
`

const Image = styled.img`
    width: 100px;
    height: 100px;
    margin : 0 auto;
`

const Button = styled.button`
    width:20%;
    margin-bottom:20px;
`

const DisplayBox = (props) => {
    return (
        <Tracks>
            {props.data.map(dataObject =>{
                return <div key={dataObject.id}>
                    <TrackCover>
                        <Image src={dataObject.cover_image}/>
                    </TrackCover>
                    <TrackDetails>
                        <label>ID : {dataObject.id}</label>
                        <label>{dataObject.title}</label>
                        <Button>Add to Playlist</Button>
                    </TrackDetails>
                </div>
            })}
        </Tracks>
    );
};

export default DisplayBox;
