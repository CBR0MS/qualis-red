import React from "react";
import Fade from "react-reveal/Fade";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import "../style/main.scss";

const About = props => {
    return (
        <div>
            <SEO title={`About - Qualis Red`} />
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
                                A blog run by{" "}
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
                            <h1>What's with the name?</h1>
                            <p>
                                <em>Qualis</em> is a latin word meaning{" "}
                                <em>of what sort</em> or <em>of what kind</em>{" "}
                                and is the root of the word <em>Qualia</em>, the{" "}
                                <a href="https://plato.stanford.edu/entries/qualia/">
                                    concept of subjective experience.
                                </a>
                            </p>
                            <p>
                                The red refers to a famous paper by Frank
                                Jackson called{" "}
                                <a href="https://pdfs.semanticscholar.org/d5f0/b1d40bd79be8ec2419e824771300ac5db204.pdf">
                                    <em>What Mary Didn't Know</em>
                                </a>
                                , which contains a thought experiment about
                                subjective experience. The conclusion of the
                                argument is that <em>physicalism</em>—the idea
                                that the entire world, consciousness included,
                                can be explained in purely physical terms—is
                                false.
                            </p>

                            <p>
                                <em>Qualis Red</em>—the quality of red—what is
                                it like to see red, this particular red, now?
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default About;
