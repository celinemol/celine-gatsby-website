import React from "react";
import renderer from "react-test-renderer";

import { StaticQuery, useStaticQuery } from "gatsby";

import * as mocks from "@/mocks";

import ProjectsTemplate from "./ProjectsTemplate";

const mockedStaticQuery = StaticQuery as jest.Mock;
const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("ProjectsTemplate", () => {
  beforeEach(() => {
    mockedStaticQuery.mockImplementationOnce(({ render }) =>
      render(mocks.siteMetadata),
    );
    mockedUseStaticQuery.mockReturnValue(mocks.siteMetadata);
  });

  it("renders correctly", () => {
    const props = {
      data: {
        allMarkdownRemark: mocks.allMarkdownRemark,
      },
      pageContext: mocks.pageContext,
    };

    const tree = renderer.create(<ProjectsTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
