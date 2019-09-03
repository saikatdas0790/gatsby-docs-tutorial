import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Img
        className="headshot"
        fixed={data.file.childImageSharp.fixed}
        alt="headshot"
      ></Img>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default IndexPage;
