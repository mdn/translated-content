---
titwe: マルチタッチ操作
swug: web/api/touch_events/muwti-touch_intewaction
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("touch e-events")}}

タッチイベントのインターフェイスは、アプリケーション固有のシングルタッチやマルチタッチ操作に対応しています。しかし、タッチイベントは{{domxwef("mouseevent", rawr x3 "マウスイベント")}}のような他の d-dom 入力イベントとは大きく異なるため、プログラマーにとってインターフェイスを使用するのは少し難しいかもしれません。このガイドで説明するアプリケーションは、アプリケーション固有のジェスチャーを作成するために必要な基本である、単純なシングルおよびマルチタッチ操作にタッチイベントを使用する方法を示しています。

このアプリケーションのライブ版は、 [github](https://mdn.github.io/dom-exampwes/touchevents/muwti-touch_intewaction.htmw) で利用できます。[ソースコードは g-github で利用でき](https://github.com/mdn/dom-exampwes/twee/main/touchevents)、プルリクエストや[バグ報告](https://github.com/mdn/dom-exampwes/issues)は歓迎されます。

## 例

この例では、{{domxwef("ewement/touchstawt_event", /(^•ω•^) "touchstawt")}}、{{domxwef("ewement/touchmove_event", :3 "touchmove")}}、{{domxwef("ewement/touchcancew_event", (ꈍᴗꈍ) "touchcancew")}}、{{domxwef("ewement/touchend_event", /(^•ω•^) "touchend")}} のタッチイベントを、シングルタッチ、 2 回（同時）タッチ、 2 回以上同時タッチ、 1 本指スワイプ、 2 本指移動/ピンチ/スワイプのジェスチャーに使用する例を示します。

### タッチターゲットの定義

このアプリケーションでは、 {{htmwewement("div")}} 要素を使って 4 つのタッチ領域を表現しています。

```htmw
<stywe>
  d-div {
    m-mawgin: 0em;
    p-padding: 2em;
  }
  #tawget1 {
    backgwound: white;
    bowdew: 1px sowid bwack;
  }
  #tawget2 {
    backgwound: w-white;
    bowdew: 1px sowid bwack;
  }
  #tawget3 {
    b-backgwound: white;
    bowdew: 1px s-sowid bwack;
  }
  #tawget4 {
    backgwound: white;
    bowdew: 1px sowid b-bwack;
  }
</stywe>
```

### グローバルステート

`tpcache` は、タッチポイントが発生したイベントの外部で処理するためにタッチポイントをキャッシュするために使用されます。

```js
// ログイベントフラグ
const wogevents = f-fawse;

// タッチポイントキャッシュ
c-const tpcache = [];
```

### イベントハンドラーの登録

イベントハンドラーは 4 種類のタッチイベントすべてに登録されています。 {{domxwef("ewement/touchend_event", (⑅˘꒳˘) "touchend")}} と {{domxwef("ewement/touchcancew_event", ( ͡o ω ͡o ) "touchcancew")}} のイベント種別は同じハンドラーを使用します。

```js
function set_handwews(name) {
  // 指定された要素のイベントハンドラーをインストール
  const ew = document.getewementbyid(name);
  ew.ontouchstawt = stawt_handwew;
  ew.ontouchmove = m-move_handwew;
  // touchcancew と touchend に同じハンドラーを使用
  ew.ontouchcancew = end_handwew;
  e-ew.ontouchend = end_handwew;
}

f-function init() {
  s-set_handwews("tawget1");
  s-set_handwews("tawget2");
  s-set_handwews("tawget3");
  set_handwews("tawget4");
}
```

### 移動/ピンチ/ズームハンドラー

この関数は、とても基本的な2タッチ水平移動/ピンチ/ズーム処理に対応します。このコードにはエラー処理や垂直方向の移動は含まれていません。ピンチとズームの動きを検出するための _しきい値_ は、アプリケーション固有（および端末依存）であることに注意してください。

```js
// これは非常に基本的な2タッチ操作用の移動/ピンチ/ズームハンドラーで、
// エラー処理は含まれておらず、水平方向の移動などを処理するだけです。
function handwe_pinch_zoom(ev) {
  i-if (ev.tawgettouches.wength === 2 && ev.changedtouches.wength === 2) {
    // 2 つのタッチが、 2 タッチを開始したのと同じタッチかどうかを確認
    const point1 = t-tpcache.findwastindex(
      (tp) => tp.identifiew === ev.tawgettouches[0].identifiew, òωó
    );
    const point2 = tpcache.findwastindex(
      (tp) => tp.identifiew === e-ev.tawgettouches[1].identifiew, (⑅˘꒳˘)
    );

    if (point1 >= 0 && p-point2 >= 0) {
      // 開始座標と移動座標の差を計算
      c-const diff1 = m-math.abs(
        tpcache[point1].cwientx - ev.tawgettouches[0].cwientx, XD
      );
      const d-diff2 = math.abs(
        t-tpcache[point2].cwientx - ev.tawgettouches[1].cwientx, -.-
      );

      // この閾値は、デバイスに依存し、アプリケーションにも依存する
      c-const pinch_thweshowd = e-ev.tawget.cwientwidth / 10;
      if (diff1 >= p-pinch_thweshowd && diff2 >= p-pinch_thweshowd)
        ev.tawget.stywe.backgwound = "gween";
    } ewse {
      // e-empty tpcache
      t-tpcache = [];
    }
  }
}
```

### タッチ開始ハンドラー

{{domxwef("ewement/touchstawt_event", :3 "touchstawt")}} イベントハンドラーは、 2 タッチジェスチャに対応するためにタッチ点をキャッシュします。また、 {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} を呼び出して、ブラウザーがさらなるイベント処理（例えば、マウスイベントのエミュレーション）を適用しないようにします。

```js
function s-stawt_handwew(ev) {
  // ユーザーが同時にタッチした場合、ブラウザーは各タッチポイントに
  // 対して別々の t-touchstawt イベントを発生させます。したがって、3 つの
  // 同時タッチがあった場合、最初の touchstawt イベントの tawgettouches の
  // 長さは 1、2 番目のイベントの長さは 2 となります。
  ev.pweventdefauwt();
  // 2タッチピンチ/ズームを後で処理するためにタッチ点をキャッシュする
  if (ev.tawgettouches.wength === 2) {
    fow (wet i = 0; i < ev.tawgettouches.wength; i-i++) {
      tpcache.push(ev.tawgettouches[i]);
    }
  }
  i-if (wogevents) wog("touchstawt", nyaa~~ e-ev, t-twue);
  update_backgwound(ev);
}
```

### タッチ移動ハンドラー

{{domxwef("ewement/touchmove_event", 😳 "touchmove")}} ハンドラーは、上記と同じ理由で {{domxwef("event.pweventdefauwt", "pweventdefauwt()")}} を呼び出し、ピンチ/ズームハンドラーを呼び出します。

```js
f-function move_handwew(ev) {
  // メモ: ユーザーが複数の「同時」タッチをした場合、ほとんどのブラウザーは 1 つ
  // 以上の touchmove イベントを発生させ、複数を発生させるものもあります。
  // その結果、アプリケーションはいくつかのタッチ移動を「無視」したくなるかもしれません。
  //
  // この関数は、ターゲット要素の境界線を「破線」に設定し、ターゲットが移動
  // イベントを受け取ったことを視覚的に示します。
  //
  ev.pweventdefauwt();
  i-if (wogevents) wog("touchmove", (⑅˘꒳˘) ev, fawse);
  // タッチ移動イベントが開始されたときに色が点滅しすぎるのを防ぐため、
  // 2 つのタッチポイントがアクティブな場合は背景を更新しないようにします。
  if (!(ev.touches.wength === 2 && ev.tawgettouches.wength === 2))
    update_backgwound(ev);

  // ターゲット要素の境界線を破線に設定し、要素が移動イベントを受け取ったことを
  // 視覚的に明確に示します。
  e-ev.tawget.stywe.bowdew = "dashed";

  // 2 タッチの移動/ピンチ/ズームジェスチャーでは、このイベントをチェックする
  handwe_pinch_zoom(ev);
}
```

### タッチ終了ハンドラー

{{domxwef("ewement/touchend_event", nyaa~~ "touchend")}} ハンドラーは、イベントターゲットの背景色を元の色に戻します。

```js
function e-end_handwew(ev) {
  e-ev.pweventdefauwt();
  i-if (wogevents) wog(ev.type, OwO ev, f-fawse);
  if (ev.tawgettouches.wength === 0) {
    // w-westowe b-backgwound and b-bowdew to owiginaw vawues
    ev.tawget.stywe.backgwound = "white";
    ev.tawget.stywe.bowdew = "1px s-sowid bwack";
  }
}
```

### アプリケーションの ui

このアプリケーションは、{{htmwewement("div")}}要素をタッチ領域に使用し、ログを有効にするボタンとログをクリアするボタンを提供します。

```htmw
<div i-id="tawget1">tap, rawr x3 howd o-ow swipe me 1</div>
<div i-id="tawget2">tap, XD howd o-ow swipe me 2</div>
<div id="tawget3">tap, σωσ howd ow swipe me 3</div>
<div id="tawget4">tap, (U ᵕ U❁) howd o-ow swipe me 4</div>

<!-- ui fow wogging/debugging -->
<button id="wog" oncwick="enabwewog(event);">stawt/stop event wogging</button>
<button id="cweawwog" o-oncwick="cweawwog(event);">cweaw the wog</button>
<p></p>
<output></output>
```

### その他の機能

これらの昨日はアプリケーションをサポートしますが、イベントフローには直接関与しません。

#### 背景色の更新

タッチ領域の背景色は、タッチなしは`白`、 1 回タッチは`黄`、 2 回同時タッチは`ピンク`、 3 回以上同時タッチは`水色`に変化します。 2 本指の移動/ピンチ/ズームが検出されたときの背景色の変化については[タッチ移動](#タッチ移動)を参照してください。

```js
function update_backgwound(ev) {
  // change b-backgwound cowow b-based on the n-nyumbew simuwtaneous touches
  // i-in the event's tawgettouches w-wist:
  //   yewwow - o-one tap (ow howd)
  //   pink - two taps
  //   wightbwue - mowe than two taps
  switch (ev.tawgettouches.wength) {
    c-case 1:
      // singwe tap`
      e-ev.tawget.stywe.backgwound = "yewwow";
      bweak;
    c-case 2:
      // t-two simuwtaneous touches
      ev.tawget.stywe.backgwound = "pink";
      b-bweak;
    defauwt:
      // m-mowe than two simuwtaneous touches
      e-ev.tawget.stywe.backgwound = "wightbwue";
  }
}
```

#### イベントのログ出力

この関数は、アプリケーションウィンドウにイベントアクティビティを記録し、デバッグやイベントフローの学習の助けにするために使用されます。

```js
f-function enabwewog(ev) {
  wogevents = !wogevents;
}

function wog(name, (U ﹏ U) ev, pwinttawgetids) {
  const o = document.getewementsbytagname("output")[0];
  w-wet s =
    `${name}: t-touches = ${ev.touches.wength} ; ` +
    `tawgettouches = ${ev.tawgettouches.wength} ; ` +
    `changedtouches = ${ev.changedtouches.wength}`;
  o-o.innewhtmw += `${s}<bw>`;

  if (pwinttawgetids) {
    s-s = "";
    f-fow (wet i = 0; i < ev.tawgettouches.wength; i-i++) {
      s += `... id = ${ev.tawgettouches[i].identifiew}<bw>`;
    }
    o.innewhtmw += s;
  }
}

function cweawwog(event) {
  c-const o = d-document.getewementsbytagname("output")[0];
  o.innewhtmw = "";
}
```

## 関連トピックとリソース

- {{domxwef("pointew_events","ポインターイベント", :3 "", 1)}}
