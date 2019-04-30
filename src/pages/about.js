import React from "react";
import Fade from "react-reveal/Fade";

import Navbar from "../components/Navbar";
import "../style/main.scss";

const About = props => {
    if (typeof document !== "undefined") {
        document.title = "About - Qualis Red";
    }

    return (
        <div>
            <Navbar />
            <Fade bottom distance="100px">
                <div className="project-container">
                    <div className="project-post">
                        <div
                            className="project-post-content"
                            style={{ padding: 20, maxWidth: 800 }}
                        >
                            <h1>What is this?</h1>
                            <p>
                                A blog run by{" "}
                                <a href="https://christianbroms.com">
                                    Christian Broms
                                </a>
                                .
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
                                , in which he lays out a thought experiment
                                about subjective experience. It goes like this:
                            </p>
                            <p>
                                Suppose Mary is raised in a black and white
                                room, where she has black and white books, food,
                                TV, and so on. She learns all that there is to
                                know about the physical world, including all
                                brain states and their properties. One day, when
                                Mary has learned all that there is to learn, she
                                is let out of the room and given a red rose. In
                                that moment, she learns something new: what it
                                is like to see red. Hence, Mary did not know
                                everything about the world.
                            </p>
                            <p>
                                Jackson concludes that all knowledge{" "}
                                <em>cannot</em> be physical; there must be some
                                non physical part of consciousness.
                            </p>
                            <p>
                                This argument essentially disproves physicalism,
                                which is the idea that all conscious states can
                                be reduced to brain states. For many of those in
                                the fields of Congitive Science and
                                Neuroscience, this is an unacceptable
                                conclusion. What it results in is{" "}
                                <em>epiphenomenalism</em>, the idea that the
                                physcial brain states give rise to conscious
                                states, yet these states have no causal
                                influence on the world.
                            </p>
                            <p>
                                However, epiphenomenalism is nonsensical; it
                                seems obvious that our thoughts, emotions, and
                                feelings have an effect on our behavior. So, how
                                to disprove the knoweledge argument?
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default About;
