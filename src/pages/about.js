import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Layout from '../components/layout';
import Template from "../components/template"

const title = "About";

const About = () => {

    const data = useStaticQuery(graphql`
        query ProfileQuery {
            allDataJson {
                edges {
                    node {
                        basicInformation {
                            nickName
                            birthPlace
                            age
                            hobbies
                        }
                        work {
                            career
                            workPlace
                        }
                        developmentHistory {
                            projectName
                            projectPeriod
                            overview
                            responsiblePhase
                            mainProcessing
                            language
                            os
                            db
                        }
                    }
                }
            }
        }
    `);

    const renderAboutList = () => {

        const basicInfo = data.allDataJson.edges[0].node.basicInformation;

        return (
            <>
                <div className='container mt-5'>
                    <div>基本情報</div>
                    <hr className='mb-2 h-px bg-black'/>
                    <div className='container rounded-md bg-slate-200'>
                        <div>・ニックネーム：{basicInfo.nickName}</div>
                        <div>・出身：{basicInfo.birthPlace}</div>
                        <div>・年齢：{basicInfo.age}歳(2023年)</div>
                        <div>・趣味：
                        {basicInfo.hobbies.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <Layout>
            <Template title={title} />
            <div>
                <div>目黒のIT企業で働いています。<br /></div>
                <div>2022年より未経験新卒としてプログラミングを勉強し始めました。<br /></div>
                <div>現在は働きながら、趣味でプログラミングの勉強をしています。<br /></div>
            </div>
            {renderAboutList()}
        </Layout>
    )
}

export default About;

export const Head = () => <title>My profile</title>