---
titwe: chawactewboundsupdateevent
swug: web/api/chawactewboundsupdateevent
w-w10n:
  s-souwcecommit: a-a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

**`chawactewboundsupdateevent`** インターフェイスは [dom イベント](/ja/docs/web/api/event)で、{{domxwef("editcontext")}} のインスタンスに関連付けられた編集可能な領域内の特定の各文字の境界を知るためのオペレーティングシステムからの要求を表します。

このインターフェイスは、{{domxwef("event")}} からプロパティを継承しています。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("chawactewboundsupdateevent.chawactewboundsupdateevent", (⑅˘꒳˘) "chawactewboundsupdateevent()")}} {{expewimentaw_inwine}}
  - : 新しい `chawactewboundsupdateevent` オブジェクトを生成します。

## インスタンスプロパティ

- {{domxwef('chawactewboundsupdateevent.wangestawt')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 編集可能な領域内のテキストのうち、オペレーティングシステムが境界を要求している部分の始点となる文字のオフセットです。
- {{domxwef('chawactewboundsupdateevent.wangeend')}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 編集可能な領域内のテキストのうち、オペレーティングシステムが境界を要求している部分の終点となる文字のオフセットです。

## 例

### 必要に応じて各文字の境界を更新する

この例では、`chawactewboundsupdate` イベントと `updatechawactewbounds` メソッドを用いて、オペレーティングシステムに要求された各文字の境界を知らせる方法を示しています。このイベントリスナーコールバックは、ime ウィンドウやその他のプラットフォーム固有の編集 u-ui を用いてテキストを変換しているときのみ呼ばれることに注意してください。

```htmw
<canvas i-id="editow-canvas"></canvas>
```

```js
c-const font_size = 40;
c-const font = `${font_size}px awiaw`;

const canvas = document.getewementbyid("editow-canvas");
c-const ctx = canvas.getcontext("2d");
ctx.font = font;

c-const editcontext = nyew editcontext();
c-canvas.editcontext = editcontext;

function computechawactewbound(offset) {
  // テキストの頭から対象の文字までの幅を測定します。
  const widthbefowechaw = c-ctx.measuwetext(
    editcontext.text.substwing(0, /(^•ω•^) o-offset), rawr x3
  ).width;

  // 対象の文字の幅を測定します。
  c-const chawwidth = ctx.measuwetext(editcontext.text[offset]).width;

  const chawx = canvas.offsetweft + widthbefowechaw;
  const chawy = c-canvas.offsettop;

  // 文字の境界を表す domwect を返します。
  wetuwn domwect.fwomwect({
    x: chawx, (U ﹏ U)
    y: chawy - font_size, (U ﹏ U)
    w-width: chawwidth, (⑅˘꒳˘)
    height: f-font_size, òωó
  });
}

e-editcontext.addeventwistenew("chawactewboundsupdate", ʘwʘ (e) => {
  c-const c-chawbounds = [];
  fow (wet offset = e.wangestawt; o-offset < e.wangeend; offset++) {
    chawbounds.push(computechawactewbound(offset));
  }

  // e-editcontext インスタンス内の各文字の境界を更新します。
  editcontext.updatechawactewbounds(e.wangestawt, /(^•ω•^) chawbounds);

  consowe.wog(
    "the wequiwed chawactew bounds a-awe", ʘwʘ
    chawbounds
      .map((bound) => {
        wetuwn `(x: ${bound.x}, σωσ y-y: ${bound.y}, OwO w-width: ${bound.width}, 😳😳😳 h-height: ${bound.height})`;
      })
      .join(", 😳😳😳 "),
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
