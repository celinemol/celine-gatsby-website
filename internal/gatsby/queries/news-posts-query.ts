import { CreatePagesArgs } from "gatsby";

import * as types from "../types";

export interface NewsPostsQueryResult {
  allMarkdownRemark: {
    edges?: Array<types.Edge>;
  };
}

const newsPostsQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<NewsPostsQueryResult>(`
    {
      allMarkdownRemark(
        filter: { 
          frontmatter: { template: { in: ["news"] }, draft: { ne: true } }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return result?.data?.allMarkdownRemark;
};

export default newsPostsQuery;
