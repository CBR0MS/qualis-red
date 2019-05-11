import React from "react";
import { navigate } from "gatsby";
import Img from "gatsby-image";
//import Img from "gatsby-image";
import Fade from "react-reveal/Fade";
import Tags from "./Tags";

//import { parse } from "node-html-parser";

import "../style/main.scss";

const PostLink = props => {
    const { post } = props;

    // const root = parse(post.excerpt);

    // let innerText = "";

    // for (const i in root.childNodes) {
    //     if (root.childNodes[i].tagName === "p") {
    //         innerText += root.childNodes[i].text;
    //     }
    // }
    // // console.log(innerText);

    return (
        <div>
            <Fade
                bottom
                distance="100px"
                when={props.visible}
                collapse
                className="link-outer"
            >
                <div
                    className="project-link-container"
                    onClick={() => navigate(post.frontmatter.path)}
                >
                    <div className="perspective-wrapper">
                        <div className="project-link-flex first">
                            <h1 className="link-title">
                                {post.frontmatter.title}
                            </h1>
                            <Tags tags={post.frontmatter.tags} />
                            {
                                //<div className="tags" style={{ paddingTop: 10 }}>
                                // By {post.frontmatter.author}
                                //</div>
                            }
                        </div>
                        <div className="project-link-flex second">
                            {/*<p className="link-subtitle link-excerpt">
                                {innerText}
                            </p>*/}

                            <div className="link-image">
                                <Img
                                    className="project-image-link-container"
                                    fluid={
                                        post.frontmatter.image.childImageSharp
                                            .fluid
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default PostLink;
