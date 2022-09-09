function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if(fano.value.length == 0 || fano.value > ano || fano.value < 1920){
        alert('[ERRO] Verifique a data inserida e tente novamente!');

    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - fano.value;
        var genero = ''
        var img = document.createElement(img);
        img.setAttribute('id','foto');

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src','imagens/fotomenino.jpg')
            }else if(idade < 21){
                img.setAttribute('src','imagens/fotojovemhomem.jpg')
            }else if(idade < 50){
                img.setAttribute('src','imagens/fotoadultohomem.jpg')
            }else{
                img.setAttribute('src','imagens/fotoidoso.jpg')
            }

        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src','imagens/fotomenina.jpg')
            }else if(idade < 21){
                img.setAttribute('src','imagens/fotojovemmulher.jpg')
            }else if(idade < 50){
                img.setAttribute('src','imagens/fotoadultomulher.jpg')
                
            }else{
                img.setAttribute('src','imagens/fotoidosa.jpg')
                
            }
            
        }
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`;
        res.appendChild(img);
    
    }
}