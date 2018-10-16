$(document).ready(function () {
    var randNum = document.getElementsByClassName("import-letters");
    var randNumAppend = randNum.innerHTML;
    randNumAppend = Math.floor((Math.random() * 10000) + 1);
    $('.import-letters').append(randNumAppend);

    // Validates person is not a robot
    $('.button').click(function () {
        // checkBox();
        var innervalue = document.getElementById('inputValue').value;
        // console.log(randNumAppend);
        // console.log(innervalue);
        if (randNumAppend == innervalue) {
            var appendList = '<div class="removeOnConfirm2"> <h1 class="display-3">Reward your farmer</h1><p class="lead">Share your stars with the farmer and receive free HBars</p> <div class="rating"> <span>☆</span> <span>☆</span> <span>☆</span> <span>☆</span> <span>☆</span> </div> <br> <button class="submitReview">Submit your review</button></div>';
            $('.removeOnConfirm').remove();
            $('.carousel-caption').append(appendList);
        } else {
            alert('Please confirm the numbers before we are able to proceed');
        }
    });

    // Sends AJAX post request
    $('body').on('click', '.submitReview', function () {
        var HBarReceived = '1000';
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:8080/api/transfer",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
                "Postman-Token": "87fd947e-dac7-47da-8ab4-966cc90a14e9"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
            // alert(response);
            // var HBarTotal = JSON.stringify(response.toAccountTotal);
            // var test = JSON.parse(response);
            var HBarTotal = response;
            console.log(response);
            // var HBarTotal = '12312312';
            var appendList2 = '<div class="newDiv"><p class="thankYou">Thank you for your review</><div class="userReward"><p>Your Reward: </p> <p class="totalHbarText">$<span>' + HBarReceived + '</span> HBars have been added to your account</p> <div class="getBalanceWrapper"><p class="totalHbarText2">Click to get your total balance: </p><button class="getBalance">get balance</button></div><p class="totalHbarText2">How much would you like to tip your farmer for?</p> <input type="text" id="inputValue2"> <br><button class="submitTip">Tip your farmer</button></div> </div>'
            $('.removeOnConfirm2').remove();
            $('.carousel-caption').append(appendList2);
        });

        // // Receives answer from Ajax and display to user
        // if(transaction is successfull)

        $('.carousel-caption').css({
            'display': 'grid !important',
            'grid-template-columns': '1fr 1fr',
            'grid-template-rows': '0.2fr'
        });
    })
    $('body').on('click', '.getBalance', function () {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:8080/api/getBalance",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
                "Postman-Token": "74b226f9-2358-40d2-b2d4-1d6dcdb101e9"
            },
            "processData": false,
            "data": "{\"data\": {\"accountId\": 123}}"
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
            // var test = JSON.parse(response);
            var updatedBalance = response;
            var newBalance = '<p class="totalHbarText2">Your Balance Is: <span>' + updatedBalance + '</span></p>'
            $('.getBalanceWrapper').remove();
            $('.totalHbarText').append(newBalance);
            var HBarReceived = '1000';
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://localhost:8080/api/transfer",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-cache",
                    "Postman-Token": "87fd947e-dac7-47da-8ab4-966cc90a14e9"
                }
            }

            $.ajax(settings).done(function (response) {
                console.log(response);
            })
        });

    })
    $('body').on('click', '.submitTip', function () {
        var appendList3 = '<p>Pasture to Plate has received your tip</p><br><p>Message from the farmer:</p><br><p>I am very happy to be able to share my product information with you. Hope you love eaiting your food the same way we love preparing it for you!</p>'
        $('.newDiv').remove();
        $('.carousel-caption').append(appendList3);
    })
})