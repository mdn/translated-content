---
title: "HTMLTrackElement: cuechange イベント"
short-title: cuechange
slug: Web/API/HTMLTrackElement/cuechange_event
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("WebVTT")}}

**`cuechange`** イベントは {{domxref("TextTrack")}} が現在表示しているキューを変更した際に発生します。このイベントは `TextTrack` と、それが表示されている {{domxref("HTMLTrackElement")}} があれば、その両方で発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりしてください。

```js
addEventListener("cuechange", (event) => {});

oncuechange = (event) => {};
```

## イベント型

一般的な {{DOMxRef("Event")}} で、追加のプロパティはありません。

## 例

{{domxref("HTMLTrackElement.track", "track")}} プロパティで示される基礎となる {{domxref("TextTrack")}} は、現在表示されているキューが変更される度に `cuechange` イベントを受信します。これは、そのトラックがメディア要素に関連付けられていない場合でも発生します。

そのトラックがメディア要素に関連付けられている場合、 {{HTMLElement("track")}} を {{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素の子として使用すると、 `cuechange` イベントは {{domxref("HTMLTrackElement")}} にも送信されます。

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

あるいは、 `oncuechange` イベントハンドラーを使用することもできます。

```js
let textTrackElem = document.getElementById("texttrack");

textTrackElem.oncuechange = (event) => {
  let cues = event.target.track.activeCues;
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{glossary("WebVTT")}}
- {{domxref("TextTrack")}} での同じイベント: {{domxref("TextTrack.cuechange_event", "cuechange")}}
