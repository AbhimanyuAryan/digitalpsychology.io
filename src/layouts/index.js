import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';
import Header from '../components/Header';
import config from '../../gatsby-config';
import '../css/global';

function Template(props) {
    const meta = config.siteMetadata;

    const Root = styled.div`
        display: flex;
        flex-direction: column;
        height: 100vh;

        @media (min-width: 700px) {
            flex-direction: row;
        }
    `;

    const Main = styled.div`
        flex: 1;
        overflow: auto;
    `;

    return (
        <Root>
            <Header />
            <Main>
                {props.children()}
                <Footer twitterHandle={meta.twitterHandle} />
            </Main>
        </Root>
    );
}

Template.propTypes = {
    // This is not a typo. It has to be a function:
    // https://github.com/gatsbyjs/gatsby/pull/940#issuecomment-300878300
    children: PropTypes.func
};

export default Template;
