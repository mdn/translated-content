---
title: InterestEvent
slug: Web/API/InterestEvent
l10n:
  sourceCommit: 0563b7d83916b234fa637483211889e573df9440
---

{{APIRef("Popover API")}}{{SeeCompatTable}}{{non-standard_header}}

**`InterestEvent`** インターフェイスは、[関心インボーカー](/ja/docs/Web/API/Popover_API/Using_interest_invokers)で関心が示されたとき、または失われたときに発生するイベントを表します。

これは、{{domxref("HTMLElement.interest_event", "interest")}} および {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} イベントのイベントオブジェクトです。これらのイベントは、関心が示されたときと失われたときに、それぞれ対象要素で発生します。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("InterestEvent.InterestEvent", "InterestEvent()")}} {{experimental_inline}} {{non-standard_inline}}
  - : `InterestEvent` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{DOMxRef("Event")}} から継承したプロパティがあります。_

- {{DOMxRef("InterestEvent.source")}} {{ReadOnlyInline}} {{experimental_inline}} {{non-standard_inline}}
  - : 関心が示された、または失われたことでイベントを発生させた関心インボーカー要素を表す {{domxref("Element")}} オブジェクトのインスタンスです。

## 例

例については、[関心インボーカーの使用](/ja/docs/Web/API/Popover_API/Using_interest_invokers)ガイドと、{{domxref("HTMLElement.interest_event", "interest")}} イベントのリファレンスページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- [関心インボーカーの使用](/ja/docs/Web/API/Popover_API/Using_interest_invokers)
