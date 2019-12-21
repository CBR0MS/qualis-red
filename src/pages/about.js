import React from "react";
import Fade from "react-reveal/Fade";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import "../style/main.scss";

const About = props => {
    return (
        <div>
            <SEO title={`About - CB Thoughts`} />
            <Navbar />
            <Fade bottom distance="100px">
                <div className="project-container">
                    <div className="project-post">
                        <div
                            className="project-post-content"
                            style={{
                                padding: 20,
                                maxWidth: 800,
                                marginBottom: 80
                            }}
                        >
                            <h1>What is this?</h1>
                            <p>
                                The thoughts of{" "}
                                <a href="https://christianbroms.com">
                                    Christian Broms
                                </a>
                                .
                            </p>

                            <h1>What's posted here?</h1>
                            <p>
                                A fairly random assortment of essays about
                                topics ranging from neuroscience to YouTube
                                videos.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default About;
