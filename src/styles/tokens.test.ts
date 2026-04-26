import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('tokens.css', () => {
  it('contains --bpl-text-section-title token', () => {
    const content = readFileSync(resolve(__dirname, 'tokens.css'), 'utf-8');
    expect(content).toContain('--bpl-text-section-title');
  });
});
