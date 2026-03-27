# Editing Site Content

All text content on the site lives in this directory as `.md` (Markdown) files.
You can edit these files with any text editor.

## How It Works

- **Frontmatter** (between `---` marks at the top) = structured data (titles, descriptions, lists)
- **Body** (below the second `---`) = long-form page content in Markdown

## Files

- `pages/homepage.md` — Homepage text, trust bar, testimonials, process steps
- `pages/about.md` — About page story, team description, values
- `services/*.md` — One file per service with descriptions and FAQs
- `blog/*.md` — Blog posts (see BLOG_TEMPLATE.md for format)

## Editing Tips

1. **Be careful with frontmatter formatting.** Keep the `---` delimiters intact. Use quotes around text that contains colons, apostrophes, or other special characters.
2. **Lists in frontmatter** use YAML syntax with dashes (`-`). Keep the indentation consistent.
3. **Markdown body content** supports standard formatting: `## Heading`, `**bold**`, `- bullet points`, `[links](url)`, etc.

## Common Edits

### Change a testimonial
Edit the `testimonials` section in `src/config.ts`.

### Add a new FAQ
Open the relevant service file (e.g., `services/service-name.md`), find the `faqs:` section, and add:
```yaml
  - question: "Your new question here?"
    answer: "Your answer here."
```

### Update page titles or meta descriptions
Each file has `metaTitle` and `metaDescription` fields in the frontmatter. Edit these to change what appears in search results.

## Writing Blog Posts

1. Copy `BLOG_TEMPLATE.md` and rename it to your post slug: `my-post-title.md`
2. The filename becomes the URL: `my-post-title.md` -> `/blog/my-post-title`
3. Fill in all REQUIRED frontmatter fields (title, date, author, metaDescription, heroImage)
4. Write your content below the second `---` using Markdown
5. Save hero images to `public/images/blog/` as `.webp` files
6. See the writing guidelines at the bottom of the template for tips

### Blog Post Checklist
- [ ] Title is clear and SEO-friendly
- [ ] Meta description is under 160 characters
- [ ] Hero image exists in `public/images/blog/`
- [ ] Post is 800-1,500 words
- [ ] Includes 1-2 internal links to service/other pages
- [ ] Mentions your local area naturally
- [ ] Ends with a call-to-action
- [ ] Date is set to the publish date

## After Editing

Save the file and push to GitHub. The site will rebuild automatically.
