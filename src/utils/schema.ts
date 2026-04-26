export const siteUrl = 'https://bepartnerlabs.com'

export function buildServiceSchema(services: Array<{ name: string; desc: string; dur: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Be Partner Labs',
    description: services.map(s => `${s.name}: ${s.desc}`).join(' | '),
    provider: {
      '@type': 'Organization',
      name: 'Be Partner Labs',
      url: siteUrl,
    },
    areaServed: { '@type': 'Worldwide', availableOnLanguage: ['es', 'en'] },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: services.map((s, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.desc,
        },
        description: s.dur,
      })),
    },
  }
}

export function buildFAQPageSchema(faqItems: Array<{ q: string; a: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export function buildContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Be Partner Labs — Contacto',
    url: `${siteUrl}/contact`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@bepartnerlabs.com',
      contactType: 'customer service',
      availableLanguage: ['Spanish', 'English'],
    },
  }
}