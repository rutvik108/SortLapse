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
}
 // main function of quick sort
  async function QuickMain(arr,low,high){
    //console.log(`${high}`)

     if(low < high){

        // console.log("int quick main")
        //find pivot element
        var p= await partition(arr,low,high);

            //now one posint at p is fix because we use lamuto partition
            //now call for the left side part
            QuickMain(arr,low,p-1);

            //call for the right side of the part
            QuickMain(arr,p+1,high);
    }
}
   //lamuto partition function
   async function partition(arr,low,high){

    //make last element of array as a pivot element
    var pivot=parseInt(arr[high].style.height);

    //take variable j which swap with those value which lesser(or greater) than pivot
    var j=low-1;

    //console.log("int quick partition")
    //now check for the condition where compare element with the pivot form high to low
    for(var i=low; i<high; i++){

        //comparision 
        if(parseInt(arr[i].style.height) > pivot){

            //update j because initially we pass i from -1;
            j++;

            //swap the element if condition match
            var temp=arr[i].style.height;
            arr[i].style.height=arr[j].style.height;
            arr[j].style.height=temp;
        }
    }

    //swap the pivot element with j
    var temp=arr[j+1].style.height;
    arr[j+1].style.height=arr[high].style.height;
    arr[high].style.height=temp;

    //return fixed elemrt index
    return j+1;
}
