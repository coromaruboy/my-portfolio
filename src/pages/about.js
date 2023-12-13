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
        const wrokInfo = data.allDataJson.edges[0].node.work;

        return (
            <>
                <div className='container rounded-md mt-5 bg-slate-200 border border-black p-5'>
                    <div className='mt-5 mb-5 text-2xl font-bold border-b border-indigo-400'>基本情報</div>
                    <div className='container'>
                        <div>・名前：{basicInfo.nickName}</div>
                        <div>・出身：{basicInfo.birthPlace}</div>
                        <div>・年齢：{basicInfo.age}歳(2023年)</div>
                        <div>・趣味：{basicInfo.hobbies.join(', ')}</div>
                    </div>
                    <div className='mt-5 mb-5 text-2xl font-bold'>仕事</div>

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