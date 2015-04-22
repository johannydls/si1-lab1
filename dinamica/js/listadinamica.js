function addItem() {
    if (document.getElementById('tema-aprender').value != "") {
        var value = $('#tema-aprender').val();

        $("#linhas1").append('<tr> <td width=200>' + value + '</td> <td width=125><button class="btn btn-small btn-danger" onclick="RemoveTableRow(this)" type="button">Remover</button></td> <td width=125><button class="btn btn-small btn-success" onclick="MoveTableRow(this)" type="button">Aprendi!</button></td>  </tr>');
    }
    document.getElementById('tema-aprender').value = "";
}

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