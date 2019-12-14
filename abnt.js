let livro=[];
    function abnt(){
    livro.autor = document.getElementById("nomeAutor").value
    livro.sobreAutor = document.getElementById("sobrenome").value
    livro.tit = document.getElementById("titulo").value
    livro.nEdi = document.getElementById("numeroEdicao").value
    livro.locPub = document.getElementById("localPub").value
    livro.nomEdi = document.getElementById("nomeEdito").value
    livro.anoPubl = document.getElementById("anoPub").value
    
    document.getElementById("para").innerText = `${livro.sobreAutor.toUpperCase()}, ${livro.autor.toUpperCase().slice(0,1)}. ${livro.tit}: ${livro.nEdi}. ed. ${livro.locPub}: ${livro.nomEdi}, ${livro.anoPubl}`
        
    }