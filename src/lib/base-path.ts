// GitHub Pages serves this repo at /website/, not the domain root,
// so the base path only applies to the GitHub Actions build.
export const basePath =
  process.env.GITHUB_ACTIONS === "true" ? "/website" : "";
