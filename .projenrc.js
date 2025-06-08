const { javascript, awscdk } = require("projen");
const project = new javascript.NodeProject({
  defaultReleaseBranch: "main",
  name: "oss-cobol-aws",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

// Add CDK subproject
new awscdk.AwsCdkTypeScriptApp({
  parent: project,
  outdir: "cdk",
  name: "oss-cobol-aws-cdk",
  defaultReleaseBranch: "main",
  cdkVersion: "2.125.0",
  description: "CDK infrastructure for OSS COBOL AWS project",
  packageManager: javascript.NodePackageManager.YARN,
  prettier: true,
  projenrcTs: true,
});

project.synth();