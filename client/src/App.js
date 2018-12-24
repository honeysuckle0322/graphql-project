

import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';

// components
import Home from './Home';
import Detail from './Detail';

class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <HashRouter>
                    <>
                        <Route
                            exact
                            path={'/'}
                            component={Home}
                        />
                        <Route
                            path={'/details/:movieId'}
                            component={Detail}
                        />
                        <Route />
                    </>
                </HashRouter>
            </ApolloProvider>
        );
    }
};

export default App;

