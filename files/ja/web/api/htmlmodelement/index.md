---
title: HTMLModElement
slug: Web/API/HTMLModElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

**`HTMLModElement`** インターフェイスは、（継承によって {{domxref("HTMLElement")}} を通じて利用できる通常のメソッドやプロパティに加えて）改変 (modification) 要素、すなわち {{HTMLElement("del")}} と {{HTMLElement("ins")}} を操作するための特有のプロパティを提供します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLModElement.cite")}}
  - : 文字列で、 HTML の [`cite`](/ja/docs/Web/HTML/Element/del#cite) 属性の値を反映します。変更点についての説明を含むリソースの URI が入ります。
- {{domxref("HTMLModElement.dateTime")}}
  - : 文字列で、 HTML の [`datetime`](/ja/docs/Web/HTML/Element/del#datetime) 属性の値を反映します。変更されたタイムスタンプを示す日時文字列が入ります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("ins")}}, {{HTMLElement("del")}}
