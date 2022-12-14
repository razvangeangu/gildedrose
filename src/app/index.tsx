/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from 'app/components/Layout';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { NotFoundPage } from 'app/pages/NotFoundPage/Loadable';
import dayjs from 'dayjs';
import { translations } from 'locales/translations';
import { GlobalStyle } from 'styles/global-styles';

export function App() {
  const { i18n, t } = useTranslation();

  dayjs.locale(i18n.language);

  return (
    <BrowserRouter>
      <GlobalStyle />

      <Helmet
        titleTemplate={`%s - ${t(translations.appName)}`}
        defaultTitle={t(translations.appName)}
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content={`${t(translations.appName)} ${t(translations.description)}`}
        />
      </Helmet>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
