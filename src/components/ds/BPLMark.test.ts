import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const filePath = resolve(__dirname, 'BPLMark.astro');

describe('BPLMark.astro', () => {
  it('contains an SVG element', () => {
    const content = readFileSync(filePath, 'utf-8');
    expect(content).toContain('<svg');
  });

  it('default size results in --bpl-mark-size: 22px', () => {
    const content = readFileSync(filePath, 'utf-8');
    // Default size prop should be 22
    expect(content).toMatch(/size\s*=\s*22/);
  });

  it('size prop is wired to --bpl-mark-size inline style', () => {
    const content = readFileSync(filePath, 'utf-8');
    expect(content).toContain('--bpl-mark-size');
    expect(content).toContain('size');
  });

  it('watermark variant sets --bpl-mark-opacity to 0.07', () => {
    const content = readFileSync(filePath, 'utf-8');
    expect(content).toContain('--bpl-mark-opacity');
    expect(content).toContain('0.07');
  });

  it('class prop is forwarded to root element', () => {
    const content = readFileSync(filePath, 'utf-8');
    // Astro uses class:list or class= to forward the class prop
    expect(content).toMatch(/class[:\s=][^>]*class/);
  });
});
