import  express, { NextFunction, Request, Response} from "express";

const app = express();
const port:number = 5000;

app.get('/',  (req:Request, res:Response)=>{
    res.send(`We are live`)
})

app.listen(port,  ()=>{
    console.log(`Listening on port:${port}`);
    
})