$(document).ready(function() {                   // adicionando eventos
    $('header button').click(function() {         // para abrir o formulário   
        $('form').slideDown();                 //para  abrir o formulário
    });

    $('#botao-cancelar').click(function() {             // para recolher o fomulário
        $('form').slideUp();                            // para recolher o formulário
    })

        $('form').on('submit', function(e) {      // adicionando eventos
            e.preventDefault();
            const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();  // o "val" é utilizado no jQuery. Aqui podemos adicionar novos links de imagens
            const novoItem = $('<li style="display: none"></li>');   // Com o display: nome a imagem não vai aprecer quando adicionada. Fizemos isso para poder colocar um efeito de aparição nela
            $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem); // o appendTo pega o novo item e insere dento do do li, entre a abertura e fechamento dele
            $(`
            <div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem em tamanho real
            </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo(`ul`);
            $(novoItem).fadeIn(2000); //uma animação no surgimento da imagem quando adicionada. O 5000 são o milessímos de segundos que a imagem demora para aparecer.
            $(`#endereco-imagem-nova`).val(``); // para limpar o campo depois de adicionar uma nova imagem
    })
})
