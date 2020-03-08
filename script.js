var count = 0,
    wincount1 = 0;
    wincount2 = 0;
    checked1 = [],
    checked2 = [],
    possibility1 = ["1", "2", "3"],
    possibility2 = ["4", "5", "6"],
    possibility3 = ["7", "8", "9"],
    possibility4 = ["1", "4", "7"],
    possibility5 = ["2", "5", "8"],
    possibility6 = ["3", "6", "9"],
    possibility7 = ["1", "5", "9"],
    possibility8 = ["3", "5", "7"];

function startGame() {
    var player1 = $('#player1').val();
    var player2 = $('#player2').val();
    $('.form-section').hide();
    document.getElementById('turn').innerHTML = '<span>' + player1 + ' Turn</span>';
    document.getElementById("main-table").style.display = "block";
    document.getElementById("player1-name").innerHTML = player1;
    document.getElementById("player2-name").innerHTML = player2;
};

function clicked(id) {
    var element = document.getElementById(id);
    var player1 = $('#player1').val();
    var player2 = $('#player2').val();
    if (count % 2) {
        $(element).attr({
            class: "active-red",
            disabled: "true"
        });
        checked1.push(id);

        function isSubset(arr1, arr2) {
            for (var i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {
                    return false;
                }
            }
            return true;
        }
        document.getElementById('turn').innerHTML = '<span>' + player1 + ' Turn</span>';
        if (isSubset(checked1.sort(), possibility1) || isSubset(checked1.sort(), possibility2) || isSubset(checked1.sort(), possibility3) || isSubset(
            checked1.sort(), possibility4) || isSubset(checked1.sort(), possibility5) || isSubset(checked1.sort(), possibility6) || isSubset(
            checked1.sort(), possibility7) || isSubset(checked1.sort(), possibility8)) {
            document.getElementById('turn').innerHTML = '<span>' + player2 + ' Wins!</span>';
            wincount1++;
            $('.tdata input').prop('disabled', true);
        }
    } else {
        $(element).attr({
            class: "active-green",
            disabled: "true"
        });
        checked2.push(id);

        function isSubset(arr1, arr2) {
            for (var i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {
                    return false;
                }
            }
            return true;
        }
        document.getElementById('turn').innerHTML = '<span>' + player2 + ' Turn</span>';
        if (isSubset(checked2.sort(), possibility1) || isSubset(checked2.sort(), possibility2) || isSubset(checked2.sort(), possibility3) || isSubset(
            checked2.sort(), possibility4) || isSubset(checked2.sort(), possibility5) || isSubset(checked2.sort(), possibility6) || isSubset(
            checked2.sort(), possibility7) || isSubset(checked2.sort(), possibility8)) {
            document.getElementById('turn').innerHTML = '<span>' + player1 + ' Wins!</span>';
            wincount2++;
            $('.tdata input').prop('disabled', true);
        }
    }
    count++;
    document.getElementById('player1-count').innerHTML = '<span>' + wincount1 + '</span>';
    document.getElementById('player2-count').innerHTML = '<span>' + wincount2 + '</span>';
}

function newGame() {
    var player1 = $('#player1').val();
    $('.tdata input').attr({
        class: ""
    });
    $(".tdata input").removeAttr("disabled");
    checked1 = [];
    checked2 = [];
    document.getElementById('turn').innerHTML = '';
    document.getElementById('turn').innerHTML = '<span>' + player1 + ' Turn</span>';
    count = 0;
}