

$(function(){

    // page tilt effect when topNavBar click
    var tiltPage={
        $contents:$('.contentsWrap'),
        $contentsFront:$('.contentsFront'),
        $topBar:$('.topBar'),
        offset:1800,
        contentsHeight:$('.contentsFront').outerHeight(),
        open:function(){
            this.$contents.addClass('tilt');
            this.$topBar.off('click');
            $('.topBar').on('click',this.close.bind(this));
            this.topBarFix(true);
            // console.log('opening');
        },
        close:function(){
            this.$contents.removeClass('tilt');
            $('.topBar',).off('click');
            this.$topBar.on('click', this.open.bind(this));
            this.topBarFix(false);
            // console.log('closing');


        },
        updateTransformOrigin:function(){
            scrollTop = this.$contents.scrollTop();
            equation = (scrollTop + this.offset) /this.contentsHeight*100;
            this.$contentsFront.css('transform-origin','center' + equation +'%');
        },

        topBarFix:function(opening){
            if(opening){
                $(".topBar").css({
                    // position:'absolute',
                    top:this.$contents.scrollTop() + 30 + 'px'
                });
            }else{
                setTimeout(function(){
                    $(".topBar").css({
                        // position:'fixed',
                        top:'30px'
                    });
                }, 300);
            }
        },

        bindEvents:function(){
            this.$topBar.on('click',this.open.bind(this));
            $('.hiddenTopBar').on('click', this.close.bind(this));
            $('.home').on('click', this.close.bind(this));
            $('.about').on('click', this.close.bind(this));
            $('.skill').on('click', this.close.bind(this));




            this.$contents.on('scroll',this.updateTransformOrigin.bind(this));
        },
        init:function(){
            this.bindEvents();
            this.updateTransformOrigin();
        }
            

    };
    tiltPage.init();



    
     // Fixed Header

     const offTop = $("#header").offset().top;    
     $(window).scroll(function(){
         let scroll = $(window).scrollTop();
         if(offTop <= scroll){
             $("#header").css({"position":"fixed","background":"#fff"});
             
             
         }else{
             $("#header").css({"position":"relative", "background":"#fcf7ef"});
         }
     });      

    

    //  Move Scroll to each location when click menu

    //  3차시도
    // const navLi=$("#hiddenNav ul li");
    //     let navIdx=navLi.index();
    //     let navClass=navLi.eq(navIdx).find("a").attr('class');
       
    //     console.log(navClass);          
     

    // if($(navLi).eq().click){
    //     const offset=$("#"+navClass+"Sec").offset().top;
    //     console.log(offset);

    // }           // $(this).toggleClass('click');
    // if($(this).eq(i).hasClass("click")){        
        
    // }


    //  4차시도! 성공!
    
    $('#hiddenNav ul li').click(function(event){
        event.preventDefault();           

        let navIdx=$(this).index();
        // console.log(navIdx);
        let navHref=$('#hiddenNav ul li').eq(navIdx).find("a").attr('href');
          //console.log(navHref);
        const offset=$(navHref).offset().top;
        // console.log(offset);
        $('html,body').animate({scrollTop:offset}, 1000, 'linear');
    });  



          
    //  2차시도
    // $("#hiddenNav ul li a").click(function(){         
    //     $(this).toggleClass("click");
    //     if($(this).hasClass("click")){
    //         // let offset=$('#skillSec').offset().top;
    //         console.log(offset);
            // $('html, body').animate({scrollTop:$('#skillSec').offset().top}, 1000, 'ease-in-out');
        
    //     }
        
    // });

    // 1차시도
    // const loca=$('#hiddenNav ul li a').attr('href').split('#')[1];
    // console.log(loca);

    // if(loca == 'skill'){
    //     const sectionOff = $('#' + loca + "Sec").offset().top;
    //     // console.log(sectionOff);
    //     $('html,body').animate({scrollTop:sectionOff}, 1000, 'ease-in-out');
    // }


    
    

});