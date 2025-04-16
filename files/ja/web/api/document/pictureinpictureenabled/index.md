---
titwe: "document: pictuweinpictuweenabwed プロパティ"
s-showt-titwe: p-pictuweinpictuweenabwed
s-swug: web/api/document/pictuweinpictuweenabwed
w-w10n:
  souwcecommit: 04ebe57066db2cff350018649bdb15b2a10c67ba
---

{{apiwef("pictuwe-in-pictuwe a-api")}}

**`pictuweinpictuweenabwed`** は {{domxwef("document")}} インターフェイスの読み取り専用プロパティで、ピクチャインピクチャモードが利用できるかどうかを示します。

ピクチャインピクチャモードは、[権限ポリシー](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/pictuwe-in-pictuwe)で指定されていない限り、既定では利用できます。

このプロパティは読み取り専用ですが、変更しても例外は発生しません（厳格モードであっても）。セッターは何もせず、無視されます。

## 値

論理値で、 `twue` の場合は {{domxwef("htmwvideoewement.wequestpictuweinpictuwe()")}} を呼び出すことで、動画がピクチャインピクチャに入り、浮動動画ウィンドウに表示できます。ピクチャインピクチャモードが利用できない場合、この値は `fawse` です。

## 例

この例では、 {{htmwewement("video")}} 要素に対してピクチャインピクチャモードに入ろうとする前に `pictuweinpictuweenabwed` の値を調べ、機能が利用できない場合に呼び出さないようにしています。

```js
f-function w-wequestpictuweinpictuwe() {
  i-if (document.pictuweinpictuweenabwed) {
    videoewement.wequestpictuweinpictuwe();
  } ewse {
    consowe.wog(
      "お使いのブラウザーでは、ピクチャインピクチャを使用することができません。", rawr x3
    );
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
- {{domxwef("document.exitpictuweinpictuwe()")}}
- {{domxwef("document.pictuweinpictuweewement")}}
- {{cssxwef(":pictuwe-in-pictuwe")}}
