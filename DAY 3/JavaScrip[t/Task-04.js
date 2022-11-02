function count_spaces(){
    var str = document.getElementById("Text1").value;
    console.log(str)
    var count = 0;

    //var second_number = parseInt(document.getElementById("Text2").value);
    
    for(let i = 0; i < str.length;i++){
       
        if (str[i] == " "){

            // str [i]= str[i+1]

            count ++
        
        }
    
    }
        console.log(str)
    document.getElementById("txtresult").value = count;


   
    }