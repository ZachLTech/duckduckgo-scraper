const puppeteer = require('puppeteer');
let query = "marlin wayans".replace(' ', '+');

async function scrapeAll(){
    const browser = await puppeteer.launch( { headless: true });
    const page = await browser.newPage();
    
    await page.goto(`https://duckduckgo.com/?q=${query}&t=hc&va=b&ia=web`);


    // Execute code in the DOM
    const data = await page.evaluate( () => {

        const spans = Array.from(document.querySelectorAll('span.EKtkFWMYpwzMKOYr0GYm'));
        const urls = spans.map(span => span.innerHTML);
        
        return urls
    });
    const dataLinks = await page.evaluate( () => {

        const anchors = document.querySelectorAll('a.eVNpHGjtxRBq_gLOfGDr');
        const urls = Array.from(anchors).map(v => v.href);
        
        return urls
    });
    const dataDesc = await page.evaluate( () => {
        
        const divs = Array.from(document.querySelectorAll('div.OgdwYG6KE2qthn9XQWFC'));
        const urls = divs.map(div => div.innerHTML);
        
        return urls
    });
    await browser.close();

    const dataAll = [data, dataLinks, dataDesc];
    console.log(dataAll);
    return dataAll;
}
async function scrapeImage(){
    const browser = await puppeteer.launch( { headless: true });
    const page = await browser.newPage();
    
    await page.goto(`https://duckduckgo.com/?q=${query}&t=hc&va=b&iax=images&ia=images`);
    await page.waitForSelector('.tile--img__img', { timeout: 5_000 });
    const images = await page.evaluate( () => {


        //Code to get each img src with class "tile--img__img"
        const images = document.querySelectorAll('img.tile--img__img');
        const urls = [];
        
        images.forEach(image => {
          const src = image.getAttribute('src');
          urls.push(src);
        });

        return urls
    });

    await browser.close();
    
    console.log(images);
    return images;
}

scrapeAll();
scrapeImage();