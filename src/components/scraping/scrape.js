const scrape = require('website-scraper');

const sad_meme = require('website-scraper');

scrape({

   urls: ['https://www.pinclipart.com/maxpin/TobwwR/'],
   directory: 'emoji_happy',
   sources:[
             {selector: 'img', attr: 'src', id: 'img01' }
    
   ]

});

sad_meme({

    urls: ['https://www.licensingcorner.com/2017/04/27/jack-licensing-programme-emoji-movie/'],
    directory: 'emoji_sad',
    sources:[
              {selector: 'img',  attr: 'src' }
     
    ]
 
 });







