---
title: CSS リストとカウンター
slug: Web/CSS/Guides/Lists
original_slug: Web/CSS/CSS_lists
l10n:
  sourceCommit: c642cf3df8c5bf401d9b69f9e7182a874b1e010b
---

**CSS リストとカウンター** (CSS lists and counters) モジュールにより、リストアイテムの箇条書き記号のスタイルや位置を指定したり、文字列、カウンターなどのの組み合わせによる値を操作したりすることができます。

リストアイテムのマーカー、つまり箇条書き記号や番号付きカウンターが、定義する機能です。 リストアイテムは、 {{HTMLElement("ol")}} または {{HTMLElement("ul")}} 要素内にある {{HTMLElement("li")}} 要素に制限されません。 `display: list-item` を設定した要素すべてを指します。

このモジュールは、 CSS でリストのカウンターを設定およびリセットする機能、マーカーとして使用する[カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)または記号を設定する機能、それらのマーカーの位置を指定する機能などを定義します。また、開発者がカスタマイズしたマーカーを作成する機能も提供します。

## リファレンス

## プロパティ

- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("list-style-image")}}
- {{cssxref("list-style-type")}}
- {{cssxref("list-style-position")}}
- {{cssxref("list-style")}} 一括指定

完全には定義または実装されていない `marker-side` プロパティもあります。

### 擬似要素

- {{cssxref("::marker")}}

### 関数

- {{cssxref("counter")}}
- {{cssxref("counters")}}

### データ型

- [`<counter>`](/ja/docs/Web/CSS/Reference/Properties/content#counter)
- [`<counter-name>`](/ja/docs/Web/CSS/Reference/Values/counter#counter-name)
- [`<counter-style>`](/ja/docs/Web/CSS/Reference/Values/counter#counter-style)

## ガイド

- [一貫したリストのインデント](/ja/docs/Web/CSS/Guides/Lists/Indenting)
  - : 異なるブラウザー同士でも一貫したリストのインデントを実現する方法を説明します。

- [CSS カウンターの使用](/ja/docs/Web/CSS/Guides/Counter_styles/Using_counters)
  - : リストのカウンターを制御するために CSS カウンタープロパティを使用する方法を説明します。

## 関連概念

- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)
  - {{cssxref("@counter-style")}} アットルール
  - [`<counter-style-name>`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name) データ型
  - [`<symbol>`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#値) データ型
  - {{cssxref("symbols", "symbols()")}} 関数

- {{HTMLElement("ol")}} の `start`、`reversed`、`type` 属性
- {{HTMLElement("ul")}} の `type` 属性
- {{HTMLElement("li")}} の `type` および `value` 属性

## 仕様書

{{Specifications}}

## 関連情報

- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
- [CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュール
- [CSS 生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content)モジュール
