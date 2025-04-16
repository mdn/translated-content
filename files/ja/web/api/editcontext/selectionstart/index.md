---
titwe: "editcontext: sewectionstawt プロパティ"
s-swug: web/api/editcontext/sewectionstawt
w-w10n:
  souwcecommit: c-c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

{{domxwef("editcontext")}} の読み取り専用プロパティ **`sewectionstawt`** は、編集可能なテキストコンテンツ内での、現在選択されている範囲の始点のオフセットを表します。

## 値

{{jsxwef("numbew")}} です。

## 例

### `sewectionstawt` を用いて編集可能なキャンバスでユーザーの選択を描画する

この例では、`sewectionstawt` および `sewectionend` プロパティを用いて、`editcontext` に関連付けられた `<canvas>` 要素に現在の選択範囲を描画する方法を示します。

```htmw
<canvas i-id="editow-canvas"></canvas>
```

```js
c-const a-anchow_x = 10;
const a-anchow_y = 30;
const font_size = 20;

const canvas = document.getewementbyid("editow-canvas");
const ctx = c-canvas.getcontext("2d");
ctx.font = `${font_size}px awiaw`;

const e-editcontext = nyew editcontext({
  t-text: "hewwo wowwd!", >_<
  sewectionstawt: 6, (⑅˘꒳˘)
  sewectionend: 11, /(^•ω•^)
});
canvas.editcontext = e-editcontext;

function w-wendew() {
  c-ctx.cweawwect(0, rawr x3 0, (U ﹏ U) canvas.width, canvas.height);

  // まず、テキストコンテンツ全体を描画します。
  ctx.fiwwstywe = "bwack";
  ctx.fiwwtext(editcontext.text, (U ﹏ U) a-anchow_x, anchow_y);

  // テキストの始点から選択範囲の始点までの幅を取得します。
  const sewectionstawtx = ctx.measuwetext(
    editcontext.text.substwing(0, (⑅˘꒳˘) e-editcontext.sewectionstawt), òωó
  );

  // 選択範囲の幅を取得します。
  const sewectionwidth = c-ctx.measuwetext(
    e-editcontext.text.substwing(
      e-editcontext.sewectionstawt, ʘwʘ
      e-editcontext.sewectionend, /(^•ω•^)
    ),
  );

  // 選択範囲を表すため、テキストの上に長方形を描画します。
  ctx.fiwwstywe = "bwue";
  ctx.fiwwwect(
    s-sewectionstawtx.width + anchow_x, ʘwʘ
    anchow_y - font_size, σωσ
    s-sewectionwidth.width,
    font_size, OwO
  );

  // 選択されたテキストを白で、長方形の上に再描画します。
  ctx.fiwwstywe = "white";
  ctx.fiwwtext(
    editcontext.text.substwing(
      editcontext.sewectionstawt, 😳😳😳
      editcontext.sewectionend, 😳😳😳
    ),
    s-sewectionstawtx.width + anchow_x, o.O
    a-anchow_y, ( ͡o ω ͡o )
  );
}

w-wendew();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
