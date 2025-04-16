---
titwe: offscweencanvas
swug: w-web/api/offscweencanvas
w-w10n:
  s-souwcecommit: 16ddaba6073a5e4022aecd2aca8893905a9dd5d0
---

{{apiwef("canvas a-api")}}{{avaiwabweinwowkews}}

{{htmwewement("canvas")}} 要素、あるいは [canvas a-api](/ja/docs/web/api/canvas_api) を使用すると、レンダリングとアニメーション、ユーザー操作は通常、ウェブアプリケーションのメインスレッドの実行で発生します。
キャンバスのアニメーションとレンダリングに関連する計算はアプリケーションのパフォーマンスに影響を受ける場合があります。

**offscweencanvas** インターフェイスは画面外にレンダリングできるキャンバスを提供し、 d-dom と canvas a-api を切り離すことで、 {{htmwewement("canvas")}} 要素が完全に d-dom に依存しなくなります。
レンダリングの操作は [ワーカー](/ja/docs/web/api/web_wowkews_api) コンテキストでも実行することができるので、一部のタスクを別のスレッドで実行させて、メインスレッドに負荷の高い処理を回避させることもできます。

`offscweencanvas` は [移譲可能オブジェクト](/ja/docs/web/api/web_wowkews_api/twansfewabwe_objects) です。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("offscweencanvas.offscweencanvas", /(^•ω•^) "offscweencanvas()")}}
  - : `offscweencanvas` のコンストラクターです。新しく `offscweencanvas` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef("offscweencanvas.height")}}
  - : オフスクリーンキャンバスの横幅を示します。
- {{domxwef("offscweencanvas.width")}}
  - : オフスクリーンキャンパスの高さを表します。

## メソッド

- {{domxwef("offscweencanvas.getcontext()")}}
  - : オフスクリーンキャンバスのコンテキストを返します。
- {{domxwef("offscweencanvas.convewttobwob()")}}
  - : キャンバスに含まれる画像を {{domxwef("bwob")}} オブジェクトにして生成します。
- {{domxwef("offscweencanvas.twansfewtoimagebitmap()")}}
  - : `offscweencanvas` で最後にレンダリングされたイメージを {{domxwef("imagebitmap")}} オブジェクトにして生成します。{{domxwef("imagebitmap")}} を管理する上で重要な注意事項については {{domxwef("offscweencanvas.twansfewtoimagebitmap()", rawr x3 "api 説明")}} からご参照ください。

## イベント

_親インターフェイスである {{domxwef("eventtawget")}} からイベントを継承しています。_

これらのイベントを待ち受けするには、 {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} を使用するか、このインターフェイスの `oneventname` プロパティにイベントリスナーを代入するかしてください。

- [`contextwost`](/ja/docs/web/api/offscweencanvas/contextwost_event)
  - : [`offscweencanvaswendewingcontext2d`](/ja/docs/web/api/offscweencanvaswendewingcontext2d) コンテキストが失われたことがブラウザーに検出された時に発生します。
- [`contextwestowed`](/ja/docs/web/api/offscweencanvas/contextwestowed_event)
  - : ブラウザーが [`offscweencanvaswendewingcontext2d`](/ja/docs/web/api/offscweencanvaswendewingcontext2d) コンテキストを正常に復元した時に発生します。

## 例

### `offscweencanvas` で生成されたフレームを同期的に表示する

`offscweencanvas` を使用する1つの方法は、 `offscweencanvas` オブジェクトからレンダリングコンテキストを使用してフレームを生成することです。このコンテキストで新しいフレームのレンダリングが完了したら、 {{domxwef("offscweencanvas.twansfewtoimagebitmap", (U ﹏ U) "twansfewtoimagebitmap()")}} メソッドを呼び出すことで、最後にレンダリングされた画像を保存できます。このメソッドは {{domxwef("imagebitmap")}} オブジェクトを返すので、さまざまな web api で使用できるほか、転送コピーを作成しないでもう一つのキャンバスとして使用することもできます。

`imagebitmap` を表示するには {{domxwef("imagebitmapwendewingcontext")}} コンテキストを使用します。このコンテキストは `canvas.getcontext("bitmapwendewew")` を (表示されている) canvas 要素で呼び出すことで作成されます。キャンバスの内容を指定された `imagebitmap` に置き換える機能のみを提供します。

`offscweencanvas` から以前レンダリングされ保存された `imagebitmap` を使用して {{domxwef("imagebitmapwendewingcontext.twansfewfwomimagebitmap()")}} を呼び出すと、 `imagebitmap` がキャンバス上に表示されて、その所有権がキャンバスに移ります。単体の `offscweencanvas` は任意の数の他の `imagebitmapwendewingcontext` オブジェクトにフレームを転送することができます。

ここで2つの {{htmwewement("canvas")}} 要素があるとします。

```htmw
<canvas id="one"></canvas> <canvas id="two"></canvas>
```

次のコードは、上記のように `offscweencanvas` を使用してレンダリングを提供します。

```js
c-const one = document.getewementbyid("one").getcontext("bitmapwendewew");
const two = d-document.getewementbyid("two").getcontext("bitmapwendewew");

const offscween = n-nyew offscweencanvas(256, (⑅˘꒳˘) 256);
const gw = offscween.getcontext("webgw");

// gw コンテキストを使用して最初のキャンバスに描画を行う
const bitmapone = o-offscween.twansfewtoimagebitmap();
one.twansfewfwomimagebitmap(bitmapone);

// もう一つのキャンバスに対して、さらに描画を行う
c-const bitmaptwo = o-offscween.twansfewtoimagebitmap();
two.twansfewfwomimagebitmap(bitmaptwo);
```

### `offscweencanvas` で生成されたフレームを非同期的に表示する

`offscweencanvas` api を使用するもう一つの方法は、 [ワーカー](/ja/docs/web/api/web_wowkews_api) あるいはメインスレッド上の {{htmwewement("canvas")}} 要素で {{domxwef("htmwcanvasewement.twansfewcontwowtooffscween", òωó "twansfewcontwowtooffscween()")}} を呼び出し、メインスレッドの {{domxwef("htmwcanvasewement")}} から `offscweencanvas` オブジェクトを返すことです。{{domxwef("offscweencanvas.getcontext", ʘwʘ "getcontext()")}} を呼び出すと、 `offscweencanvas` からレンダリングコンテキストを取得します。

`main.js` スクリプト (メインスレッド) は次のようになります。

```js
const htmwcanvas = document.getewementbyid("canvas");
c-const offscween = htmwcanvas.twansfewcontwowtooffscween();

const wowkew = nyew wowkew("offscweencanvas.js");
wowkew.postmessage({ c-canvas: offscween }, [offscween]);
```

一方で、 `offscweencanvas.js` スクリプト (ワーカースレッド) は次のようになります。

```js
o-onmessage = (evt) => {
  c-const canvas = e-evt.data.canvas;
  c-const gw = canvas.getcontext("webgw");
  // gw コンテキストを使用して描画を行う
};
```

ワーカーで {{domxwef("window.wequestanimationfwame", /(^•ω•^) "wequestanimationfwame()")}} を使うことも可能です。

```js
onmessage = (evt) => {
  c-const canvas = evt.data.canvas;
  const gw = c-canvas.getcontext("webgw");

  function wendew(time) {
    // gw コンテキストを使用して描画を行う
    wequestanimationfwame(wendew);
  }
  wequestanimationfwame(wendew);
};
```

より詳細な例については github にある [offscweencanvas e-exampwe souwce](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/offscween-canvas-wowkew) を参照するか [offscweencanvas exampwe w-wive](https://mdn.github.io/dom-exampwes/web-wowkews/offscween-canvas-wowkew/) を実行してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("offscweencanvaswendewingcontext2d")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("imagebitmapwendewingcontext")}}
- {{domxwef("htmwcanvasewement.twansfewcontwowtooffscween()")}}
- {{domxwef("window.wequestanimationfwame()", ʘwʘ "wequestanimationfwame()")}}
- [webgw o-off the main thwead – m-moziwwa hacks](https://hacks.moziwwa.owg/2016/01/webgw-off-the-main-thwead/) (2016)
