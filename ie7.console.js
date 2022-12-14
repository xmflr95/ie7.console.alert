// source
if (typeof window.console == 'undefined' || window.console == undefined) {
  window.console={ 
      name: "console", 
      log: function() {
          var args = arguments;
          for (var i = 0; i < args.length; i++){
              var arg = args[i];
              var objStr = '';
              if (typeof arg == 'object' && Object.prototype.toString.call(arg).slice(8, -1) == 'Object') {
                  objStr += '{\n';
                  for (var j = 0; j < Object.keys(arg).length; j++) {                    
                      var key = Object.keys(arg)[j];
                      var val = arg[key];
                      objStr += '\t' + key + ' : ' + val + '\n';
                  }
                  objStr += '}';
                  alert(objStr);
              } else {
                  alert(args[i]); 
              }
          }
      } 
  };
}

// oneline
// if(typeof window.console=='undefined'||window.console==undefined){window.console={name:"console",log:function(){var args=arguments;for(var i=0;i<args.length;i++){var arg=args[i];var objStr='';if(typeof arg=='object'&&Object.prototype.toString.call(arg).slice(8,-1)=='Object'){objStr+='{\n';for(var j=0;j<Object.keys(arg).length;j++){var key=Object.keys(arg)[j];var val=arg[key];objStr+='\t'+key+' : '+val+'\n'}objStr+='}';alert(objStr)}else{alert(args[i])}}}}}