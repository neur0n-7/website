# Personal Website

My personal portfolio and website, built with [Next.js](https://nextjs.org/). This site is my place to showcase projects, research, robotics work, technical experience, achievements, current work, etc.

> [!IMPORTANT]
> Accessible at https://anishgupta.net.

## Tech Stack

* [Next.js](https://nextjs.org/)
* TypeScript
* MDX (blog content)
* GitHub Pages

## Deployment

The website is deployed using GitHub Pages. Builds are generated via `next build` (static export) and published to the site's GitHub Pages deployment.

## Repository Structure

```text
.
├── public/            # Static assets
├── src/
│   ├── app/           # Pages and routes (App Router)
│   ├── components/    # Reusable UI components
│   ├── content/blog/  # Blog posts (MDX)
│   ├── lib/           # Shared utilities
│   └── fonts/         # Local fonts
├── next.config.ts     # Next.js configuration
├── package.json       # Dependencies and scripts
└── ...
```

## License

This project is licensed under the terms specified in [`LICENSE`](LICENSE). The license applies to the website's source code. Unless explicitly permitted by the license, content such as personal information, written material, project descriptions, and original assets should not be reused or redistributed.