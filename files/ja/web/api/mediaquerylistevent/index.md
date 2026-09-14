---
title: MediaQueryListEvent
slug: Web/API/MediaQueryListEvent
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}

`MediaQueryListEvent` オブジェクトは、 {{DOMxRef("MediaQueryList")}} オブジェクトに対して起こった変更に関する情報を格納します。インスタンスは {{DOMxRef("MediaQueryList.change_event", "change")}} イベントによって参照される関数のイベントオブジェクトとして利用できます。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("MediaQueryListEvent.MediaQueryListEvent()", "MediaQueryListEvent()")}}
  - : 新しい `MediaQueryListEvent` インスタンスを生成します。

## インスタンスプロパティ

_`MediaQueryListEvent` インターフェイスには、親インターフェイスである {{DOMxRef("Event")}} から継承したプロパティがあります。_

- {{DOMxRef("MediaQueryListEvent.matches")}} {{ReadOnlyInline}}
  - : 論理値です。 {{DOMxRef("document")}} が現在メディアクエリーのリストに一致していれば `true` を返し、そうでなければ `false` を返します。
- {{DOMxRef("MediaQueryListEvent.media")}} {{ReadOnlyInline}}
  - : 文字列で、シリアライズされたメディアクエリーを表します。

## インスタンスメソッド

_`MediaQueryListEvent` インターフェイスには、親インターフェイスである {{DOMxRef("Event")}} から継承したメソッドがあります。_

## 例

```js
const para = document.querySelector("p"); // This is the UI element where to display the text
const mql = window.matchMedia("(max-width: 600px)");

mql.addEventListener("change", (event) => {
  if (event.matches) {
    // The viewport is 600 pixels wide or less
    para.textContent = "This is a narrow screen — less than 600px wide.";
    document.body.style.backgroundColor = "red";
  } else {
    // The viewport is more than 600 pixels wide
    para.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "blue";
  }
});
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
