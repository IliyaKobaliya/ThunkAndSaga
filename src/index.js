import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {store} from './Store'
import {App} from './Components/App'

const renderApp = () => <Provider store={store}><App/></Provider>;

const root = document.getElementById('root');
render(renderApp(), root);