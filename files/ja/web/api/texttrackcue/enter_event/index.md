---
title: "TextTrackCue: enter イベント"
slug: Web/API/TextTrackCue/enter_event
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVTT")}}

**`enter`** イベントは、キューがアクティブになったときに発行されます。字幕やキャプションの場合、メディア上に表示されるタイミングです。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('enter', (event) => { })

onenter = (event) => { }
```

## イベント型

一般的な {{DOMxRef("Event")}} で、追加のプロパティはありません。

## 例

以下の例では、`cue1` がアクティブキューになったときにコンソールに表示します。

```js
cue1.addEventListener('enter', (event) => {
  console.log('Cue 1 has displayed');
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
