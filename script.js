var def = true;
var arrX = [];
var arrO = [];

var arrBool = new Array();
function setArrBool(){
        for(var i = 0; i<3; i++){
        arrBool[i]= new Array();
        for(var j = 0; j<3; j++){
            arrBool[i][j]= null;
        }
    }
}
setArrBool();

var arrNumber = [
    ["one","two","three"],
    ["four","five","six"],
    ["seven","eight","nine"]
]
var arrNumberTwo = [
    "one","two","three",
    "four","five","six",
    "seven","eight","nine"
]

var arrElement = [
    {one:0,two:1,three:2},
    {four:0,five:1,six:2},
    {seven:0,eight:1,nine:2}
]

function hod(obj) {
    var id = obj.id;
    
    if(document.getElementById(id).innerHTML!=""){}
    else{
        debugger;
        if(def==true){
            document.getElementById(id).innerHTML = "X";
            arrBool[count(id)][arrElement[count(id)][id]] = true;         
            def=false;
        }
        else{
                document.getElementById(id).innerHTML = "O";
                arrBool[count(id)][arrElement[count(id)][id]] = false;
                def=true;
        }
    }
    cheking();
    setTimeout(draw,100);
}
function draw() {
    var countt = 0;
    for(var t = 0; t<3; t++){
        for(var e = 0; e<3; e++){
            if(arrBool[t][e]!=null){
                countt++;
            }
            if(countt==9){
                if(confirm("Ничья! Хотите продолжить?")){
                    for(let n = 0; n<9;n++){
                        document.getElementById(arrNumberTwo[n]).innerHTML = "";
                    }
                    setArrBool();
                }
                else {
                    for(let n = 0; n<9;n++){
                        document.getElementById(arrNumberTwo[n]).innerHTML = "";
                    }
                    setArrBool();
                    alert("Спасибо за игру!");
                }
                def = true;
            }
    }
    }
}
function count(id) {
    var count_;
    if(id=="one" || id=="two" || id=="three"){
        count_ = 0;
    }
    else if(id=="four" || id=="five" || id=="six"){
        count_ = 1;
    }
    else{
        count_ = 2;
    }
    return count_;
}

function cheking (){
    for(var i = 0; i<3; i++){
        if(arrBool[i][0]== true && arrBool[i][1]== true && arrBool[i][2]== true){
            (document.getElementById(arrNumber[i][0])).style.color = "blue";
            (document.getElementById(arrNumber[i][1])).style.color = "blue";
            (document.getElementById(arrNumber[i][2])).style.color = "blue";
            const it = i;
            setTimeout(run,100);
            function run() {
                if(confirm("X-победил! Хотите продолжить?")){
                for(let n = 0; n<9;n++){
                    document.getElementById(arrNumberTwo[n]).innerHTML = "";
                }
                (document.getElementById(arrNumber[it][0])).style.color = "black";
                (document.getElementById(arrNumber[it][1])).style.color = "black";
                (document.getElementById(arrNumber[it][2])).style.color = "black";
                setArrBool();
                }
                else{
                    for(let n = 0; n<9;n++){
                        document.getElementById(arrNumberTwo[n]).innerHTML = "";
                    }
                    (document.getElementById(arrNumber[it][0])).style.color = "black";
                    (document.getElementById(arrNumber[it][1])).style.color = "black";
                    (document.getElementById(arrNumber[it][2])).style.color = "black";
                    setArrBool();
                    alert("Спасибо за игру!");
                }
            }
            def = true;
        }
    }
    for(var i = 0; i<3; i++){
        if(arrBool[i][0]== false && arrBool[i][1]== false && arrBool[i][2]== false){
            (document.getElementById(arrNumber[i][0])).style.color = "blue";
            (document.getElementById(arrNumber[i][1])).style.color = "blue";
            (document.getElementById(arrNumber[i][2])).style.color = "blue";
            const it = i;
            setTimeout(run,100);
            function run() {
                if(confirm("O-победил! Хотите продолжить?")){
                for(let n = 0; n<9;n++){
                    document.getElementById(arrNumberTwo[n]).innerHTML = "";
                }
                (document.getElementById(arrNumber[it][0])).style.color = "black";
                (document.getElementById(arrNumber[it][1])).style.color = "black";
                (document.getElementById(arrNumber[it][2])).style.color = "black";
                setArrBool();
                }
                else{
                    for(let n = 0; n<9;n++){
                        document.getElementById(arrNumberTwo[n]).innerHTML = "";
                    }
                    (document.getElementById(arrNumber[it][0])).style.color = "black";
                    (document.getElementById(arrNumber[it][1])).style.color = "black";
                    (document.getElementById(arrNumber[it][2])).style.color = "black";
                    setArrBool();
                    alert("Спасибо за игру!");
                }
            }
            def = true;
        }
    }
    for(var i = 0; i<3; i++){     
        if(arrBool[0][i]==true && arrBool[1][i]== true && arrBool[2][i] == true){
            (document.getElementById(arrNumber[0][i])).style.color = "blue";
            (document.getElementById(arrNumber[1][i])).style.color = "blue";
            (document.getElementById(arrNumber[2][i])).style.color = "blue";
            const it = i;
            setTimeout(run,100);
            function run() {
                if(confirm("X-победил! Хотите продолжить?")){
                for(let n = 0; n<9;n++){
                    document.getElementById(arrNumberTwo[n]).innerHTML = "";
                }
                (document.getElementById(arrNumber[0][it])).style.color = "black";
                (document.getElementById(arrNumber[1][it])).style.color = "black";
                (document.getElementById(arrNumber[2][it])).style.color = "black";
                setArrBool();
                }
                else{
                    for(let n = 0; n<9;n++){
                        document.getElementById(arrNumberTwo[n]).innerHTML = "";
                    }
                    (document.getElementById(arrNumber[0][it])).style.color = "black";
                    (document.getElementById(arrNumber[1][it])).style.color = "black";
                    (document.getElementById(arrNumber[2][it])).style.color = "black";
                    setArrBool();
                    alert("Спасибо за игру!");
                }
            }
            def = true;
        }
    }
    for(var i = 0; i<3; i++){     
        if(arrBool[0][i]==false && arrBool[1][i]== false && arrBool[2][i] == false){
            (document.getElementById(arrNumber[0][i])).style.color = "blue";
            (document.getElementById(arrNumber[1][i])).style.color = "blue";
            (document.getElementById(arrNumber[2][i])).style.color = "blue";
            const it = i;
            setTimeout(run,100);
            function run() {
                if(confirm("O-победил! Хотите продолжить?")){
                for(let n = 0; n<9;n++){
                    document.getElementById(arrNumberTwo[n]).innerHTML = "";
                }
                (document.getElementById(arrNumber[0][it])).style.color = "black";
                (document.getElementById(arrNumber[1][it])).style.color = "black";
                (document.getElementById(arrNumber[2][it])).style.color = "black";
                setArrBool();
                }
                else{
                    for(let n = 0; n<9;n++){
                        document.getElementById(arrNumberTwo[n]).innerHTML = "";
                    }
                    (document.getElementById(arrNumber[0][it])).style.color = "black";
                    (document.getElementById(arrNumber[1][it])).style.color = "black";
                    (document.getElementById(arrNumber[2][it])).style.color = "black";
                    setArrBool();
                    alert("Спасибо за игру!");
                }
            }
            def = true;
        }
    }
    if(arrBool[0][0]==true && arrBool[1][1]== true && arrBool[2][2] == true){
        (document.getElementById(arrNumber[0][0])).style.color = "blue";
        (document.getElementById(arrNumber[1][1])).style.color = "blue";
        (document.getElementById(arrNumber[2][2])).style.color = "blue";
        const it = i;
        setTimeout(run,100);
        function run() {
            if(confirm("X-победил! Хотите продолжить?")){
            for(let n = 0; n<9;n++){
                document.getElementById(arrNumberTwo[n]).innerHTML = "";
            }
            (document.getElementById(arrNumber[0][0])).style.color = "black";
            (document.getElementById(arrNumber[1][1])).style.color = "black";
            (document.getElementById(arrNumber[2][2])).style.color = "black";
            setArrBool();
            }
            else{
                for(let n = 0; n<9;n++){
                    document.getElementById(arrNumberTwo[n]).innerHTML = "";
                }
                (document.getElementById(arrNumber[0][0])).style.color = "black";
                (document.getElementById(arrNumber[1][1])).style.color = "black";
                (document.getElementById(arrNumber[2][2])).style.color = "black";
                setArrBool();
                alert("Спасибо за игру!");
            }
        }
        def = true;
    }
    if(arrBool[0][2]==true && arrBool[1][1]== true && arrBool[2][0] == true){
        (document.getElementById(arrNumber[0][2])).style.color = "blue";
        (document.getElementById(arrNumber[1][1])).style.color = "blue";
        (document.getElementById(arrNumber[2][0])).style.color = "blue";
        const it = i;
        setTimeout(run,100);
        function run() {
            if(confirm("X-победил! Хотите продолжить?")){
            for(let n = 0; n<9;n++){
                document.getElementById(arrNumberTwo[n]).innerHTML = "";
            }
            (document.getElementById(arrNumber[0][2])).style.color = "black";
            (document.getElementById(arrNumber[1][1])).style.color = "black";
            (document.getElementById(arrNumber[2][0])).style.color = "black";
            setArrBool();
            }
            else{
                for(let n = 0; n<9;n++){
                    document.getElementById(arrNumberTwo[n]).innerHTML = "";
                }
                (document.getElementById(arrNumber[0][2])).style.color = "black";
                (document.getElementById(arrNumber[1][1])).style.color = "black";
                (document.getElementById(arrNumber[2][0])).style.color = "black";
                setArrBool();
                alert("Спасибо за игру!");
            }
        }
        def = true;
    }
    if(arrBool[0][0]==false && arrBool[1][1]== false && arrBool[2][2] == false){
        (document.getElementById(arrNumber[0][0])).style.color = "blue";
        (document.getElementById(arrNumber[1][1])).style.color = "blue";
        (document.getElementById(arrNumber[2][2])).style.color = "blue";
        const it = i;
        setTimeout(run,100);
        function run() {
            if(confirm("O-победил! Хотите продолжить?")){
            for(let n = 0; n<9;n++){
                document.getElementById(arrNumberTwo[n]).innerHTML = "";
            }
            (document.getElementById(arrNumber[0][0])).style.color = "black";
            (document.getElementById(arrNumber[1][1])).style.color = "black";
            (document.getElementById(arrNumber[2][2])).style.color = "black";
            setArrBool();
            }
            else{
                for(let n = 0; n<9;n++){
                    document.getElementById(arrNumberTwo[n]).innerHTML = "";
                }
                (document.getElementById(arrNumber[0][0])).style.color = "black";
                (document.getElementById(arrNumber[1][1])).style.color = "black";
                (document.getElementById(arrNumber[2][2])).style.color = "black";
                setArrBool();
                alert("Спасибо за игру!");
            }
        }
        def = true;
    }
    if(arrBool[0][2]==false && arrBool[1][1]== false && arrBool[2][0] == false){
        (document.getElementById(arrNumber[0][2])).style.color = "blue";
        (document.getElementById(arrNumber[1][1])).style.color = "blue";
        (document.getElementById(arrNumber[2][0])).style.color = "blue";
        const it = i;
        setTimeout(run,100);
        function run() {
            if(confirm("O-победил! Хотите продолжить?")){
            for(let n = 0; n<9;n++){
                document.getElementById(arrNumberTwo[n]).innerHTML = "";
            }
            (document.getElementById(arrNumber[0][2])).style.color = "black";
            (document.getElementById(arrNumber[1][1])).style.color = "black";
            (document.getElementById(arrNumber[2][0])).style.color = "black";
            setArrBool();
            }
            else{
                for(let n = 0; n<9;n++){
                    document.getElementById(arrNumberTwo[n]).innerHTML = "";
                }
                (document.getElementById(arrNumber[0][2])).style.color = "black";
                (document.getElementById(arrNumber[1][1])).style.color = "black";
                (document.getElementById(arrNumber[2][0])).style.color = "black";
                setArrBool();
                alert("Спасибо за игру!");
            }
        }
        def = true;
    }
}