/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("model-sync-rest",function(d,c){var a=d.Lang;function b(){}b.CSRF_TOKEN=YUI.Env.CSRF_TOKEN;b.EMULATE_HTTP=false;b.HTTP_HEADERS={"Accept":"application/json","Content-Type":"application/json"};b.HTTP_METHODS={"create":"POST","read":"GET","update":"PUT","delete":"DELETE"};b.HTTP_TIMEOUT=30000;b._NON_ATTRS_CFG=["root","url"];b.prototype={root:"",url:"",initializer:function(e){e||(e={});if("root" in e){this.root=e.root||"";}if("url" in e){this.url=e.url||"";}},getURL:function(h,g){var e=this.root,f=this.url;if(this._isYUIModelList){if(!f){return this.model.prototype.root;}return this._substituteURL(f,d.merge(this.getAttrs(),g));}if(e&&(h==="create"||this.isNew())){return e;}if(!f){return this._joinURL(this.getAsURL("id")||"");}return this._substituteURL(f,d.merge(this.getAttrs(),g));},parseIOResponse:function(e){return e.responseText;},serialize:function(e){return d.JSON.stringify(this);},sync:function(h,m,l){m||(m={});var f=this.getURL(h,m),e=b.HTTP_METHODS[h],g=d.merge(b.HTTP_HEADERS,m.headers),k=m.timeout||b.HTTP_TIMEOUT,j=m.csrfToken||b.CSRF_TOKEN,i;if(e==="POST"||e==="PUT"){i=this.serialize(h);}else{delete g["Content-Type"];}if(b.EMULATE_HTTP&&(e==="PUT"||e==="DELETE")){g["X-HTTP-Method-Override"]=e;e="POST";}if(j&&(e==="POST"||e==="PUT"||e==="DELETE")){g["X-CSRF-Token"]=j;}this._sendSyncIORequest({action:h,callback:l,entity:i,headers:g,method:e,timeout:k,url:f});},_joinURL:function(f){var e=this.root;if(!(e||f)){return"";}if(f.charAt(0)==="/"){f=f.substring(1);}return e&&e.charAt(e.length-1)==="/"?e+f+"/":e+"/"+f;},_parse:function(e){if(typeof this.parseIOResponse==="function"){e=this.parseIOResponse(e);}return this.parse(e);},_sendSyncIORequest:function(e){return d.io(e.url,{"arguments":{action:e.action,callback:e.callback,url:e.url},context:this,data:e.entity,headers:e.headers,method:e.method,timeout:e.timeout,on:{start:this._onSyncIOStart,failure:this._onSyncIOFailure,success:this._onSyncIOSuccess,end:this._onSyncIOEnd}});},_substituteURL:function(f,g){if(!f){return"";}var e={};d.Object.each(g,function(i,h){if(a.isString(i)||a.isNumber(i)){e[h]=encodeURIComponent(i);}});return a.sub(f,e);},_onSyncIOEnd:function(f,e){},_onSyncIOFailure:function(g,f,e){var h=e.callback;if(h){h({code:f.status,msg:f.statusText},f);}},_onSyncIOSuccess:function(g,f,e){var h=e.callback;if(h){h(null,f);}},_onSyncIOStart:function(f,e){}};d.namespace("ModelSync").REST=b;},"3.7.1pr1",{"requires":["model","io-base","json-stringify"]});