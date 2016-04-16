var rc522 = require("../rc522.js");

var Callback = function(){
  //開始
  this.onStart = function(){
    console.log('onStart');
  };

  //UIDを取得時
  this.onUid = function(uid){
    console.log('onUid');
    console.log(uid);
  };

  this.onExit = function(){
    console.log('onExit');
  };
};
rc522.start( new Callback() );
