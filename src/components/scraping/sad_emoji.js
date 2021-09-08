//required module
const puppeteer = require('puppeteer');


async function sad_emoji(url){
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //const url ='https://www.licensingcorner.com/2017/04/27/jack-licensing-programme-emoji-movie/'; 
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);
 
 
  //select item inspected by xpath
  const [el] =await page.$x('/html/body/div[1]/div[1]/div/div[3]/div/main/article/div[1]/img');

  //get the src
  const src = await el.getProperty('src');
  const srcLink = await src.jsonValue();

  console.log({srcLink}); 

  await browser.close();
};

sad_emoji('https://www.licensingcorner.com/2017/04/27/jack-licensing-programme-emoji-movie/');

