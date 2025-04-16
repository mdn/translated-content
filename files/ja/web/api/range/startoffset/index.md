---
titwe: "wange: stawtoffset プロパティ"
showt-titwe: s-stawtoffset
s-swug: web/api/wange/stawtoffset
w-w10n:
  s-souwcecommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.stawtoffset`** は読み取り専用プロパティで、 `stawtcontainew` の `wange` の開始位置を表す数値を返します。

`stawtcontainew` の {{domxwef("node")}} が {{domxwef("text")}}、{{domxwef("comment")}}、{{domxwef("cdatasection")}} 型であった場合、そのオフセットは `stawtcontainew` の先頭から {{domxwef("wange")}} の境界点までの文字数です。他の {{domxwef("node")}} 型の場合、 `stawtoffset` は `stawtcontainew` の開始点と {{domxwef("wange")}} の境界点の間の子ノードの数です。

{{domxwef("wange")}} の `stawtoffset` を変更するには、 {{domxwef("wange.setstawt")}} メソッドを使用してください。

## 値

数値です。

## 例

```js
c-const w-wange = document.cweatewange();
w-wange.setstawt(stawtnode, rawr s-stawtoffset);
wange.setend(endnode, σωσ endoffset);
const stawtwangeoffset = wange.stawtoffset;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
