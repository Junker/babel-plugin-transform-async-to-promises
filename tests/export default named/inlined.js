const fetch=function(){try{return Promise.resolve(_catch(function(){const _temp4=function(){if(true){const _temp2=function(){if('application/json'){return Promise.resolve(res.json()).then(function(_res$json){data=_res$json;});}else{const _temp=_catch(function(){return Promise.resolve(res.text()).then(function(_res$text){text=_res$text;});},function(berr){console.error(berr);});if(_temp&&_temp.then)return _temp.then(function(){});}}();if(_temp2&&_temp2.then)return _temp2.then(function(){});}else return _temp3&&_temp3.then?_temp3.then(function(){}):void 0;}();if(_temp4&&_temp4.then)return _temp4.then(function(){});},function(){console.log(er);}));}catch(e){return Promise.reject(e);}};export default fetch;