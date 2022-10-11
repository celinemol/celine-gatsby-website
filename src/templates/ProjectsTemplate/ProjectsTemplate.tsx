import React from "react";

import { graphql } from "gatsby";

import { Feed } from "@/components/Feed";
import { Layout } from "@/components/Layout";
import { Page } from "@/components/Page";
// import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { useSiteMetadata } from "@/hooks";
import { AllMarkdownRemark, PageContext } from "@/types";

interface Props {
  data: {
    allMarkdownRemark: AllMarkdownRemark;
  };
  pageContext: PageContext;
}

const ProjectsTemplate: React.FC<Props> = ({ data }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  // const { pagination } = pageContext;
  // const { currentPage, hasNextPage, hasPrevPage, prevPagePath, nextPagePath } =
  //   pagination;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = `Projects - ${siteTitle}`;
    // currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar isIndex />
      <Page>
        <Feed edges={edges} />
        {/* <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        /> */}
      </Page>
    </Layout>
  );
};
// TODO: Add pagination back in.
export const query = graphql`
  query ProjectsTemplate {
    allMarkdownRemark(
      limit: 20
      skip: 0
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "project" }, draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            categorySlug
            slug
          }
          frontmatter {
            description
            category
            title
            date
            tags
            links {
              title
              link
            }
            template
          }
        }
      }
    }
  }
`;

export default ProjectsTemplate;
