import React, { useState } from 'react';
import DisplayTracks from './DisplayTracks';
import styled from '@emotion/styled';

const DiscogsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const SearchTracks = styled.div`
    margin : 5px;
`;

const SearchButton = styled.button`
    margin: 5px;
    padding : 4px;
    display: inline; 
    border-radius: 5px;
`;

const SearchBox = styled.input`
    padding : 5px;
    border-radius: 5px;
`;

const DiscogsComponent = (props) => {
    const [search, setSearch] = useState('Enter a title to search');
    const [titles, setTitles] = useState([]);

    const callApi = async () => {
        const apiUrl = `https://api.discogs.com/database/search?q=${search}&type=release&token=UMDrJDeNyBsBpWUCsWwmrbDkVYpLwEzYzjZnHyjF`;
        const apiResponse = await fetch(apiUrl);
        const jsonResponse = await apiResponse.json();
        const { results } = jsonResponse;
        return results;
    };

    const handleSearch = (e) => {
        e.preventDefault();
        callApi().then(response => {
            setTitles(response);
        });
    };

    return (
        <DiscogsContainer>
            <SearchTracks>
                <SearchBox placeholder={ search } onChange={ e => setSearch(e.target.value) }/>
                <SearchButton onClick={ e => handleSearch(e) }>Search</SearchButton>
            </SearchTracks>
            <DisplayTracks data={titles}/>
        </DiscogsContainer>
    );
};

export default DiscogsComponent;
