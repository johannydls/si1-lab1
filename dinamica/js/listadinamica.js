
$(document).ready(function() {

    $("#videos-sugeridos").hide();
    $("#menu-videos-sugeridos").hide();

    $(document).on("click", "#botao-aprendi", function(){
        $(this).remove();
    });

    (function($) {

        RemoveTableRow = function(handler) {
            var tr = $(handler).closest('tr');

            tr.fadeOut(400, function() {
                tr.remove();
            });

            return false
        };

        MoveTableRow = function(handler) {
            var tr = $(handler).closest('tr');

            $("#linhas2").append(tr);

            return false;
        }
    })(jQuery);
})



function addItem() {

    var valor = $('#tema-aprender').val();

    if (valor != "") {
        $("#linhas1").append(
            '<tr>' +
                '<td width=200 id="valor-assunto">' + valor + '</td>' +
                '<td width=125 id="botao-remove"><button class="btn btn-danger" onclick="RemoveTableRow(this)" type="button">Remover</button></td>' +
                '<td width=125 id="botao-aprendi"><button class="btn btn-success" onclick="MoveTableRow(this)" type="button">Aprendi</button></td>' +
            '</tr>'
        );
    }

    //Limpa o campo de pesquisa
    document.getElementById('tema-aprender').value = "";

    if (valor != "") {
        $("#show-videos").YoutubeVideo({
            //feed url rss dos videos
            //O primeiro resultado de cada busca sempre retorna um video de aviso do YouTube
            feedurl: 'http://gdata.youtube.com/feeds/api/videos?q=' + valor + '&v=2&format=5&alt=jsonc',

            count: '3', // total no of videos
            height: '280', //video height
            width: '270' //video width
        });

        //mostra o div #videos-sugeridos e o #menu-videos-sugeridos
        $("#videos-sugeridos").show();
        $("#menu-videos-sugeridos").show();
    }
}




