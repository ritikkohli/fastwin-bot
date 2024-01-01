const express = require('express');
const puppeteer = require('puppeteer');
const app = express();
const cors = require('cors');

app.use(cors());
app.get('/run/:no',async function(req,res){
    try{
        const no = req.params.no;
        const url = `http://fastwin.app/lucky/lifafa/id?no=LIFA${no}`;
        const browser = await puppeteer.launch();
        
        const page = await browser.newPage();   
        
        await page.goto(url);
        await page.type('#mob', '7252872871');  
        await page.click('#openair');   

        await page.reload() 

        await page.type('#mob', '8954407183');  
        await page.click('#openair');   
        await browser.close();  

        console.log('done')
        res.json('done');
    }
    catch(error){
        res.send(error.message);
    }
});

app.listen(process.env.PORT || 3000,function(){
    console.log('app is running')
});

module.exports = app;