// GitHub Pages serves this repo at /portfolio-test/, not the domain root,
// so the base path only applies to the GitHub Actions build.
export const basePath =
  process.env.GITHUB_ACTIONS === "true" ? "/portfolio-test" : "";
