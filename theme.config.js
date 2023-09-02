/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  docsRepositoryBase: "https://github.com/Velocimeter/docs/blob/main",
  useNextSeoProps: () => ({
    titleTemplate: '%s - Velocimeter',
  }),
  search: {
    placeholder: "Search...",
  },
  // primaryHue: '172',
  darkMode: true,
  footer: {
    text: `MIT ${new Date().getFullYear()} © Velocimeter.`
  },
  logo: (
    <>
      <img src='/velocimeter.png' alt='Velocimeter' height={240} width={240} />
      <span className='mr-2 font-extrabold md:inline'></span>
      <span className='text-gray-600 font-normal hidden md:inline'>
        Liquidity Labs
      </span>
    </>
  ),
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        name='description'
        content='Velocimeter: The liquidity base-layer aligning incentives between liquidity providers & protocols'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@VelocimeterDEX' />
      <meta
        name='twitter:title'
        content='Velocimeter: The liquidity base-layer'
      />
      <meta
        name='twitter:description'
        content='Velocimeter is an automated market maker (AMM or simply, decentralized exchange) aligning incentives with liquidity providers & protocols'
      />
      <meta
        name='twitter:image'
        content='https://docs.velocimeter.xyz/dome6.jpg'
      />
      <meta
        property='og:title'
        content='Velocimeter: The liquidity base-layer.'
      />
      <meta
        property='og:description'
        content='Velocimeter is an automated market maker (AMM or simply, decentralized exchange) aligning incentives with liquidity providers & protocols'
      />
      <meta
        property='og:image'
        content='https://Velocimeter-docs.pages.dev/Velocimeter_banner.jpg'
      />
      <meta name='apple-mobile-web-app-title' content='Velocimeter' />
    </>
  ),
};
