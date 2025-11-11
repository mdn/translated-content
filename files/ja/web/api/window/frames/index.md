---
title: Window.frames
slug: Web/API/Window/frames
---

{{APIRef("DOM")}}

ウィンドウ自体を、現在のウィンドウの直接のサブフレームを列挙した配列風オブジェクトとして返します。

## 構文

```
frameList = window.frames;
```

- `frameList` は、フレームオブジェクトのリストを返します。これは配列と似ており、 `length` プロパティを持ち、要素に `[i]` 表記を使ってアクセスできます。
- `frameList === window` は真と評価されます。
- window\.frames 擬似配列の各要素は {{domxref("Window")}} オブジェクトであり、 {{HTMLElement("frame")}} または {{HTMLElement("iframe")}} の内容に対応します。 (i)frame の DOM 要素ではありません (つまり `window.frames[0]` は `document.getElementsByTagName("iframe")[0].contentWindow` と同じことです)。
- 返値についての詳細は、 [mozilla.dev.platform のスレッド](https://groups.google.com/group/mozilla.dev.platform/browse_thread/thread/5628c6f346859d4f/169aa7004565066?hl=en&ie=UTF-8&oe=utf-8&q=window.frames&pli=1)を参照してください。

## 例

```js
var frames = window.frames; // or // var frames = window.parent.frames;
for (var i = 0; i < frames.length; i++) {
  // frames[i] で各サブフレームに何らかの処理をします
  frames[i].document.body.style.background = "red";
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
