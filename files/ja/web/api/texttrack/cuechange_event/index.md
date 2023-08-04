---
title: "TextTrack: cuechange イベント"
slug: Web/API/TextTrack/cuechange_event
l10n:
  sourceCommit: f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{APIRef("WebVTT")}}

**`cuechange`** イベントは、 {{domxref("TextTrack")}} が現在表示しているキューが変更されたときに発生します。このイベントは、表示されているものがあれば、 `TextTrack` および {{domxref("HTMLTrackElement")}} の両方に発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('cuechange', (event) => { })

oncuechange = (event) => { }
```

## イベント型

一般的な {{DOMxRef("Event")}} で、追加のプロパティはありません。

## 例

`cuechange` イベントのリスナーを `TextTrack` に設定するには、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} メソッドを使用します。

```js
track.addEventListener('cuechange', () => {
  const cues = track.activeCues;  // 現在のキューの配列
  // …
});
```

あるいは、 `oncuechange` イベントハンドラープロパティを設定しても構いません。

```js
track.oncuechange = (event) => {
  let cues = track.activeCues; // 現在のキューの配列
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{glossary("WebVTT")}}
- {{domxref("HTMLTrackElement")}} における同一のイベント: {{domxref("HTMLTrackElement.cuechange_event", "cuechange")}}
