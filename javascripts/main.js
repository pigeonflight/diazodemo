console.log('This would be the main JS file.');
$(document).ready(function(){
  
       $('#theme_panel .inner').load('../../../@@theming-controlpanel #fieldset-advanced',function() {
               var fields = $('#theme_panel fieldset')[0].querySelectorAll('.field')
               var field_length = fields.length;
               
               for (var i=1;i<fields.length;i++)
                { 
                    fields[i].className="hidden";
                 }
                 
               $('#theme_panel fieldset')[1].className="hidden";
               
          $('#theme_panel button').on('click', function(){
             
               $('#theme_panel .inner').fadeToggle();
               
          });
  
     
       });
     
  });
