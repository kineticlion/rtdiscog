import React, { Component} from 'react';
import DisplayTracks from './DisplayTracks';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const DiscogsContainer = styled.div`
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
    margin-left:20px;
    border-radius: 5px;
`;

class DiscogsComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            search: 'Enter a title to search',
            tracksData: [],
            visibility: 'hidden'
        };
    }

    async callApi () {
        const apiUrl = `https://api.discogs.com/database/search?q=${this.state.search}&type=release&token=UMDrJDeNyBsBpWUCsWwmrbDkVYpLwEzYzjZnHyjF`;
        const apiResponse = await fetch(apiUrl);
        const jsonResponse = await apiResponse.json();
        const { results } = jsonResponse;
        return results;
    };

    handleSearch (e) {
        e.preventDefault();
        this.setState({ visibility: 'visible' });
        this.callApi().then(response => {
            this.setState({ tracksData: response });
        });
    };

    shouldComponentUpdate (nextProps, nextState, nextContext) {
        return true;
    }

    render () {
        return (
            <DiscogsContainer>
                <SearchTracks>
                    <SearchBox placeholder={this.state.search} onChange={e => this.setState({ search: e.target.value })}/>
                    <SearchButton onClick={e => this.handleSearch(e)}>Search</SearchButton>
                </SearchTracks>
                <DisplayTracks selection={this.props.selection} visibility={this.state.visibility} data={this.state.tracksData} setUpdate={this.props.setUpdate}/>
            </DiscogsContainer>
        );
    }
}

DiscogsComponent.propTypes = {
    selection: PropTypes.number,
    setUpdate: PropTypes.func
};

export default DiscogsComponent;
