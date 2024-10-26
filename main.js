const generator=()=>{
    let chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha_length=6;
    let captcha="";
    for(let i=0;i<captcha_length;i++)
    {
        let randomIndex=Math.floor(Math.random()*chars.length);
        captcha += chars.charAt(randomIndex);
    }
    document.getElementById("captcha").innerHTML= captcha;
}
generator();

const validate=()=>{
    let input=document.getElementById("wrapper_input").value;
    let captcha=document.getElementById("captcha").innerHTML;
    let result_text=document.getElementById("result");
    if(input==captcha) 
    {
        result_text.innerHTML="You! Enter value correctly.";
        result_text.style.color="green";
    }
    else{
        result_text.innerHTML="Invalid, please try again.";
        result_text.style.color="red";
    }
}