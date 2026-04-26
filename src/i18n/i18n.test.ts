import { describe, it, expect } from 'vitest';
import { es } from './es';
import { en } from './en';

describe('i18n theme keys', () => {
  it('es.theme.toggleLight exists', () => {
    expect(es.theme.toggleLight).toBeTruthy();
  });
  it('es.theme.toggleDark exists', () => {
    expect(es.theme.toggleDark).toBeTruthy();
  });
  it('es.theme.label exists', () => {
    expect(es.theme.label).toBeTruthy();
  });
  it('en.theme.toggleLight exists', () => {
    expect(en.theme.toggleLight).toBeTruthy();
  });
  it('en.theme.toggleDark exists', () => {
    expect(en.theme.toggleDark).toBeTruthy();
  });
  it('en.theme.label exists', () => {
    expect(en.theme.label).toBeTruthy();
  });
});
