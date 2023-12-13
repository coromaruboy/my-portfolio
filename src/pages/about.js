import React, { useRef, useEffect } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Layout from '../components/layout';
import Template from "../components/template"

const title = "About";

const About = () => {
    const [isOpen, setIsOpen] = React.useState({});
    const dropdownRefs = useRef([]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        dropdownRefs.current.forEach((ref, index) => {
            if (ref && !ref.contains(event.target)) {
                setIsOpen(prevState => ({ ...prevState, [index]: false }));
            }
        });
    };

    const toggleDropDown = (index) => {
        setIsOpen(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }))
    };

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
        const workInfo = data.allDataJson.edges[0].node.work;
        const developmentHistory = data.allDataJson.edges[0].node.developmentHistory;

        return (
            <>
                <div className='container rounded-md mt-5 bg-slate-200 border border-black p-5'>
                    <div className='mb-5 text-2xl font-bold border-b border-indigo-400'>基本情報</div>
                    <div className='container'>
                        <div>・名前：{basicInfo.nickName}</div>
                        <div>・出身：{basicInfo.birthPlace}</div>
                        <div>・年齢：{basicInfo.age}歳(2023年)</div>
                        <div>・趣味：{basicInfo.hobbies.join(', ')}</div>
                    </div>
                    <div className='mt-5 mb-5 text-2xl font-bold  border-b border-indigo-400'>仕事</div>
                    <div className='container'>
                        <div>・経歴：{workInfo.career}</div>
                        <div>・職場：{workInfo.workPlace}</div>
                    </div>
                    <div className='mt-5 mb-5 text-2xl font-bold  border-b border-indigo-400'>業務内容</div>
                    <div className='container pr-5 pl-5'>
                        {developmentHistory.map((item, index) => (
                            <div key={index} className='mt-4'>
                                <div ref={el => dropdownRefs.current[index] = el} className='text-xl font-bold border-b border-black flex justify-between'>
                                    {index + 1}：{item.projectName}
                                    <button onClick={() => toggleDropDown(index)} type='button' className='inline-flex justify-center leading-5 font-medium hover:text-gray-500 focus:outline-none active:text-gray-800' aria-expanded={isOpen[index]}>
                                        {(isOpen[index] ? '△' : '▽')}
                                    </button>
                                </div>
                                {isOpen[index] && (
                                    <>
                                        <div>・期間：{item.projectPeriod}</div>
                                        <div>・概要：{item.overview}</div>
                                        <div>・担当：{item.responsiblePhase.join(', ')}</div>
                                        <div>・処理：{item.mainProcessing.join(', ')}</div>
                                        <div>・言語：{item.language}</div>
                                        <div>・OS：{item.os}</div>
                                        <div>・DB：{item.db}</div>
                                    </>
                                )}
                            </div>
                        ))}
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