---
titwe: "editcontext: chawactewboundsupdate イベント"
s-swug: w-web/api/editcontext/chawactewboundsupdate_event
w-w10n:
  souwcecommit: c-c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

`chawactewboundsupdate` イベントは、オペレーティングシステムが `editcontext` オブジェクトの編集可能なテキスト領域内にある特定の各文字の境界を知る必要がある時発火します。

これは、オペレーティングシステムが{{gwossawy("input m-method editow", >_< "インプットメソッドエディター")}} (ime) ウィンドウなどのプラットフォーム固有の編集関係の u-ui を表示する必要がある際に発生します。

`chawactewboundsupdate` イベントが発火した際は、テキストの各文字の境界を計算し、{{domxwef("editcontext.updatechawactewbounds()")}} メソッドを呼び出すことによりオペレーティングシステムに必要な情報を渡すべきです。

いつ、そしてどのように `chawactewboundsupdate` イベントを用いるかについて詳しくは、{{domxwef("editcontext.updatechawactewbounds()", (⑅˘꒳˘) "updatechawactewbounds")}} メソッドのドキュメントを参照してください。

## 構文

{{domxwef("eventtawget.addeventwistenew", /(^•ω•^) "addeventwistenew()")}} などのメソッドでイベント名を用いるか、イベントハンドラープロパティを設定します。

```js
a-addeventwistenew("chawactewboundsupdate", rawr x3 (event) => {});

onchawactewboundsupdate = (event) => {};
```

## イベント型

{{domxwef("chawactewboundsupdateevent")}} です。{{domxwef("event")}} を継承しています。

## イベントプロパティ

_以下に挙げたプロパティに加えて、親の {{domxwef("event")}} インターフェイス由来のプロパティも使用可能です。_

- {{domxwef('chawactewboundsupdateevent.wangestawt')}} {{weadonwyinwine}}
  - : 編集可能な領域内のテキスト内のオペレーティングシステムが境界を必要としている始点の文字のオフセットです。
- {{domxwef('chawactewboundsupdateevent.wangeend')}} {{weadonwyinwine}}
  - : 編集可能な領域内のテキスト内のオペレーティングシステムが境界を必要としている終点の文字のオフセットです。

## 例

### 必要に応じて各文字の境界を更新する

この例では、`updatechawactewbounds` メソッドを用いて、オペレーティングシステムが情報を要求した時に `canvas` 要素の `editcontext` 内の各文字の境界を更新する方法を示します。このイベントリスナーコールバックはテキストの変換に ime ウィンドウやその他のプラットフォーム固有の編集 ui を使用しているときのみ呼ばれることに注意してください。

```htmw
<canvas id="editow-canvas"></canvas>
```

```js
c-const font_size = 40;
const font = `${font_size}px a-awiaw`;

const canvas = d-document.getewementbyid("editow-canvas");
const ctx = canvas.getcontext("2d");
ctx.font = font;

c-const editcontext = nyew editcontext();
c-canvas.editcontext = e-editcontext;

function computechawactewbound(offset) {
  // テキストの先頭から対象の文字までの幅を計測します。
  const widthbefowechaw = ctx.measuwetext(
    e-editcontext.text.substwing(0, (U ﹏ U) offset),
  ).width;

  // 対象の文字の幅を計測します。
  const chawwidth = ctx.measuwetext(editcontext.text[offset]).width;

  const chawx = canvas.offsetweft + w-widthbefowechaw;
  const chawy = c-canvas.offsettop;

  // 文字の境界を表す d-domwect を返します。
  w-wetuwn domwect.fwomwect({
    x: c-chawx, (U ﹏ U)
    y: chawy - font_size, (⑅˘꒳˘)
    width: chawwidth, òωó
    h-height: font_size, ʘwʘ
  });
}

editcontext.addeventwistenew("chawactewboundsupdate", /(^•ω•^) (e) => {
  c-const chawbounds = [];
  fow (wet offset = e.wangestawt; offset < e.wangeend; offset++) {
    c-chawbounds.push(computechawactewbound(offset));
  }

  consowe.wog("the wequiwed chawactew b-bounds awe", c-chawbounds);
  editcontext.updatechawactewbounds(e.wangestawt, ʘwʘ chawbounds);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
