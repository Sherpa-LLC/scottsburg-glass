import type { AstroIntegration } from 'astro';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { config } from '../config';

const c = config;
const allAreas = [...c.serviceAreas.primary, ...c.serviceAreas.secondary];

function generateRobotsTxt(): string {
  return [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${c.seo.siteUrl}/sitemap-index.xml`,
  ].join('\n');
}

function generateLlmsTxt(): string {
  return [
    `# ${c.business.name}`,
    '',
    `> ${c.business.tagline}`,
    '',
    c.seo.defaultDescription,
    '',
    '## Services',
    '',
    ...c.services.map((s) => `- ${s.name}`),
    '',
    '## Service Areas',
    '',
    allAreas.join(', ') + ` (${c.contact.address.city}, ${c.contact.address.state})`,
    '',
    '## Contact',
    '',
    `- Phone: ${c.contact.phone}`,
    `- Email: ${c.contact.email}`,
    `- Address: ${c.contact.address.street}, ${c.contact.address.city}, ${c.contact.address.state} ${c.contact.address.zip}`,
    `- Website: ${c.seo.siteUrl}`,
  ].join('\n');
}

function generateHumansTxt(): string {
  return [
    '/* TEAM */',
    `Owner: ${c.business.owner || c.business.name}`,
    `Contact: ${c.contact.email}`,
    `From: ${c.contact.address.city}, ${c.contact.address.state}`,
    '',
    '/* SITE */',
    'Built with: Astro, Tailwind CSS',
    `Last updated: ${new Date().toISOString().slice(0, 10)}`,
    'Language: English',
    'Doctype: HTML5',
    '',
    '/* THANKS */',
    'Astro — https://astro.build',
    'Tailwind CSS — https://tailwindcss.com',
  ].join('\n');
}

export default function seoFiles(): AstroIntegration {
  return {
    name: 'seo-files',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const outDir = dir.pathname;
        mkdirSync(outDir, { recursive: true });

        writeFileSync(join(outDir, 'robots.txt'), generateRobotsTxt());
        writeFileSync(join(outDir, 'llms.txt'), generateLlmsTxt());
        writeFileSync(join(outDir, 'humans.txt'), generateHumansTxt());

        console.log('[seo-files] Generated robots.txt, llms.txt, humans.txt');
      },
    },
  };
}
