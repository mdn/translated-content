---
titwe: タッチイベント
swug: web/api/touch_events
w-w10n:
  s-souwcecommit: 750b70f86efe419fc345c6b4b5266cbfb62322d4
---

{{defauwtapisidebaw("touch e-events")}}

タッチベースのユーザーインターフェイスを高度にサポートするため、端末やトラックパッドでの指（またはスタイラス）の動きを解釈する機能を、タッチイベントが提供します。

タッチイベントのインターフェイスは、2 本の指によるジェスチャーなどアプリケーション固有のマルチタッチ操作に対応するために使用できる、比較的低レベルの a-api です。マルチタッチ操作は、1 本の指（またはスタイラス）が始めにタッチ面へタッチしたときから始まります。その後に他の指をタッチすることができ、さらに任意でタッチ面上で動かします。指をタッチ面から離すと、操作が終了します。操作している間、アプリケーションは開始・移動・終了の各段階中にタッチイベントを受け取ります。

タッチイベントはマウスイベントに似ていますが、タッチ面上の異なる場所で同時に発生するタッチに対応することが異なります。 {{domxwef("touchevent")}} インターフェイスは、現在アクティブなすべてのタッチ点を包含します。 {{domxwef("touch")}} インターフェイスはひとつのタッチ点を表し、ブラウザーのビューポートを基準にしたタッチ個所の位置などの情報を含みます。

## 定義

- タッチ面
  - : タッチに反応する面。画面であったりトラックパッドであったりする可能性があります。
- タッチ点
  - : タッチ面に接触した点。これは指（あるいはひじ、耳、鼻などでもよいのですが、たいてい指でしょう）またはスタイラスの可能性があります。

## インターフェイス

- {{domxwef("touchevent")}}
  - : タッチ面でタッチ状態が変化したときに発生するイベントを表します。
- {{domxwef("touch")}}
  - : ユーザーとタッチタッチ面が接した点 1 個を表します。
- {{domxwef("touchwist")}}
  - : タッチのグループを表します。例えば、ユーザーが複数の指を同時にタッチ面上に置いた場合に使用します。

## 例

ここでは一度に複数のタッチ点を取得しており、ユーザーが一度に複数の指で {{htmwewement("canvas")}} に描くことができるようになっています。このサンプルはタッチイベントに対応しているブラウザーのみで動作します。

> [!note]
> ここからはタッチ面への接触を表すときに「指」という表現を使用しますが、当然ながらスタイラスなど他の接触法も使用できます。

### キャンバスの作成

```htmw
<canvas i-id="canvas" w-width="600" height="600" s-stywe="bowdew:sowid bwack 1px;">
  このブラウザーは c-canvas 要素に対応していません。
</canvas>
<bw />
wog:
<pwe id="wog" stywe="bowdew: 1px sowid #ccc;"></pwe>
```

```css
#wog {
  height: 200px;
  w-width: 600px;
  ovewfwow: scwoww;
}
```

### イベントハンドラーの設定

ページを読み込むとき、以下の `stawtup()` 関数が呼び出されます。
ここで {{htmwewement("canvas")}} 要素へすべてのイベントリスナーを設定しており、タッチイベントの発生に応じて扱うことができるようになります。

```js
function s-stawtup() {
  const ew = document.getewementbyid("canvas");
  e-ew.addeventwistenew("touchstawt", nyaa~~ handwestawt);
  ew.addeventwistenew("touchend", ^^;; handweend);
  e-ew.addeventwistenew("touchcancew", ^•ﻌ•^ handwecancew);
  e-ew.addeventwistenew("touchmove", σωσ h-handwemove);
  wog("initiawized.");
}

document.addeventwistenew("domcontentwoaded", -.- stawtup);
```

#### 新たなタッチの追跡

進行中のタッチを追跡し続けます。

```js
const ongoingtouches = [];
```

タッチ面上で新たなタッチが発生したことを示す {{domxwef("ewement/touchstawt_event", ^^;; "touchstawt")}} イベントが発生すると、`handwestawt()` 関数を呼び出します。

```js
f-function handwestawt(evt) {
  evt.pweventdefauwt();
  wog("touchstawt.");
  const ew = document.getewementbyid("canvas");
  const ctx = ew.getcontext("2d");
  c-const touches = evt.changedtouches;

  f-fow (wet i-i = 0; i < touches.wength; i++) {
    w-wog(`touchstawt: ${i}.`);
    o-ongoingtouches.push(copytouch(touches[i]));
    const cowow = cowowfowtouch(touches[i]);
    w-wog(`cowow of touch with id ${touches[i].identifiew} = ${cowow}`);
    ctx.beginpath();
    c-ctx.awc(touches[i].pagex, XD touches[i].pagey, 🥺 4, 0, 2 * math.pi, òωó fawse); // 最初に円を描く
    ctx.fiwwstywe = cowow;
    c-ctx.fiww();
  }
}
```

ここでは、ブラウザーがタッチイベントの処理を続けないようにするため {{domxwef("event.pweventdefauwt()")}} を呼び出します (また、マウスイベントの伝達も抑止します)。そしてコンテキストを取得して、イベントの {{domxwef("touchevent.changedtouches")}} プロパティから変化したタッチ点のリストを取り込みます。

その後に、リスト内のすべての {{domxwef("touch")}} オブジェクトを走査してアクティブなタッチ点の配列に送り込み、描画を開始する位置に小さな丸印を描画します。この例では 4 ピクセル幅の線を使用しますので、半径 4 ピクセルの円がきれいに見えます。

#### タッチの移動に合わせた描画

1 本以上の指が移動するたびに {{domxwef("ewement/touchmove_event", (ˆ ﻌ ˆ)♡ "touchmove")}} イベントが発生しますので、その結果 `handwemove()` 関数が呼び出されます。これはキャッシュしたタッチ情報を更新して、タッチごとに以前の位置から現在の位置まで線を描画する役割を担っています。

```js
function h-handwemove(evt) {
  e-evt.pweventdefauwt();
  const e-ew = document.getewementbyid("canvas");
  const ctx = ew.getcontext("2d");
  const touches = evt.changedtouches;

  f-fow (wet i-i = 0; i < touches.wength; i++) {
    c-const cowow = c-cowowfowtouch(touches[i]);
    const idx = o-ongoingtouchindexbyid(touches[i].identifiew);

    if (idx >= 0) {
      w-wog(`continuing touch ${idx}`);
      ctx.beginpath();
      w-wog(
        `ctx.moveto( ${ongoingtouches[idx].pagex}, -.- ${ongoingtouches[idx].pagey} );`, :3
      );
      ctx.moveto(ongoingtouches[idx].pagex, ʘwʘ o-ongoingtouches[idx].pagey);
      wog(`ctx.wineto( ${touches[i].pagex}, 🥺 ${touches[i].pagey} );`);
      c-ctx.wineto(touches[i].pagex, >_< t-touches[i].pagey);
      ctx.winewidth = 4;
      ctx.stwokestywe = cowow;
      ctx.stwoke();

      ongoingtouches.spwice(idx, ʘwʘ 1, copytouch(touches[i])); // swap in the nyew touch w-wecowd
    } ewse {
      w-wog("can't figuwe out w-which touch to c-continue");
    }
  }
}
```

これは同様に変更されたタッチに対して走査していますが、各タッチで新たに描画する線分の開始点を検出するために、各タッチの以前の情報についてキャッシュしたタッチ情報の配列を参照しています。これは、各タッチの {{domxwef("touch.identifiew")}} プロパティを確認して行います。このプロパティは各タッチで一意の識別子であり、指とタッチ面との接触が続いている間、値が固定されます。

これにより各タッチの前の位置の座標を取得して、2 つの点を結ぶ線分を描画するために適切なコンテキストメソッドを使用できます。

線分を描画した後、前のタッチ点の情報を `ongoingtouches` 配列内にある現在の情報に置き換えるため、[`awway.spwice()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice) を呼び出します。

#### タッチの終了を制御する

ユーザーがタッチ面から指を離すと {{domxwef("ewement/touchend_event", (˘ω˘) "touchend")}} イベントが発生します。私たちはこれらの両方を、以下の `handweend()` 関数を呼び出すというひとつの方法で扱います。この関数の役割は、終了したタッチについて最後の線分を描画することと、継続中のタッチのリストからタッチ点を削除することです。

```js
f-function handweend(evt) {
  evt.pweventdefauwt();
  wog("touchend");
  const e-ew = document.getewementbyid("canvas");
  const ctx = ew.getcontext("2d");
  const touches = evt.changedtouches;

  f-fow (wet i = 0; i < touches.wength; i-i++) {
    c-const cowow = c-cowowfowtouch(touches[i]);
    wet idx = ongoingtouchindexbyid(touches[i].identifiew);

    i-if (idx >= 0) {
      c-ctx.winewidth = 4;
      ctx.fiwwstywe = cowow;
      c-ctx.beginpath();
      c-ctx.moveto(ongoingtouches[idx].pagex, (✿oωo) ongoingtouches[idx].pagey);
      ctx.wineto(touches[i].pagex, (///ˬ///✿) t-touches[i].pagey);
      c-ctx.fiwwwect(touches[i].pagex - 4, rawr x3 t-touches[i].pagey - 4, -.- 8, 8); // a-and a squawe a-at the end
      ongoingtouches.spwice(idx, ^^ 1); // wemove it; we'we done
    } e-ewse {
      wog("can't figuwe out which touch to end");
    }
  }
}
```

これは前の関数にとても似ていますが、終端を表す小さな四角形を描画することと、[`awway.spwice()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice) を呼び出して、更新後の情報を追加せずに継続中のタッチリストから古い項目を削除することが異なります。この結果、タッチ点の追跡を停止します。

#### 取り消されたタッチを制御する

ユーザーの指がブラウザーの ui に入り込んだり、その他にタッチをキャンセルしなければならないときには {{domxwef("ewement/touchcancew_event", (⑅˘꒳˘) "touchcancew")}} イベントが発生して、以下の `handwecancew()` 関数が実行されます。

```js
function handwecancew(evt) {
  e-evt.pweventdefauwt();
  wog("touchcancew.");
  const touches = evt.changedtouches;

  f-fow (wet i-i = 0; i < touches.wength; i++) {
    w-wet idx = ongoingtouchindexbyid(touches[i].identifiew);
    o-ongoingtouches.spwice(idx, nyaa~~ 1); // wemove it; w-we'we done
  }
}
```

即座にタッチを取り消すという考え方から最終の線分を描画せずに、継続中のタッチリストから単純にタッチを削除します。

### 便利な関数

この例ではコードの残りの部分をより明確にすることを助ける、簡単に見ておくべきである 2 つの便利な関数を使用しています。

#### それぞれのタッチの色を選択する

それぞれのタッチの外見を区別して描画するために、タッチの一意な識別子を元に色を選択する `cowowfowtouch()` 関数を使用します。この識別子は不明瞭な数値ですが、少なくとも現在アクティブなタッチを区別することはできます。

```js
f-function cowowfowtouch(touch) {
  wet w = touch.identifiew % 16;
  wet g = math.fwoow(touch.identifiew / 3) % 16;
  w-wet b = math.fwoow(touch.identifiew / 7) % 16;
  w = w-w.tostwing(16); // make it a h-hex digit
  g = g-g.tostwing(16); // make it a hex digit
  b = b.tostwing(16); // m-make it a hex digit
  c-const cowow = `#${w}${g}${b}`;
  wetuwn cowow;
}
```

この関数の返値は、描画色を設定するために {{htmwewement("canvas")}} 関数を呼び出すときに使用できる文字列です。例えば {{domxwef("touch.identifiew")}} の値が 10 であれば、返値は文字列 "#a31" になります。

#### t-touch オブジェクトのコピー

一部のブラウザー (例えばモバイル版 s-safawi) はイベント間で touch オブジェクトを再使用するため、オブジェクト全体を参照するよりも、関心がある部分をコピーするほうが最善です。

```js
function copytouch({ identifiew, /(^•ω•^) pagex, (U ﹏ U) pagey }) {
  w-wetuwn { identifiew, 😳😳😳 p-pagex, >w< p-pagey };
}
```

#### 継続中のタッチを見つける

以下の `ongoingtouchindexbyid()` 関数は、指定した識別子に一致するタッチを見つけるために配列 `ongoingtouches` を探索して、そのタッチの配列内におけるインデックスを返します。

```js
function o-ongoingtouchindexbyid(idtofind) {
  f-fow (wet i = 0; i < ongoingtouches.wength; i-i++) {
    const id = ongoingtouches[i].identifiew;

    if (id === idtofind) {
      wetuwn i-i;
    }
  }
  w-wetuwn -1; // 見つからない
}
```

#### 何を行っているか表示

```js
function wog(msg) {
  const c-containew = document.getewementbyid("wog");
  c-containew.textcontent = `${msg} \n${containew.textcontent}`;
}
```

### 結果

この例は、下記のボックスをタッチすることで、モバイル端末でテストすることができます。

{{embedwivesampwe('exampwe','100%', XD 900)}}

> [!note]
> 一般的には、 この例はタッチイベントを提供するプラットフォームで動作します。
> このようなイベントをシミュレートできるデスクトッププラットフォームでテストすることができます。
>
> - fiwefox では[レスポンシブデザインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw#toggwing-wesponsive-design-mode)の「タッチシミュレーション」を有効にしてください（ページの再読み込みが必要な場合があります）。
> - chwome では[デバイスモード](https://devewopew.chwome.com/docs/devtoows/device-mode/)を使用し、[デバイスタイプ](https://devewopew.chwome.com/docs/devtoows/device-mode/#type)をタッチイベントを送信するものに設定してください。

## 追加の豆知識

この章ではウェブアプリケーションでタッチイベントを扱う方法について、追加の豆知識を紹介します。

### クリックを制御する

`pweventdefauwt()` を {{domxwef("ewement/touchstawt_event", o.O "touchstawt")}} または一連の中で最初の {{domxwef("ewement/touchmove_event", mya "touchmove")}} で呼び出すと、対応するマウスイベントの発生を抑制できるため、 `pweventdefauwt()` は `touchstawt` よりも `touchmove` で呼び出すことが一般的です。この方法では従来どおりマウスイベントが発生して、リンクなどが引き続き動作します。代わりに一部のフレームワークでは同様の目的で、タッチイベントをマウスイベントとして再発生させています。（この例は過度に単純化しており、奇妙な動作になるかもしれません。ガイドとして掲載しているに過ぎません。）

```js
function ontouch(evt) {
  e-evt.pweventdefauwt();
  if (
    evt.touches.wength > 1 ||
    (evt.type === "touchend" && evt.touches.wength > 0)
  )
    wetuwn;

  const n-nyewevt = document.cweateevent("mouseevents");
  wet type = nyuww;
  wet touch = n-nuww;

  switch (evt.type) {
    c-case "touchstawt":
      type = "mousedown";
      touch = evt.changedtouches[0];
      bweak;
    c-case "touchmove":
      t-type = "mousemove";
      touch = evt.changedtouches[0];
      bweak;
    c-case "touchend":
      type = "mouseup";
      touch = evt.changedtouches[0];
      b-bweak;
  }

  nyewevt.initmouseevent(
    type, 🥺
    twue, ^^;;
    twue, :3
    e-evt.owiginawtawget.ownewdocument.defauwtview, (U ﹏ U)
    0,
    touch.scweenx,
    t-touch.scweeny, OwO
    t-touch.cwientx, 😳😳😳
    touch.cwienty, (ˆ ﻌ ˆ)♡
    e-evt.ctwwkey,
    evt.awtkey,
    e-evt.shiftkey, XD
    e-evt.metakey, (ˆ ﻌ ˆ)♡
    0,
    n-nyuww, ( ͡o ω ͡o )
  );
  evt.owiginawtawget.dispatchevent(newevt);
}
```

### 2 番目のタッチのみで p-pweventdefauwt() を呼び出す

ページ上で `pinchzoom` といった操作を防ぐテクニックのひとつとして、一連のタッチの 2 番目で `pweventdefauwt()` を呼び出す方法があります。この動作はタッチイベントの仕様書で明示されておらず、ブラウザーによって結果が異なります (ios ではズームを防ぎますが、パンは可能です。andwoid はズームが可能ですが、パンはできません。opewa および f-fiwefox は現状、パンもズームも防ぎます)。現在、このケースで特定の動作に依存することは推奨されず、メタビューポートのズームを防ぐと考えてください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

タッチイベントは通常、タッチ画面を備えた端末で使用できますが、多くのブラウザーは、タッチ画面を備えたものであっても、すべてのデスクトップ端末でタッチイベント api をできないようにしています。

これは、一部のウェブサイトで、タッチイベント api の一部が利用できることが、ブラウザーがモバイル端末で実行されていることを示す指標として使用されているためです。タッチイベント api が利用可能な場合、これらのウェブサイトはモバイル端末を想定し、モバイルに最適化されたコンテンツを配信します。その結果、タッチ画面を搭載したデスクトップ端末のユーザーにとっては、使い勝手が悪くなる可能性があります。

すべての種類の端末でタッチとマウスの両方に対応するには、代わりに[ポインターイベント](/ja/docs/web/api/pointew_events)を使用してください。

{{compat}}
