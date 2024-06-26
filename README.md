# astro-vim-landing

Welcome to the astro-vim-landing page template! This project combines the power of Astro with the efficiency of Vim key bindings to create a unique and fast navigation experience. 

<p align="center">
    <img src="public/astro-vim.png" alt="logo" width="100"/>
</p>

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Using Vim Key Bindings](#using-vim-key-bindings)
- [Generating New Content](#generating-new-content)
- [License](#license)

## Installation

To get started with this project, you need to have Node.js installed. You can then clone this repository and install the necessary dependencies:

```sh
git clone https://github.com/albertoperdomo2/astro-vim-landing.git
cd vim-astro-landing-page
npm install
```

## Running the Project

After installing the dependencies, you can start the development server with the following command:

```sh
npm start
```

This will start the Astro development server and you can view the site by navigating to `http://localhost:3000` in your web browser.

## Project Structure

Here's an overview of the project's structure:

```
.
├── README.md
├── astro.config.mjs
├── node_modules
├── package-lock.json
├── package.json
├── public
│   └── favicon.svg
├── src
│   ├── components
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── KeyBindings.astro
│   │   ├── SearchBar.astro
│   │   ├── Sidebar.astro
│   │   └── StatusBar.astro
│   ├── content
│   │   ├── blog  # blogs go here
│   │   │   ├── astro-vim-ai.md
│   │   │   └── md-features.md
│   │   └── config.ts
│   ├── env.d.ts
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   ├── about.astro
│   │   ├── api
│   │   │   └── blog-posts.json.ts
│   │   ├── blog
│   │   │   └── [slug].astro
│   │   ├── blog.astro
│   │   ├── contact.astro
│   │   ├── exited.astro
│   │   ├── help.astro
│   │   └── index.astro
│   ├── scripts
│   │   ├── navigation.ts  # key bindings logic
│   │   └── search.ts # search logic
│   └── styles
│       └── global.css
├── tailwind.config.cjs
└── tsconfig.json
```

- **public/**: Static assets like the favicon.
- **src/components/**: Reusable UI components.
- **src/content/**: Markdown files for blog posts and other content.
- **src/layouts/**: Layout components for pages.
- **src/pages/**: Page components.
- **src/scripts/**: Custom scripts.
- **src/styles/**: Tailwind CSS configuration and custom styles.

## Customization

### Tailwind CSS

This project uses Tailwind CSS for styling. You can customize the styles by editing the `tailwind.config.cjs` file and adding your custom styles in the `src/styles` directory.

### Content

Content is managed through Markdown files located in the `src/content` directory. You can create new blog posts or pages by adding new `.md` files in the appropriate subdirectories.

## Using Vim Key Bindings

This template supports Vim-like key bindings for navigation:

- Press `j` to move down.
- Press `k` to move up.
- Press `u` to navigate up one level.

These key bindings enhance navigation efficiency, especially for users familiar with Vim.

## Generating New Content

To generate new content for the blog, simply add a new markdown file in the `src/content` directory. For example:

```markdown
---
title: "New Blog Post"
date: 2024-08-02T04:14:54-08:00
author: "Anon"
summary: "A summary of your new blog post."
---

# New Blog Post

Content of your new blog post goes here.
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this template to suit your needs and be sure to contribute if you feel like doing so. Happy coding!