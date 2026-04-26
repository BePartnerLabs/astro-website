import { es } from './es';
import { en } from './en';

const translations = { es, en } as const;

export type Locale = keyof typeof translations;
export const defaultLocale: Locale = 'es';
export const locales: Locale[] = ['es', 'en'];

export function useTranslations(locale: string | undefined) {
  const key = (locale ?? defaultLocale) as Locale;
  return translations[key] ?? translations[defaultLocale];
}

const routes: Record<string, Record<Locale, string>> = {
  home:    { es: '/',        en: '/en' },
  contact: { es: '/contact', en: '/en/contact' },
};

export function altHref(pathToTranslate: string, currentLang: string): string {
  const altLang = currentLang === 'es' ? 'en' : 'es';
  return routes[pathToTranslate]?.[altLang as Locale] ?? (altLang === 'en' ? '/en' : '/');
}
