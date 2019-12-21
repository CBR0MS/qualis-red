const path = require(`path`);

module.exports = {
    siteMetadata: {
        title: `Thoughts`,
        author: `Christian Broms`,
        siteUrl: `https://thoughts.christianbroms.com`,
        description: `Posts ranging from Neuroscience to YouTube videos.`,
        keywords: [
            `Philosophy`,
            `Psychology`,
            `Neuroscience`,
            `Culture`,
            `Cognitive Science`,
            `Human Computer Interation`
        ]
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/static/uploads`,
                name: "uploads"
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/posts`,
                name: "markdown-pages"
            }
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: ["gatsby-remark-copy-linked-files"]
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                        options: {
                            name: "uploads"
                        }
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                            backgroundColor: "transparent",
                            wrapperStyle: "border-radius: 10px;",
                            showCaptions: true
                        }
                    },
                    `gatsby-remark-static-images`
                ]
            }
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: "./src/favicon.png",

                appName: null,
                appDescription: null,
                lang: "en-US",
                background: "#ededed",
                theme_color: "#104eb1",
                display: "standalone",
                start_url: "/"
            }
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify-cms`
    ]
};
