---
title: "Document: pictureInPictureEnabled プロパティ"
short-title: pictureInPictureEnabled
slug: Web/API/Document/pictureInPictureEnabled
l10n:
  sourceCommit: 04ebe57066db2cff350018649bdb15b2a10c67ba
---

{{APIRef("Picture-in-Picture API")}}

**`pictureInPictureEnabled`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、ピクチャインピクチャモードが利用できるかどうかを示します。

ピクチャインピクチャモードは、[権限ポリシー](/ja/docs/Web/HTTP/Headers/Permissions-Policy/picture-in-picture)で指定されていない限り、既定では利用できます。

このプロパティは読み取り専用ですが、変更しても例外は発生しません（厳格モードであっても）。セッターは何もせず、無視されます。

## 値

論理値で、 `true` の場合は {{domxref("HTMLVideoElement.requestPictureInPicture()")}} を呼び出すことで、動画がピクチャインピクチャに入り、浮動動画ウィンドウに表示できます。ピクチャインピクチャモードが利用できない場合、この値は `false` です。

## 例

この例では、 {{htmlElement("video")}} 要素に対してピクチャインピクチャモードに入ろうとする前に `pictureInPictureEnabled` の値を調べ、機能が利用できない場合に呼び出さないようにしています。

```js
function requestPictureInPicture() {
  if (document.pictureInPictureEnabled) {
    videoElement.requestPictureInPicture();
  } else {
    console.log(
      "お使いのブラウザーでは、ピクチャインピクチャを使用することができません。",
    );
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
