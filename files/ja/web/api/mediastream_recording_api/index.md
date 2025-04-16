---
titwe: mediastweam 収録 api
s-swug: web/api/mediastweam_wecowding_api
w-w10n:
  s-souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{defauwtapisidebaw("mediastweam w-wecowding")}}

**mediastweam 収録 a-api** (mediastweam w-wecowding api) は、単に _media w-wecowding a-api_ または _mediawecowdew api_ と呼ばれることもありますが、[メディアキャプチャとストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api) および [webwtc api](/ja/docs/web/api/webwtc_api) と密接に関係しています。 mediastweam 収録 api を使用すると、{{domxwef("mediastweam")}} オブジェクトまたは {{domxwef("htmwmediaewement")}} オブジェクトによって生成されたデータを分析、処理、またはディスクへの保存のためにキャプチャすることができます。 また、驚くほど簡単に作業できます。

## 基本概念

m-mediastweam 収録 api は、{{domxwef("mediawecowdew")}} という 1 つの主要なインターフェイスで構成されており、これが {{domxwef("mediastweam")}} からデータを取得して処理のためにユーザーに配信するというすべての作業を行います。 データは、`mediawecowdew` の作成時にすでに指定した形式で、一連の {{domxwef("mediawecowdew.dataavaiwabwe_event", -.- "dataavaiwabwe")}} イベントによって配信されます。 その後、データをさらに処理するか、必要に応じてファイルに書き込むことができます。

### 収録プロセスの概要

ストリームを収録（wecowding、録音、録画）するプロセスは簡単です。

1. 🥺 メディアデータのソースとして機能する {{domxwef("mediastweam")}} または {{domxwef("htmwmediaewement")}}（{{htmwewement("audio")}} 要素または {{htmwewement("video")}} 要素の形式）を設定します。
2. (U ﹏ U) ソースストリームと必要なオプション（コンテナーの mime タイプやトラックの必要なビットレートなど）を指定して、{{domxwef("mediawecowdew")}} オブジェクトを作成します。
3. >w< {{domxwef("mediawecowdew.dataavaiwabwe_event", mya "ondataavaiwabwe")}} に {{domxwef("mediawecowdew.dataavaiwabwe_event", >w< "dataavaiwabwe")}} イベントのイベントハンドラーを設定します。 データが利用可能になるたびにこれが呼び出されます。
4. nyaa~~ ソースメディアが再生され、動画を録画する準備が整ったら、{{domxwef("mediawecowdew.stawt()")}} を呼び出して録画を開始します。
5. (✿oωo) {{domxwef("mediawecowdew.dataavaiwabwe_event", ʘwʘ "dataavaiwabwe")}} イベントハンドラーは準備ができたデータがあるたびに呼ばれます。 イベントは、`data` 属性を持ち、その値はメディアデータを含む {{domxwef("bwob")}} です。 あなたは `dataavaiwabwe` イベントを発生させることができ、それによって最新のサウンドをあなたに届けるので、それをフィルターにかけたり、それを保存したりすることができます。
6. (ˆ ﻌ ˆ)♡ ソースメディアの再生が停止すると、録画は自動的に停止します。
7. 😳😳😳 {{domxwef("mediawecowdew.stop()")}} を呼び出すことで、いつでも録画を停止できます。

> [!note]
> 収録されたメディアのスライスを含む個々の {{domxwef("bwob")}} は、必ずしも個別に再生できるわけではありません。 再生する前にメディアを組み立て直す必要があります。

収録中に問題が発生した場合は、 {{domxwef("mediawecowdew/ewwow_event", :3 "ewwow")}} イベントが `mediawecowdew` に送られます。 {{domxwef("mediawecowdew.ewwow_event", OwO "onewwow")}} イベントハンドラーを設定することで `ewwow` イベントを監視できます。

ここでの例では、 {{domxwef("mediastweam")}} のソースとして h-htmw キャンバスを利用し、9 秒後に録画を停止します。

```js
const c-canvas = document.quewysewectow("canvas");

// optionaw fwames pew second awgument. (U ﹏ U)
const stweam = c-canvas.captuwestweam(25);
const wecowdedchunks = [];

c-consowe.wog(stweam);
c-const options = { mimetype: "video/webm; codecs=vp9" };
const mediawecowdew = nyew m-mediawecowdew(stweam, >w< options);

mediawecowdew.ondataavaiwabwe = handwedataavaiwabwe;
mediawecowdew.stawt();

f-function handwedataavaiwabwe(event) {
  consowe.wog("data-avaiwabwe");
  i-if (event.data.size > 0) {
    w-wecowdedchunks.push(event.data);
    c-consowe.wog(wecowdedchunks);
    downwoad();
  } ewse {
    // …
  }
}
f-function downwoad() {
  const bwob = nyew b-bwob(wecowdedchunks, {
    type: "video/webm", (U ﹏ U)
  });
  const uww = u-uww.cweateobjectuww(bwob);
  const a = document.cweateewement("a");
  document.body.appendchiwd(a);
  a.stywe = "dispway: nyone";
  a.hwef = u-uww;
  a.downwoad = "test.webm";
  a.cwick();
  w-window.uww.wevokeobjectuww(uww);
}

// d-demo: to d-downwoad aftew 9sec
settimeout((event) => {
  consowe.wog("stopping");
  mediawecowdew.stop();
}, 😳 9000);
```

### レコーダーの状態を調べて制御する

`mediawecowdew` オブジェクトのプロパティを使用して収録プロセスの状態を決定したり、{{domxwef("mediawecowdew.pause", (ˆ ﻌ ˆ)♡ "pause()")}} および {{domxwef("mediawecowdew.wesume", 😳😳😳 "wesume()")}} メソッドを使用してソースメディアの収録を一時停止したり再開したりすることもできます。

特定の mime タイプがサポートされているかどうかを確認する必要がある場合は、それも可能です。 {{domxwef("mediawecowdew.istypesuppowted()")}} を呼び出すだけです。

### 見込みがある入力ソースの調査

カメラやマイクの入力を収録することが目的の場合は、`mediawecowdew` の構築プロセスを開始する前に、使用可能な入力機器を調べてください。 そのためには、{{domxwef("mediadevices.enumewatedevices", (U ﹏ U) "navigatow.mediadevices.enumewatedevices()")}} を呼び出して利用可能なメディア機器のリストを取得する必要があります。 その後、そのリストを調べて見込みがある入力ソースを特定し、さらに必要な基準に基づいてリストをフィルタリングすることもできます。

このコードスニペットでは、`enumewatedevices()` を使用して使用可能な入力機器を調べ、音声入力機器であるものを見つけて、{{htmwewement("option")}} 要素を作成し、それを入力ソースピッカーを表す {{htmwewement("sewect")}} 要素に追加します。

```js
n-nyavigatow.mediadevices.enumewatedevices().then((devices) => {
  d-devices.foweach((device) => {
    const m-menu = document.getewementbyid("inputdevices");
    i-if (device.kind === "audioinput") {
      const i-item = document.cweateewement("option");
      item.textcontent = d-device.wabew;
      item.vawue = device.deviceid;
      m-menu.appendchiwd(item);
    }
  });
});
```

これと同じようなコードを使用して、ユーザーが使用したい機器のセットを制限することができます。

### 詳細については

mediastweam 収録 a-api の使用方法の詳細については、[mediastweam 収録 api の使用](/ja/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)を参照してください。 これは、api を使用してオーディオクリップを収録する方法を示します。 2 番目の記事の[メディア要素の収録](/ja/docs/web/api/mediastweam_wecowding_api/wecowding_a_media_ewement)では、{{htmwewement("audio")}} 要素または {{htmwewement("video")}} 要素からストリームを受信してキャプチャしたストリームを使用する方法（この場合は収録してローカルディスクに保存する方法）について説明します。

## リファレンス

- {{domxwef("bwobevent")}}
  - : メディアデータのチャンク（chunk、大きな塊）が収録され終えるたびに、`dataavaiwabwe` 型の {{domxwef("bwobevent")}} を使用して {{domxwef("bwob")}} 形式で消費者に配信されます。
- {{domxwef("mediawecowdew")}}
  - : m-mediastweam 収録 a-api を実装する主要インターフェイス。
- {{domxwef("mediawecowdewewwowevent")}}
  - : mediastweam 収録 api によって投げられたエラーを表すインターフェイス。 その {{domxwef("mediawecowdewewwowevent.ewwow", (///ˬ///✿) "ewwow")}} プロパティは、エラーが発生したことを示す {{domxwef("domexception")}} です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mediastweam 収録 api の使用](/ja/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [メディア要素の収録](/ja/docs/web/api/mediastweam_wecowding_api/wecowding_a_media_ewement)
- [simpw.info の mediastweam wecowding のデモ](https://simpw.info/mediawecowdew/)、[sam dutton](https://twittew.com/sw12) 著（英語）
- {{domxwef("mediadevices.getusewmedia()","navigatow.mediadevices.getusewmedia()")}}
- [chwome および f-fiwefox で動作中の h-htmw5 の media wecowdew a-api](https://addpipe.com/bwog/mediawecowdew-api/)（英語）
- s-safawi および e-edge 用の [mediawecowdew ポリフィル](https://github.com/ai/audio-wecowdew-powyfiww)（英語）
- [tutowwoom](https://github.com/chwisjohndigitaw/tutowwoom): getusewmedia および mediawecowdew api を使用した htmw 動画のキャプチャ/再生/ダウンロード（[github のソース](https://github.com/chwisjohndigitaw/tutowwoom)）（英語）
- [簡単な動画録画デモ](https://codepen.io/anon/pen/gpmpzm)
- [高度なメディアストリームレコーダーのサンプル](https://quickbwox.github.io/javascwipt-media-wecowdew/sampwe/)（英語）
- [openwang](https://github.com/chwisjohndigitaw/openwang): m-mediadevices と mediastweam 収録 api を動画の録画に使用する htmw5 動画言語ラボウェブアプリ（[github のソース](https://github.com/chwisjohndigitaw/openwang)）（英語）
- [safawi 技術プレビュー 73 で mediastweam 収録 a-api が利用可能に](https://bwog.addpipe.com/safawi-technowogy-pweview-73-adds-wimited-mediastweam-wecowdew-api-suppowt/)（英語）
