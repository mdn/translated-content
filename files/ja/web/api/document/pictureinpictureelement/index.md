---
title: "Document: pictureInPictureElement プロパティ"
short-title: pictureInPictureElement
slug: Web/API/Document/pictureInPictureElement
l10n:
  sourceCommit: 04ebe57066db2cff350018649bdb15b2a10c67ba
---

{{ApiRef("Fullscreen API")}}

**`Document.pictureInPictureElement`** は読み取り専用プロパティで、 この文書内のピクチャインピクチャモードで現在表示されている {{ domxref("Element") }} を返します。ピクチャインピクチャモードが現在使用されていない場合は `null` を返します。

このプロパティは読み取り専用ですが、（厳格モードであっても）変更されても例外は発生しません。セッターは何もせず、無視されます。

## 値

現在ピクチャインピクチャモードになっている {{domxref("Element")}} オブジェクトへの参照です。現在この `document` でピクチャインピクチャモードが使用されていない場合、返される値は `null` です。

## 例

この例では `pictureInPictureElement` が返す値を検査する関数 `exitPictureInPicture()` を表示しています。現在の文書がピクチャインピクチャモードでない（`pictureInPictureElement` が `null` である）場合、 [`Document.exitPictureInPicture()`](/ja/docs/Web/API/Document/exitPictureInPicture) を実行してピクチャインピクチャモードを終了します。

```js
function exitPictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
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
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{CSSxRef(":picture-in-picture")}}
