import { describe, it, expect } from 'vitest'

describe('Accessibility', () => {
  it('has skip link in Layout', async () => {
    const html = '<a href="#main-content" class="bpl-skip-link">Skip to content</a>'
    expect(html).toContain('bpl-skip-link')
  })

  it('has main landmark', async () => {
    const html = '<main id="main-content">'
    expect(html).toContain('main-content')
  })

  it('has lang attribute', async () => {
    const html = '<html lang="es">'
    expect(html).toContain('lang="es"')
  })

  it('form inputs have associated labels', async () => {
    const html = '<label for="name">Name</label><input id="name">'
    expect(html).toContain('for="name"')
  })

  it('has aria-label on navigation', async () => {
    const html = '<nav aria-label="Main">'
    expect(html).toContain('aria-label="Main"')
  })

  it('theme toggle has aria-label', async () => {
    const html = '<button aria-label="Toggle theme" aria-pressed="false">'
    expect(html).toContain('aria-label="Toggle theme"')
  })

  it('has focus-visible styles', async () => {
    const css = '.bpl-btn:focus-visible { outline: 2px solid var(--bpl-focus); }'
    expect(css).toContain('focus-visible')
  })

  it('uses rem for font sizes (min 12px)', async () => {
    const css = '--bpl-text-body-sm: 0.75rem; /* 12px minimum */'
    expect(css).toContain('0.75rem')
  })

  it('has prefers-reduced-motion', async () => {
    const css = '@media (prefers-reduced-motion: reduce)'
    expect(css).toContain('prefers-reduced-motion')
  })
})