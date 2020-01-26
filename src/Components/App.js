import React from 'react';

import {ErrorBoundary} from "./errorBoundary";
import {HomePage} from "./pages/HomePage";

export const App = () => {
    return (
        <ErrorBoundary>
            <HomePage/>
        </ErrorBoundary>
    )
};