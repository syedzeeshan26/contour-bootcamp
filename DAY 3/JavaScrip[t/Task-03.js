function Check_palendrom(){
    var str = document.getElementById("Text1").value;
    console.log(str)
    var str_len = str.length;

    //var second_number = parseInt(document.getElementById("Text2").value);
    
    for(let i = 0; i < str_len/2;i++){//
       
        if (str[i] == str[(str_len-1)-i]){
            
            document.getElementById("txtresult").value = "it is a palendrom";
        
        }
    
        else
       
        {
            document.getElementById("txtresult").value = "it is not a palendrom";
        }    

    }


   
    }