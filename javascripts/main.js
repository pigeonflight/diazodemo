console.log('This would be the main JS file.');
$(document).ready(function(){
  
       $('#theme_panel .inner').load('../../../@@theming-controlpanel #fieldset-advanced',function() {
          
          $('#theme_panel button').on('click', function(){
               var fields = $('#theme_panel fieldset')[0].querySelectorAll('.field')
               var field_length = fields.length;
               
               for (var i=1;i<fields.length;i++)
                { 
                    fields[i].remove();
                 }
                 
               $('#theme_panel fieldset')[1].remove();
               $('#theme_panel .inner').fadeToggle();
               
          });
  
     
       });
     
  });
