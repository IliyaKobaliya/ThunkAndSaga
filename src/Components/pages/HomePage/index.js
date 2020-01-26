import React from 'react'

import {PageTemplate} from "../../templates/pageTamplate";
import {Header} from "../../organisms/Header";
import {Footer} from "../../organisms/Footer";
import {Home} from "../../organisms/Home";


export const HomePage = () => {
    return (
        <PageTemplate
            header={<Header/>}
            footer={<Footer/>}
        >
            <Home/>
        </PageTemplate>
    )
};