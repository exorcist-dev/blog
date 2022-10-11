import * as React from "react";
import { HeadFC, useStaticQuery, graphql } from "gatsby";

const IndexPage: React.FC<{ data: any }> = ({ data: postData }) => {
    const posts: Queries.PrismicPost[] = postData.allPrismicPost.nodes;

    return (
        <main>
            {/* <h1>{data.site.siteMetadata?.title ?? ""}</h1> */}
            {posts.map((x) => (
                <div
                    style={{
                        border: "1px black solid",
                    }}
                >
                    <h1>{x.data.title?.text}</h1>
                    <span>Released: {x.data.release_date}</span>
                </div>
            ))}
            <pre>{JSON.stringify(posts, null, 4)}</pre>
        </main>
    );
};

export const query = graphql`
    query HomePageData {
        allPrismicPost(sort: { fields: data___release_date, order: DESC }) {
            nodes {
                data {
                    title {
                        text
                    }
                    release_date(formatString: "DD-MM-YYYY")
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Abyss Blog</title>;
