---
title: "HTMLVideoElement: requestPictureInPicture() メソッド"
short-title: requestPictureInPicture()
slug: Web/API/HTMLVideoElement/requestPictureInPicture
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("HTML DOM") }}

**{{domxref("HTMLVideoElement")}}** の **`requestPictureInPicture()`** メソッドは、動画をピクチャインピクチャモードで表示するための非同期のリクエストを発行します。

動画がピクチャインピクチャになることは保証されていません。そのモードに入る権限が与えられている場合、返された {{jsxref("Promise")}} は解決され、動画は {{domxref("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}} イベントを受け取り、これでピクチャインピクチャになったことを知らせます。

## 構文

```js-nolint
requestPictureInPicture()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} で、ユーザーがその浮動ウィンドウのサイズを変更するときに使用することができる {{domxref("PictureInPictureWindow")}} オブジェクトに解決します。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : この機能の使用が[権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)によってブロックされた場合。

## セキュリティ

[ユーザーによる一時的な有効化](/ja/docs/Web/Security/User_activation)が必要です。この機能が動作するには、ユーザーがページまたは UI 要素を操作する必要があります。

## 例

この例では、動画がピクチャインピクチャモードになるようにリクエストされ、浮動ウィンドウのリサイズを処理するためのイベントリスナーを設定します。

```js
function enterPictureInPicture() {
  videoElement.requestPictureInPicture().then((pictureInPictureWindow) => {
    pictureInPictureWindow.addEventListener(
      "resize",
      () => onPipWindowResize(),
      false,
    );
  });
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("video")}} 要素
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
