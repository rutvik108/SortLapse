// Insertion sort
//  when user clicks on Insertion sort
var InsertionClick=document.querySelector(".Insertion");
InsertionClick.addEventListener("click",async function(){
//clear text of another sorts
removeData();    

//disable all sorting btn
disablebtn();

//disable size input 
disablesize();

//call Insertion sort
await InsertionSort();

//enable size array btn
//console.log("lol");
enablesize();

//enable all sorting btn
enablebtn();

});

async function InsertionSort(){

    //select the new created array which stored in the visulization
    var arr=document.querySelectorAll(".curVal");

    //consider first element sorted
    arr[arr.length-1].style.background="aqua";

    for(var i=arr.length-2; i>=0; i--){ 
        await Insertiondata(); 

        //delay
        await timedelay(delay);

        // current element
        var current=parseInt(arr[i].style.height);


        //current color
        arr[i].style.background="blue";

        //previous element
        var previous=i+1;

        //in case of user enter pause when sorting doing work inside the loop
        if(pauseloops==false){
            await pauseloop();
        }
       
        //check for the min value or max value if condition match swap the value
        while(previous<=arr.length-1 && parseInt(arr[previous].style.height) >current){
           //disply data on the screen
           //previous element color
           arr[previous].style.background="YELLOW";

           //delay
           await timedelay(delay);
          //  console.log("what");

          //check for pause btn
            if(pauseloops==false){
                await pauseloop();
            }

            //swap the value
            var temp=arr[previous].style.height;
            arr[previous].style.height=arr[previous-1].style.height;
            arr[previous-1].style.height=temp;

            //decrement the value of previous
            previous++;

            //time delay
            await timedelay(delay);

            //chage color back to orignal after swapping
            arr[previous-1].style.background="aqua";
            

        }
        
        //delay
        await timedelay(delay);

        //orignal color of arr[i]
        arr[i].style.background="aqua";
    }
}

/* 
****************************
****************************
****(© by Rutvik Bodara)****
****************************
****************************
*/