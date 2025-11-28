---
title: "Window: frames プロパティ"
short-title: frames
slug: Web/API/Window/frames
l10n:
  sourceCommit: fff34aeef99745d594b618950330cb8333e9bfc6
---

{{APIRef("DOM")}}

ウィンドウ自体を、現在のウィンドウの直接のサブフレームを列挙した配列風オブジェクトとして返します。

## 値

フレームオブジェクトのリスト。配列と同様に `length` プロパティを持ち、`[i]` 記法でアイテムにアクセスできます。

- `frames === window` は真と評価されます。
- `window.frames` 擬似配列の各要素は {{domxref("Window")}} オブジェクトであり、 {{HTMLElement("frame")}} または {{HTMLElement("iframe")}} の内容に対応します。 `frame` または `iframe` の DOM 要素ではありません（つまり `window.frames[0]` は `document.getElementsByTagName("iframe")[0].contentWindow` と同じことです）。
- 返値についての詳細は、 [mozilla.dev.platform のスレッド](https://groups.google.com/g/mozilla.dev.platform/c/VijG80aFnU8)を参照してください。

## 例

```js
const frames = window.frames; // または const frames = window.parent.frames;
for (let i = 0; i < frames.length; i++) {
  // frames[i] で各サブフレームに何らかの処理をします
  frames[i].document.body.style.background = "red";
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
