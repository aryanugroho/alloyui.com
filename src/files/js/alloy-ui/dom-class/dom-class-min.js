/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("dom-class",function(d){var b,a,c;d.mix(d.DOM,{hasClass:function(g,f){var e=d.DOM._getRegExp("(?:^|\\s+)"+f+"(?:\\s+|$)");return e.test(g.className);},addClass:function(f,e){if(!d.DOM.hasClass(f,e)){f.className=d.Lang.trim([f.className,e].join(" "));}},removeClass:function(f,e){if(e&&a(f,e)){f.className=d.Lang.trim(f.className.replace(d.DOM._getRegExp("(?:^|\\s+)"+e+"(?:\\s+|$)")," "));if(a(f,e)){c(f,e);}}},replaceClass:function(f,e,g){c(f,e);b(f,g);},toggleClass:function(f,e,g){var h=(g!==undefined)?g:!(a(f,e));if(h){b(f,e);}else{c(f,e);}}});a=d.DOM.hasClass;c=d.DOM.removeClass;b=d.DOM.addClass;},"3.7.1pr1",{requires:["dom-core"]});