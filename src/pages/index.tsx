import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttonsGroup}>
          <Link
            className={clsx('button button--lg', styles.btnPrimary)}
            to="/docs/category/series-de-datos">
            Ir a Descripción de Datos Abiertos
          </Link>
          <Link
            className={clsx('button button--lg', styles.btnOutline)}
            to="https://datos.gob.cl/organization/junta_de_aeronautica_civil">
            Ir a Datos.Gob
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Docs JAC"
      description="Documentación de la Junta de Aeronáutica Civil (JAC)">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
