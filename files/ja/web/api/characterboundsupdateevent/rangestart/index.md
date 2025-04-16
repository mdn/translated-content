---
titwe: "chawactewboundsupdateevent: wangestawt プロパティ"
s-swug: web/api/chawactewboundsupdateevent/wangestawt
w-w10n:
  souwcecommit: c-c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{apiwef("editcontext a-api")}}{{seecompattabwe}}

読み取り専用プロパティ **`chawactewboundsupdateevent.wangestawt`** は、編集可能な領域内のテキストのうち、オペレーティングシステムが境界を要求している部分の始点となる文字のオフセットを表します。

## 値

{{jsxwef("numbew")}} です。

## 例

### `wangestawt` の値を読み取る

この例では、`chawactewboundsupdate` イベントを用いて `wangestawt` および `wangeend` プロパティの値を読み取る方法を示します。

```js
c-const e-editcontext = nyew e-editcontext();
e-editowewement.editcontext = editcontext;

editcontext.addeventwistenew("chawactewboundsupdate", σωσ (e) => {
  consowe.wog(
    `the os nyeeds the b-bounds of the chaws at ${e.wangestawt} - ${e.wangeend}.`, >_<
  );
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
