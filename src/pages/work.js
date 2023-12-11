import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Template from "../components/template"

const title = "Work";

const Work = () => {
    const data = useStaticQuery(graphql`
        query {
            allWorkJson {
                nodes {
                    Company
                    AffiliationPeriod
                    EmploymentStatus
                    WorkDescription
                    Works {
                        ProjectName
                        ProjectPeriod
                        Overview
                        ResponsiblePhase
                        MainProcessing
                        langage
                        OS
                        DB
                    }
                }
            }
        }
    `)

    const renderWorkList = () => {
        const workData = data.allWorkJson.nodes[0];

        return (
            <>
                <div>基本情報</div>
                <hr></hr>
                <div>
                    <div>・企業：</div>
                    <div>{workData.Company}</div>
                </div>
                <div>・期間：{workData.AffiliationPeriod}</div>
                <div>・業務内容:
                    {workData.WorkDescription.map((description, index) => {
                        return <div key={index}>{description}</div>
                    })}
                </div>
                <div>
                    {workData.Works && workData.Works.map((work, index) => (
                    <div key={index}>
                        <div>プロジェクト名: {work.ProjectName}</div>
                    </div>
                    ))}
                </div>
            </>
        )
    }

    return (
        <Layout>
            <Template title={title} />
            {renderWorkList()}
        </Layout>
    )
}

export default Work;