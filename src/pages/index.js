/* eslint-disable react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import * as styles from '../styles/home.module.css';
import Img from 'gatsby-image';

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Montréal.</p>
          <Link to='/projects' className={styles.btn}>
            My PortFolio Projects
          </Link>
        </div>
        <Img
          fluid={data.image.childImageSharp.fluid}
          style={{ maxWidth: '100%' }}
        />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    image: file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
