---
title: "TextTrackCue: exit イベント"
slug: Web/API/TextTrackCue/exit_event
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVTT")}}

**`exit`** イベントは、キューがアクティブでなくなったときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('exit', (event) => { })

onexit = (event) => { }
```

## イベント型

一般的な {{DOMxRef("Event")}} で、追加のプロパティはありません。

## 例

以下の例では、 `cue1` がアクティブなキューとして表示されなくなったときに、コンソールに表示されます。

```js
cue1.addEventListener('enter', (event) => {
  console.log('Cue 1 has left the building.');
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
