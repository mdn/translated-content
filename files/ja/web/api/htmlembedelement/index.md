---
title: HTMLEmbedElement
slug: Web/API/HTMLEmbedElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{APIRef("HTML DOM")}}

**`HTMLEmbedElement`** インターフェイスは、（継承によって使用できる通常の {{domxref("HTMLElement")}} インターフェイスのものに加えて） {{HTMLElement("embed")}} 要素を操作するための特別なプロパティを提供します。

> [!NOTE]
> このトピックでは、標準規格で定義されている `HTMLEmbedElement` インターフェイスについて説明します。それ以前の、標準化されていない版のインターフェイスは扱いません。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLEmbedElement.align")}} {{deprecated_inline}}
  - : 列挙型のプロパティを表す文字列で、要素の内容を周囲のコンテキストから見てどう配置するかを示します。指定可能な値は `"left"`, `"right"`, `"center"`, `"justify"` です。
- {{domxref("HTMLEmbedElement.height")}}
  - : 文字列で HTML の [`height`](/ja/docs/Web/HTML/Reference/Elements/embed#height) 属性を反映しており、リソースが表示される高さが入ります。
- {{domxref("HTMLEmbedElement.name")}} {{deprecated_inline}}
  - : 文字列で、埋め込まれたオブジェクトの名前を表します。
- {{domxref("HTMLEmbedElement.src")}}
  - : 文字列で、HTML の [`src`](/ja/docs/Web/HTML/Reference/Elements/embed#src) 属性を反映しており、リソースの場所が入ります。
- {{domxref("HTMLEmbedElement.type")}}
  - : 文字列で、HTML の [`type`](/ja/docs/Web/HTML/Reference/Elements/embed#type) 属性を反映しており、リソースの型が入ります。
- {{domxref("HTMLEmbedElement.width")}}
  - : 文字列で、HTML の [`width`](/ja/docs/Web/HTML/Reference/Elements/embed#width) 属性を反映しており、リソースが表示される幅が入ります。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("embed") }}
