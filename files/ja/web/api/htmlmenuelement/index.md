---
title: HTMLMenuElement
slug: Web/API/HTMLMenuElement
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("HTML DOM")}}

**`HTMLMenuElement`** インターフェイスは、（通常の {{DOMxRef("HTMLElement")}} インターフェイスで定義され、継承によって利用できるもの以外に）{{HTMLElement("menu")}} 要素を操作するための特別なプロパティを提供します。

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("HTMLMenuElement.HTMLMenuElement", "HTMLMenuElement()")}}
  - : 新しく構築された `HTMLMenuElement` を返します。

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} およびその祖先から継承したプロパティがあります。_

- `compact` {{deprecated_inline}}
  - : メニューをコンパクトに表示するかどうかを決定する論理値です。
- `type` {{deprecated_inline}} {{Non-standard_Inline}}
  - : このメニューがコンテキストメニューであれば `context` を返します。
    この {{HTMLElement("menu")}} 要素の使用方法は広く実装されたことがなく、非推奨になりました。
- `label` {{deprecated_inline}} {{Non-standard_Inline}}
  - : メニューがコンテキストメニューとして使用されるときに表示される、メニューと名前を関連付ける文字列です。
    この {{HTMLElement("menu")}} 要素の使用方法は広く実装されたことがなく、非推奨になりました。

## インスタンスメソッド

_親である {{domxref("HTMLElement")}} およびその祖先から継承したメソッドがあります。_

_`HTMLMenuElement` は固有のメソッドを実装していません。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("HTMLMenuItemElement")}}
