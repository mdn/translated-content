---
title: RadioNodeList
slug: Web/API/RadioNodeList
l10n:
  sourceCommit: 2937558d5ed1e03d7f60b2de71dd9c17f490166e
---

{{APIRef("HTML DOM")}}

**`RadioNodeList`** インターフェイスは、{{HTMLElement("form")}} または {{HTMLElement("fieldset")}} 要素内にあるラジオボタン要素の集合を表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_`RadioNodeList` インターフェイスには {{domxref("NodeList")}} から継承したプロパティがあります。_

- {{domxref("RadioNodeList.value")}}
  - : 基盤となる要素の集合にラジオボタンが含まれている場合、`value` プロパティはチェック状態のラジオボタンを表します。`value` プロパティを取得すると、現在 `checked` 状態になっているラジオボタンの `value` が文字列として返されます。集合内にラジオボタンが含まれていなかったり、集合内のラジオボタンに `checked` 状態のものがなかったりした場合は、空文字列が返されます。`value` プロパティを設定すると、`value` プロパティが新しい値と等しい最初のラジオボタン入力要素が `checked` 状態に設定されます。

## インスタンスメソッド

_`RadioNodeList` インターフェイスには {{domxref("NodeList")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("form")}}、{{HTMLElement("fieldset")}}、{{HTMLElement("input")}} 要素
