_async((delay,callback)=>{var array=[0,1,2,3,4];return _continue(_forTo(array,i=>_invokeIgnored(()=>{if(delay){return _awaitIgnored(array[i]);}})),()=>callback());})