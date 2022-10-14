---
title: HTMLContentElement
slug: Web/API/HTMLContentElement
---

{{ APIRef("Web Components") }}

{{Deprecated_header}}

**`HTMLContentElement`** インターフェースは {{HTMLElement("content")}} HTML 要素を表しており、[Shadow DOM](/ja/docs/Web/Web_Components/Shadow_DOM) で使用されています。

## プロパティ

_このインターフェースは {{domxref("HTMLElement")}} のプロパティを継承してます。_

- {{domxref("HTMLContentElement.select")}}
  - : {{ htmlattrxref("select", "content") }} という HTML の属性を反映している {{domxref("DOMString")}} です。その値は、`<content>` 要素 の代わりに挿入するコンテンツを選択する、カンマで区切られた CSS セレクタのリストです。

## メソッド

_このインターフェースは {{domxref("HTMLElement")}} のメソッドを継承しています。_

- {{domxref("HTMLContentElement.getDistributedNodes()")}}
  - : この `<content>` 要素を {{glossary("distributed nodes")}} と関連づける静的な {{domxref("NodeList")}} を返します。

## 仕様書

この機能はどの標準企画によっても定義されていません。

## ブラウザーの互換性

{{Compat("api.HTMLContentElement")}}

## 参照

- このインターフェースを実装している {{HTMLElement("content")}} HTML 要素
- [Shadow DOM](/ja/docs/Web/Web_Components/Shadow_DOM)
