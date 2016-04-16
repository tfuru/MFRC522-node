var RC522 = function(){};

RC522.prototype.spawn = require('child_process').spawn;
RC522.prototype.rc522py = null;
RC522.prototype.callback = null;
RC522.prototype.uidRegExp = new RegExp("^Card read UID: ([0-9,]+)");

/** 読み込み 開始
*/
RC522.prototype.start = function(callback){
  //コールバック
  this.callback = callback;
  
  //-u で python 出力バッファリング無し
  this.rc522py = this.spawn('python', ['-u','./MFRC522-python/Dump.py']);

  var _this = this;
  this.rc522py.stdout.on('data', function(data){
    //受信データを一行毎に分割して処理
    var lines = data.toString('utf8').split(/\r\n|\r|\n/);
    for(var i in lines){
      var arr = _this.uidRegExp.exec(lines[i]);
      if((arr != null)&&(arr.length == 2)){
        //UIDだけ抽出
        _this.callback.onUid( arr[1] );
      }
    }
  });

  this.rc522py.on('exit', function(){
    _this.callback.onExit();
  });

  _this.callback.onStart();
};

module.exports = new RC522();
