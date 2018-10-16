$(document).ready(function () {
    var accounts = {
        organifyAccount: "1001",
        userAccount: "1002",
        farmerAccount: "1003"
    };
    var randNum = document.getElementsByClassName("import-letters");
    var randNumAppend = randNum.innerHTML;
    randNumAppend = Math.floor(Math.random() * 10000 + 1);
    $(".import-letters").append(randNumAppend);


    function transfer(to, from, amount, callback){
        var dataObj = {"data": {
            "to": to,
            "from": from,
            "amount": amount
        }};
        var data = {dataString: JSON.stringify(dataObj)};
        $.post("/transfer", data, function(response){
            if(!response || response != "Success"){
                $(".removeOnConfirm").remove();
                $('.dynamicButton').remove();
                $(".modal-body").append("<p>An error occurs during hbar transferring, please try again later</p>");
            }
            else {
                callback(response);
            }
                
            });
    }
    // Validates person is not a robot
    $("#validateId").click(function () {
        // checkBox();
        var innervalue = document.getElementById("inputValue").value;
        // console.log(randNumAppend);
        // console.log(innervalue);
        if (randNumAppend == innervalue) {
            var appendList =
                '<div class="removeOnConfirm"> <h1 class="display-3">Reward your farmer</h1><p class="lead">Share your stars with the farmer and receive free HBars</p> <div id="rating"> <span class="star star1">☆</span> <span class="star star2">☆</span> <span class="star star3">☆</span> <span class="star star4">☆</span> <span class="star star5">☆</span> </div>' +
                 '</div>';
            $(".removeOnConfirm").remove();
            $('.dynamicButton').html('<button type="button" class="btn btn-primary" id="submitReview">Submit review</button></div>');
            $(".modal-body").append(appendList);
            new StarRating();
        } else {
            alert("Please confirm the numbers before we are able to proceed");
        }
    });

   
        $('body').on('click', '#submitReview', function () {
        var HBarReceived = 5;
        var callBack = function (response){
                console.log(response);
            // alert(response);
            // var HBarTotal = JSON.stringify(response.toAccountTotal);
            // var test = JSON.parse(response);
            var HBarTotal = response;
            console.log(response);
            // var HBarTotal = '12312312';
            var appendList2 = '<div class="newDiv"><p class="thankYou">Thank you for your review</><div class="userReward"><p>Your Reward: </p> <p class="totalHbarText">$<span>' + HBarReceived + 
            '</span> Tiny Bars have been added to your account</p> <div class="getBalanceWrapper"><p class="totalHbarText2">Click to get your total balance: </p><button class="getBalance">get balance</button></div><p class="totalHbarText2">How much would you like to tip your farmer for?</p>' + 
            '<input type="text" id="inputValue2"> (TinyBar)</div> </div>'
            $('.removeOnConfirm').remove();
            $('.modal-body').append(appendList2);
            $('.dynamicButton').html('<button type="button" class="btn btn-primary" id="submitTip">Tip the farmer</button></div>');

        }
        transfer(accounts.userAccount, accounts.organifyAccount, HBarReceived, callBack);
        
    }) 
    
    $("body").on("click", ".getBalance", function () {
        $.get("/getBalance/"+ accounts.userAccount, function(response){
             console.log(response);
             if(!response || !response.success){
                $(".getBalanceWrapper").remove();
                $(".totalHbarText").append('<p>An error occurs when retrieving account balance. Please try again later');
                return;
            }
            // var test = JSON.parse(response);
            var updatedBalance = response.balance;
            var newBalance =
                '<p class="totalHbarText2">Your Balance Is: <span>' +
                updatedBalance +
                "</span> TinyBar</p>";
            $(".getBalanceWrapper").remove();
            $(".totalHbarText").append(newBalance);
        });
    });
    $("body").on("click", "#submitTip", function () {
        var innervalue = document.getElementById("inputValue2").value;
        var callBack = function(response){
            var appendList3 =
            '<p>Pasture to Plate has received your '+ innervalue +' TinyBar tip</p><br><p>Message from the farmer:</p><br><p>"I am very happy to be able to share my product information with you. Hope you love eaiting your food the same way we love preparing it for you!"</p>';
        $(".newDiv").remove();
        $(".modal-body").append(appendList3);
         $('.dynamicButton').remove();
        }
         transfer(accounts.farmerAccount, accounts.userAccount, innervalue, callBack);
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
        //this.stars[i].addEventListener('mouseenter', this.enterStarListener.bind(this));
        this.stars[i].addEventListener('click', this.enterStarListener.bind(this));
    }
    //document.querySelector('#rating').addEventListener('mouseleave', this.leaveStarListener.bind(this));
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
            this.stars[i].classList.remove('selected-star');
        } else {
            this.stars[i].classList.add('selected-star');
        }
    }
};

// Run:
