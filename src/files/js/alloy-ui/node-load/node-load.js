/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.7.1pr1
build: 3.7.1pr1
*/
YUI.add('node-load', function(Y) {

/**
 * Extended Node interface with a basic IO API.
 * @module node
 * @submodule node-load
 */

/**
 * The default IO complete handler.
 * @method _ioComplete
 * @protected
 * @for Node
 * @param {String} code The response code.
 * @param {Object} response The response object.
 * @param {Array} args An array containing the callback and selector
 */

Y.Node.prototype._ioComplete = function(code, response, args) {
    var selector = args[0],
        callback = args[1],
        tmp,
        content;

    if (response && response.responseText) {
        content = response.responseText;
        if (selector) {
            tmp = Y.DOM.create(content);
            content = Y.Selector.query(selector, tmp);
        }
        this.setContent(content);
    }
    if (callback) {
        callback.call(this, code, response);
    }
};

/**
 * Loads content from the given url and replaces the Node's
 * existing content with the remote content.
 * @method load
 * @param {String} url The URL to load via XMLHttpRequest.
 * @param {String} selector An optional selector representing a subset of an HTML document to load.
 * @param {Function} callback An optional function to run after the content has been loaded.
 * @chainable
 */
Y.Node.prototype.load = function(url, selector, callback) {
    if (typeof selector == 'function') {
        callback = selector;
        selector = null;
    }
    var config = {
        context: this,
        on: {
            complete: this._ioComplete
        },
        arguments: [selector, callback]
    };

    Y.io(url, config);
    return this;
}


}, '3.7.1pr1' ,{requires:['node-base', 'io-base']});
