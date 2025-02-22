// 1.swapping value in array
let array=[1,2,3,4,5];
// Normal swap
// const temp=array[0];
// array[0]=array[4];
// array[4]=temp;
// console.log(array);

// tips and tricks
// [array[0], array[4]]=[array[4],array[0]];
// console.log(array)

// another tips

// array[0]=array[4]+(array[4]=array[0])-array[4];
// console.log(array)


// 2 . copy to Clipboard

function CopyToClipboard(str){
    const element=document.createElement("textarea");
    element.value=str;
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);

}


function handleClick(){
    const text=document.getElementById('text');
    // console.log(text)
    CopyToClipboard(text.innerText);
}

handleClick();