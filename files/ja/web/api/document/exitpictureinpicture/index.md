---
title: "Document: exitPictureInPicture() メソッド"
short-title: exitPictureInPicture()
slug: Web/API/Document/exitPictureInPicture
l10n:
  sourceCommit: 04ebe57066db2cff350018649bdb15b2a10c67ba
---

{{ApiRef("Picture-in-Picture API")}}

{{domxref("Document")}} の **`exitPictureInPicture()`** メソッドは、この文書に含まれ、現在浮動している動画をピクチャインピクチャモードから外し、画面の前回状態に戻すようリクエストします。これは通常、 {{domxref("HTMLVideoElement.requestPictureInPicture()")}} を前回呼び出したときの効果を逆転させます。

## 構文

```js-nolint
exitPictureInPicture()
```

### 引数

なし。

### 返値

プロミス ({{jsxref("Promise")}}) で、{{Glossary("user agent", "ユーザーエージェント")}}がピクチャインピクチャモードを終了した時点で解決されます。全画面モードを終了しようとしてエラーが発生した場合、プロミスの `catch()` ハンドラーが呼び出されます。

## 例

この例では、現在の文書内でマウスボタンがクリックされるたびに、ピクチャインピクチャモードを終了させます。

```js
document.onclick = (event) => {
  if (document.pictureInPictureElement) {
    document
      .exitPictureInPicture()
      .then(() => console.log("Document Exited from Picture-in-Picture mode"))
      .catch((err) => console.error(err));
  } else {
    video.requestPictureInPicture();
  }
};
```

ページ上のどの動画が現在ピクチャインピクチャモードで再生されているかを追跡する予定であれば、 {{DOMxRef("HTMLVideoElement")}} 要素上の `enterpictureinpicture` と `exitpictureinpicture` イベントを待ち受けなければならないことに注意してください。あるいは、 {{DOMxRef("Document.pictureInPictureElement")}} が現在の {{DOMxRef("HTMLVideoElement")}} 要素を参照しているかどうかを調べることもできます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
- [ピクチャインピクチャのイベント](/ja/docs/Web/API/Picture-in-Picture_API#イベント)
