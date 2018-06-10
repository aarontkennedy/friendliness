
$(document).ready(function () {

    let form = $("#survey");
    form.on("submit", function (event) {

        event.preventDefault();
        if (form[0].checkValidity() === false) {
            event.stopPropagation();
            form[0].classList.add('was-validated');
        }
        else {
            var newFriend = {
                name: $("#name").val().trim(),
                linkToPhoto: $("#linkToPhoto").val().trim(),
                scores: [$('input[name=question1]:checked').val(),
                        $('input[name=question2]:checked').val(),
                        $('input[name=question3]:checked').val(),
                        $('input[name=question4]:checked').val(),
                        $('input[name=question5]:checked').val(),
                        $('input[name=question6]:checked').val(),
                        $('input[name=question7]:checked').val(),
                        $('input[name=question8]:checked').val(),
                        $('input[name=question9]:checked').val(),
                        $('input[name=question10]:checked').val()]
            };

            console.log("posting");
            
            $.post("/api/friends", newFriend)
                .then(function (data) {
                    console.log(data);
                    alert("Adding character...");
                });
        }
    });
});