import React, { Component } from 'react'

export class SearchBar extends Component {
    // A way to initialize the state
    // constructor(props){
    //     super(props)
    //     this.state = {term:""}
    //     this.onInputChange = this.onInputChange.bind(this)
    // } old way

    // Another way
    // default value is empty
    state = {term:""} 

    // onInputChange = (event) => {
    //     event.preventDefault()
    //     console.log(event.target.value)
    //     console.log(this)
    //     this.setState({term:event.target.value})
        
    // }
    onFormSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.term)
        this.props.onSubmit(this.state.term)
    }
    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Search</label>
                        <input type="text" onChange={(event) => this.setState({term:event.target.value})} value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar