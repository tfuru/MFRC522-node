# MFRC522-node
MFRC522-python を node.js から利用してUIDを取得するためのモジュール  

## Require
[SPI-Py](https://github.com/lthiery/SPI-Py)

## Pins
Raspberry Pi と RFID-RC522 の接続  

| Name | Pin # | Pin name   |
|------|-------|------------|
| SDA  | 24    | GPIO8      |
| SCK  | 23    | GPIO11     |
| MOSI | 19    | GPIO10     |
| MISO | 21    | GPIO9      |
| IRQ  | None  | None       |
| GND  | Any   | Any Ground |
| RST  | 22    | GPIO25     |
| 3.3V | 1     | 3V3        |

## Install
```
npm install MFRC522-node
```

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
var rc522 = require("MFRC522-node");

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
