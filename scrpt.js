/*onload animation effects functions*/   
function loadEffectAppear(){      
                $( document ).ready(function() {
                    $( "#lone" ).hide( 100 ).delay( 500 ).show( 200 );
                    $( "#ltwo" ).hide( 100 ).delay( 500 ).show( 200 );
                    $( "#lthree" ).hide( 100 ).delay( 400 ).show( 200 );
                    $( "#rone" ).hide( 100 ).delay( 100 ).show( 200 );
                    $( "#rtwo" ).hide( 100 ).delay( 500 ).show( 200 );
                    $( "#rthree" ).hide( 100 ).delay( 300 ).show( 200 );
                });
                console.log('effect 1');
                console.log("_____________________________");
}

function loadEffectFadeIn(){      
                $( document ).ready(function() {
                    $('#lone').fadeOut(100, function(){$('#lone').fadeIn(100);}) 
                    $('#ltwo').fadeOut(800, function(){$('#ltwo').fadeIn(500);}) 
                    $('#lthree').fadeOut(1200, function(){$('#lthree').fadeIn(5000);}) 
                    $('#rone').fadeOut(500, function(){$('#rone').fadeIn(1000);}) 
                    $('#rtwo').fadeOut(100, function(){$('#rtwo').fadeIn(800);}) 
                    $('#rthree').fadeOut(2000, function(){$('#rthree').fadeIn(1000);}) 
                });   
                console.log('effect 2');
                console.log("_____________________________");
}

function loadEffectMulti(){      
                $( document ).ready(function() {
                    $('#lone').hide("slow").show(1200);
                    $('#ltwo').animate({ left: "-=500" }, 500 );
                    $('#lthree').animate({ left: "-=200" }, 1500 );
                    $('#rone').slideToggle( "fast" );
                    $('#rtwo').slideUp( "normal");
                    $('#rthree').animate({ left: "+=200" }, 2000 );
                });   
                console.log('effect 3');
                console.log("_____________________________");
}


/*random selection of loaded function*/
function loadRandEffect(){      
    var effect_functions = ['2', '1', '0'];
    var random_effect_functions = effect_functions[Math.floor(Math.random() * effect_functions.length)];
    var choosen_one = random_effect_functions;

        if(choosen_one == '1'){
            loadEffectAppear();
        }else if(choosen_one == '2'){
            loadEffectMulti();
        }else if(choosen_one == '0'){
            loadEffectFadeIn();
        }
}













/*Random color set on load for 6+1 elements*/
function randColOnLoad(){
                var colors = ['#957D95', '#FFC857', '#AA1155', '#274690', '#197278', '#E07A5F'];
                var random_color = colors[Math.floor(Math.random() * colors.length)];
                    document.getElementById('lone').style.background = random_color;
                
                var colors = ['#F2CC8F', '#3D405B', '#363732', '#2D3047', '#C3979F', '#78FFD6'];
                var random_color = colors[Math.floor(Math.random() * colors.length)];    
                    document.getElementById('ltwo').style.background = random_color;
    
                var colors = ['#C1666B', '#4357AD', '#D4B483', '#D4AFB9', '#E0CA3C', '#048A81'];
                var random_color = colors[Math.floor(Math.random() * colors.length)];
                    document.getElementById('lthree').style.background = random_color;
    
                var colors = ['#92AA83', '#4B1D3F', '#0E7C7B', '#D62246', '#EC7357', '#E1CE7A'];
                var random_color = colors[Math.floor(Math.random() * colors.length)];
                    document.getElementById('rone').style.background = random_color;
    
                var colors = ['#F1E9DA', '#2E294E', '#D90368', '#FFD400', '#C86FC9', '#564154'];
                var random_color = colors[Math.floor(Math.random() * colors.length)];
                    document.getElementById('rtwo').style.background = random_color;
    
                var colors = ['#276FBF', '#183059', '#F1BB87', '#CCFBFE', '#CD8987', '#4B3B40'];
                var random_color = colors[Math.floor(Math.random() * colors.length)];
                    document.getElementById('rthree').style.background = random_color;

                var colors = ['#4E8098', '#F2DDA4', '#E7EFC5', '#90C2E7', '#DD7230', '#413C58'];
                var random_color = colors[Math.floor(Math.random() * colors.length)];
                    document.getElementsByTagName("body")[0].style.background = random_color;
}












/*1-3 functions Random element width*/
function randWidthAndPositiontOnLoad(){/*could be divided into three functions 1 - 3 = generating rand, unique selection of generated rand and sorting*/
    /*1 - generating six numbers by low and high interval, where the last variable is counted by the previous - has actually a mistake, need to modify*/
        var lowEnd = 1;
        var highEnd = 40;
        var oneHundred = [];
        while(lowEnd <= highEnd){
            oneHundred.push(lowEnd++);
        }
    var first_rand, second_rand, third_rand, fourth_rand, fifth_rand, sixth_rand;
    var sum = 100;   
    
    while (sum > 90){
    
         first_rand = oneHundred[Math.floor(Math.random() * oneHundred.length)];
    
         second_rand = oneHundred[Math.floor(Math.random() * oneHundred.length)];

         third_rand = oneHundred[Math.floor(Math.random() * oneHundred.length)];

         fourth_rand = oneHundred[Math.floor(Math.random() * oneHundred.length)];

         fifth_rand = oneHundred[Math.floor(Math.random() * oneHundred.length)];

         sum = first_rand + second_rand + third_rand + fourth_rand + fifth_rand;
         sixth_rand = 100 - sum;
   
        }
        
        console.log("SUM: " + sum);











        /*2 - Unique automatical value selection by previous value in variable generating*/
        var arrayNum = [first_rand, second_rand, third_rand, fourth_rand, fifth_rand, sixth_rand]; 
        function getRandomValues(arr, count){
            var result = [];
            var _tmp = arr.slice();
            for(var i = 0; i<count; i++){
              var index = Math.ceil(Math.random() * 10) % _tmp.length;
              result.push(_tmp.splice(index, 1)[0]);
            }
            return result;
          }
          
          console.log("_____________________________");
          console.log("width values: ");
          var random_width1 = getRandomValues(arrayNum, 1);
          var random_widthA = random_width1[0];
          var random_width1 = random_width1[0]+"%";
          console.log(random_width1);
          console.log(random_widthA);

          var random_width2 = getRandomValues(arrayNum, 1);
          var random_widthB = random_width2[0];
          var random_width2 = random_width2[0]+"%";
          console.log(random_width2);
          console.log(random_widthB);

          var random_width3 = getRandomValues(arrayNum, 1);
          var random_widthC = random_width3[0];
          var random_width3 = random_width3[0]+"%";
          console.log(random_width3);
          console.log(random_widthC);

          var random_width4 = getRandomValues(arrayNum, 1);
          var random_widthD = random_width4[0];
          var random_width4 = random_width4[0]+"%";
          console.log(random_width4);
          console.log(random_widthD);

          var random_width5 = getRandomValues(arrayNum, 1);
          var random_widthE = random_width5[0];
          var random_width5 = random_width5[0]+"%";
          console.log(random_width5);
          console.log(random_widthE);

          var random_width6 = getRandomValues(arrayNum, 1);
          var random_widthF = random_width6[0];
          var random_width6 = random_width6[0]+"%";
          console.log(random_width6);
          console.log(random_widthF);

          /*assigning previous automatical and unique values to particular value variables as width*/          
          document.getElementById('lone').style.maxWidth  = random_width1;
          document.getElementById('lone').style.minWidth  = random_width1;

          document.getElementById('ltwo').style.maxWidth  = random_width2;
          document.getElementById('ltwo').style.minWidth  = random_width2;

          document.getElementById('lthree').style.maxWidth  = random_width3;
          document.getElementById('lthree').style.minWidth  = random_width3;

          document.getElementById('rthree').style.maxWidth  = random_width4;
          document.getElementById('rthree').style.minWidth  = random_width4;
         
          document.getElementById('rtwo').style.maxWidth  = random_width5;
          document.getElementById('rtwo').style.minWidth  = random_width5;

          document.getElementById('rone').style.maxWidth  = random_width6;
          document.getElementById('rone').style.minWidth  = random_width6;








          /*3 - particular elements having random unique width by previous processes are now sorted next to each other by previous elements' sum width*/
          console.log("_____________________________");
          console.log("width position values: ");
          var first_position_value = '0%'

          var second_position_value = random_widthA;
          var second_position_value = second_position_value+"%";
          console.log(second_position_value);

          var third_position_value = random_widthA+random_widthB;
          var third_position_value = third_position_value+"%";
          console.log(third_position_value);

          var fourth_position_value = random_widthA+random_widthB+random_widthC;
          var fourth_position_value = fourth_position_value+"%";
          console.log(fourth_position_value);

          var fifth_position_value =  random_widthA+random_widthB+random_widthC+random_widthD;
          var fifth_position_value = fifth_position_value+"%";
          console.log(fifth_position_value);

          var sixth_position_value =  random_widthA+random_widthB+random_widthC+random_widthD+random_widthE;
          var sixth_position_value = sixth_position_value+"%";
          console.log(sixth_position_value);

          document.getElementById('lone').style.left = first_position_value;
          document.getElementById('ltwo').style.left = second_position_value;
          document.getElementById('lthree').style.left = third_position_value;
          document.getElementById('rone').style.left = fourth_position_value;
          document.getElementById('rtwo').style.left = fifth_position_value;
          document.getElementById('rthree').style.left = sixth_position_value;
        }


