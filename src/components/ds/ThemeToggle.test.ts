import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const filePath = resolve(__dirname, 'ThemeToggle.astro');

describe('ThemeToggle.astro', () => {
  it('renders a button element', () => {
    const content = readFileSync(filePath, 'utf-8');
    expect(content).toContain('<button');
  });

  it('button has aria-pressed attribute', () => {
    const content = readFileSync(filePath, 'utf-8');
    expect(content).toContain('aria-pressed');
  });

  it('button has aria-label attribute', () => {
    const content = readFileSync(filePath, 'utf-8');
    expect(content).toContain('aria-label');
  });
});
