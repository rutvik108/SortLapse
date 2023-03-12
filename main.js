//when user click on new array button
//fetch the newarray using dom
var newarraybtn=document.querySelector(".newArray");

newarraybtn.addEventListener("click", function(){

//create new array
//take size as a input
createArray(size.value);

});

//get the size of array given by the user
var size=document.querySelector("#inputSize");

//once user change the size of array create new array
size.addEventListener("input", function(){

createArray(size.value);

});

//default delay to visulize the sorting
var delay=100;

//speed which user enter 
var speed=document.querySelector("#inputspeed");

//user select speed 
speed.addEventListener("input", function(){

    //new speed
     delay=500-speed.value;

});

//set speed of swapping
//remains to understand
function timedelay(times) {
    //like comparator in java lambda
    //what promises d0-> take pending work
    return new Promise(resolve => setTimeout(resolve,times));

    //also writen like this
    // var times=new Promise(function(time){
    //     setTimeout(function(){
    //         time("solved");
    //     },times);
    // }) ;
    //  return times;

}

//create new array


//create new array
createArray();

//by default size will be 50
function createArray(SizeOfArray=50){

    //remove past stats
    deletes();
    
    //remove data which appear at the time of sorting
    removeData();

    //create empty array
    var array=[];

    //put random value in form of bars
    for(var i=0; i<SizeOfArray; i++){

        array.push(Math.floor(Math.random()*200+1)+1);

    }

    //select visulization class
    var oldVal=document.querySelector("#visulization");

    //once array created update value in visulizations
    for(var i=0; i<SizeOfArray; i++){

        //create new div
        var curVal=document.createElement("div");

        //GIVE HEIGHT to each flex BASED ON RANDOM VALUE
        curVal.style.height=(array[i]*2.2)+"px";

        //add class of his own name to modify
        curVal.classList.add("curVal");

        //add color class
        curVal.classList.add("curVal-color");

        //copy new element in the main div
        //append and prepend copy inside the div
        //and 2 more 
        visulization.prepend(curVal);
    }
}

function deletes(){

   //DELETE all values which hold by visulization class
   document.querySelector("#visulization").innerHTML="";

}

//by default put pause btn as a false'
 document.querySelector(".pause").disabled='true';

//disable all buttons while operations are running
function disablebtn(){

//select all btn using dom
 var dis=document.querySelectorAll(".btn");

   for(var i=0; i<dis.length; i++){

    //make readable every thing
    //exept pause btn
    if(i==1){

        //pause btn
        document.querySelectorAll(".btn")[i].disabled = false;

    }
    else{

    document.querySelectorAll(".btn")[i].disabled = true;

    }

   }

}

//enable all the functions
function enablebtn(){

    var dis=document.querySelectorAll(".btn");

      for(var i=0; i<dis.length; i++){

        if(i==1){
            //pause btn
            document.querySelectorAll(".btn")[i].disabled = true;
        }

        else{

            document.querySelectorAll(".btn")[i].disabled=false;

        }
       
      }

}

//disable size of array input function
function disablesize(){

    document.querySelector("#inputSize").disabled=true;

}    

//enablesize of array after operation complete
function enablesize(){

    document.querySelector("#inputSize").disabled=false;

}

//check is button is click or not
var pauseloops=true;

var pauseval= document.querySelector(".pause");

pauseval.addEventListener("click",function(){

  if(pauseloops == true ){

    pauseloops=false;

    pauseval.innerHTML="play";

  }

  else{

    pauseloops=true;

    pauseval.innerHTML="pause";

  }
  
});

//based on click pause the loop 
async function pauseloop(){

    while(pauseloops==false){

        await timedelay(50);

    }

    return;

}

//data of all sorting algo

var selectionDatas="Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted portion.";

var InsertionDatas="Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.";

var BubbleDatas="Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.";

//using for typing of data starting point
var vali=0;

//div of selection sort
async function selectiondata(){ 

    if(vali<selectionDatas.length){

    document.querySelector("#SelectionType").innerHTML +=selectionDatas.charAt(vali);

    vali++;

    setTimeout(selectiondata,75);

    }

}
//for insertiondata
async function Insertiondata(){ 

    if(vali<InsertionDatas.length){

    document.querySelector("#InsertionType").innerHTML +=InsertionDatas.charAt(vali);

    vali++;

    setTimeout(Insertiondata,75);

    }

}

//for bubble sort

var vali=0;

//div of selection sort
async function Bubbledata(){ 

    if(vali<BubbleDatas.length){

    document.querySelector("#BubbleType").innerHTML +=BubbleDatas.charAt(vali);

    vali++;

    setTimeout(Bubbledata,75);

    }

}

//delete removeSelectionData from the div
function removeData(){
    
    //update value to its base value
    vali=0;

    document.querySelector("#InsertionType").innerHTML='';
    document.querySelector("#SelectionType").innerHTML='';
    document.querySelector("#BubbleType").innerHTML='';
    
}

/* 
****************************
****************************
****(© by Rutvik Bodara)****
****************************
****************************
*/


