/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("io-nodejs",function(b){if(!b.IO.request){b.IO.request=require("request");}var a=require("http").STATUS_CODES;var c=function(e){var d=[];Object.keys(e).forEach(function(f){d.push(f+": "+e[f]);});return d.join("\n");};b.IO.transports.nodejs=function(){return{send:function(h,g,e){e.notify("start",h,e);e.method=e.method||"GET";e.method=e.method.toUpperCase();var f={method:e.method,uri:g};if(e.data){if(b.Lang.isObject(e.data)){if(b.QueryString&&b.QueryString.stringify){f.body=b.QueryString.stringify(e.data);}else{}}else{if(b.Lang.isString(e.data)){f.body=e.data;}}if(f.method==="GET"){f.uri+=(f.uri.indexOf("?")>-1?"&":"?")+f.body;f.body="";}}if(e.headers){f.headers=e.headers;}if(e.timeout){f.timeout=e.timeout;}if(e.request){b.mix(f,e.request);}b.IO.request(f,function(i,j){if(i){h.c=i;e.notify(((i.code==="ETIMEDOUT")?"timeout":"failure"),h,e);return;}if(j){h.c={status:j.statusCode,statusCode:j.statusCode,statusText:a[j.statusCode],headers:j.headers,responseText:j.body,responseXML:null,getResponseHeader:function(k){return this.headers[k];},getAllResponseHeaders:function(){return c(this.headers);}};}e.notify("complete",h,e);e.notify(((j&&(j.statusCode>=200&&j.statusCode<=299))?"success":"failure"),h,e);});var d={io:h};return d;}};};b.IO.defaultTransport("nodejs");},"3.7.1pr1",{requires:["io-base"]});