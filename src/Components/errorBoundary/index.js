import React, {Component} from 'react';

const ErrorPage = <div>Error</div>;

export class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return ErrorPage
        } else {
            return this.props.children;
        }
    }
}