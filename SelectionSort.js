//selection sort
//  when user clicks on selection sort
var selection=document.querySelector(".Selection");

selection.addEventListener("click" , async function(){
     
//clear text of previous sort if exist
removeData(); 

//disable all sorting btn
disablebtn();

//disable size input 
disablesize();

//call selection sort
await SelectionSort();

//enable size array btn
//console.log("lol");
enablesize();

//enable all sorting btn
enablebtn();
});

async function SelectionSort(){
    
    //select the new created array which stored in the visulization
    var arr=document.querySelectorAll(".curVal");

    console.log(arr.length);

    //make first index
    for(var i=arr.length-1; i>=0; i--){
       
        //show data on screen
        selectiondata(selectionDatas);

        //add minimum as a first element
        var min=i;

        // update color of current array
        arr[i].style.background="red";

        //give some time so get easy to see
        await timedelay(delay);
        
        for(var j=i-1; j>=0; j--){

              //live index color
              arr[j].style.background="yellow";

              //check if user click on pause button or not
              if(pauseloops==false){

                await pauseloop();

            }

            //delay
            await timedelay(delay);

            //check if value is less than min or not
            //here do reverse sort so that we get sorted array on screen
            if(parseInt(arr[j].style.height) <= parseInt(arr[min].style.height)){
              
                //change color of old min back to orignal value
                //previous min
                arr[min].style.background="blueviolet";

                //update min
                min=j;  

                //color of min
                arr[min].style.background="red";

            }

            //if not min than make orignal color from yellow to blueviolet
            else{

                arr[j].style.background="blueviolet";

            }
        }

        console.log("done");

        //swap
        var temp=arr[i].style.height;
        arr[i].style.height=arr[min].style.height;
        arr[min].style.height=temp;

        //delay
        await timedelay(delay);

        //change color back to orignal of min inde
        arr[min].style.background="blueviolet";

        //change color of sorted array
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
