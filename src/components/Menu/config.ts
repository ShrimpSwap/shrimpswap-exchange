import { MenuEntry } from '@shrimpswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://shrimpswap-frontend.netlify.app'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://shrimpswap-frontend.netlify.app/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://shrimpswap-frontend.netlify.app/pools'
  },
  // {
  //   label: 'Oceans',
  //   icon: 'WaveIcon',
  //   href: 'https://shrimpswap-frontend.netlify.app/oceans',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://shrimpswap-frontend.netlify.app/lottery',
  // },
  // {
  //   label: 'Launchpad (IDOs)',
  //   icon: 'IdoIcon',
  //   href: 'https://shrimpswap-frontend.netlify.app/ido',
  // },
  // {
  //   label: 'Audited By Certik ✅',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/shrimpswap',
  // },
  {
    label: 'Price',
    icon: 'GraphIcon',
    href: 'https://shrimpswap-frontend.netlify.app/graph',
  },
  // {
  //   label: 'Listings',
  //   icon: 'ListingIcon',
  //   items: [
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/shrimpswap-finance',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/shrimpswap',
  //     },
  //     {
  //       label: 'DappRadar',
  //       href: 'https://dappradar.com/binance-smart-chain/defi/shrimpswap',
  //     },
  //   ],
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://shrimpswap-frontend.netlify.app/lottery'
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
    label: "Docs",
    href: "https://shrimpswap.gitbook.io",
    icon: 'GitbookIcon'
  },
  {
    label: "Blog",
    href: 'https://medium.com/@shrimpyswap',
    icon: 'MediumIcon'
  },
  // ],
  // },
]

export default config
