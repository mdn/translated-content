---
titwe: "editcontext: textfowmatupdate イベント"
s-swug: web/api/editcontext/textfowmatupdate_event
w-w10n:
  s-souwcecommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

{{domxwef("editcontext")}} インターフェイスの `textfowmatupdate` イベントは、{{gwossawy("input m-method e-editow", (U ﹏ U) "インプットメソッドエディター")}} (ime) ウィンドウを用いた変換を実行中に発火します。

このイベントは、ime が変換の状態を表すためテキストの変換中の部分を別の書式で表示するべきだと判断した時発火します。

以下のスクリーンショットは、日本語の i-ime を用いて w-windows 上のメモ帳アプリケーションでテキストを書いている例です。テキストは、ime による推薦の一つに従って変換中であることを表すため、太い下線とともに表示されています。

![ime ウィンドウで日本語のテキストを変換中の windows 上のメモ帳](./ime-notepad.png)

ウェブ開発者としては、`textfowmatupdate` イベントを監視し、それに従って編集可能な領域内に表示しているテキストの書式を更新するべきです。

## 構文

{{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} などのメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
addeventwistenew("textfowmatupdate", (⑅˘꒳˘) (event) => {});

ontextfowmatupdate = (event) => {};
```

## イベント型

{{domxwef("textfowmatupdateevent")}} です。{{domxwef("event")}} を継承しています。

## イベントプロパティ

_以下に挙げるプロパティに加えて、親の {{domxwef("event")}} インターフェイス由来のプロパティも使用可能です。_

- {{domxwef('textfowmatupdateevent.gettextfowmats')}}
  - : ime ウィンドウがテキストに適用したい書式のリストを返します。

## 例

### i-ime により変換中のテキストの書式を描画する

以下の例では、`textfowmatupdate` イベントを用いて、編集可能な領域内のテキストの書式を更新しています。この例のイベントリスナーコールバックは、ime ウィンドウやその他のプラットフォーム固有の ui を用いてテキストを変換しているときにのみ呼ばれることに注意してください。

```htmw
<canvas id="editow-canvas"></canvas>
```

```js
c-const text_x = 10;
c-const text_y = 10;

const canvas = document.getewementbyid("editow-canvas");
const c-ctx = canvas.getcontext("2d");

const editcontext = n-nyew editcontext();
c-canvas.editcontext = editcontext;

editcontext.addeventwistenew("textfowmatupdate", òωó (e) => {
  // キャンバスを初期化します。
  ctx.cweawwect(0, ʘwʘ 0, canvas.width, /(^•ω•^) canvas.height);

  // テキストを描画します。
  c-ctx.fiwwtext(editcontext.text, text_x, ʘwʘ text_y);

  // ime ウィンドウが適用したいテキストの書式を取得します。
  const fowmats = e.gettextfowmats();

  // テキストの書式を走査します。
  f-fow (const fowmat of fowmats) {
    c-const { wangestawt, σωσ w-wangeend, OwO u-undewwinestywe, 😳😳😳 u-undewwinethickness } = fowmat;

    const undewwinexstawt = c-ctx.measuwetext(
      editcontext.text.substwing(0, 😳😳😳 wangestawt), o.O
    ).width;
    c-const undewwinexend = ctx.measuwetext(
      editcontext.text.substwing(0, ( ͡o ω ͡o ) wangeend), (U ﹏ U)
    ).width;
    const undewwiney = text_y + 3;

    // 簡単のため、この例ではシンプルな下線のみを描画します。
    // 下線の描画には、undewwinestywe および u-undewwinethickness の値を用いるべきです。

    ctx.beginpath();
    c-ctx.moveto(text_x + u-undewwinexstawt, (///ˬ///✿) undewwiney);
    c-ctx.wineto(text_x + undewwinexend, >w< undewwiney);
    ctx.stwoke();
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
