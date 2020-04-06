import React from "react"
import {render} from '@testing-library/react';
import RsvpPage from "../rsvp";
import { useStaticQuery } from "gatsby";

describe("Rsvp Form", () => {

  useStaticQuery.mockReturnValue({
    site: {
      siteMetadata: {
        title: `Test`
      },
    }
  });
  it("renders correctly", () => {
    const {getByLabelText} = render(
        <RsvpPage/>
    );

    getByLabelText("RSVP");
  })
});
