import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';

const client = new ApolloClient({})
// a new instance of apollo client to be passed into apollo provider
// "{}" this is an empty configuration object

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList/>
  </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
