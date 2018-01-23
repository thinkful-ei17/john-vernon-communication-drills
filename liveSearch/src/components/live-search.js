import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchVal: '',
            characters: [{
                name: 'drake',
                actor: 'The Rock',
                description: 'whats up'
            },
            {
                name: 'static',
                actor: 'Shock',
                description: 'tin man'
            }]
        };
    }
    filteredCharacters() {
        if(this.state.searchVal === ''){
            return this.state.characters;
        }
        const filtered = this.state.characters.filter(chr => { 
            return chr.name.toLowerCase().includes(this.state.searchVal.toLowerCase());
        });


        return filtered;
    }
    render(){
        console.log(this.state.searchVal);
        return ( 
            <div className="live-search">
                <SearchForm onChange={search => this.setState({searchVal:search})} />
                <CharacterCount count={this.filteredCharacters().length} />
                <CharacterList characters={this.filteredCharacters()} />
            </div>
        );

    }
}
