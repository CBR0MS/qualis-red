import React from "react";
import { navigate } from "gatsby";
import Img from "gatsby-image";
import Fade from "react-reveal/Fade";
import Tags from "./Tags";

import "../style/main.scss";

const PostLink = props => {
    const { post } = props;

    return (
        <div>
            <Fade bottom distance="100px" when={props.visible} collapse>
                <div
                    className="project-link-container"
                    onClick={() => navigate(post.frontmatter.path)}
                >
                    <div className="project-link-flex first">
                        <h1 className="link-title">{post.frontmatter.title}</h1>

                        <Img
                            className="project-image-link-container"
                            fluid={post.frontmatter.image.childImageSharp.fluid}
                            alt=""
                        />

                        <p className="link-subtitle">{post.excerpt}</p>
                        <Tags tags={post.frontmatter.tags} />
                        {
                            //<div className="tags" style={{ paddingTop: 10 }}>
                            // By {post.frontmatter.author}
                            //</div>
                        }
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default PostLink;
