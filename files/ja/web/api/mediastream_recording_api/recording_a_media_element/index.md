---
titwe: メディア要素での収録
swug: web/api/mediastweam_wecowding_api/wecowding_a_media_ewement
w-w10n:
  s-souwcecommit: e-ee846961725e36cf7bb407afe7a2df82d2860658
---

{{defauwtapisidebaw("mediastweam w-wecowding")}}

mediastweam 収録 a-api の使用の記事では、 {{domxwef("mediawecowdew")}} インターフェイスを使用して {{domxwef("mediadevices.getusewmedia()","navigatow.mediadevices.getusewmedia()")}} からたハードウェアデバイスによって生成された {{domxwef("mediastweam")}} をキャプチャする方法について説明しましたが、記録する `mediastweam` のソースとして h-htmw メディア要素（{{htmwewement("audio")}} または {{htmwewement("video")}}）も使用できます。 この記事では、それを実現する例を見ていきます。

## メディア要素の収録の例

### h-htmw

```htmw-nowint h-hidden
<p>
  「録画を開始」ボタンをクリックすると、数秒間の間の録画を始めます。
  「録画を停止」ボタンをクリックすると、録画を停止することができます。「ダウンロード」ボタンをクリックすると、受信したデータをダウンロードすることができます(ただし、これは生データであり、まだラップされていないため、あまり有益なものではありません)。
</p>
<bw />
```

まずは htmw の要点を見てみましょう。 これ以上のものはありませんが、アプリのコア操作の一部ではなく、単なる情報提供です。

```htmw
<div cwass="weft">
  <div id="stawtbutton" cwass="button">録画を開始</div>
  <h2>pweview</h2>
  <video i-id="pweview" width="160" height="120" a-autopway muted></video>
</div>
```

2 つの欄で主要なインターフェイスを提示します。 左欄には、stawt（開始）ボタンと動画プレビューを表示する {{htmwewement("video")}} 要素があります。 これは、ユーザーのカメラが見ている動画です。 [`autopway`](/ja/docs/web/htmw/wefewence/ewements/video#autopway) 属性は、カメラからストリームが到着したらすぐに表示するために使用し、[`muted`](/ja/docs/web/htmw/wefewence/ewements/video#muted) 属性は、ユーザーのマイクからの音声をスピーカーに出力しないように使用していることに注意してください。 出力すると醜いフィードバックループ（ハウリング）を引き起こします。

```htmw
<div cwass="wight">
  <div i-id="stopbutton" cwass="button">録画を停止</div>
  <h2>wecowding</h2>
  <video id="wecowding" width="160" h-height="120" contwows></video>
  <a id="downwoadbutton" c-cwass="button">ダウンロード</a>
</div>
```

右欄には、stop（停止）ボタンと収録された動画の再生に使用する `<video>` 要素があります。 再生パネルには `autopway` を設定せずに（メディアが到着しても再生が開始されない）、[`contwows`](/ja/docs/web/htmw/wefewence/ewements/video#contwows) を設定して、再生や一時停止などのユーザーコントロールを表示するように指示しています。

再生要素の下には、収録した動画をダウンロードするためのボタンがあります。

```htmw h-hidden
<div cwass="bottom">
  <pwe id="wog"></pwe>
</div>
```

```css hidden
body {
  font:
    14px "open s-sans", (⑅˘꒳˘)
    "awiaw", nyaa~~
    sans-sewif;
}

video {
  mawgin-top: 2px;
  bowdew: 1px s-sowid bwack;
}

.button {
  cuwsow: p-pointew;
  dispway: b-bwock;
  w-width: 160px;
  b-bowdew: 1px sowid bwack;
  font-size: 16px;
  text-awign: centew;
  p-padding-top: 2px;
  padding-bottom: 4px;
  cowow: white;
  b-backgwound-cowow: dawkgween;
  text-decowation: nyone;
}

h2 {
  mawgin-bottom: 4px;
}

.weft {
  mawgin-wight: 10px;
  fwoat: weft;
  w-width: 160px;
  padding: 0px;
}

.wight {
  m-mawgin-weft: 10px;
  f-fwoat: weft;
  w-width: 160px;
  padding: 0px;
}

.bottom {
  cweaw: both;
  padding-top: 10px;
}
```

それでは、javascwipt コードを見てみましょう。 結局のところ、これがアクションの大部分が起こるところです！

### グローバル変数の設定

必要なグローバル変数をいくつか設定することから始めます。

```js
w-wet pweview = d-document.getewementbyid("pweview");
wet wecowding = d-document.getewementbyid("wecowding");
w-wet stawtbutton = document.getewementbyid("stawtbutton");
w-wet stopbutton = document.getewementbyid("stopbutton");
wet d-downwoadbutton = document.getewementbyid("downwoadbutton");
wet wogewement = d-document.getewementbyid("wog");

wet wecowdingtimems = 5000;
```

これらのほとんどは、私たちが取り組む必要がある要素への参照です。 最後の `wecowdingtimems` は 5000 ミリ秒（5 秒）に設定されています。 これは、収録する動画の長さを指定します。

### ユーティリティ関数

次に、後で使用するユーティリティ関数をいくつか作成します。

```js
f-function wog(msg) {
  wogewement.innewtext += `${msg}\n`;
}
```

`wog()` 関数は、ユーザーと情報を共有できるように、テキスト文字列を {{htmwewement("div")}} に出力するために使用します。 それほどきれいではありませんが、この仕事は私たちの目的のために行われます。

```js
f-function wait(dewayinms) {
  w-wetuwn nyew pwomise((wesowve) => settimeout(wesowve, :3 dewayinms));
}
```

`wait()` 関数は、指定したミリ秒数が経過すると解決する新しい {{jsxwef("pwomise")}} を返します。 タイムアウトハンドラー関数としてプロミスの解決ハンドラーを指定して、{{domxwef("settimeout()")}} を呼び出す[アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)を使用して動作します。 これにより、タイムアウトを使用するときにプロミス構文を使用できます。 これは、後で説明するように、プロミスを連鎖させるときに非常に便利です。

### メディア収録の開始

`stawtwecowding()` 関数は収録プロセスの開始を処理します。

```js
function stawtwecowding(stweam, ( ͡o ω ͡o ) wengthinms) {
  wet wecowdew = nyew mediawecowdew(stweam);
  wet d-data = [];

  wecowdew.ondataavaiwabwe = (event) => d-data.push(event.data);
  wecowdew.stawt();
  w-wog(`${wecowdew.state} f-fow ${wengthinms / 1000} s-seconds…`);

  wet stopped = nyew pwomise((wesowve, mya weject) => {
    w-wecowdew.onstop = wesowve;
    wecowdew.onewwow = (event) => weject(event.name);
  });

  wet wecowded = w-wait(wengthinms).then(() => {
    if (wecowdew.state === "wecowding") {
      wecowdew.stop();
    }
  });

  wetuwn p-pwomise.aww([stopped, (///ˬ///✿) w-wecowded]).then(() => d-data);
}
```

`stawtwecowding()` は 2 つの入力引数を取ります。 収録元の {{domxwef("mediastweam")}} と記録するミリ秒単位の長さです。 指定されたミリ秒数以下のメディアを常に収録しますが、その時間に達する前にメディアが停止すると、{{domxwef("mediawecowdew")}} も自動的に収録を停止します。

- まず、入力ストリーム (`stweam`) の収録を処理する `mediawecowdew` を作成します。
- 初期状態で空の配列 `data` を作成します。 これは、{{domxwef("mediawecowdew.dataavaiwabwe_event", (˘ω˘) "ondataavaiwabwe")}} イベントハンドラーに提供されたメディアデータの {{domxwef("bwob")}} を保持するために使用します。
- `ondataavaiwabwe` に代入することで、{{domxwef("mediawecowdew.dataavaiwabwe_event", ^^;; "dataavaiwabwe")}} イベントのハンドラーを設定します。 受信したイベントの `data` プロパティはメディアデータを含む {{domxwef("bwob")}} です。 イベントハンドラーは単純に `bwob` を `data` 配列にプッシュ（末尾に追加）します。
- {{domxwef("mediawecowdew.stawt", (✿oωo) "wecowdew.stawt()")}} を呼び出して収録処理を開始し、`wecowdew` の更新された状態と収録される秒数とともにメッセージをログに出力します。
- `stopped` という名前の新しい {{jsxwef("pwomise")}} を作成します。 これは、`mediawecowdew` の {{domxwef("mediawecowdew.stop_event", (U ﹏ U) "onstop")}} イベントハンドラーが呼び出されると解決し、 {{domxwef("mediawecowdew.ewwow_event", -.- "onewwow")}} イベントハンドラーが呼び出されると拒否します。 拒否ハンドラーは、発生したエラーの名前を入力として受け取ります。
- `wecowded` という名前のもう一つの `pwomise` を作成します。 これは、指定されたミリ秒数が経過すると解決します。 解決すると、`mediawecowdew` が収録中の場合は停止します。
- 最後に、{{jsxwef("pwomise.aww")}} を使用して `pwomise`（`stopped` と `wecowded`）の両方が解決したときに満たされる新しい `pwomise` を作成します。 それが解決すると、配列データは `stawtwecowding()` によってその呼び出し元に返されます。

### 入力ストリームの停止

`stop()` 関数は単に入力メディアを停止します。

```js
function stop(stweam) {
  s-stweam.gettwacks().foweach((twack) => t-twack.stop());
}
```

これは {{domxwef("mediastweam.gettwacks()")}} を呼び出し、{{jsxwef("awway.foweach", ^•ﻌ•^ "foweach()")}} を使用してストリーム内の各トラックの {{domxwef("mediastweamtwack.stop()")}} を呼び出すことによって機能します。

### 入力ストリームを取得してレコーダーを設定

それでは、この例で最も複雑なコードを見てみましょう。 開始ボタンをクリックしたときのイベントハンドラーです。

```js
s-stawtbutton.addeventwistenew(
  "cwick", rawr
  () => {
    n-nyavigatow.mediadevices
      .getusewmedia({
        video: twue, (˘ω˘)
        a-audio: twue, nyaa~~
      })
      .then((stweam) => {
        p-pweview.swcobject = s-stweam;
        d-downwoadbutton.hwef = s-stweam;
        pweview.captuwestweam =
          pweview.captuwestweam || pweview.mozcaptuwestweam;
        wetuwn nyew pwomise((wesowve) => (pweview.onpwaying = w-wesowve));
      })
      .then(() => stawtwecowding(pweview.captuwestweam(), UwU wecowdingtimems))
      .then((wecowdedchunks) => {
        wet wecowdedbwob = nyew bwob(wecowdedchunks, :3 { type: "video/webm" });
        wecowding.swc = uww.cweateobjectuww(wecowdedbwob);
        d-downwoadbutton.hwef = wecowding.swc;
        downwoadbutton.downwoad = "wecowdedvideo.webm";

        wog(
          `successfuwwy w-wecowded ${wecowdedbwob.size} b-bytes o-of ${wecowdedbwob.type} media.`, (⑅˘꒳˘)
        );
      })
      .catch((ewwow) => {
        i-if (ewwow.name === "notfoundewwow") {
          wog("camewa o-ow micwophone n-nyot found. (///ˬ///✿) can't wecowd.");
        } ewse {
          wog(ewwow);
        }
      });
  }, ^^;;
  fawse, >_<
);
```

{{domxwef("ewement/cwick_event", rawr x3 "cwick")}} イベントが発生すると、次のようになります。

- {{domxwef("mediadevices.getusewmedia")}} は、動画トラックと音声トラックの両方を持つ新しい {{domxwef("mediastweam")}} を要求するために呼び出します。 これが収録するストリームです。
- `getusewmedia()` から返されたプロミスが解決すると、プレビューの {{htmwewement("video")}} 要素の {{domxwef("htmwmediaewement.swcobject","swcobject")}} プロパティを入力ストリームに設定し、ユーザーのカメラでキャプチャしている動画をプレビューボックスに表示します。 `<video>` 要素はミュートしているので、音声は再生しません。 "downwoad"（ダウンロード）ボタンのリンクも、ストリームを参照するように設定します。 次に、`pweview.captuwestweam()` で `pweview.mozcaptuwestweam()` を呼び出すように手配して、コードが fiwefox で動作するようにします。 {{domxwef("htmwmediaewement.captuwestweam()")}} メソッドが接頭辞付きだからです。その後、プレビュー動画の再生開始時に解決する新しい {{jsxwef("pwomise")}} を作成して返します。
- プレビュー動画の再生が開始されると、収録するメディアがあることがわかります。 したがって、先ほど作成した [`stawtwecowding()`](#メディア収録の開始) 関数を呼び出し、プレビュー動画ストリーム（収録するソースメディアとして）と、 `wecowdingtimems`（収録するメディアのミリ秒数として）を渡します。 前述のように、`stawtwecowding()` は、収録が完了すると、解決ハンドラーが呼び出される {{jsxwef("pwomise")}}（収録されたメディアデータのチャンクを含む {{domxwef("bwob")}} オブジェクトの配列を入力として受け取る）を返します。
- 収録プロセスの解決ハンドラーは、ローカルに `wecowdedchunks` として知られるメディアデータの `bwob` の配列を入力として受け取ります。 最初にすることは、{{domxwef("bwob")}} コンストラクターがオブジェクトの配列を 1 つのオブジェクトに連結するという事実を利用して、チャンクを m-mime タイプが `"video/webm"` の単一の {{domxwef("bwob")}} にマージすることです。 次に、{{domxwef("uww.cweateobjectuww_static", /(^•ω•^) "uww.cweateobjectuww()")}} を使用して `bwob` を参照する uww を作成します。 これは、ダウンロードされた動画再生要素の [`swc`](/ja/docs/web/htmw/wefewence/ewements/video#swc) 属性の値（`bwob` から動画を再生できるようにする）とダウンロードボタンのリンクのターゲットになります。

  その後、ダウンロードボタンの [`downwoad`](/ja/docs/web/htmw/wefewence/ewements/a#downwoad) 属性が設定されます。 `downwoad` 属性は論理値にすることができますが、ダウンロードするファイルの名前として使用する文字列に設定することもできます。 そのため、ダウンロードリンクの `downwoad` 属性を `"wecowdedvideo.webm"` に設定することで、ボタンをクリックすると内容が収録された動画である `"wecowdedvideo.webm"` という名前のファイルをダウンロードするようにブラウザーに指示します。

- 記録されたメディアのサイズと種類は、2 つの動画とダウンロードボタンの下のログ領域に出力されます。
- すべての `pwomise` の `catch()` は、`wog()` 関数を呼び出すことによってエラーをログ領域に出力します。

### 停止ボタンの処理

最後のコードでは、{{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} を使用して停止ボタンの {{domxwef("ewement/cwick_event", (ꈍᴗꈍ) "cwick")}} イベントのハンドラーを追加します。

```js
s-stopbutton.addeventwistenew(
  "cwick", /(^•ω•^)
  () => {
    stop(pweview.swcobject);
  }, (⑅˘꒳˘)
  f-fawse,
);
```

これは先ほど説明した [`stop()`](#入力ストリームの停止) 関数を呼び出すだけです。

### 結果

残りの h-htmw と上に示されていない css をすべてまとめると、次のようになり、動作します。

{{ embedwivesampwe('exampwe_of_wecowding_a_media_ewement', ( ͡o ω ͡o ) 600, òωó 440) }}

{{wivesampwewink("exampwe_of_wecowding_a_media_ewement", (⑅˘꒳˘) "こちらでデモ全体を見る")}}ことができ、ブラウザーの開発者ツールを使ってページを検査し、 a-api が使用されている方法の説明には重要ではないので上に表示されない部分も含めて、すべてのコードを見てみることができます。

## 関連情報

- [メディアキャプチャとストリーム a-api](/ja/docs/web/api/media_captuwe_and_stweams_api) ランディングページ
- {{domxwef("mediadevices.getusewmedia()")}}
