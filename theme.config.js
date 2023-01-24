const themeConfig = {
  projectLink: 'https://github.com/Velocimeter-finance/',
  docsRepositoryBase: 'https://github.com/Velocimeter-finance/docs/blob/master',
  // titleSuffix: 'Velocimeter',
  nextLinks: true,
  prevLinks: true,
  search: true,
  unstable_stork: false,
  darkMode: true,
  font: false,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Velocimeter.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <img src='/velocimeter.png' alt='Velocimeter' height={59} width={59} />
      <span className='mr-2 font-extrabold md:inline'>Velocimeter</span>
      <span className='text-gray-600 font-normal hidden md:inline'>
        The liquidity base-layer of the Arbitrum ecosystem.
      </span>
    </>
  ),
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        name='description'
        content='Velocimeter: The liquidity base-layer of the Arbitrum ecosystem.'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@VelocimeterFi' />
      <meta
        name='twitter:title'
        content='Velocimeter: The liquidity base-layer of the Arbitrum ecosystem.'
      />
      <meta
        name='twitter:description'
        content='Velocimeter is an automated market maker (AMM or simply, decentralized exchange) on Arbitrum L2 blockchain.'
      />
      <meta
        name='twitter:image'
        content='https://docs.velocimeter.xyz/dome.jpg'
      />
      <meta
        property='og:title'
        content='Velocimeter: The liquidity base-layer of the Arbitrum ecosystem.'
      />
      <meta
        property='og:description'
        content='Velocimeter is an automated market maker (AMM or simply, decentralized exchange) on Arbitrum L2 blockchain.'
      />
      <meta
        property='og:image'
        content='https://Velocimeter-docs.pages.dev/Velocimeter_banner.jpg'
      />
      <meta name='apple-mobile-web-app-title' content='Velocimeter' />

      {/* <script
        lang='javascript'
        dangerouslySetInnerHTML={{
          __html: `if (!window.localStorage.getItem("theme_default")) {
      window.localStorage.setItem("theme", "dark");
      window.localStorage.setItem("theme_default", "dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }`
        }}
      />
      ; */}
    </>
  )
}

export default themeConfig
