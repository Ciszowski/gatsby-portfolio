/* eslint-disable react/prop-types */
import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/projects.module.css';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const Projects = ({ data }) => {
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2> PortFolio </h2>
        <h3> Projects & websites i&apos;ve created </h3>
      </div>
      <div className={styles.projects}>
        {projects.map((project) => (
          <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
            <div key={project.id}>
              <h3> {project.frontmatter.title} </h3>
              <p> {project.frontmatter.stack} </p>
              <Img
                fluid={project.frontmatter.thumb.childImageSharp.fluid}
                style={{ maxWidth: '100%' }}
              />
            </div>
          </Link>
        ))}
      </div>
      <p> Like what you see? Email me at {contact} for a quote </p>
    </Layout>
  );
};
export default Projects;

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
