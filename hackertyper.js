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
            resulttext[i]=resulttext[i].split('')
        }
    }
    filecontent=fr.readAsText(this.files[0])
    document.getElementById("inputfile").hidden=true
})

document.onkeypress=function(){
    hackertext.innerHTML+=resulttext[currentline].slice(currentchar,currentchar+speed).join("")
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