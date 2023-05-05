import React, { useState } from 'react';

function Textarea() {
    const [Text, setText] = useState('Enter Text Here');


    const change = (event) =>{
        setText(event.target.value)
    }
    const uppercase = () => {
        console.log('uabid ullah')
        const uptext = Text.toUpperCase();
        setText(uptext)
    }

     const LowerCase = ()=>{
        const lowtext = Text.toLowerCase();
        setText(lowtext)
     }
    
     const Cleartext = () =>{
        const line =''
        setText(line)
     }

     const handleReverse = () => {
        const reversed = Text.split('').reverse().join('');
        setText(reversed);
      };

      const correct = () => {
        const reversed = Text.split('').reverse().join('');
        setText(reversed);
      };

      const handleRemoveSpaces = () => {
        const removed = Text.replace(/\s+/g, ' ');
        setText(removed);
      };

    return (
        <>
            <div className="col py-3">
               <h4> Content area _._._._._._.....</h4>
                <br />
                <br />
                <div className="form-outline">
        <textarea className="form-control" id="textAreaExample1" value={Text} onChange={change} rows="7" cols='75' ></textarea>
        <button type="button" className="btn btn-primary" onClick={uppercase}>UpperCase</button>
        <button type="button" className="btn btn-primary" onClick={LowerCase}>LowerCase</button>
        <button type="button" className="btn btn-primary" onClick={handleReverse}>Revers Text</button>
        <button type="button" className="btn btn-primary" onClick={correct}>Not in Revers</button>
        <button type="button" className="btn btn-primary" onClick={handleRemoveSpaces}>remove WhiteSpace</button>
        <button type="button" className="btn btn-primary" onClick={Cleartext}>ClearText</button>

                </div>
            </div>
        </>
    )
}

export default Textarea