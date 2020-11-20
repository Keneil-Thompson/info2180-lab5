window.onload = function(){
    var btn = document.getElementById("lookup");
    btn.addEventListener('click', function(b){
        b.preventDefault();
        var qry = document.getElementById("country").value;
        var xhr = new XMLHttpRequest();
        var urlweb = "world.php?country=" + qry;
        xhr.onreadystatechange = function(){
            if(xhr.readyState == XMLHttpRequest.DONE){
                if(xhr.status == 200){
                    var cntry = xhr.responseText;
                    var rslt = document.getElementById("result");
                    rslt.innerHTML = cntry;
            
                }else{
                    alert("Error Occured!");
                }
            }
        }
        xhr.open("GET", urlweb, true);
        xhr.send();

    });
    var btn1 = document.getElementById("cities");
    btn1.addEventListener('click', function(b){
        b.preventDefault();
        var qry = document.getElementById("country").value;
        var xhr = new XMLHttpRequest();
        var urlweb = "world.php?country=" + qry + "&context=cities";
        xhr.onreadystatechange = function(){
            if(xhr.readyState == XMLHttpRequest.DONE){
                if(xhr.status == 200){
                    var cntry = xhr.responseText;
                    var rslt = document.getElementById("result");
                    rslt.innerHTML = cntry;
            
                }else{
                    alert("Error Occured!");
                }
            }
        }
        xhr.open("GET", urlweb, true);
        xhr.send();

    });
}



