function find_evenOdd(){
    var first_number = parseInt(document.getElementById("Text1").value);
    //var second_number = parseInt(document.getElementById("Text2").value);
    


    if (first_number%2 == 0){
        document.getElementById("txtresult").value = (first_number + "is even")
    }

    else
    {
        document.getElementById("txtresult").value = (first_number + "is odd")
    }    
    }