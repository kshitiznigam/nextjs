import { resolve } from "styled-jsx/css"

async function TakeTime(){

    await new Promise( (resolve)=>{
        setTimeout(resolve,3000);

    })

}

export default async function About(){
    await TakeTime();

    return (
        <div>
            <h1>This about page!</h1>
        </div>
    )
}