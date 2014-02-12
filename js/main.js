jQuery(document).ready(function(){

    var shells = $('.shells');
    var shell_item = $('.shell-item');
    var shell_count = shell_item.length;
    
    // Start. Add ball in random item
    
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
    
    
    shell_item.bind('click', function(index){
        if ($.contains( this, document.getElementById('ball'))) {
            $('.win').addClass('active');
            $(this).addClass('lucky');
        } else {
            $('.lose').addClass('active');
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