_async(function(expression1,expression2,actionAsync){if(expression1){return;}return function(){if(expression2){var a=1;}else{return _catch(function(){return _call(actionAsync,function(res){var b=2;return res;});},function(){return false;});}}();})