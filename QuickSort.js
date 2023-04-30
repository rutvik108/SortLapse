//quick sort
//fetch Quick class
var QuickClick=document.querySelector(".Quick");
//when user click on the quick btn
QuickClick.addEventListener("click",async function(){

//clear text of another sorts
removeData();    
//console.log("lolll")

//disable all sorting btn
disablebtn();

//disable size input 
disablesize();

//call Insertion sort
await QuickSort();

//enable size array btn
//console.log("lol");
enablesize();

//enable all sorting btn
enablebtn();
});

async function QuickSort(){

    //check how many array actually we have
    var arr=document.querySelectorAll(".curVal");

    //low point of array
    var low=0;

    //highest index of array
    var high=arr.length-1;

    // now perform quick sort algo
    await QuickMain(arr,low,high);

    //which are already at right place but not as a pivot so they are alredy sorted so change color 
    for(let x=low; x<=high; x++){

        if(arr[x].style.background="green"){

            arr[x].style.background="green";

        }
    }

}
 // main function of quick sort

  async function QuickMain(arr,low,high){
    

    //console.log(`${high}`)

     if(low < high){

        if(pauseloops==false){

            await pauseloop();

        }

        // console.log("int quick main")
        //find pivot element

        var p= await partition(arr,low,high);

            //now one posint at p is fix because we use lamuto partition
            //now call for the left side part
            await QuickMain(arr,low,p-1);

            if(pauseloops==false){

                await pauseloop();

            }

            //call for the right side of the part
            await QuickMain(arr,p+1,high);
           
    }
    else{

        if(low < arr.length && high < arr.length){

            arr[low].style.background="green";

            arr[high].style.background="green";
        }
    }
}

   //lamuto partition function
   async function partition(arr,low,high){
    

    //make last element of array as a pivot element
    var pivot=parseInt(arr[high].style.height);

    //take variable j which swap with those value which lesser(or greater) than pivot
    var j=low-1;

    //give color to high
    arr[high].style.background="red";

    //pause
    await timedelay(delay);
    //console.log("int quick partition")

    //now check for the condition where compare element with the pivot form high to low
    for(var i=low; i<high; i++){
        Quickdata(QuickDatas);
        //pause btn
        if(pauseloops==false){

            await pauseloop();

        }
        //pivot color 
        arr[i].style.background="red";
        //comparision 
        
        if(parseInt(arr[i].style.height) > pivot){
            //loop pause
            if(pauseloops==false){

                await pauseloop();

            }

            //update j because initially we pass i from -1;
            j++;
             
            //put delay
            await timedelay(delay);

            //swap the element if condition match
            var temp=arr[i].style.height;
            arr[i].style.height=arr[j].style.height;
            arr[j].style.height=temp;

           //time delay
           await timedelay(delay);
           //smaller than pivot element
           arr[j].style.background="orange"; 

        }
        else{
            //pause loops
            if(pauseloops==false){

                await pauseloop();

            }
            //put delay
            await timedelay(delay);

            //back to normal color
            arr[i].style.background="blueviolet";
        }

        //back to normal color
        arr[i].style.background="blueviolet";
    }

    //delay
    await timedelay(delay);
    //swap with j++ place
    j++;

    //pause the loop 
    if(pauseloops==false){

        await pauseloop();

    }
   //swap the pivot element with j
    var temp=arr[j].style.height;
    arr[j].style.height=arr[high].style.height;
    arr[high].style.height=temp;
    
    //normal color
    arr[high].style.background="blueviolet";
    //pivot to make difference
    arr[j].style.background="green";

   
    return j;
}
