/* eslint-disable react/prop-types */
import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/project-details.module.css';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const ProjectDetails = ({ data }) => {
  const { html } = data.project;
  const { title, stack, featuredImg } = data.project.frontmatter;
  return (
    <Layout>
      <div className={styles.details}>
        <h2> {title} </h2>
        <h3> {stack} </h3>
        <div className={styles.featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export default ProjectDetails;

export const query = graphql`
  query ProjectDetails($slug: String) {
    project: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
