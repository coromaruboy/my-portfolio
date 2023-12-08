import React from 'react';
import Layout from '../components/layout';
import Tanplate from "../components/template"
import LOGO_IMG from "../../static/images/icon.png"

const title = "About";

const About = () => {

    return (
        <Layout>
            <Tanplate title={title} />
            <div>
                <div>目黒のIT企業で働いています。<br /></div>
                <div>2022年より未経験新卒としてプログラミングを勉強し始めました。<br /></div>
                <div>現在は働きながら、趣味でプログラミングの勉強をしています。<br /></div>
            </div>
            <div className='grid grid-cols-12 mt-12 flex'>
                <div className='col-span-4'>
                    <img src={LOGO_IMG} alt="logo" width={180} height={120}/>
                </div>
                <div className="grid grid-cols-12 flex col-span-8">
                    <div className='col-span-3'>
                        <div className='mt-1'>名前</div>
                        <div className='mt-1'>ニックネーム</div>
                        <div className='mt-1'>趣味</div>
                    </div>
                    <div className='col-span-1'>
                        <div className='mt-1'>：</div>
                        <div className='mt-1'>：</div>
                        <div className='mt-1'>：</div>
                        </div>
                    <div className='col-span-8'>
                        <div className='mt-1'>渡邊 優河 (25歳)</div>
                        <div className='mt-1'>coromaruboy (ころまるぼーい)</div>
                        <div className='mt-1'>ゲーム、プログラミング、コーヒー、自転車</div>
                        <div></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About;

export const Head = () => <title>My profile</title>