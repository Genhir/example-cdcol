/* /static/js/List.js */
﻿Class.Define('List',{Constructor:function(){var forms=document.getElementsByTagName('form'),form;for(var i=0,l=forms.length;i<l;i+=1){form=forms[i];if(form.className.indexOf('delete')>-1){form.onsubmit=function(e){e=e||window.event;if(!confirm("Are you sure?")){if(e.preventDefault)e.preventDefault();return false;}}}}}});
/* /static/js/Front.js */
Class.Define('Front',{Extend:Module,Constructor:function(){this.parent();if(typeof(List)!='undefined')new List();}});window.front=new Front();
