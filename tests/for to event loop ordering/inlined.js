function(delay,callback){try{var array=[0,1,2,3,4];return Promise.resolve(_continue(_forTo(array,function(i){return _invokeIgnored(function(){if(delay){return Promise.resolve(array[i]).then(function(){});}});}),function(){return callback();}));}catch(e){return Promise.reject(e);}}