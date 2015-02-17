define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Utility = require('famous/utilities/Utility');

    var AppView = require('views/AppView');
    var SlideData = require('data/SlideData');

    var mainContext = Engine.createContext();
    mainContext.setPerspective(1000);

    initApp();

    function initApp() {
        data = SlideData.album;

        var appView = new AppView({ data : data });

        mainContext.add(appView);
    }
});
