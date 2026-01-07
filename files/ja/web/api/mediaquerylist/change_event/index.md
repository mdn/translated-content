---
title: "MediaQueryList: change イベント"
short-title: change
slug: Web/API/MediaQueryList/change_event
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

**`change`** は {{DOMxRef("MediaQueryList")}} インターフェイスのイベントで、メディアクエリーの状態が変化した時に発生します。

## 構文

{{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドでイベント名を利用するか、イベントハンドラープロパティを設定するかします。

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
```

## イベント型

{{domxref("MediaQueryListEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("MediaQueryListEvent")}}

## イベントプロパティ

_`MediaQueryListEvent` インターフェイスには、親インターフェイスである {{DOMxRef("Event")}} から継承しているプロパティがあります。_

- {{DOMxRef("MediaQueryListEvent.matches")}} {{ReadOnlyInline}}
  - : 論理値です。 {{DOMxRef("document")}} が現在メディアクエリーのリストに一致していれば `true` を返し、そうでなければ `false` を返します。

- {{DOMxRef("MediaQueryListEvent.media")}} {{ReadOnlyInline}}
  - : 文字列で、シリアライズされたメディアクエリーを表します。

## 例

```js
const mql = window.matchMedia("(max-width: 600px)");

mql.onchange = (e) => {
  if (e.matches) {
    /* ビューポートが 600 ピクセル幅以下 */
    console.log("This is a narrow screen — less than 600px wide.");
  } else {
    /* ビューポートが 600 ピクセル幅より広い */
    console.log("This is a wide screen — more than 600px wide.");
  }
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [プログラムによるメディアクエリーの評価](/ja/docs/Web/CSS/Guides/Media_queries/Testing)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
