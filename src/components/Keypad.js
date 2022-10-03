// Code Keypad Component Here

function Keypad (){
    function handleOnChange(){
         console.log("Entering password...")
    }
    return (
        <div>
            <input type={'Password'} onChange={handleOnChange}></input>
        </div>
    )
}

export default Keypad;