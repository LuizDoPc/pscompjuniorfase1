function lancar(){
    $('#rocket').animate({
        "top": ($('#line').position().top - $('#rocket').height()/3)+"px"
    }, 100, function () {
        $('#rocket').animate({deg: 90}, {
            duration: 100,
            step: function (now) {
                $('#rocket').css({
                    transform: 'rotate('+now+'deg)'
                });
            }
        });
    });

    $('#rocket').attr('data-onde', 'home');
}

function objetivos(){
    if($('#rocket').attr('data-onde') != 'obj'){
        if($('#rocket').attr('data-onde') == 'home'){
            lancar();
            setTimeout(function () {
                $('#rocket').animate({
                    "left": $('#goals').position().left+"px"
                }, 100);
            }, 150);
            $('#rocket').attr('data-onde', 'obj');
        }
        else{
            $('#rocket').animate({deg: 270}, {
                duration: 100,
                step: function (now) {
                    $('#rocket').css({
                        transform: 'rotate('+now+'deg)'
                    });
                }
            });
            $('#rocket').animate({
                "left": $('#goals').position().left+"px"
            }, 100, function () {
                $('#rocket').attr('data-onde', 'obj');
            });
        }
        $('.quadrado').hide();
        $('#objetivos').show();
    }
}

function sobre(){
    if($('#rocket').attr('data-onde') != 'sobre'){
        if($('#rocket').attr('data-onde') == 'home'){
            lancar();
            setTimeout(function () {
                $('#rocket').animate({
                    "left": $('#img_about').position().left+"px"
                }, 100);
            }, 150);
        }
        else if($('#rocket').attr('data-onde') == 'obj'){
            $('#rocket').animate({deg: 90}, {
                duration: 100,
                step: function (now) {
                    $('#rocket').css({
                        transform: 'rotate('+now+'deg)'
                    });
                }
            });

            $('#rocket').animate({
                "left": $('#img_about').position().left+"px"
            }, 100);
        }
        else{
            $('#rocket').animate({deg: 270}, {
                duration: 100,
                step: function (now) {
                    $('#rocket').css({
                        transform: 'rotate('+now+'deg)'
                    });
                }
            });
            $('#rocket').animate({
                "left": $('#img_about').position().left+"px"
            }, 100, function () {
                $('#rocket').animate({deg: 270}, {
                    duration: 100,
                    step: function (now) {
                        $('#rocket').css({
                            transform: 'rotate('+now+'deg)'
                        });
                    }
                });
            });
        }
        $('#rocket').attr('data-onde', 'sobre');
        $('.quadrado').hide();
        $('#sobre').show();
    }
}


function formacao(){
    if($('#rocket').attr('data-onde') != 'form'){
        if($('#rocket').attr('data-onde') == 'home'){
            lancar();

            setTimeout(function () {
                $('#rocket').animate({
                    "left": $('#img_academic').position().left+"px"
                }, 100);
            }, 150);
        }
        else if($('#rocket').attr('data-onde') == 'obj' || $('#rocket').attr('data-onde') == 'sobre'){

            $('#rocket').animate({deg: 90}, {
                duration: 100,
                step: function (now) {
                    $('#rocket').css({
                        transform: 'rotate('+now+'deg)'
                    });
                }
            });

            $('#rocket').animate({
                "left": $('#img_academic').position().left+"px"
            }, 100);
        }else{

            $('#rocket').animate({deg: 270}, {
                duration: 100,
                step: function (now) {
                    $('#rocket').css({
                        transform: 'rotate('+now+'deg)'
                    });
                }
            });

            $('#rocket').animate({
                "left": $('#img_academic').position().left+"px"
            }, 100);

        }



        $('#rocket').attr('data-onde', 'form');
        $('.quadrado').hide();
        $('#formacao').show();
    }
}

function experiencias(){
    if($('#rocket').attr('data-onde') != 'exp'){
        if($('#rocket').attr('data-onde') == 'home'){
            lancar();

            setTimeout(function () {
                $('#rocket').animate({
                    "left": $('#img_exp').position().left+"px"
                }, 100);
            }, 150);
        }else{
            $('#rocket').animate({deg: 90}, {
                duration: 100,
                step: function (now) {
                    $('#rocket').css({
                        transform: 'rotate('+now+'deg)'
                    });
                }
            });

            $('#rocket').animate({
                "left": $('#img_exp').position().left+"px"
            }, 100);
        }


        $('#rocket').attr('data-onde', 'exp');
        $('.quadrado').hide();
        $('#experiencias').show();
    }
}


$('#launch').click(function () {
    lancar();
    setTimeout(function () {
        objetivos();
    }, 150);
});

$('#goals').click(function () {
    objetivos();
});

$('#about').click(function () {
    sobre();
});

$('#academic').click(function () {
    formacao();
});

$('#experiences').click(function () {
    experiencias();
});

$(document).ready(function () {
    if(screen.width <= 425){
        $('body').css("background-image", "none");
    }
});