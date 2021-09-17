//required module
const puppeteer = require('puppeteer');

//const { default: General_question } = require('../questions_categories/general_questions');

 async function happy_emoji(url){
  
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    //const url ='https://www.licensingcorner.com/2017/04/27/jack-licensing-programme-emoji-movie/'; 
    await page.setDefaultNavigationTimeout(0);
    await page.goto(url);
   
   
    //select item inspected by xpath
    const [el] =await page.$x('/html/body/main/figure/div[1]/ul/li[2]/img');
  
    //get the src
    const src = await el.getProperty('src');
    const srcLink = await src.jsonValue();
    
    if (typeof window !== 'undefined') {
     
      //localStorage.setItem("emoji",srcLink);
      //<General_question storage = {srcLink}/>
      console.log('Rendering on browser or client');
  
    }else{
     
      
      console.log('Rendering on server');

      var LocalStorage = require('node-localstorage').LocalStorage;
      localStorage = new LocalStorage('./scratch');

      localStorage.setItem('emoji',srcLink);
    }
    
    console.log({srcLink}); 
    console.log(localStorage.getItem('emoji'));
       
    await browser.close();
    return srcLink;
  };
  
  happy_emoji('https://www.pinclipart.com/maxpin/TobwwR/');
  
  
  
  