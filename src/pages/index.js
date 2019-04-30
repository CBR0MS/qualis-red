import React, { useState } from "react";
import { graphql } from "gatsby";
import Fade from "react-reveal/Fade";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PostLink from "../components/PostLink";

import "../style/main.scss";

const uuidv4 = require("uuid/v4");

const Index = ({
    data: {
        allMarkdownRemark: { edges }
    }
}) => {
    if (typeof document !== "undefined") {
        document.title = "Posts - Qualis Red";
    }

    const [loadedTags, setLoadedTags] = useState(false);
    const [tags, setTags] = useState(["everything"]);
    const [activeTags, setActiveTags] = useState("");

    if (!loadedTags) {
        let allTags = tags;
        edges.map(edge => {
            const newTags = edge.node.frontmatter.tags.filter(tag => {
                return !allTags.includes(tag);
            });
            allTags = allTags.concat(newTags);
            return false;
        });

        setTags(allTags);
        setLoadedTags(true);
        if (typeof window !== "undefined") {
            window.setTimeout(() => {
                setActiveTags("everything");
            }, 50);
        }
    }

    const tagButtons = tags.map(tag => {
        // filtering and activation for multiple tags at a time
        // const setActive = tag =>
        //     setActiveTags(activeTags.filter(value => value !== tag));
        // const setInactive = tag => setActiveTags(activeTags.concat(tag));

        return (
            <span
                className={`tag-button ${
                    activeTags.includes(tag) ? "enabled" : ""
                }`}
                key={uuidv4()}
                onClick={() => {
                    setActiveTags(tag);
                }}
            >
                {tag}
            </span>
        );
    });

    const goodEdges = edges.filter(edge => {
        const includedTags = edge.node.frontmatter.tags.map(tag => {
            return activeTags.includes(tag);
        });
        return includedTags.includes(true);
    });

    const posts = edges.map((edge, index) => (
        <PostLink
            key={edge.node.id}
            post={edge.node}
            pos={index}
            visible={
                activeTags.includes("everything") || goodEdges.includes(edge)
            }
        />
    ));

    return (
        <div>
            <Navbar />
            <div style={{ minHeight: "100vh", marginBottom: 80 }}>
                <Fade bottom distance="0px">
                    <div className="project-list-head outer">
                        <div className="project-head-tags">{tagButtons}</div>
                    </div>
                </Fade>
                <div className="posts-outer">{posts}</div>
            </div>
            <Footer />
        </div>
    );
};

export default Index;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 280)
                    id
                    frontmatter {
                        path
                        title
                        author
                        tags
                        image {
                            childImageSharp {
                                fluid(maxWidth: 400) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`;
