# Overview
Chorus' standard CI build (+in future release) YAML template for our own npm packages.

# Usage
Please read the guidance on using our build templates [here](https://github.com/ChorusSolutions/chorus-yaml-ci).
Note especially the bit on targetting a specific version, not master!

You can see a summary of releases [here](releases.md).

## Creating Your Build
Call the template from your project's yml file like this:

```yaml
queue: Hosted VS2017

resources:
  repositories:
  - repository: npm-lib-ci
    type: github
    endpoint: github-endpoint
    name: ChorusSolutions/npm-lib-ci
    ref: refs/tags/{TAG NAME}

steps:

  - template: template/npm-lib-ci.yml@npm-lib-ci
```

Replace {TAG NAME} with the tag in this GitHub repo you wish to target.

You can add other steps before/after the template call as needed.
But currently the template will publish artifacts, so we may need to change it as requirements become clear.

## Parameters
These params are optional:

| Parameter | Example | Description |
| --------- | ------- | ----------- |
| packageJsonFolderPath   | 'demo' | (Optional) The path to the folder containing the package.json. If you have this at the repo root (normal) just omit the param |
| artifactName | 'Package' | (Optional) Name of the artifact to create |
| filesToIncludeInDrop | (see example below) | (Optional) Files to include in the artifact drop, out of the library build step |

### filesToIncludeInDrop
These need to have new lines between each, so use a | like this:

```yaml
  - template: template/npm-lib-ci.yml@npm-lib-ci
      filesToIncludeInDrop: |
            build\lib\lib\**
            package.json
            README.md
```

# Contributing
This GitHub repo requires PR and working CI build, as for normal Chorus repos in VSTS.

## Demo
A standard @chorus/create-react-app-library project is included in the demo folder.