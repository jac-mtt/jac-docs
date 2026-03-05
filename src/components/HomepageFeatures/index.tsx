import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureCard}>
          <p>
            Sitio web con contenido documental para el uso de los datos abiertos
            que la <strong>Junta de Aeronáutica Civil (JAC)</strong> pone a disposición para su
            uso.
          </p>
        </div>
      </div>
    </section>
  );
}
