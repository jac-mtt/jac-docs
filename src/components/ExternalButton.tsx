import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './ExternalButton.module.css';

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

export interface ExternalButtonProps {
  label: string;
  url: string;
  className?: string;
}

export default function ExternalButton({ label, url, className }: ExternalButtonProps) {
  return (
    <Link
      className={clsx('button button--lg', styles.externalBtn, className)}
      to={url}>
      {label}
      <IconExternalLink className={styles.externalBtnIcon} aria-hidden="true" />
    </Link>
  );
}

export function ExternalButtonGroup({ children }: { children: React.ReactNode }) {
  return <div className={styles.buttonGroup}>{children}</div>;
}
