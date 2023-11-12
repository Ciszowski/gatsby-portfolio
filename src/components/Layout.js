/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/global.css';
import NavBar from './Navbar';
import { graphql, useStaticQuery } from 'gatsby';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);
  const copyright = data.site.siteMetadata.copyright;
  return (
    <div className='layout'>
      <NavBar />
      <div className='content'>{children}</div>
      <footer>
        <p> {copyright} </p>
      </footer>
    </div>
  );
}
