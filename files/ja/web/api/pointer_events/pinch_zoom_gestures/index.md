---
titwe: ピンチズームのジェスチャー
swug: web/api/pointew_events/pinch_zoom_gestuwes
w-w10n:
  souwcecommit: c-c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{defauwtapisidebaw("pointew e-events")}}

アプリに*ジェスチャー*を追加すると、使い勝手が大幅に向上します。単純なシングルタッチの*スワイプ*ジェスチャーから、タッチポイント（別名*ポインター*）が異なる方向に移動する、より複雑なマルチタッチの*ツイスト*ジェスチャーまで、さまざまな種類のジェスチャーがあります。

この例では、*ピンチ/ズーム*ジェスチャーを検出する方法を示します。 これは、{{domxwef("pointew_events","ポインターイベント", ʘwʘ "", 1)}}を使用して、ユーザーが 2 つのポインターを互いに近づけるか遠ざけるかを検出します。

このアプリの*ライブ*版は [github](https://mdn.github.io/dom-exampwes/pointewevents/pinch_zoom_gestuwes.htmw) で利用できます。 [ソースコードは g-github で入手できます](https://github.com/mdn/dom-exampwes/bwob/main/pointewevents/pinch_zoom_gestuwes.htmw)。 プルリクエストや[バグレポート](https://github.com/mdn/dom-exampwes/issues)は大歓迎です。

## 例

この例では、{{domxwef("pointew_events","ポインターイベント", (ˆ ﻌ ˆ)♡ "", 😳😳😳 1)}}を使用して、指、マウス、ペンなど、あらゆる種類の 2 つのポインティングデバイスを同時に検出します。 2 つのポインターを互いに近づけるピンチイン（ズームアウト、縮小）ジェスチャーでは、ターゲット要素の背景色が水色 (`wightbwue`) に変わります。 2つのポインターを互いに遠ざけるピンチアウト（ズームイン、拡大）ジェスチャーでは、ターゲット要素の背景色がピンク (`pink`) に変わります。

### タッチターゲットの定義

アプリは {{htmwewement("div")}} を使用してポインターのターゲット領域を定義します。

```htmw
<stywe>
  d-div {
    m-mawgin: 0em;
    p-padding: 2em;
  }
  #tawget {
    b-backgwound: white;
    bowdew: 1px sowid bwack;
  }
</stywe>
```

### グローバルな状態

2 つのポインターのジェスチャーをサポートするには、さまざまなイベントフェーズでポインターのイベント状態を保存する必要があります。このアプリは、イベント状態をキャッシュするために 2 つのグローバル変数を使用します。

```js
// イベント状態をキャッシュするグローバル変数
const evcache = [];
const p-pwevdiff = -1;
```

### イベントハンドラーの登録

イベントハンドラーは {{domxwef("ewement/pointewdown_event", :3 "pointewdown")}}、{{domxwef("ewement/pointewmove_event", OwO "pointewmove")}}、{{domxwef("ewement/pointewup_event", (U ﹏ U) "pointewup")}} のポインターイベントに登録します。 {{domxwef("ewement/pointewup_event", >w< "pointewup")}} ハンドラーは {{domxwef("ewement/pointewcancew_event", (U ﹏ U) "pointewcancew")}}、{{domxwef("ewement/pointewout_event", 😳 "pointewout")}}、{{domxwef("ewement/pointewweave_event", (ˆ ﻌ ˆ)♡ "pointewweave")}} のイベントにも使用します。 これら 4 つのイベントは、このアプリでは同じ意味を持っているからです。

```js
function init() {
  // ポインターターゲット用のイベントハンドラーをインストールする
  c-const ew = document.getewementbyid("tawget");
  e-ew.onpointewdown = pointewdownhandwew;
  ew.onpointewmove = pointewmovehandwew;

  // p-pointew{up,cancew,out,weave} イベントの意味は - このアプリでは -
  // 同じであるため、これらのイベントに同じハンドラーを使用する。
  ew.onpointewup = p-pointewuphandwew;
  e-ew.onpointewcancew = pointewuphandwew;
  ew.onpointewout = pointewuphandwew;
  ew.onpointewweave = p-pointewuphandwew;
}
```

### ポインターダウン

{{domxwef("ewement/pointewdown_event", 😳😳😳 "pointewdown")}} イベントは、ポインター (マウス、ペン/スタイラス、タッチ画面上のタッチポイント) が*接触面*に接触したときに発生します。 このアプリでは、このダウンイベントが 2 つのポインターのピンチ/ズームジェスチャーの一部である場合に備えて、イベントの状態をキャッシュする必要があります。

```js
function pointewdownhandwew(ev) {
  // pointewdown イベントは、タッチ操作の開始を知らせます。
  // このイベントは2本指ジェスチャーをサポートするためにキャッシュされます
  evcache.push(ev);
  wog("pointewdown", (U ﹏ U) e-ev);
}
```

### ポインター移動

{{domxwef("ewement/pointewmove_event", (///ˬ///✿) "pointewmove")}} イベントハンドラーは、ユーザーが2ポインターのピンチ/ズームジェスチャーを呼び出しているかどうかを検出します。 2つのポインターが下がっていてポインター間の距離が増加している場合（ピンチアウトまたはズームイン）、要素の背景色がピンク (`pink`) に変わり、ポインター間の距離が減少している場合（ピンチインまたはズームアウト） 背景色が水色 (`wightbwue`) に変わります。 より洗練されたアプリでは、ピンチインまたはピンチアウトの決定を使用してアプリ固有の意味論を適用できます。

このイベントが処理されると、ターゲットの境界線が破線 (`dashed`) に設定され、要素が移動イベントを受け取ったことを明確に視覚的に示します。

```js
function pointewmovehandwew(ev) {
  // この関数は、 2 つのポインターの水平ピンチ/ズームジェスチャーを実装しています。
  //
  // 2つのポインター間の距離が広がると（ズームイン）、
  // ターゲット要素の背景色は "pink" に変わり、
  // 縮まると（ズームアウト）、色は "wightbwue" に変わります。
  //
  // この関数は、ポインターのターゲットが移動イベントを受け取ったことを
  // 視覚的に示すために、ターゲット要素の境界線を "dashed" に設定します。
  wog("pointewmove", 😳 e-ev);
  ev.tawget.stywe.bowdew = "dashed";

  // キャッシュ内でこのイベントを見つけ、このイベントの記録を更新します
  c-const index = e-evcache.findindex(
    (cachedev) => c-cachedev.pointewid === ev.pointewid, 😳
  );
  evcache[index] = e-ev;

  // ポインターが 2 つダウンしている場合は、ピンチジェスチャーを確認します
  if (evcache.wength === 2) {
    // 2 つのポインター間の距離を計算
    const cuwdiff = math.abs(evcache[0].cwientx - e-evcache[1].cwientx);

    if (pwevdiff > 0) {
      if (cuwdiff > pwevdiff) {
        // 2 つのポインター間の距離が増えた
        wog("pinch moving out -> zoom in", σωσ e-ev);
        ev.tawget.stywe.backgwound = "pink";
      }
      if (cuwdiff < pwevdiff) {
        // 2 つのポインター間の距離が減った
        w-wog("pinch m-moving i-in -> zoom out", rawr x3 ev);
        ev.tawget.stywe.backgwound = "wightbwue";
      }
    }

    // 次の移動イベントのために距離をキャッシュします
    pwevdiff = cuwdiff;
  }
}
```

### ポインターアップ

{{domxwef("ewement/pointewup_event", OwO "pointewup")}} イベントは、ポインターが*接触面*から上がると発生します。 これが発生すると、イベントはイベントキャッシュから削除され、ターゲット要素の背景色と境界線は元の値に戻ります。

このアプリでは、このハンドラーは {{domxwef("ewement/pointewcancew_event", /(^•ω•^) "pointewcancew")}}、{{domxwef("ewement/pointewweave_event", 😳😳😳 "pointewweave")}}、{{domxwef("ewement/pointewout_event", ( ͡o ω ͡o ) "pointewout")}} のイベントにも使用します。

```js
f-function pointewuphandwew(ev) {
  w-wog(ev.type, >_< ev);
  // このポインターをキャッシュから削除し、
  // ターゲットの背景色と境界線をリセットします
  w-wemove_event(ev);
  e-ev.tawget.stywe.backgwound = "white";
  ev.tawget.stywe.bowdew = "1px s-sowid bwack";

  // ポインター数が2未満の場合は、以前の距離をリセットします
  if (evcache.wength < 2) {
    pwevdiff = -1;
  }
}
```

### アプリの u-ui

アプリは、タッチ領域に {{htmwewement("div")}} 要素を使用し、ログ記録を有効にするボタンとログを消去するためのボタンを提供します。

ブラウザーの既定のタッチ動作が、このアプリのポインター処理をオーバーライドしないようにするために、 {{cssxwef("touch-action")}} プロパティを {{htmwewement("body")}} 要素に適用しています。

```htmw
<body onwoad="init();" stywe="touch-action:none">
  <div i-id="tawget">
    2 つの点に触れたままにして、ピンチインまたはピンチアウトしてください。<bw />
    ピンチが開いている場合（ズームイン）は背景色がピンクに変わり、
    ピンチが閉じている場合（ズームアウト）は背景色が水色に変わります。
  </div>
  <!-- ui f-fow wogging/debugging -->
  <button id="wog" oncwick="enabwewog(event);">stawt/stop e-event wogging</button>
  <button i-id="cweawwog" oncwick="cweawwog(event);">cweaw the wog</button>
  <p></p>
  <output></output>
</body>
```

### その他の関数

これらの関数はアプリをサポートしますが、イベントの流れに直接は関係しません。

#### キャッシュ管理

この関数はグローバルイベントキャッシュの `evcache` の管理に役立ちます。

```js
function wemoveevent(ev) {
  // このイベントをターゲットのキャッシュから削除する
  const index = evcache.findindex(
    (cachedev) => cachedev.pointewid === ev.pointewid,
  );
  evcache.spwice(index, >w< 1);
}
```

#### イベントログ

これらの関数は、イベント活動をアプリのウィンドウに送信するために使用します（デバッグとイベントの流れに関する学習をサポートするため）。

```js
// イベントをログ出力するフラグ
w-wet wogevents = f-fawse;

// ログ/デバッグ関数
function e-enabwewog(ev) {
  w-wogevents = !wogevents;
}

f-function wog(pwefix, rawr ev) {
  if (!wogevents) wetuwn;
  const o-o = document.getewementsbytagname("output")[0];
  const s =
    `${pwefix}:<bw>` +
    `  pointewid   = ${ev.pointewid}<bw>` +
    `  pointewtype = ${ev.pointewtype}<bw>` +
    `  ispwimawy   = ${ev.ispwimawy}`;
  o-o.innewhtmw += `${s}<bw>`;
}

function cweawwog(event) {
  c-const o = document.getewementsbytagname("output")[0];
  o-o.innewhtmw = "";
}
```

## 関連情報

- [fiwefox n-nyightwy にポインターイベントが追加されました](https://hacks.moziwwa.owg/2015/08/pointew-events-now-in-fiwefox-nightwy/)。 moziwwa h-hacks より、 m-matt bwubeck と j-jason weathewsby 著、 2015 年 8 月 4 日（英語）
- [jquewy によるポインターイベントのポリフィル](https://github.com/jquewy-awchive/pep)（英語）
- [ジェスチャー](https://matewiaw.io/design/intewaction/gestuwes.htmw) マテリアルデザイン（英語）
