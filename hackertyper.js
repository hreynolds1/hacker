resulttext=""
currentchar=0
currentline=0
speed=5
hackertext=document.getElementById("hackertext").children
hackertext=hackertext[hackertext.length-1]
document.getElementById("inputfile").addEventListener("change", function() {
    fr=new FileReader();
    fr.onload=function(){
        resulttext=fr.result.split('\n')
        for (i in resulttext){
            splitlist=[]
            for (x in resulttext[i]){
                switch(resulttext[i][x].charCodeAt(0)){
                    case 9:
                        for (n=0;n<4;n++){splitlist.push("\u00A0")}
                        break;
                    case 32:
                        splitlist.push("\u00A0")
                        break;
                    default:
                        splitlist.push(resulttext[i][x])
                        break;
                }
                /*console.log(resulttext[i][x].charCodeAt(0))
                console.log(resulttext[i][x])*/
            }
            console.log(splitlist)
            resulttext[i]=splitlist.join("")
            console.log(resulttext[i])
            console.log(resulttext[i].length)
        }
    }
    filecontent=fr.readAsText(this.files[0])
    document.getElementById("inputfile").hidden=true
})

document.onkeypress=function(){
    console.log(resulttext[currentline].substring(currentchar,currentchar+speed).split(""))
    hackertext.innerHTML+=resulttext[currentline].substring(currentchar,currentchar+speed)
    currentchar+=speed
    if (currentchar>resulttext[currentline].length){
        if (currentline+1==resulttext.length){currentline=0}else{currentline+=1}
        currentchar=0
        document.getElementById("hackertext").appendChild(document.createElement("P"))
        hackertext=document.getElementById("hackertext").children
        hackertext=hackertext[hackertext.length-1]
    }
    window.scrollTo(0,document.body.scrollHeight)
}
