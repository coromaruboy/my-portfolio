import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout"
import Template from "../components/template";

const title = "Skills";

const Skills = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const data = useStaticQuery(graphql`
        query {
            allSkillJson {
                nodes {
                    language
                    level
                    frameWork {
                        title
                        level
                    }
                }
            }
        }
    `);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const renderLevelList = () => {
        return (
            <>
                <div className="border-b border-black flex justify-between">
                    <div>レベル表</div>
                    <button onClick={handleClick} type='button' className='inline-flex justify-center leading-5 font-medium hover:text-gray-500 focus:outline-none active:text-gray-800'>
                        {(isOpen ? '△' : '▽')}
                    </button>
                </div>
                {isOpen && (
                    <>
                        <div>
                            <div>★☆☆☆☆</div>
                            <div>初学者レベル</div>
                        </div>
                        <div>
                            <div>★★☆☆☆</div>
                            <div>実務経験あり</div>
                        </div>
                        <div>
                            <div>★★★☆☆</div>
                            <div>教えることができる</div>
                        </div>
                        <div>
                            <div>★★★★☆</div>
                            <div>任せられる</div>
                        </div>
                        <div>
                            <div>★★★★★</div>
                            <div>何でもできる</div>
                        </div>
                    </>
                )}
            </>
        )
    }

    const renderSkillList = () => {
        const languages = data.allSkillJson.nodes;

        const createDummyDiv = (index) => {
            if(index > 0) return <div className="col-span-6"></div>
        } 

        const frameWorkList = (index) => {
            const currentLanguage = languages[index];
            if (currentLanguage.frameWork && currentLanguage.frameWork.length > 0) {
                return (
                    currentLanguage.frameWork.map((framework, i) => (
                    <>
                        {createDummyDiv(i)}
                        <div key={i} className="col-span-6 grid grid-cols-12">
                            <p className="col-span-6">{framework.title}</p>
                            <p  className="col-span-6">{framework.level}</p>
                        </div>
                    </>
                    ))
                );
            }
            return null;
        };

        return (
            <div className="font-body">
                {renderLevelList()}
                <div className="grid grid-cols-12">
                    <div className="col-span-6 text-xl">言語</div>
                    <div className="col-span-6">フレームワーク</div>
                </div>
                {languages.map((languageData, index) => (
                <>
                    <div className="grid grid-cols-12" key={index}>
                        <div className="col-span-6 grid grid-cols-12">
                            <h2 className="col-span-6">{languageData.language}</h2>
                            <div className="col^-span-6">{languageData.level}</div>
                        </div>
                        {frameWorkList(index)}
                    </div>
                    <hr className="mt-5 mb-5"></hr>
                </>
                ))}
            </div>
        )
    };

    return (
        <Layout>
            <Template title={title} />
            {renderSkillList()}
        </Layout>
    );
};

export default Skills;

export const Head = () => <title>My Skills</title>