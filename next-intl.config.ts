// next-intl.config.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  localePrefix: 'always'
});

export default routing; // <-- default export ŞART
