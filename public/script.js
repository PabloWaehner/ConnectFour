(function() {
    //add the same column 5 more times
    var objToClone = $(".column");
    for (var i = 0; i < 6; i++) {
        objToClone.clone().appendTo(".container");
    }
    var currentPlayer = "player1";
    $(".column").on("click.clickEventOff", function(e) {
        var slotsInColumn = $(e.currentTarget).find(".slot");
        //currentTarget determines which column is clicked
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass("player1") &&
                !slotsInColumn.eq(i).hasClass("player2")
            ) {
                break; //if the slot above doesn't have the class, stop adding the class to the whole column. Otherwise with one click all the holes in the column will be colored
            }
        }
        slotsInColumn.eq(i).addClass(currentPlayer);

        if (currentPlayer === "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }

        $(".button").on("click", function() {
            location.reload();
        });

        var div = $("div.slot");
        var winner1 = $(".winner1");
        var winner2 = $(".winner2");
        var possibilities = [
            //horizontal
            [5, 11, 17, 23],
            [11, 17, 23, 29],
            [17, 23, 29, 35],
            [23, 29, 35, 41],
            [4, 10, 16, 22],
            [10, 16, 22, 28],
            [16, 22, 28, 34],
            [22, 28, 34, 40],
            [3, 9, 15, 21],
            [9, 15, 21, 27],
            [15, 21, 27, 33],
            [21, 27, 33, 39],
            [2, 8, 14, 20],
            [8, 14, 20, 26],
            [14, 20, 26, 32],
            [20, 26, 32, 38],
            [1, 7, 13, 19],
            [7, 13, 19, 25],
            [13, 19, 25, 31],
            [19, 25, 31, 37],
            [0, 6, 12, 18],
            [6, 12, 18, 24],
            [12, 18, 24, 30],
            [18, 24, 30, 36],
            //vertical
            [0, 1, 2, 3],
            [1, 2, 3, 4],
            [2, 3, 4, 5],
            [6, 7, 8, 9],
            [7, 8, 9, 10],
            [8, 9, 10, 11],
            [12, 13, 14, 15],
            [13, 14, 15, 16],
            [14, 15, 16, 17],
            [18, 19, 20, 21],
            [19, 20, 21, 22],
            [20, 21, 22, 23],
            [24, 25, 26, 27],
            [25, 26, 27, 28],
            [26, 27, 28, 29],
            [30, 31, 32, 33],
            [31, 32, 33, 34],
            [32, 33, 34, 35],
            [36, 37, 38, 39],
            [37, 38, 39, 40],
            [38, 39, 40, 41],
            //diagonal right
            [3, 8, 13, 18],
            [4, 9, 14, 19],
            [9, 14, 19, 24],
            [5, 10, 15, 20],
            [10, 15, 20, 25],
            [15, 20, 25, 30],
            [11, 16, 21, 26],
            [16, 21, 26, 31],
            [21, 26, 31, 36],
            [17, 22, 27, 32],
            [22, 27, 32, 37],
            [23, 28, 33, 38],
            //horizontal left
            [2, 9, 16, 23],
            [1, 8, 15, 22],
            [8, 15, 22, 29],
            [0, 7, 14, 21],
            [7, 14, 21, 28],
            [14, 21, 28, 35],
            [6, 13, 20, 27],
            [13, 20, 27, 34],
            [20, 27, 34, 41],
            [12, 19, 26, 33],
            [19, 26, 33, 40],
            [18, 25, 32, 39]
        ];

        for (var i = 0; i < possibilities.length; i++) {
            if (
                div.eq(possibilities[i][0]).hasClass("player1") &&
                div.eq(possibilities[i][1]).hasClass("player1") &&
                div.eq(possibilities[i][2]).hasClass("player1") &&
                div.eq(possibilities[i][3]).hasClass("player1")
            ) {
                console.log("winner player 1");

                // $("#my-modal").show();
                $(".column").off(".clickEventOff");
                // winner1.css("z-index", 10);
                winner1.fadeOut(0).fadeIn(2000);
                winner1.css("z-index", 10);

                winner1.animate(
                    {
                        height: "+=150px",
                        width: "+=150px",
                        fontSize: "50px"
                    },
                    2000
                );
            }
            if (
                div.eq(possibilities[i][0]).hasClass("player2") &&
                div.eq(possibilities[i][1]).hasClass("player2") &&
                div.eq(possibilities[i][2]).hasClass("player2") &&
                div.eq(possibilities[i][3]).hasClass("player2")
            ) {
                console.log("winner player 2");
                $(".column").off(".clickEventOff");
                winner2.css("z-index", 10);
                winner2.fadeOut(0).fadeIn(2000);
                winner2.animate(
                    {
                        height: "+=150px",
                        width: "+=150px",
                        fontSize: "50px"
                    },
                    2000
                );
            }
        }
    });
})();
