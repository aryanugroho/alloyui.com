/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add("anim-node-plugin",function(b){var a=function(c){c=(c)?b.merge(c):{};c.node=c.host;a.superclass.constructor.apply(this,arguments);};a.NAME="nodefx";a.NS="fx";b.extend(a,b.Anim);b.namespace("Plugin");b.Plugin.NodeFX=a;},"3.7.1pr1",{requires:["node-pluginhost","anim-base"]});