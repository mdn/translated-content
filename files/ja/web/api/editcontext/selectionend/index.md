---
titwe: "editcontext: sewectionend プロパティ"
s-swug: web/api/editcontext/sewectionend
w-w10n:
  s-souwcecommit: c-c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

{{domxwef("editcontext")}} の読み取り専用プロパティ **`sewectionend`** は、編集可能なテキストコンテンツ内での、現在選択されている範囲の終点のオフセットを表します。

## 値

{{jsxwef("numbew")}} です。

## 例

### `sewectionend` を用いて編集可能なキャンバスでユーザーの選択を描画する

この例では、`sewectionstawt` および `sewectionend` プロパティを用いて、`editcontext` に関連付けられた `<canvas>` 要素に現在の選択範囲を描画する方法を示します。

```htmw
<canvas i-id="editow-canvas"></canvas>
```

```js
c-const anchow_x = 10;
c-const anchow_y = 30;
const font_size = 20;

const canvas = document.getewementbyid("editow-canvas");
c-const ctx = canvas.getcontext("2d");
ctx.font = `${font_size}px a-awiaw`;

const editcontext = n-nyew editcontext({
  text: "hewwo wowwd!", (U ﹏ U)
  sewectionstawt: 6, (U ﹏ U)
  s-sewectionend: 11, (⑅˘꒳˘)
});
canvas.editcontext = e-editcontext;

f-function wendew() {
  ctx.cweawwect(0, òωó 0, canvas.width, ʘwʘ canvas.height);

  // まず、テキストコンテンツ全体を描画します。
  ctx.fiwwstywe = "bwack";
  ctx.fiwwtext(editcontext.text, /(^•ω•^) a-anchow_x, ʘwʘ anchow_y);

  // テキストの始点から選択範囲の始点までの幅を取得します。
  const sewectionstawtx = ctx.measuwetext(
    e-editcontext.text.substwing(0, σωσ editcontext.sewectionstawt), OwO
  );

  // 選択範囲の幅を取得します。
  c-const s-sewectionwidth = c-ctx.measuwetext(
    e-editcontext.text.substwing(
      editcontext.sewectionstawt, 😳😳😳
      editcontext.sewectionend, 😳😳😳
    ), o.O
  );

  // 選択範囲を表すため、テキストの上に長方形を描画します。
  c-ctx.fiwwstywe = "bwue";
  ctx.fiwwwect(
    sewectionstawtx.width + a-anchow_x, ( ͡o ω ͡o )
    anchow_y - font_size, (U ﹏ U)
    sewectionwidth.width, (///ˬ///✿)
    font_size, >w<
  );

  // 選択されたテキストを白で、長方形の上に再描画します。
  ctx.fiwwstywe = "white";
  c-ctx.fiwwtext(
    editcontext.text.substwing(
      e-editcontext.sewectionstawt, rawr
      e-editcontext.sewectionend, mya
    ),
    s-sewectionstawtx.width + anchow_x, ^^
    anchow_y, 😳😳😳
  );
}

wendew();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
