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
                <div>会社:{workData.Company}</div>
                <div>期間:{workData.AffiliationPeriod}</div>
                <div>
                    <div>業務内容</div>
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