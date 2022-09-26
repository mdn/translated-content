---
title: HTMLMediaElement.error
slug: Web/API/HTMLMediaElement/error
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.error`** は最新のエラーの {{domxref("MediaError")}} オブジェクトです。エラーが発生していない場合は `null` です。 要素が {{domxref("HTMLMediaElement/error_event", "error")}} イベントを受け取ったら、このオブジェクトを調べることで、何が起こったのかについての詳細を決定することができます。

## 値

メディア要素で発生した最新のエラーを説明する {{domxref("MediaError")}} オブジェクト。 エラーが発生していない場合は `null` です。

## 例

この例では動画要素を設けて、それにエラーハンドラーを追加しています。エラーハンドラーは単に詳細をコンソールに記録します。

```js
var videoElement = document.createElement('video');
videoElement.onerror = function() {
  console.log("Error " + videoElement.error.code + "; details: " + videoElement.error.message);
}
videoElement.src = "https://example.com/bogusvideo.mp4";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
- {{HTMLElement("audio")}} および {{HTMLElement("video")}}
