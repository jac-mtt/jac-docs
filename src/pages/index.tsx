import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function IconBarChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round" {...props}>
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  );
}

function IconLayers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round" {...props}>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84Z" />
      <path d="m2 12 8.58 3.91a2 2 0 0 0 1.66 0L20.76 12" />
      <path d="m2 17 8.58 3.91a2 2 0 0 0 1.66 0L20.76 17" />
    </svg>
  );
}

function IconArrowsReuse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round" {...props}>
      <path d="M7 16V4m0 0L3 8m4-4 4 4" />
      <path d="M17 8v12m0 0 4-4m-4 4-4-4" />
    </svg>
  );
}

function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

const cards = [
  {
    title: 'Series de Datos',
    description:
      'Descripción de las series de datos abiertos publicadas por la JAC, como oferta-demanda y operaciones aeroportuarias.',
    link: '/docs/category/series-de-datos',
    Icon: IconBarChart,
    accent: 'var(--gob-blue)',
  },
  {
    title: 'Dimensiones',
    description:
      'Detalle de las dimensiones compartidas entre las distintas series de datos y sus posibles valores.',
    link: '/docs/dimensiones',
    Icon: IconLayers,
    accent: 'var(--gob-teal)',
  },
  {
    title: 'Ejemplo de Reuso de Datos',
    description:
      'Guías prácticas para descargar, combinar y reutilizar los datos abiertos de la JAC para análisis propios.',
    link: '/docs/category/ejemplos-de-reuso-de-datos',
    Icon: IconArrowsReuse,
    accent: 'var(--gob-dark-blue)',
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          Sitio web con contenido documental para el uso de los datos abiertos
          que la <strong>Junta de Aeronáutica Civil (JAC)</strong> pone a
          disposición para su uso.
        </p>
        <div className={styles.buttonsGroup}>
          <Link
            className={clsx('button button--lg', styles.btnPrimary)}
            to="/docs/intro">
            Ir a la Documentación
          </Link>
        </div>
      </div>
    </header>
  );
}

function IconExternalLink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" {...props}>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function HomepageCards() {
  return (
    <section className={styles.cardsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionHeading}>
          Explora la documentación
        </Heading>
        <p className={styles.sectionSubheading}>
          Recursos disponibles para entender y utilizar los datos abiertos de la JAC.
        </p>
      </div>
      <div className={clsx('container', styles.cardsContainer)}>
        {cards.map(({ title, description, link, Icon, accent }) => (
          <Link
            key={title}
            className={styles.card}
            to={link}
            style={{ '--card-accent': accent } as React.CSSProperties}>
            <div className={styles.cardIconWrap}>
              <Icon className={styles.cardIcon} aria-hidden="true" />
            </div>
            <div className={styles.cardBody}>
              <Heading as="h3" className={styles.cardTitle}>
                {title}
              </Heading>
              <p className={styles.cardDescription}>{description}</p>
            </div>
            <IconArrowRight className={styles.cardArrow} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function DatosGobCallout() {
  return (
    <section className={styles.callout}>
      <div className={clsx('container', styles.calloutInner)}>
        <div className={styles.calloutBody}>
          <Heading as="h3" className={styles.calloutTitle}>
            Portal de Datos Abiertos
          </Heading>
          <p className={styles.calloutText}>
            Descarga directamente los conjuntos de datos publicados por la JAC en la
            plataforma Datos.Gob del Gobierno de Chile.
          </p>
        </div>
        <Link
          className={clsx('button button--lg', styles.calloutBtn)}
          to="https://datos.gob.cl/organization/junta_de_aeronautica_civil">
          Ir a Datos.Gob
          <IconExternalLink className={styles.calloutBtnIcon} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Docs JAC"
      description="Documentación de la Junta de Aeronáutica Civil (JAC)">
      <HomepageHeader />
      <main>
        <HomepageCards />
        <DatosGobCallout />
      </main>
    </Layout>
  );
}
