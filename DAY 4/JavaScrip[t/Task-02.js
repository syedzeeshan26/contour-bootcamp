function print_arry(){
    let arr = ["f1","f2","f3","f4","f5","f6"]
    var first_number = parseInt(document.getElementById("Text1").value);
    var second_number = parseInt(document.getElementById("Text2").value);

    try{
        for(let i =first_number; i<=second_number;i++)
        {
         
        document.getElementById("txtresult").value += (" " + arr[i]);

       // document.writeln(arr[i])
        }
    }
    catch(e){
      alert("Error: "  + e.description);
    }
}