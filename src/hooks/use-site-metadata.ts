import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              bio
              name
              photo
              contacts {
                rss
                line
                email
                linkedin
                instagram
                twitter
                github
                devto
                stackoverflow
                youtube
              }
            }
            menu {
              path
              label
            }
            url
            title
            subtitle
            copyright
            disqusShortname
          }
        }
      }
    `,
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
