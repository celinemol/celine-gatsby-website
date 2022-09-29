import React from "react";

import { Link } from "gatsby";

import { Edge } from "@/types";

import * as styles from "./Feed.module.scss";

type Props = {
  edges: Array<Edge>;
};

const Feed: React.FC<Props> = ({ edges }: Props) => (
  <div className={styles.feed}>
    {edges.map((edge) => (
      <div className={styles.item} key={edge.node.fields.slug}>
        <div className={styles.meta}>
          <time
            className={styles.time}
            dateTime={new Date(edge.node.frontmatter.date).toLocaleDateString(
              "en-US",
              { year: "numeric", month: "long", day: "numeric" },
            )}
          >
            {new Date(edge.node.frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </time>
          <span className={styles.divider} />
          {
            <span className={styles.category}>
              <Link to={edge.node.fields.categorySlug} className={styles.link}>{edge.node.frontmatter.category}</Link>
            </span>
          }
        </div>
        <h2 className={styles.title}>
          {
            edge.node.frontmatter.title
            // edge.node.frontmatter.template === 'post'
            //   ? <Link className={styles.link} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
            //   : edge.node.frontmatter.title
          }
        </h2>
        <p className={styles.description}>
          {edge.node.frontmatter.description}
        </p>
        {/* Re-Enable to read posts on internal website */}
        {/* {
          edge.node.frontmatter.template === 'post'
            ? <Link className={styles.more} to={edge.node.fields.slug}>Read</Link>
            : ''
        } */}
        {
          edge.node.frontmatter.links && edge.node.frontmatter.links.length
            ? (
              edge.node.frontmatter.links.map((linkObj) => (
                <a key={linkObj.link} href={linkObj.link} 
                  //  target={linkObj.internal ? '' : '_blank'}
                  className={styles.projectlink}>
                  {linkObj.title}
                </a>
              ))
            )
            : ''
        }
      </div>
    ))}
  </div>
);

export default Feed;
