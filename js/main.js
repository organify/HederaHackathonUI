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
            var appendList = '<div class="removeOnConfirm2"> <h1 class="display-3">Reward your farmer</h1><p class="lead">Customer reviews </p> <div class="rating"> <span>☆</span> <span>☆</span> <span>☆</span> <span>☆</span> <span>☆</span> </div> <br> <button class="submitReview">Submit your review</button></div>';
            $('.removeOnConfirm').remove();
            $('.carousel-caption').append(appendList);
        } else {
            alert('Please confirm the numbers before we are able to proceed');
        }
    });

    // Sends AJAX post request
    $('body').on('click', '.submitReview', function () {
        // $.ajax({
        //     url: '/api/transfer',
        //     data: {
        //         from: '',
        //         to: '',
        //         amount: ''
        //     },
        //     method: "POST",
        // }).done(function (msg) {
        //     alert("Data Saved: " + msg);
        // });
        //curl --request POST 'http://localhost:8080/api/transfer' --header "Content-Type:application/json" --header "Accept:application/json" --data '{"data":{"to":"1001", "from": "1002", "amount": 1}}'
        // // Receives answer from Ajax and display to user
        // if(transaction is successfull)
        // var appendList2 = '<p>Pasture to Plate has received your transaction successfully</p><br><p>Message from the farmer:</p><br><p>I am very happy to be able to share my product information with you. Hope you love eaiting your food the same way we love preparing it for you!</p>'
        var appendList2 = '<div class="newDiv"><p class="thankYou">Thank you for your review</><div class="farmerReward"><p>Farmer Reward: </p></div><div class="userReward"><p>Your Reward: </p> <br> <select class="tipOption"><option>15%</option><option>18%</option><option>20%</option></select><br><button class="submitTip">Tip your farmer</button></div> </div>'
        $('.removeOnConfirm2').remove();
        $('.carousel-caption').append(appendList2);
        $('.carousel-caption').css({
            'display': 'grid !important',
            'grid-template-columns': '1fr 1fr',
            'grid-template-rows': '0.2fr'
        });
    })
})