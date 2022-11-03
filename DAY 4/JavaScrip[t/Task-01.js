function print_arry(){
    let arr = ["f1","f2","f3","f4","f5","f6"]
    
    // var first_number = parseInt(document.getElementById("Text1").value);
    // var second_number = parseInt(document.getElementById("Text2").value);

    // if (first_number>second_number){
    //     document.getElementById("txtresult").value = (first_number + "is greater then" + second_number)
    // }

    // else if (first_number<second_number){
    //     document.getElementById("txtresult").value = (second_number+ "is greater then" + first_number )
    // }
    // else
    // {
    //     document.getElementById("txtresult").value = ("both are equals")
    // }  
      

    for(let i =0; i<arr.length;i++){

         
         document.getElementById("txtresult").value += arr[i];

        // document.writeln(arr[i])
    }
    }