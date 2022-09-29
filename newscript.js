function verificar(){
    var v1 = document.getElementsByName('radios')
    var res = document.getElementById('res')
    if(v1[0].checked){
        res.innerHTML = 'Ola'
    }else if(v1[1].checked){
        res.innerHTML = 'oi'
    }else if(v1[2].checked){
        res.innerHTML = ' '
        for(var x = -7; x <= 10; x+=1){
            res.innerHTML += `${x}\u{1F600} `
        }
    }else if(v1[3].checked){
        alert('lucassss')
    }else if(v1[4].checked){
        res.innerHTML = ''
        for(var c = 10; c > 0; c-=1){
            res.innerHTML += `${c} \u{1F608} `
        }
    }else{
        res.innerHTML = `\u{1F610}`
    }    

}
function tabuada(){
    let n1 = document.getElementById('n1')
    let v2 = Number(n1.value)
    let c = 1
    let tab = document.getElementById('tab')
    tab.innerHTML = ''
    while(c <= 10){
        let item = document.createElement('option')
        item.text = `${v2} x ${c} = ${v2*c}`
        tab.appendChild(item)
        c += 1

    }
}

