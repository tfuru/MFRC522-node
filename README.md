# MFRC522-node
[MFRC522-python](https://github.com/mxgxw/MFRC522-python) を node.js から利用してUIDを取得するためのモジュール

## Install
```
git clone git@github.com:tfuru/MFRC522-node.git
git submodule init
git submodule update

```

## Sample
```
node example/read.js
```

```
var rc522 = require("rc522.js");

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
```
