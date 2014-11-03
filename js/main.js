function drawSVG(object,size,prefix,frameRate,fillColor,allDone){
    var current_frame, total_frames, path, length, handle, myobj;

    myobj = document.getElementById(object).cloneNode(true);
    var init = function() {
        current_frame = 0;
        total_frames = frameRate;
        path = new Array();
        length = new Array();
        for(var i=0; i<size;i++){
            path[i] = document.getElementById(prefix+i);
            l = path[i].getTotalLength();
            length[i] = l;
            path[i].style.strokeDasharray = l + ' ' + l;
            path[i].style.strokeDashoffset = l;
        }
        handle = 0;

    }


    var draw = function() {
        var progress = current_frame/total_frames;

        if (progress > 1) {
            for(var j=0; j<path.length;j++){
                path[j].style.fill = fillColor;
            }
            window.cancelAnimationFrame(handle);

        }

        else {
            current_frame++;
            for(var j=0; j<path.length;j++){
                path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
            }
            handle = window.requestAnimationFrame(draw);
        }
    };

    init();
    draw();
    var rerun = function() {
        var old = document.getElementsByTagName('div')[0];
        old.parentNode.removeChild(old);
        document.getElementsByTagName('body')[0].appendChild(myobj);
        init();
        draw();
    };
}

$(document).ready(function(){
    $('#drawPumpkin').on('click',function(){
        drawSVG('pumpkin-svg',13,'pumpkin',40,'none',function(){});
    });
    $('#colorPumpkin').on('click',function(){
        $('#pumpkin0').attr('fill','#F78D25');
        $('#pumpkin1').attr('fill','#3d8414');
        $('#pumpkin2').attr('fill','#010101');
        $('#pumpkin3').attr('fill','#010101');
        $('#pumpkin4').attr('fill','#010101');
        $('#pumpkin5').attr('fill','#010101');
        $('#pumpkin6').attr('fill','#010101');
        $('#pumpkin7').attr('fill','#010101');
        $('#pumpkin8').attr('fill','#010101');
        $('#pumpkin9').attr('fill','#010101');
        $('#pumpkin10').attr('fill','#010101');
        $('#pumpkin11').attr('fill','#010101');
        $('#pumpkin12').attr('fill','#010101');
    });
    $('#pumkinTored').on('click',function(){
        $('#pumpkin0').attr('fill','#972f17');

    });
    $('#lightPumpkin').on('click',function(){
        $('#pumpkin2').attr('fill','#dbef24');
        $('#pumpkin3').attr('fill','#dbef24');
        $('#pumpkin4').attr('fill','#dbef24');

    });
});