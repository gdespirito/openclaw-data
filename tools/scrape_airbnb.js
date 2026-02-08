const { chromium } = require('playwright');
const fs = require('fs');
(async ()=>{
  const profile = process.env.CHROME_PROFILE || '/home/pi/.config/chromium/Default';
  const browser = await chromium.launchPersistentContext(profile, { headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.airbnb.com/hosting/reservations', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('text=Reservations', { timeout: 15000 }).catch(()=>{});
  await page.click('text=Completed').catch(()=>{});
  await page.waitForTimeout(2000);
  const items = await page.$$eval('div, li', nodes => nodes.map(n=>n.innerText.replace(/\n+/g,' | '))).catch(()=>[]);
  const out = items.filter(Boolean).join('\n\n----\n\n');
  const outPath = 'workspace/airbnb-payments/airbnb_raw_reservations.txt';
  fs.mkdirSync('workspace/airbnb-payments', { recursive: true });
  fs.writeFileSync(outPath, out);
  console.log('WROTE', outPath);
  await browser.close();
})();
