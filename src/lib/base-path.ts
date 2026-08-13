// Use an explicit env var when deploying under a subpath (for example, /website).
// Custom domains should leave this unset so assets resolve from the domain root.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";
