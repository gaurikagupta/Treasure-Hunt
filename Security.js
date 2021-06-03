class Security {
    constructor(){   
        this.input1=createInput('Answer');
        this.button1=createButton('Check');
        this.input2=createInput('Answer');
        this.button2=createButton('Check');
        this.input3=createInput('Answer');
        this.button3=createButton('Check');
    }

    hide(){
        this.input1.hide();
        this.button1.hide();
        this.input2.hide();
        this.button2.hide();
        this.input3.hide();
        this.button3.hide();    
    }

    display(){
        this.input1.position(720,230);
        this.button1.position(775,270);
        this.input2.position(125,130);
        this.button2.position(180,170);
        this.input3.position(125,400);
        this.button3.position(180,440);
        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode2,this.input1.value())){
             this.input1.hide();
             this.button1.hide();
             score=score+1;
            }      
        });
        this.button3.mousePressed(()=>{
            if(system.authenticate2(accessCode3,this.input3.value())){
             this.input3.hide();
             this.button3.hide();
             score=score+1;
            }      
        });
        this.button2.mousePressed(()=>{
            if(system.authenticate3(accessCode1,this.input2.value())){
             this.input2.hide();
             this.button2.hide();
             score=score+1;
            }      
        });
 
    }
}