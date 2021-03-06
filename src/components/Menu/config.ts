import { MenuEntry } from '@shrimpswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://shrimpswap.finance'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange V1',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Shrimp Farming',
    icon: 'FarmIcon',
    href: 'https://shrimpswap.finance/farms'
  },
  {
    label: 'Whale Farming V2',
    icon: 'FarmIcon',
    href: 'https://shrimpswap.finance/whalefarms'
  },
  {
    label: 'Oceans',
    icon: 'WaveIcon',
    href: 'https://shrimpswap.finance/oceans',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://shrimpswap.finance/lottery',
  // },
  // {
  //   label: 'Launchpad (IDOs)',
  //   icon: 'IdoIcon',
  //   href: 'https://shrimpswap.finance/ido',
  // },
  // {
  //   label: 'Audited By Certik ✅',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/shrimpswap',
  // },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/shrimpswap-finance',
      // },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/shrimpswap',
      // },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/shrimpswap',
      },
    ],
  },
  {
    label: 'Price',
    icon: 'GraphIcon',
    href: 'https://shrimpswap.finance/graph',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://shrimpswap.finance/lottery'
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'shrimpswap',
  //       href: 'https://shrimpswap.info/token/TODO',
  //     },
  //   ]
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  // {
  //   label: 'Voting',
  //   href: 'https://voting.shrimpswap.finance',
  // },
  {
    label: "Github",
    href: "https://github.com/shrimpswap",
    icon: 'GithubIcon'
  },
  {
    label: 'Roadmap',
    href: 'https://shrimpswap.gitbook.io/shrimpswap/roadmap',
    icon: 'RoadmapIcon',
  },
  {
    label: "Docs",
    href: "https://shrimpswap.gitbook.io",
    icon: 'GitbookIcon'
  },
  // {
  //   label: "Blog",
  //   href: 'https://medium.com/@shrimpyswap',
  //   icon: 'MediumIcon'
  // },
  // ],
  // },
]

export default config
