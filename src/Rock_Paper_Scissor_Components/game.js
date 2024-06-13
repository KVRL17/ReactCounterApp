import React, { useEffect, useState } from "react";
import rock from "./images/rock.jpg"
import Button from '@mui/material/Button'
import paper from "./images/paper.jpg"
import scissor from "./images/scissor.jpg"
import stop from "./images/stop.jpeg"
import './game.css'
import { Typography } from "@mui/material";
import computer from "./images/computer.jpeg"

const Game = () =>{
    const [name,setName] = useState([]);
    const [value,setValue] = useState([]);
    const [computervalue,setComputervalue] = useState([]);
    let [count,setCount] = useState([]);
    let [computercount,setComputercount] = useState([]);
    let [finalresult,setFinalresult] = useState([]);

    let values = ['rock','paper','scissor']
    const getvalue = (value) =>{
        setValue(value);

        const len=values.length
        // console.log(len);
        const result=Math.floor(Math.random()*len)
        setComputervalue(values[result]);
        // console.log(values[result]);

        if(value === values[result]){
            let res = Number(count);
            res = res + 1;
            setCount(res);
            console.log(res);
        }
        else{
            let res1 = Number(computercount);
            res1 = res1 + 1;
            setComputercount(res1);
            console.log(res1);
        }
    }

    const getresult = () =>{
        setFinalresult(count>computercount ? 'You Won' : 'You Lose');
    }

    useEffect(() => {
        let nam = prompt('Enter your Name : ')
        setName(nam);
      },[]);
    return (
        <>
        <div className="main-div">
            <Typography variant="h4">Hi,{name} Come on let's play.</Typography>
            <Button onClick={() => getvalue('rock')}>
                <img src={rock} style={{height:'200px',width:'200px'}} alt="rock"></img>
            </Button>
            <Button onClick={() => getvalue('paper')}>
                <img src={paper} style={{height:'200px',width:'200px'}} alt="paper"></img>
            </Button>
            <Button onClick={() => getvalue('scissor')}>
                <img src={scissor} style={{height:'200px',width:'200px'}} alt="scissor"></img>
            </Button><br />
            <Typography variant="h4">your Score is : {count}&nbsp;&nbsp;,&nbsp;&nbsp;Computer Score is : {computercount}</Typography>
            <Typography variant="h4">you choose - {value}&nbsp;&nbsp;,&nbsp;&nbsp;<img src={computer} style={{height:'70px',width:'70px'}} alt="computer"></img> Chooses - {computervalue}</Typography>
            <div className="stopdiv">
            <Typography variant="h3">{finalresult}</Typography>
            <Button onClick={() => getresult()}>
                <img src={stop} style={{height:'170px',width:'170px'}} alt="stop"></img>
            </Button>
            </div>
        </div>
        </>
    )
}

export default Game;