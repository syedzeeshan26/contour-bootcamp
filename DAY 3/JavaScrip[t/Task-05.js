function remove_spaces(){
    var str = document.getElementById("Text1").value;
    // console.log(str)
    // var count = 0;
    var str1 = "";

    //var second_number = parseInt(document.getElementById("Text2").value);
    
    for(let i = 0; i < str.length;i++){
       
        if (!(str[i] == " ")){ // sbhoai how are you
            str1 += str[i];
             

            // count ++
        
        }
    
    }
        console.log(str1)
    document.getElementById("txtresult").value = str1;


   
    }
