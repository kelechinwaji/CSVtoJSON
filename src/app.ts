import  express, { NextFunction, Request, Response} from "express";
import csvtojson from "csvtojson";
import * as fs from 'fs';
import { json } from "body-parser";

const app = express();
const port:number = 5000;
const csvFile = "sample.csv"

app.get('/convert',  (req:Request, res:Response)=>{
    res.send(`We are live`)

    //Convert csv to json
    csvtojson()
    .fromFile(csvFile)
    .then((json)=>{
        console.log(json);

        // map through to check for missing data
         json.map((item)=>{
            if(item.phone === ""){
                item.phone = 'Missing Data'
            }
        })
        
        // Store file output in a json file
         fs.writeFile('file.json', JSON.stringify(json), "utf-8", (err) =>{
            if (err) console.log(err);
            
        })
    })

})

app.listen(port,  ()=>{
    console.log(`Listening on port:${port}`);
    
})