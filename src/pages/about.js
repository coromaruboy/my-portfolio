import React from 'react';
import Layout from '../components/layout';
import Template from "../components/template"

const title = "About";

const About = () => {

    return (
        <Layout>
            <Template title={title} />
            <div>
                <div>目黒のIT企業で働いています。<br /></div>
                <div>2022年より未経験新卒としてプログラミングを勉強し始めました。<br /></div>
                <div>現在は働きながら、趣味でプログラミングの勉強をしています。<br /></div>
            </div>
        </Layout>
    )
}

export default About;

export const Head = () => <title>My profile</title>