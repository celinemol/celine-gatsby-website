import { CreatePagesArgs } from "gatsby";

import * as types from "../types";

export interface ProjectsPostsQueryResult {
  allMarkdownRemark: {
    edges?: Array<types.Edge>;
  };
}

const projectPostsQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<ProjectsPostsQueryResult>(`
    {
      allMarkdownRemark(
        filter: { 
          frontmatter: { template: { in: ["project"] }, draft: { ne: true } }
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

export default projectPostsQuery;
