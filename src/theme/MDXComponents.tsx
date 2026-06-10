import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import CsvDocTable from '@site/src/components/CsvDocTable';
import ExternalButton, { ExternalButtonGroup } from '@site/src/components/ExternalButton';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Add our custom components globally
  CsvDocTable,
  ExternalButton,
  ExternalButtonGroup,
};
