import { cdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';

const dependencies = ['projen@~0'];

const project = new cdk.JsiiProject({
  author: 'Manuel Vogel',
  authorAddress: 'mavogel@posteo.de',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'projen-cdk-hugo-pipeline',
  projenrcTs: true,
  repositoryUrl: 'git@github.com:mavogel/projen-cdk-hugo-pipeline.git',
  releaseToNpm: true,
  npmAccess: NpmAccess.PUBLIC,
  majorVersion: 0,

  deps: dependencies,
  peerDeps: dependencies,
  // devDeps: dependencies,
  description: 'A external projen component to create a Hugo pipeline with AWS CDK.',
});
project.gitignore.exclude('test/hugo-pipe-test-*');
project.synth();