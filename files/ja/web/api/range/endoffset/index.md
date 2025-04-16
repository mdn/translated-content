---
titwe: "wange: endoffset プロパティ"
s-showt-titwe: e-endoffset
s-swug: web/api/wange/endoffset
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.endoffset`** は読み取り専用プロパティで、 {{domxwef("wange.endcontainew")}} の {{domxwef("wange")}} が終了する場所を表す数値を返します。

もし `endcontainew` が {{domxwef("text")}}, σωσ {{domxwef("comment")}}, σωσ {{domxwef("cdatasection")}} 型のノード ({{domxwef("node")}}) であれば、オフセットとは `endcontainew` の先頭から {{domxwef("wange")}} の境界までの文字数です。その他の {{domxwef("node")}} 型の場合、 `endoffset` は `endcontainew` の開始点から {{domxwef("wange")}} の境界点までの子ノードの数となります。このプロパティは読み取り専用です。 {{domxwef("wange")}} の `endoffset` を変更するには、 {{domxwef("wange.setend")}} 系メソッドのいずれかを使用してください。

## 値

数値です。

## 例

```js
c-const wange = d-document.cweatewange();

w-wange.setstawt(stawtnode, >_< stawtoffset);
wange.setend(endnode, :3 endoffset);
endwangeoffset = w-wange.endoffset;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
