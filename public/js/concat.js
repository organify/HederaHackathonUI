$(document).ready(function () {
    var randNum = document.getElementsByClassName("import-letters");
    var randNumAppend = randNum.innerHTML;
    randNumAppend = Math.floor(Math.random() * 10000 + 1);
    $(".import-letters").append(randNumAppend);

    // Validates person is not a robot
    $(".button").click(function () {
        // checkBox();
        var innervalue = document.getElementById("inputValue").value;
        // console.log(randNumAppend);
        // console.log(innervalue);
        if (randNumAppend == innervalue) {
            var appendList =
                '<div class="removeOnConfirm2"> <h1 class="display-3">Reward your farmer</h1><p class="lead">Share your stars with the farmer and receive free HBars</p> <div id="rating"> <span class="star star1">☆</span> <span class="star star2">☆</span> <span class="star star3">☆</span> <span class="star star4">☆</span> <span class="star star5">☆</span> </div> <br> <button class="submitReview">Submit your review</button></div>';
            $(".removeOnConfirm").remove();
            $(".carousel-caption").append(appendList);
        } else {
            alert("Please confirm the numbers before we are able to proceed");
        }
    });

    $("body").on("click", ".star1", function () {
            $(".star1").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
        }),
        $("body").on("click", ".star2", function () {
            $(".star1").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
            $(".star2").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
        }),
        $("body").on("click", ".star3", function () {
            $(".star1").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
            $(".star2").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
            $(".star3").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
        }),
        $("body").on("click", ".star4", function () {
            $(".star1").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
            $(".star2").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
            $(".star3").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
            $(".star4").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
        }),
        $("body").on("click", ".star5", function () {
            $(".star1").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
            $(".star2").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
            $(".star3").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
            $(".star4").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
            $(".star5").css({
                'color': 'darkred',
                'opacity': '1',
                'transform': 'rotateX(0deg)',
                'text-shadow': '0 0 30px #ffc'
            });
        }),
        // Sends AJAX post request
        $("body").on("click", ".submitReview", function () {
            var HBarReceived = "1000";
            var settings = {
                async: true,
                crossDomain: true,
                url: "http://localhost:8080/api/transfer",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                    "Postman-Token": "87fd947e-dac7-47da-8ab4-966cc90a14e9"
                }
            };

            $.ajax(settings).done(function (response) {
                console.log(response);
                // alert(response);
                // var HBarTotal = JSON.stringify(response.toAccountTotal);
                // var test = JSON.parse(response);
                // var HBarTotal = response;
                // console.log(response);
                var HBarTotal = '12312312';
                var appendList2 =
                    '<div class="newDiv"><p class="thankYou">Thank you for your review</><div class="userReward"><p>Your Reward: </p> <p class="totalHbarText">$<span>' +
                    HBarReceived +
                    '</span> HBars have been added to your account</p> <div class="getBalanceWrapper"><p class="totalHbarText2">Click to get your total balance: </p><button class="getBalance">get balance</button></div><p class="totalHbarText2">How much would you like to tip your farmer for?</p> <input type="text" id="inputValue2"> <br><button class="submitTip">Tip your farmer</button></div> </div>';
                $(".removeOnConfirm2").remove();
                $(".carousel-caption").append(appendList2);
            });

            // // Receives answer from Ajax and display to user
            // if(transaction is successfull)

            $(".carousel-caption").css({
                display: "grid !important",
                "grid-template-columns": "1fr 1fr",
                "grid-template-rows": "0.2fr"
            });
        });
    $("body").on("click", ".getBalance", function () {
        var settings = {
            async: true,
            crossDomain: true,
            url: "http://localhost:8080/api/getBalance",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
                "Postman-Token": "74b226f9-2358-40d2-b2d4-1d6dcdb101e9"
            },
            processData: false,
            data: '{"data": {"accountId": 123}}'
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            // var test = JSON.parse(response);
            var updatedBalance = response;
            var newBalance =
                '<p class="totalHbarText2">Your Balance Is: <span>' +
                updatedBalance +
                "</span></p>";
            $(".getBalanceWrapper").remove();
            $(".totalHbarText").append(newBalance);
            var HBarReceived = "1000";
            var settings = {
                async: true,
                crossDomain: true,
                url: "http://localhost:8080/api/transfer",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                    "Postman-Token": "87fd947e-dac7-47da-8ab4-966cc90a14e9"
                }
            };

            $.ajax(settings).done(function (response) {
                console.log(response);
            });
        });
    });
    $("body").on("click", ".submitTip", function () {
        var appendList3 =
            '<p>Pasture to Plate has received your tip</p><br><p>Message from the farmer:</p><br><p>"I am very happy to be able to share my product information with you. Hope you love eaiting your food the same way we love preparing it for you!"</p>';
        $(".newDiv").remove();
        $(".carousel-caption").append(appendList3);
    });
});
/**
 * Star rating class
 * @constructor
 */
function StarRating() {
    this.init();
};

/**
 * Initialize
 */
StarRating.prototype.init = function () {
    this.stars = document.querySelectorAll('#rating span');
    for (var i = 0; i < this.stars.length; i++) {
        this.stars[i].setAttribute('data-count', i);
        this.stars[i].addEventListener('mouseenter', this.enterStarListener.bind(this));
    }
    document.querySelector('#rating').addEventListener('mouseleave', this.leaveStarListener.bind(this));
};

/**
 * This method is fired when a user hovers over a single star
 * @param e
 */
StarRating.prototype.enterStarListener = function (e) {
    this.fillStarsUpToElement(e.target);
};

/**
 * This method is fired when the user leaves the #rating element, effectively removing all hover states.
 */
StarRating.prototype.leaveStarListener = function () {
    this.fillStarsUpToElement(null);
};

/**
 * Fill the star ratings up to a specific position.
 * @param el
 */
StarRating.prototype.fillStarsUpToElement = function (el) {
    // Remove all hover states:
    for (var i = 0; i < this.stars.length; i++) {
        if (el == null || this.stars[i].getAttribute('data-count') > el.getAttribute('data-count')) {
            this.stars[i].classList.remove('hover');
        } else {
            this.stars[i].classList.add('hover');
        }
    }
};

// Run:
new StarRating();