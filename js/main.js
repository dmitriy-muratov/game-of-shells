jQuery(document).ready(function(){

    var shells = $('.shells');
    var shell_item = $('.shell-item');
    var shell_count = shell_item.length;
    
        //var random = Math.floor((Math.random()*shell_count) + 1);
        //console.log(random);
    
    shell_array = new Array(shell_count);
    shell_array = new Array(shell_item);
    console.log(shell_array);
    
    
    // Start. Add ball in random item
    $('#start-btn').click(function(){
    
        function getRandom(num){
            var my_num = Math.floor((Math.random()*shell_count));
            return my_num;
        }
        
        var hide_ball = function (){
            var numRand = getRandom(shell_count);
            shell_item.each(function(index) {
                if(numRand == index) {
                    $(this).append('<span id="ball" />')
                    return false;
                }
            });
        }
        hide_ball();
    
        $(this).unbind('click');
    });// end Start
    
    shell_item.bind('click', function(index){
        if ($.contains( this, document.getElementById('ball'))) {
            $('#middle .inner').prepend('<div class="win" />');
            $(this).addClass('lucky');
        } else {
            $('#middle .inner').prepend('<div class="lose" />');
            $(this).addClass('try-again');
        }
        
        $('#ball').addClass('visible');
    
        shell_item.each( function() {
            $(this).unbind('click');
        });
        return false;
    });
    
    //restart game
    $('#restart-btn').click(function() {
        location.reload();
    });


	
});