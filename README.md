# Lab 1.4: CI with GitHub Actions

## Project Overview

This repository is a small Node.js JavaScript project for practicing continuous integration with GitHub Actions.

The sample app implements a calculator with four operations:

- `add`
- `subtract`
- `multiply`
- `divide`

The project uses ESLint for linting, Jest for automated tests, and GitHub Actions to run CI checks on pull requests, pushes to `main`, and manual workflow runs.

## Folder Structure

```text
.
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   └── calculator.js
├── tests/
│   └── calculator.test.js
├── .gitignore
├── eslint.config.js
├── package-lock.json
├── package.json
└── README.md
```

## Install Dependencies

```bash
npm ci
```

Use `npm ci` when a `package-lock.json` file exists. It installs the exact dependency versions recorded in the lockfile, which makes local development and CI consistent.

## Run Lint Locally

```bash
npm run lint
```

This command runs ESLint across the project. The CI workflow fails if linting fails.

## Run Tests Locally

```bash
npm test
```

This command runs the Jest test suite. The CI workflow fails if any test fails.

## How the GitHub Actions Workflow Works

The workflow is defined in `.github/workflows/ci.yml`.

It runs when:

- A pull request is opened or updated.
- Code is pushed to the `main` branch.
- A user manually starts the workflow with `workflow_dispatch`.

The workflow uses:

- `ubuntu-latest` as the runner.
- Node.js `20`.
- `actions/checkout` to check out the repository.
- `actions/setup-node` to install and configure Node.js.
- `npm ci` to install dependencies from the lockfile.
- `npm run lint` to check code style and common JavaScript issues.
- `npm test` to run automated tests.

If either linting or tests fail, the workflow job fails.

## How to Check Workflow Logs

1. Open the repository on GitHub.
2. Select the **Actions** tab.
3. Choose the latest **CI** workflow run.
4. Open the **build** job.
5. Expand each step to review command output.

The most useful steps for debugging are usually:

- **Install dependencies**
- **Run lint**
- **Run tests**

## How to Debug CI Failures

Start by reproducing the failure locally:

```bash
npm ci
npm run lint
npm test
```

Common fixes:

- If `npm ci` fails, confirm `package-lock.json` is committed and matches `package.json`.
- If lint fails, read the ESLint output and update the file and line reported.
- If tests fail, read the Jest failure message, fix the source code or test expectation, and run `npm test` again.
- If CI passes locally but fails on GitHub, check that the workflow uses the expected Node.js version and that all required files were committed.

## Creating a Pull Request and Verifying CI

1. Commit all project files.
2. Push a feature branch to GitHub.
3. Open a pull request into `main`.
4. Wait for the **CI** workflow check to run.
5. Open the workflow logs if the check fails.
6. Merge the pull request only after CI passes.

## Lab 1.4 Completion Checklist

- [x] Node.js JavaScript project created.
- [x] Calculator source file added.
- [x] ESLint configured.
- [x] Jest configured.
- [x] At least two tests added.
- [x] Tests cover add, subtract, multiply, divide, and divide by zero.
- [x] GitHub Actions workflow created at `.github/workflows/ci.yml`.
- [x] Workflow runs on pull requests.
- [x] Workflow runs on push to `main`.
- [x] Workflow supports manual runs.
- [x] Workflow uses `ubuntu-latest`.
- [x] Workflow uses Node.js 20.
- [x] Workflow runs `npm ci`.
- [x] Workflow runs `npm run lint`.
- [x] Workflow runs `npm test`.