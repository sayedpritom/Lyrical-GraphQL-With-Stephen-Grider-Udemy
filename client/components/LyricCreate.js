import React, { Component } from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
    constructor(props) {
        super(props)
        this.state = { content: '' }
    }

    onSubmit(event) {
        event.preventDefault()

        console.log(this.state.content, this.props.songId);

        this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId
            }
        }).catch((err) => {
            const errors = err.graphQLErrors.map((error) => {
                return error.message;
              });
            console.log(errors);
        })

    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add a Lyric</label>
                <input
                    value={this.state.content}
                    onChange={event => this.setState({ content: event.target.value })}
                />
            </form>
        )
    }
}

const mutation = gql`
mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id,
        content
      },
    }
  }
`;

export default graphql(mutation)(LyricCreate);