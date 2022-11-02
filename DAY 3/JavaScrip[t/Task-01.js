function find_greater_mum(){
    var first_number = parseInt(document.getElementById("Text1").value);
    var second_number = parseInt(document.getElementById("Text2").value);

    if (first_number>second_number){
        document.getElementById("txtresult").value = (first_number + "is greater then" + second_number)
    }

    else if (first_number<second_number){
        document.getElementById("txtresult").value = (second_number+ "is greater then" + first_number )
    }
    else
    {
        document.getElementById("txtresult").value = ("both are equals")
    }    
    }