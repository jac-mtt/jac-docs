import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './DownloadButton.module.css';

function IconDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

export interface DownloadButtonProps {
  /** Texto principal del botón. */
  label: string;
  /** Ruta del archivo bajo `/static` (ej: `/files/ejemplo.xlsx`). */
  file: string;
  /** Nombre sugerido para el archivo descargado (opcional). */
  filename?: string;
  /** Texto de apoyo (formato y peso), se muestra bajo el botón (ej: `XLSX · 2,6 MB`). */
  meta?: string;
  className?: string;
}

export default function DownloadButton({
  label,
  file,
  filename,
  meta,
  className,
}: DownloadButtonProps) {
  return (
    <span className={styles.wrapper}>
      <a
        className={clsx('button button--lg', styles.downloadBtn, className)}
        href={useBaseUrl(file)}
        download={filename ?? true}>
        <IconDownload className={styles.downloadBtnIcon} aria-hidden="true" />
        {label}
      </a>
      {meta && <span className={styles.downloadBtnMeta}>{meta}</span>}
    </span>
  );
}
