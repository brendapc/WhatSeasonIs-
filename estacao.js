function rodar(){
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var agora = new Date()
    //var mes = agora.getMonth()
    var mes = 2
    switch(mes){
        case 0:
        case 1:
        case 11:
            msg.innerHTML ='Summer';
            msg2.innerHTML ='Winter';
            break
        
        case 2: 
        case 3:
        case 4:
            msg.innerHTML ='Fall'
            msg2.innerHTML ='Spring'
            break
        
        case 5:
        case 6:
        case 7:
            msg.innerHTML ='Spring'
            msg2.innerHTML ='Fall'
            
        case 8:
        case 9:
        case 10:       
            msg.innerHTML ='Summer'
            msg2.innerHTML ='Winter'
            break


    }
    
}