import React from 'react';
import Layout from '../components/layout';
import Tanplate from '../components/template';

const title = "Skills";

const article = "Java ★★☆☆☆";

const Skills = () => {
    return (
        <Layout>
            <Tanplate title={title} />
            <div>{article}</div>
        </Layout>
    )
}

export default Skills;

export const Head = () => <title>My Skills</title>