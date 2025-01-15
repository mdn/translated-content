---
title: HTMLDetailsElement
slug: Web/API/HTMLDetailsElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}

**`HTMLDetailsElement`** インターフェイスは、（継承によって利用できる通常の {{domxref("HTMLElement")}} インターフェイスのもの以外の）{{HTMLElement("details")}} を操作するための特殊なプロパティを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} からプロパティを継承しています。_

- {{domxref("HTMLDetailsElement.open")}}
  - : HTML の [`open`](/ja/docs/Web/HTML/Element/details#open) 属性を反映する論理値で、要素の内容（{{HTMLElement("summary")}} を除く）がユーザーに表示されているかどうかを示します。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} からメソッドを継承しています。_

## イベント

このイベントは [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) を使用するか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを代入することで待ち受けします。

- [`toggle`](/ja/docs/Web/API/HTMLElement/toggle_event)
  - : {{HtmlElement("details")}} 要素の `open`/`closed` 状態がトグル切り替えされたときに発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("details")}}
