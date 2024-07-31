---
title: HTMLMarqueeElement
slug: Web/API/HTMLMarqueeElement
l10n:
  sourceCommit: fcdc6853377f0dfef656f8036bfaa41804a8ebef
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

**`HTMLMarqueeElement`** インターフェイスは、{{HTMLElement("marquee")}} 要素を操作するメソッドを提供します。

プロパティとメソッドを {{DOMxRef("HTMLElement")}} インターフェイスから継承しています。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{DOMxRef("HTMLElement")}} から継承したプロパティがあります。_

- `HTMLMarqueeElement.behavior` {{Deprecated_Inline}}
  - : マーキー内のテキストのスクロール方法を設定します。指定できる値は `scroll`、`slide`、`alternate` です。値が指定されていない場合、既定値は `scroll` です。
- `HTMLMarqueeElement.bgColor` {{Deprecated_Inline}}
  - : 色名または 16 進数で背景色を設定します。
- `HTMLMarqueeElement.direction` {{Deprecated_Inline}}
  - : マーキー内のスクロールの方向を設定します。指定できる値は `left`、`right`、`up`、`down` です。値が指定されていない場合、既定値は `left` です。
- `HTMLMarqueeElement.height` {{Deprecated_Inline}}
  - : 高さをピクセルまたはパーセント値で設定します。
- `HTMLMarqueeElement.hspace` {{Deprecated_Inline}}
  - : 水平マージンを設定します。
- `HTMLMarqueeElement.loop` {{Deprecated_Inline}}
  - : マーキーのスクロール回数を設定します。値が指定されない場合、既定値は -1 で、これはマーキーがスクロールし続けることを意味します。
- `HTMLMarqueeElement.scrollAmount` {{Deprecated_Inline}}
  - : インターバルごとのスクロール量をピクセル単位で設定します。既定値は 6 です。
- `HTMLMarqueeElement.scrollDelay` {{Deprecated_Inline}}
  - : スクロール移動の間隔をミリ秒で設定します。既定値は 85 です。`trueSpeed` が `true` でない限り、60 より小さい値は無視され、代わりに 60 が使用されることに注意してください。
- `HTMLMarqueeElement.trueSpeed` {{Deprecated_Inline}}
  - : 既定では、`scrollDelay` の 60 より小さい値は無視されます。もし `trueSpeed` が `true` なら、これらの値は無視されません。
- `"HTMLMarqueeElement.vspace` {{Deprecated_Inline}}
  - : 垂直マージンを設定します。
- `HTMLMarqueeElement.width` {{Deprecated_Inline}}
  - : 幅をピクセル値またはパーセント値で設定します。

## インスタンスメソッド

_親である {{DOMxRef("HTMLElement")}} からメソッドを継承しています。_

- `HTMLMarqueeElement.start()` {{Deprecated_Inline}}
  - : マーキーのスクロールを始めます。
- `HTMLMarqueeElement.stop()` {{Deprecated_Inline}}
  - : マーキーのスクロールを停止します。

## イベント

- `bounce` {{Deprecated_Inline}}
  - : マーキーがスクロール位置の終わりに達したときに発行されます。behavior 属性が `alternate` に設定されている場合にのみ発行されます。
- `finish` {{Deprecated_Inline}}
  - : マーキーが loop 属性で設定したスクロール量を完了したときに発行されます。loop 属性が 0 より大きい数値に設定されている場合にのみ発行されます。
- `start` {{Deprecated_Inline}}
  - : マーキーのスクロールを始めたときに発行されます。

## 例

```html
<marquee>このテキストは右から左へスクロールします</marquee>

<marquee direction="up">このテキストは下から上へスクロールします</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  style="border:solid">
  <marquee behavior="alternate">このテキストは反射します</marquee>
</marquee>
```

{{EmbedLiveSample("Examples", 600, 450)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("marquee")}}
