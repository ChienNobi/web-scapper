import scrape from 'website-scraper'
import PuppeteerPlugin from 'website-scraper-puppeteer'
import { resolve } from 'path'

await scrape({
  urls: ['https://thoitiet4m.com/ha-noi/3-ngay-toi/'],
  directory: resolve(new URL('.', import.meta.url).pathname, 'dist/test'),
  plugins: [
    new PuppeteerPlugin({
      launchOptions: { headless: 'new' } /* optional */,
      gotoOptions: { waitUntil: 'networkidle0' } /* optional */,
      scrollToBottom: { timeout: 10000, viewportN: 10 } /* optional */,
      blockNavigation: true /* optional */,
    }),
  ],
})
