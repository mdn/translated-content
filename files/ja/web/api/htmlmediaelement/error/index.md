---
title: "HTMLMediaElement: error プロパティ"
short-title: error
slug: Web/API/HTMLMediaElement/error
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.error`** は最新のエラーの {{domxref("MediaError")}} オブジェクトです。エラーが発生していない場合は `null` になります。要素が {{domxref("HTMLMediaElement/error_event", "error")}} イベントを受け取ったら、このオブジェクトを調べることで、何が起こったのかについての詳細を決定することができます。

## 値

メディア要素で発生した最新のエラーを説明する {{domxref("MediaError")}} オブジェクト。 エラーが発生していない場合は `null` です。

## 例

この例では video 要素を設けて、それにエラーハンドラーを追加しています。エラーハンドラーは単に詳細をコンソールに記録します。

```js
const videoElement = document.createElement("video");
videoElement.onerror = () => {
  console.error(
    `Error ${videoElement.error.code}; details: ${videoElement.error.message}`,
  );
};
videoElement.src = "https://example.com/bogusvideo.mp4";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.error` プロパティを定義しているインターフェイス
- {{HTMLElement("audio")}} および {{HTMLElement("video")}}
