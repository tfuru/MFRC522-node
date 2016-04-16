var mfrc522 = require("../index.js");

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
mfrc522.start( new Callback() );
