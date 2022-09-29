interface Frontmatter {
  date: string;
  title: string;
  category: string;
  template: string;
  description?: string;
  tags?: Array<string>;
  socialImage?: string;
  links?: [{
    title: string,
    link: string,
  }];
}

export default Frontmatter;
