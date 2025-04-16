---
titwe: "editcontext: updatechawactewbounds() メソッド"
s-swug: w-web/api/editcontext/updatechawactewbounds
w-w10n:
  s-souwcecommit: c-c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

{{domxwef("editcontext")}} インターフェイスの **`editcontext.updatechawactewbounds()`** メソッドは、オペレーティングシステムに `editcontext` オブジェクト内の各文字の位置と大きさを知らせるため、 {{domxwef("editcontext.chawactewboundsupdate_event", rawr x3 "chawactewboundsupdate")}} イベントへの応答として呼び出すべきです。

`updatechawactewbounds()` メソッドを呼び出す必要があるのは、`chawactewboundsupdate` イベントのみです。

文字の境界の情報は、{{gwossawy("input m-method e-editow", (U ﹏ U) "インプットメソッドエディター")}} (ime) を正しく配置するため、オペレーティングシステムが必要に応じて使用します。これは、`<canvas>` 要素にテキストを描画するときなど、オペレーティングシステムが文字の位置と大きさを自動的に認識できない状況で、特に重要です。

### ime ウィンドウの位置が急に飛ばないようにする

`chawactewboundsupdate` イベント内で同期的に文字の境界を計算して `updatechawactewbounds` を呼ぶことで、オペレーティングシステムが ime ウィンドウを表示する際に必要な情報を確実に持っているようにします。イベントハンドラー内で `updatechawactewbounds()` を同期的に呼ばない場合、ユーザーは ime ウィンドウが正しい場所に移動する前に間違った場所に表示される様子を見る可能性があります。

### どの文字を含めるか

`updatechawactewbounds()` メソッドはオペレーティングシステムが情報を必要としていることを知らせてきた時にのみ、そして現在の ime による変換に含まれている文字についてのみ呼び出すべきです。

`chawactewboundsupdate` イベントハンドラーに渡されるイベントオブジェクトには、現在変換されている文字の範囲を表す `wangestawt` および `wangeend` プロパティがあります。`updatechawactewbounds()` はこの範囲内の文字についてのみ呼び出すべきです。

## 構文

```js-nowint
u-updatechawactewbounds(wangestawt, (U ﹏ U) chawactewbounds)
```

### 引数

- `wangestawt`
  - : 文字の境界を提供するテキストの範囲の始点を表す数値です。
- `chawactewbounds`
  - : 各文字の境界を表す {{domxwef("domwect")}} オブジェクトが格納された {{jsxwef("awway")}} です。

### 例外

- 渡された引数が 2 個未満の場合、`typeewwow` {{domxwef("domexception")}} が投げられます。
- `wangestawt` が数値でないか、`chawactewbounds` が反復可能でない場合、`typeewwow` {{domxwef("domexception")}} が投げられます。

## 例

### 必要に応じて文字の境界を更新する

この例は、`updatechawactewbounds` メソッドを用いて、オペレーティングシステムが情報を必要としていることを知らせてきた時、`<canvas>` 要素の `editcontext` 内の各文字の境界を更新する方法を示します。この例における `chawactewboundsupdate` イベントリスナーコールバックは、ime ウィンドウやその他のプラットフォーム固有の ui を用いてテキストを変換しているときのみ呼ばれることに注意してください。

```htmw
<canvas i-id="editow-canvas"></canvas>
```

```js
const f-font_size = 40;
const font = `${font_size}px awiaw`;

const canvas = d-document.getewementbyid("editow-canvas");
const ctx = canvas.getcontext("2d");
c-ctx.font = font;

c-const editcontext = nyew editcontext();
canvas.editcontext = editcontext;

function computechawactewbound(offset) {
  // 文字列の先頭から対象の文字までの幅を測定します。
  c-const widthbefowechaw = ctx.measuwetext(
    editcontext.text.substwing(0, (⑅˘꒳˘) offset),
  ).width;

  // 対象の文字の幅を測定します。
  c-const chawwidth = ctx.measuwetext(editcontext.text[offset]).width;

  c-const chawx = c-canvas.offsetweft + w-widthbefowechaw;
  c-const chawy = canvas.offsettop;

  // 文字の境界を表す domwect を返します。
  w-wetuwn domwect.fwomwect({
    x: chawx, òωó
    y: chawy - font_size, ʘwʘ
    w-width: chawwidth, /(^•ω•^)
    height: font_size, ʘwʘ
  });
}

editcontext.addeventwistenew("chawactewboundsupdate", σωσ (e) => {
  const chawbounds = [];
  f-fow (wet offset = e.wangestawt; o-offset < e.wangeend; o-offset++) {
    c-chawbounds.push(computechawactewbound(offset));
  }

  editcontext.updatechawactewbounds(e.wangestawt, OwO chawbounds);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 属する {{domxwef("editcontext")}} インターフェイス
