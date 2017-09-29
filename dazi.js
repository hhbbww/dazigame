function Game() {
    this.charArr=['A','B','C','D','E','F','G','H','I','J','K','M','L','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    this.number=5;
    this.current=[];
    this.speed=10;
    this.position=[];
    this.gk =1;
    this.scroe=0;
    this.der =[];
}
Game.prototype={
    star:function(){
        this.getChars();
        this.grop();
        this.key();
    },
    getChars:function(){
        for(let i =0;i<this.number;i++) {
            this.getChar();
        }
    },
    getChar:function(){
        
        let divs = document.createElement('div');
        let text;
        do{
            let num =Math.floor( Math.random()*this.charArr.length);
            text=this.charArr[num];
        }while(this.checkr(text));
        divs.innerText=text;
        divs.classList.add('box');
        let tops=Math.floor(Math.random()*100+60);
        let lefts =Math.floor(Math.random()*(innerWidth-400)+200);
        while(this.check(lefts)){
            lefts =Math.floor(Math.random()*(innerWidth-400)+200);
        }
        divs.style.top=tops+'px';
        divs.style.left=lefts+'px';
        this.current.push(divs);
        document.body.appendChild(divs);
        this.position.push(lefts);
        this.der.push(text);
    },
    check:function(lefts){
        let flag =  this.position.some(function(value){
                 return Math.abs(value-lefts)<50;
        } );
        return flag;
    },
    checkr:function(text){
        let flag=this.der.some(function(value){
            return value==text;
        })
        return flag;
    },
    grop:function(){
        let that=this;
        this.t=setInterval(function(){
            for(let i=0;i<that.current.length;i++){
                let tops=that.current[i].offsetTop+that.speed;
                that.current[i].style.top=tops+'px';
                if(tops>=500){
                    document.body.removeChild(that.current[i]);
                    that.current.splice(i,1);
                    that.position.splice(i,1);
                    that.der.splice(i,1);
                    that.getChar();

                }
            }
        },300)
    },
    key:function () {
        let that=this;
        document.onkeydown=function (e) {

            for(let i =0;i<that.current.length;i++){
                if(that.current[i].innerText==String.fromCharCode(e.keyCode)){
                    document.body.removeChild(that.current[i]);
                    that.current.splice(i,1);
                    that.position.splice(i,1);
                    that.der.splice(i,1);
                    that.getChar();
                    that.scroe+=1;
                    let fenshu=document.querySelector('.fenshu');
                    fenshu.innerHTML=that.scroe;
                    if(that.scroe==10){
                    that.next();
                    }
                }

            }
            
        }

    },
    next:function () {
      clearInterval(this.t);
      for(let i =0;i<this.current.length;i++){
          document.body.removeChild(this.current[i]);
      }
        this.current.length=0;
        this.position.length=0;
        this.der.length=0;
        this.gk++;
        this.number++;
        this.scroe=0;
        if(this.number>=13){
            this.number=13;
            this.speed+=1;
        }
        this.star();
        let gk1=document.querySelector('.guanshu');
        let fenshu=document.querySelector('.fenshu');
        gk1.innerHTML=this.gk;
        fenshu.innerHTML=this.scroe;
    },
    resize:function(){
        clearInterval(this.t);
        for(let i =0;i<this.current.length;i++){
            document.body.removeChild(this.current[i]);
        }
        this.current.length=0;
        this.position.length=0;
        this.der.length=0;
        this.gk=1;
        this.number=5;
        this.speed=10;
        this.scroe=0;
        this.star();
        let gk1=document.querySelector('.guanshu');
        let fenshu=document.querySelector('.fenshu');
        gk1.innerHTML=this.gk;
        fenshu.innerHTML=this.scroe;
    },
    end:function(){
        clearInterval(this.t);
        for(let i =0;i<this.current.length;i++){
            document.body.removeChild(this.current[i]);
        }
        this.current.length=0;
        this.position.length=0;
        this.der.length=0;
        this.gk=1;
        this.number=5;
        this.speed=10;
        this.scroe=0;
        let gk1=document.querySelector('.guanshu');
        let fenshu=document.querySelector('.fenshu');
        gk1.innerHTML=this.gk;
        fenshu.innerHTML=this.scroe;
    }
};