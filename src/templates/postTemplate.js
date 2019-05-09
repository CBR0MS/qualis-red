import React from "react";
import { graphql } from "gatsby";
import { parse } from "node-html-parser";

import Img from "gatsby-image";
import Fade from "react-reveal/Fade";

import Navbar from "../components/Navbar";
import Tags from "../components/Tags";
import Footer from "../components/Footer";

import "../style/main.scss";

const uuidv4 = require("uuid/v4");

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { markdownRemark } = this.props.data;
    const { frontmatter, html } = markdownRemark;

    if (typeof document !== "undefined") {
      document.title = `${frontmatter.title} - Qualis Red`;
    }

    const root = parse(html);

    let sections = [];

    for (const i in root.childNodes) {
      sections = sections.concat(root.childNodes[i]);
    }
    const sectionTrees = sections.map(value => (
      <Fade bottom distance="10px" key={uuidv4()}>
        <div dangerouslySetInnerHTML={{ __html: value.toString() }} />
      </Fade>
    ));

    this.setState({ sections: sectionTrees });
  }

  render() {
    const { markdownRemark } = this.props.data;
    const { frontmatter } = markdownRemark;

    let content = <div />;

    if (this.state.sections) {
      content = (
        <div className="post-content-wrapper">
          <div className="project-post-content">
            <div className="project-post-section">{this.state.sections} </div>
          </div>
        </div>
      );
    }
    const head = (
      <div className="post-head-wrapper">
        <Fade bottom distance="100px">
          <div className="project-head project-post-content">
            <h1 className="page-head">{frontmatter.title}</h1>
            <div className="page-head">
              <Tags tags={frontmatter.tags} right />
            </div>

            <Img
              className="project-image-container"
              fluid={frontmatter.image.childImageSharp.fluid}
              alt=""
            />
            <div className="page-head dark">
              <span>By {frontmatter.author}</span>
              <span style={{ float: "right" }}>{frontmatter.date}</span>
            </div>
          </div>
        </Fade>
      </div>
    );

    return (
      <div>
        <Navbar />

        <div className="project-container">
          <div className="project-post">
            {head}
            {content}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Template;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
