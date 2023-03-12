//bubble sort
//get the bubble place
var bubble=document.querySelector(".Bubble");
//when user click on bubble sort
bubble.addEventListener("click", async function(){
//clear text of another sorts
removeData();   

//disable all sorting btn
disablebtn();

//disable size input 
disablesize();

//call Insertion sort
await BubbleSort();

//enable size array btn
//console.log("lol");
enablesize();

//enable all sorting btn
enablebtn();

});

async function BubbleSort(){

//for output color change
var k=0;

   //console.log("welcome to bubble sort");

 //select the new created array which stored in the visulization
var arr=document.querySelectorAll(".curVal");

for(var i=arr.length-1; i>=0; i--){

    //put delay
    await timedelay(delay);

    for(var j=arr.length-1; j>arr.length-i-1; j--){

        //put data of the bubble sort
        Bubbledata();
        
        //two comparision value color so easy to understand
        arr[j].style.background='yellow';
        arr[j-1].style.background='red';

        //check for the user if pause btn was clicked or not
        if(pauseloops==false){
            await pauseloop();
        }

        //put delay
        await timedelay(delay);

        //swap the value
        if(parseInt(arr[j].style.height) > parseInt(arr[j-1].style.height)){

        //put delay
        await timedelay(delay);

        // swap the value if conditions match    
        var temp=arr[j].style.height;
        arr[j].style.height=arr[j-1].style.height;
        arr[j-1].style.height=temp;

        //if swap happen also swap the color
        arr[j].style.background='red';
        arr[j-1].style.background='yellow';


        }

        //make color again as it is once swap done
        arr[j].style.background='blueviolet';
        arr[j-1].style.background='blueviolet';

    }

    //sorted part color
    arr[k++].style.background='aqua';

 }

}

/* 
****************************
****************************
****(© by Rutvik Bodara)****
****************************
****************************
*/