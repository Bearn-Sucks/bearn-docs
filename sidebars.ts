import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // But you can create a sidebar manually

  bearnSidebar: [
    'introduction',
    {
      type: 'category',
      label: '🐻 Products',
      items: ['products/yBGT', 'products/yBERA', 'products/vaults', 'products/bollar'],
    },
    {
      type: 'category',
      label: '🐻 Governance',
      items: [
        'governance/tokenomics',
        'governance/emissions',
        'governance/protocol-revenue',
      ],
    },
    {
      type: 'category',
      label: '🐻 Resources',
      items: [
        'resources/contract-addresses',
        'resources/treasury',
        'resources/risks',
        'resources/audits',
        'resources/bug-bounties',
        'resources/multisig',
      ],
    },
  ],
}

export default sidebars
