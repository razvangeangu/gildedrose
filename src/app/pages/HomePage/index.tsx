import { translations } from 'locales/translations';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(translations.routes.home)}</title>
        <meta name="description" content={t(translations.description)} />
      </Helmet>

      <span>{t(translations.routes.home)}</span>
    </>
  );
}
