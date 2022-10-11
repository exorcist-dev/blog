import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Abyss' Blog`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-image",
        {
            resolve: "gatsby-source-prismic",
            options: {
                repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
                accessToken: process.env.PRISMIC_ACCESS_TOKEN,
                customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
            },
        },
        {
            resolve: "gatsby-plugin-prismic-previews",
            options: {
                repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
                accessToken: process.env.PRISMIC_ACCESS_TOKEN,
            },
        },
    ],
};

export default config;
