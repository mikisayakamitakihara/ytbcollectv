
urL = location.href
if (urL.indexOf("https://www.youtube.com/watch?v=") != -1)

  setTimeout(function () {


















































































































    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

    //audioのみtrue。Web Audio APIが問題なく使えるのであれば、第二引数で指定した関数を実行する
    /* navigator.getUserMedia({
       audio: true,
       video: false停止key
     }, successFunc, errorFunc);
 */

    録音開始 = function () {
      navigator.getUserMedia({
        audio: true,
        video: false
      }, successFunc, errorFunc);
    }






    停止タイマー = setTimeout(function () { }, 100)

    開始地点から録音開始 = function () {
      clearTimeout(停止タイマー)
      停止押す()
      setTimeout(function () {
        document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想開始時間
        再生押す()

        navigator.getUserMedia({
          audio: true,
          video: false
        }, successFunc, errorFunc);


      }, 300)

      停止タイマー = setTimeout(function () {
        //recorder.stop();//alert()
      }, 仮想終了時間 * 1000 - 仮想開始時間 * 1000)

    }





    function successFunc(stream) {
      recorder = new MediaRecorder(stream, {
        mimeType: "video/webm; codecs=vp9"
      });

      //音を拾い続けるための配列。chunkは塊という意味
      var chunks = [];

      //集音のイベントを登録する
      recorder.addEventListener('dataavailable', function (ele) {
        if (ele.data.size > 0) {
          chunks.push(ele.data);
        }
      });

      // recorder.stopが実行された時のイベント.txt
      recorder.addEventListener('stop', function () {

        var dl = document.querySelector("#dl");

        //集音したものから音声データを作成する
        dl.href = URL.createObjectURL(new Blob(chunks));
        dl.download = 改行削除(document.getElementById("読み上げ内容").value) + '.wav';
        dl.click()
        downloadTextFile(document.getElementById("読み上げ内容").value)



      });

      recorder.start();
      /*
            //10秒後に集音を終了する。
            setTimeout(function () {
              alert("stop");
              recorder.stop();
            }, 30000);*/
    }

    // Web Audio APIが使えなかった時
    function errorFunc(error) {
      alert("error");
    }

  }, 300)


停止押す = function () {
  ytpButton = document.querySelector('.ytp-play-button.ytp-button[aria-label="Play keyboard shortcut k"]') || document.querySelector('.ytp-play-button.ytp-button[aria-label="Pause keyboard shortcut k"]');



  var button = ytpButton
  var attributes = button.getAttributeNames();
  result55 = attributes.some(function (attribute) {
    return button.getAttribute(attribute).includes("Pause");
  });

  if (result55) {
    ytpButton.click();
  }






}


再生押す = function () {
  ytpButton = document.querySelector('.ytp-play-button.ytp-button[aria-label="Play keyboard shortcut k"]') || document.querySelector('.ytp-play-button.ytp-button[aria-label="Pause keyboard shortcut k"]');


  var button = ytpButton
  var attributes = button.getAttributeNames();
  result55 = attributes.some(function (attribute) {
    return button.getAttribute(attribute).includes("Play");
  });

  if (result55) {
    ytpButton.click();
  }










}


clickYtpButton = function () {

}




function 秒数を時間に(seconds) {
  var h = Math.floor(seconds / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 3600 % 60);
  return ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2);
}



カタカナをひらがなに = function (string) {
  return string.replace(/[\u30a1-\u30f6]/g, function (match) {
    var chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
}


function IDの要素を一瞬赤く(id) {
  var element = document.getElementById(id);
  var originalColor = "gray";
  element.style.backgroundColor = "red";
  setTimeout(function () {
    element.style.backgroundColor = originalColor;
  }, 100);
}


function 含まれるひらがなをカタカナに(text) {
  return text.replace(/[\u3041-\u3096]/g, function (match) {
    var chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}





function downloadTextFile(text) {
  var blob = new Blob([text], { type: 'text/plain' });
  var url = window.URL || window.webkitURL;
  var link = document.getElementById("dltxt")
  link.href = url.createObjectURL(blob);
  link.download = 改行削除(text) + '.txt';
  link.click();
}

function 改行削除(str) {
  return str.replace(/\n/g, "");
}

///////////////////////////////////////////////////////////////////////////////////////////////
仮想開始時間 = 0
仮想終了時間 = 5
function 開始時間を設定(n) {
  仮想開始時間 = n
  //document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = n
}


function 開始時間をn動かす(n) {
  仮想開始時間 += n
}







function 終了時間を設定(n) {
  仮想終了時間 = n
  //document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = n
}


終了時間をn動かす = function (n) {
  仮想終了時間 += n
  document.getElementsByClassName("video-stream html5-main-video")[0].currentTime += n
  alert(n)
}



setTimeout(function () {

  //class名が「sampleA」である複数の要素すべてにクリックのイベントハンドラを設定する


  setInterval(function () {

    var elements = document.getElementsByClassName("style-scope ytd-transcript-segment-list-renderer");

    for (var i = 0; i < elements.length; i++) {
      elements[i].onclick = function () {
        setTimeout(() => {

          仮想開始時間 = document.getElementsByClassName("video-stream html5-main-video")[0].currentTime
          仮想終了時間 = document.getElementsByClassName("video-stream html5-main-video")[0].currentTime + 5
        }, 1);
        setTimeout(() => {

          仮想開始時間 = document.getElementsByClassName("video-stream html5-main-video")[0].currentTime
          仮想終了時間 = document.getElementsByClassName("video-stream html5-main-video")[0].currentTime + 5
        }, 7);
        setTimeout(() => {

          仮想開始時間 = document.getElementsByClassName("video-stream html5-main-video")[0].currentTime
          仮想終了時間 = document.getElementsByClassName("video-stream html5-main-video")[0].currentTime + 5
        }, 37);
      }


    }



    /*
    
    
        var elements = document.getElementsByClassName("segment-text style-scope ytd-transcript-segment-renderer");
    
        for (var i = 0; i < elements.length; i++) {
          elements[i].onclick = function () {
            setTimeout(() => {
              document.getElementById("読み上げ内容").value = this.innerHTML
    
              document.getElementById("読み上げ内容").value = 含まれるひらがなをカタカナに(document.getElementById("読み上げ内容").value)
            }, 200);
          }
    
    
    
    
    
        }*/

    //_

    document.getElementById("文削除").onclick = function () {
      document.getElementById("読み上げ内容").value = ""
    }

    document.getElementById("改行削除").onclick = function () {
      document.getElementById("読み上げ内容").value = (document.getElementById("読み上げ内容").value.replace(/\r?\n/g, ''));
    }
    document.getElementById("カタカナをひらがなに").onclick = function () {
      document.getElementById("読み上げ内容").value = カタカナをひらがなに(document.getElementById("読み上げ内容").value)
    }

    if (初回) {
      初回 = false

      目瀬 = `
      alert("説明書:超適当に作りました。簡単に言うと、youtube上から音声とテキスト(全部ひらがな)のセットを集めるbrave拡張機能ツールです(mmvc想定)。(chromeでも動くかも？)\n
      基本的に開発者版です、同じの作ろうとしてるなら、これ使う・改良すれば省けるよといった程度ですLicence MITです。\n
      ページ読み込んだら毎回最初にyoutubeの再生画面左下にある▶のボタン押して一回再生、\n
      停止再生を手動で2回ぐらいやらないと録音機能が動きません、開始地点と終了地点を決めるとその間をループします、再生速度変更とかもうまく使ってください\n
      テキストエリアで音声のファイル名(発話内容)を決めて録音ボタンを押すとDLできます")\n
      alert("voicemeeterの仮想オーディオデバイスの設定頑張ってRTXvoiceとか入れてノイズ消して声だけにしたりとかマイク入出力とか頑張ってください")\n
      alert("免責：本ソフトウェアの使用または使用不能により生じたいかなる直接損害、波及的損害、間接損害、結果的損害 または特別損害についても、\n
      すべて一切責任を負いません。法とマナーを守っておだやかに利用してください")
      `


      alert(目瀬)

    }


  }, 5000)
  初回 = true
  remove_tags_and_kanji = function (str) {
    return str.replace(/[<>\u3400-\u9FFF]/g, '');
  }

  document.getElementById("読み上げ内容").onclick = function () {
    document.getElementById("読み上げ内容").value = remove_tags_and_kanji(document.getElementById("読み上げ内容").value)
    document.getElementById("読み上げ内容").value = カタカナをひらがなに(document.getElementById("読み上げ内容").value)


    document.getElementById("読み上げ内容").value = (document.getElementById("読み上げ内容").value.replace(/_/g, ""));
  }





  document.getElementById("録音ボタン").onclick = function () {
    開始地点から録音開始()
  }



  document.getElementsByClassName("ytp-progress-bar-container")[0].onclick = function () {
    仮想開始時間 = document.getElementsByClassName("video-stream html5-main-video")[0].currentTime
    仮想終了時間 = document.getElementsByClassName("video-stream html5-main-video")[0].currentTime + 5
  }

























  document.getElementById("進").onclick = function () {
    仮想開始時間 += 0.3
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想開始時間

    仮想終了時間 += 0.3


  }

  document.getElementById("次").onclick = function () {
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想終了時間
    仮想開始時間 = 仮想終了時間
    仮想終了時間 += 5


  }

  document.getElementById("戻").onclick = function () {
    仮想開始時間 += -0.3
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想開始時間

    仮想終了時間 += -0.3


  }

  document.getElementById("前").onclick = function () {
    仮想終了時間 = 仮想開始時間
    仮想開始時間 = 仮想開始時間 - 5

    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想開始時間
  }





















  document.getElementById("5秒進むボタン開始地点").onclick = function () {
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime += 5
    仮想開始時間 += 5
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想開始時間
  }
  document.getElementById("1秒進むボタン開始地点").onclick = function () {
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime += 1
    仮想開始時間 += 1
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想開始時間
  }

  document.getElementById("0.1秒進むボタン開始地点").onclick = function () {
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime += 0.1
    仮想開始時間 += 0.1
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想開始時間
  }



  document.getElementById("5秒戻るボタン開始地点").onclick = function () {
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime -= 5
    仮想開始時間 -= 5
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想開始時間
  }
  document.getElementById("1秒戻るボタン開始地点").onclick = function () {
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime -= 1
    仮想開始時間 -= 1
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想開始時間
  }

  document.getElementById("0.1秒戻るボタン開始地点").onclick = function () {
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime -= 0.1
    仮想開始時間 -= 0.1
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想開始時間
  }



















  document.getElementById("5秒進むボタン終了地点").onclick = function () {
    仮想終了時間 += 5
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想終了時間 - 1
  }
  document.getElementById("1秒進むボタン終了地点").onclick = function () {
    仮想終了時間 += 1
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想終了時間 - 1
  }

  document.getElementById("0.1秒進むボタン終了地点").onclick = function () {
    仮想終了時間 += 0.1
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想終了時間 - 1
  }



  document.getElementById("5秒戻るボタン終了地点").onclick = function () {
    仮想終了時間 -= 5
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想終了時間 - 1
  }
  document.getElementById("1秒戻るボタン終了地点").onclick = function () {
    仮想終了時間 -= 1
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想終了時間 - 1
  }

  document.getElementById("0.1秒戻るボタン終了地点").onclick = function () {
    仮想終了時間 -= 0.1
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想終了時間 - 1
  }


  document.getElementById("items").click()

















  timer = setInterval(function () { }, 10000)
  const a = document.getElementById('録音ボタン');
  const b = document.getElementById("録音経過秒数");

  a.addEventListener('click', function () {
    clearInterval(timer)
    let startTime = Date.now();
    timer = setInterval(function () {
      let elapsedTime = Date.now() - startTime;
      b.innerHTML = elapsedTime;
    }, 1000);
  });








}, 4200)

setInterval(function () {

  document.getElementById("現在の開始地点").innerHTML = 秒数を時間に(仮想開始時間)
  document.getElementById("現在の終了地点").innerHTML = 秒数を時間に(仮想終了時間)
  if (document.getElementsByClassName("video-stream html5-main-video")[0].currentTime > 仮想終了時間) {
    document.getElementsByClassName("video-stream html5-main-video")[0].currentTime = 仮想開始時間
    if (停止タイマー) { setTimeout(function () { recorder.stop() }, 150) }
    IDの要素を一瞬赤く("現在の開始地点")
  }
  if ((仮想終了時間 - 仮想開始時間) > 15) {
    仮想終了時間 = 仮想開始時間 + 15
  }
  document.getElementById("現在再生時刻").innerHTML = "今" + 秒数を時間に(document.getElementsByClassName("video-stream html5-main-video")[0].currentTime)
  document.getElementById("現在録音予定時間").innerHTML = "録音時間" + 秒数を時間に(仮想終了時間 - 仮想開始時間)

}, 10)


setTimeout(function () {

  urL = location.href
  if (urL.indexOf("https://www.youtube.com/watch?v=") != -1) {
    try {
      //document.getElementById("text").innerHTML = ""
      //document.getElementById("description").innerHTML = ""
      //document.getElementsByClassName("style-scope ytd-watch-metadata")[0].innerHTML
      document.getElementById("bottom-row").innerHTML = `

<div style="background-color:orange;">
開始地点<button id="現在の開始地点">〇</button>

<button id="5秒戻るボタン開始地点" >←←←←</button>
<button id="1秒戻るボタン開始地点" >⇚</button>
<button id="0.1秒戻るボタン開始地点">←</button>



<button id="0.1秒進むボタン開始地点" >→</button>
<button id="1秒進むボタン開始地点" >➡</button>
<button id="5秒進むボタン開始地点" >→→→→</button>

<button id="現在再生時刻" ></button>
</div>




<div style="background-color:lightskyblue;">
終了地点を動かす<button id="現在の終了地点">〇</button>

<button id="5秒戻るボタン終了地点" >←←←←5秒</button>
<button id="1秒戻るボタン終了地点" >⇚1</button>
<button id="0.1秒戻るボタン終了地点">←0.1</button>

<button id="0.1秒進むボタン終了地点" >→</button>
<button id="1秒進むボタン終了地点" >➡</button>
<button id="5秒進むボタン終了地点" >→→→→</button>


</div>








<br>
<div style="background-color:lightgreen;float:left">

<button id="録音ボタン" >録音ボタン(下読んでね)</button>
<pre>パソコン詳しい人向けソフトです超適当に作りました
ページ読み込んだら毎回最初にyoutubeの再生画面左下にある▶のボタン押して一回再生、
      停止再生を手動で2回ぐらいやらないと録音機能が動きません、
      壊れたらコードよんで直すことができます
      録音時間は0.1秒単位ですが下の録音時間表示に反映されません
      マイクのwindows設定やほかの色々はgoogleで検索して設定してください
      Twitter利用報告ハッシュタグ #ytb音声あつめねっと
      </pre>
<button id="現在録音予定時間"></button>
<button id="録音経過秒数"></button>
</div>




<br>
<div style="background-color:gray;"><br>
__________________________________<button id="前" >前</button><button id="戻" >戻</button>●
<button id="進" >進</button><button id="次" >次</button><br>
つけるテキスト
<button id="文削除" >文削除</button>
<button id="改行削除" >改行削除</button>
<button id="カタカナをひらがなに" >カタカナをひらがなに</button>

<textarea id="読み上げ内容" style="height: 136px; width: 434px;">ファイルめい</textarea>


</div>

<br>







<a id="dl" href=# download="" fontsize=5>

<a id="dltxt" href=# download="" fontsize=5>

<a id="dl2" href=# download="" fontsize=5>u</a>



</a>

</a>

<pre>
\`\`.replace(/\\r?\\n/g, &quot;9826&quot;);

\`\`.replace(/9826/g, '\\n');

</pre>
<textarea style="width:300;height:200px">
alert("説明書:超適当に作りました。簡単に言うと、youtube上から音声とテキスト(全部ひらがな)のセットを集めるbrave拡張機能ツールです(mmvc想定)。(chromeでも動くかも？)\n
基本的に開発者版です、同じの作ろうとしてるなら、これ使う・改良すれば労力省けるよといった程度ですLicence MITです。\n
ページ読み込んだら毎回最初にyoutubeの再生画面左下にある▶のボタン押して一回再生、\n
停止再生を手動で2回ぐらいやらないと録音機能が動きません、開始地点と終了地点を決めるとその間をループします、再生速度変更とかもうまく使ってください\n
テキストエリアで音声のファイル名(発話内容)を決めて録音ボタンを押すとDLできます")\n
alert("voicemeeterの仮想オーディオデバイスの設定頑張ってRTXvoiceとか入れてノイズ消して声だけにしたりとかマイク入出力とか頑張ってください")\n
alert("免責：本ソフトウェアの使用または使用不能により生じたいかなる直接損害、波及的損害、間接損害、結果的損害 または特別損害についても、\n
すべて一切責任を負いません。法とマナーを守っておだやかに利用してください")改良＆公開とかも自由にしてくださいlicence MIT
</textarea>


`
    } catch (e) {

    }















































  }

  if (urL.indexOf("https://www.youtube.com/results?") != -1) {

    try {


    } catch (e) {

    }
  }




}, 4000)

