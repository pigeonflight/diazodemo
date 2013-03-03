console.log('This would be the main JS file.');
$(document).ready(function(){
  
       $('#theme_panel .inner').load('../../../@@theming-controlpanel #fieldset-advanced',function() {
          
          $('#theme_panel button').on('click', function(){
               
               $('#theme_panel .inner').fadeToggle();
               
          });
  
     
       });
     
  });
