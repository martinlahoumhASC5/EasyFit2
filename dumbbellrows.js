let index;
let array = ["dumbbellrow1.png", "dumbbellrows2.png"];
// Button Next
function myFunction() {
    if(index==null){
        index=0;
    }
    else if(index >= array.length-1){
        index=0;
    }
    else{
        index+=1;
    }
    document.getElementById("bcimg").src = array[index];
  }

  function myFunction2() {
    if(index==null){
        index=0;
    }
    else if(index > array.length){
        index=0;
    }
    else{
        index-=1;
    }
    document.getElementById("bcimg").src = array[index];
  }
