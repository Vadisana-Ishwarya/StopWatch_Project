let[seconds,minutes,hours]=[0,0,0];
        let displayTime=document.querySelector('.js-displayTime')
        let timer=null;
        function stoptWatch(){
            seconds++;
            if(seconds==60){
                seconds=0;
                minutes++;
                if(minutes==0){
                    hours++
                }
            }
           let h = hours < 10 ? "0" + hours : hours;
           let m = minutes < 10 ? "0" + minutes :minutes;
           let s = seconds < 10 ? "0" +seconds : seconds;

            displayTime.innerHTML=h +':'+ m +':'+ s;
        }
        
        function watchStart(){
            if(timer!==null){
                clearInterval(timer);
            }
            timer=setInterval(stoptWatch,1000)
        }
        function watchStop(){
            clearInterval(timer);
        }
        function watchReset(){
            clearInterval(timer);
            [seconds,minutes,hours]=[0,0,0];
            displayTime.innerHTML='00:00:00';
        }