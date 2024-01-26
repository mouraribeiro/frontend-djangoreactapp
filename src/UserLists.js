import React from 'react';
import ListComponent from './ListComponent';

export default class UserLists extends React.Component{
    state = {lists: [], loading: true}

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token befc0a5ac3c44b7885ed194de634d1613277606f';
        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config)
        const data = await response.json();
        this.setState({lists:data, loading:false})
    }
    render(){
        const listApi= this.state.lists;
        return (
            <div>
                {/* <ListComponent listName={'Minha Lista'} />
                <ListComponent listName={'Minha Lista 2'} /> */}
                {listApi.map(list => <ListComponent key={list.id} listName={list.name}/>)}
            </div>
        )
    }
    
}