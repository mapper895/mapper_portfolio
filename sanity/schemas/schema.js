// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import testimonials from "./testimonials";
import pageInfo from "./pageInfo";
import experience from "./experience";
import project from "./projects";
import skill from "./skill";
import social from "./social";
import contact from "./contact";
import brands from "./brands";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    contact,
    pageInfo,
    testimonials,
    experience,
    project,
    skill,
    social,
    brands,
  ]),
});
