import React from "react";

import { Link } from "gatsby";

import type { Node } from "@/types";

import { Author } from "./Author";
import { Comments } from "./Comments";
import { Content } from "./Content";
import { Meta } from "./Meta";
import { Tags } from "./Tags";

import * as styles from "./Post.module.scss";

interface Props {
  post: Node;
}

const Post: React.FC<Props> = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date, template} = post.frontmatter; 

  let navigationText = 'All Articles';
  let navigationLink = '/';
  let canShowMetaDetails = true;
  let canShowComment = true;

  if (template === 'project') {
    navigationText = 'All Projects';
    navigationLink = '/projects';
    canShowMetaDetails = false;
    canShowComment = false;
  } else if (template === 'news') {
    navigationText = 'All News';
    navigationLink = '/news';
    canShowMetaDetails = false;
    canShowComment = false;
  }

  return (
    <div className={styles.post}>
      <Link className={styles.button} to={navigationLink}> 
        {navigationText}
      </Link>

      <div className={styles.content}>
        <Content body={html} title={title} />
      </div>

      <div className={styles.footer}>
        {
          canShowMetaDetails
          ? <React.Fragment>
              <Meta date={date} />
              {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
          </React.Fragment>
          : ''
        }
        <Author />
      </div>
      {
        canShowComment
        ? <div className={styles.comments}>
            <Comments postSlug={slug} postTitle={post.frontmatter.title} />
          </div>
        : ''
      }
      
    </div>
  );
};

export default Post;
