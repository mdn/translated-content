---
title: CSS シャドウパーツ
slug: Web/CSS/Guides/Shadow_parts
original_slug: Web/CSS/CSS_shadow_parts
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**CSS シャドウパーツ** (CSS shadow parts) モジュールは、[シャドウホスト](/ja/docs/Glossary/Shadow_tree)に設定できる {{CSSXref("::part", "::part()")}} 擬似要素を定義します。この擬似要素を使用すると、シャドウホストが、スタイル設定のために、シャドウツリーで選択された要素を外部ページに公開できるようにすることができます。

既定では、シャドウツリー内の要素は、それぞれのシャドウルート内でのみスタイルを設定できます。CSS シャドウパーツモジュールを使用すると、カスタム要素を構成する {{HTMLElement("template")}} の子孫に [`part`](/ja/docs/Web/HTML/Reference/Global_attributes/part) 属性を記載し、 `::part()` 擬似要素を介してシャドウツリーノードを外部スタイルに公開することができます。

## リファレンス

### セレクター

- {{CSSXref("::part", "::part()")}}

### HTML 属性

- [`part`](/ja/docs/Web/HTML/Reference/Global_attributes/part)
- [`exportparts`](/ja/docs/Web/HTML/Reference/Global_attributes/exportparts)

### 定義

- {{glossary("Shadow tree", "シャドウツリー")}}

## ガイド

- [CSS 擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - : すべての CSS 仕様書および WebVTT で定義されている擬似要素のアルファベット順のリスト

- [ウェブコンポーネント](/ja/docs/Web/API/Web_components)
  - : 再利用可能なカスタム要素やウェブコンポーネントを作成するためのさまざまな API の概要です。

## 関連概念

- HTML {{HTMLElement("template")}} 要素
- HTML {{HTMLElement("slot")}} 要素
- {{domxref("Element.part")}} プロパティ
- {{domxref("Element.shadowRoot")}} プロパティ
- {{domxref("Element.attachShadow()")}} メソッド
- {{domxref("ShadowRoot")}} インターフェイス
- [CSS スコープ](/ja/docs/Web/CSS/Guides/Scoping)モジュール
  - {{CSSXref(":host")}}
  - {{CSSXref(":host_function", ":host()")}}
  - {{CSSXref(":host-context", ":host-context()")}}
  - {{CSSXref("::slotted")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュール
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
- [シャドウ DOM の使用](/ja/docs/Web/API/Web_components/Using_shadow_DOM)
- [Templates: Styling outside of the current scope](https://web.dev/learn/html/template/#styling_outside_of_the_current_scope) on web.dev (2023)
