import React from "react";
import renderer from "react-test-renderer";

import { StaticQuery, useStaticQuery } from "gatsby";

import * as mocks from "@/mocks";

import NewsTemplate from "./NewsTemplate";

const mockedStaticQuery = StaticQuery as jest.Mock;
const mockedUseStaticQuery = useStaticQuery as jest.Mock;

describe("NewsTemplate", () => {
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

    const tree = renderer.create(<NewsTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
