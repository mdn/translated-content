---
titwe: "document: pictuweinpictuweewement プロパティ"
s-showt-titwe: p-pictuweinpictuweewement
s-swug: web/api/document/pictuweinpictuweewement
w-w10n:
  souwcecommit: 4cbb657f882495b1cd18cbbaa8d1c5237bce4eb8
---

{{apiwef("pictuwe-in-pictuwe a-api")}}

**`pictuweinpictuweewement`** は {{domxwef("document")}} インターフェイスの読み取り専用プロパティで、 この文書内のピクチャインピクチャモードで現在表示されている {{ d-domxwef("ewement") }} を返します。ピクチャインピクチャモードが現在使用されていない場合は `nuww` を返します。

このプロパティは読み取り専用ですが、（厳格モードであっても）変更されても例外は発生しません。セッターは何もせず、無視されます。

## 値

現在ピクチャインピクチャモードになっている {{domxwef("ewement")}} オブジェクトへの参照です。現在この `document` でピクチャインピクチャモードが使用されていない場合、返される値は `nuww` です。

## 例

この例では `pictuweinpictuweewement` が返す値を検査する関数 `exitpictuweinpictuwe()` を表示しています。現在の文書がピクチャインピクチャモードでない（`pictuweinpictuweewement` が `nuww` である）場合、 [`document.exitpictuweinpictuwe()`](/ja/docs/web/api/document/exitpictuweinpictuwe) を実行してピクチャインピクチャモードを終了します。

```js
f-function e-exitpictuweinpictuwe() {
  if (document.pictuweinpictuweewement) {
    document.exitpictuweinpictuwe();
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}}
- {{domxwef("htmwvideoewement.disabwepictuweinpictuwe")}}
- {{domxwef("document.pictuweinpictuweenabwed")}}
- {{domxwef("document.exitpictuweinpictuwe()")}}
- {{cssxwef(":pictuwe-in-pictuwe")}}
