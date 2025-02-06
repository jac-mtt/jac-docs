import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

/*
export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="text--center">
              <p>
                Sitio web con contenido documental para el uso de los datos abiertos
                que la Junta de Aeronáutica Civil (JAC) pone a disposición para su
                uso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
*/

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={`${styles.features} ${styles.centerText}`}>
      <p>
        Sitio web con contenido documental para el uso de los datos abiertos
        que la Junta de Aeronáutica Civil (JAC) pone a disposición para su
        uso.
      </p>
    </section>
  );
}
