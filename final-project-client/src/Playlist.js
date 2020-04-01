import React, {useState} from 'react';
import DisplayBox from "./DisplayBox";
import styled from '@emotion/styled'
import SearchBox from "./SearchBox";

const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;    
`

const SearchButton = styled.button`
    margin-bottom: 20px;
`


const Playlist = (props) => {
    const [search,setSearch] = useState('Enter a title to search');
    const [titles,setTitles] = useState([]);

    const callApi = async () =>{
        const apiResponse = await fetch(`https://api.discogs.com/database/search?q=${search}&type=release&token=UMDrJDeNyBsBpWUCsWwmrbDkVYpLwEzYzjZnHyjF`);
        const jsonResponse = await apiResponse.json();
        const {results} = jsonResponse;
        return results;
    }

    const handleSearch = (e) => {
        e.preventDefault();
        callApi().then(response=>{
            setTitles(response);
        });
    }

    return (
        <ListBox>
            <h3>Search Tracks</h3>
            <input placeholder={search} onChange={ e=>setSearch(e.target.value)}/>
            <SearchButton onClick={e=>handleSearch(e)}>Search</SearchButton>
            <DisplayBox data={titles}/>
        </ListBox>
    );
};

export default Playlist;
