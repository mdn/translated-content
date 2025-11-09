---
title: CSS リファレンス
short-title: リファレンス
slug: Web/CSS/Reference
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

この **CSS リファレンス** は、すべての標準 [CSS](/ja/docs/Web/CSS) プロパティ、[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)、[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)、[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)、[関数記法](/ja/docs/Web/CSS/Reference/Values/Functions)、[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules) の[アルファベット順の索引](#索引)として利用できます。また、すべての CSS [種類別セレクター](#セレクター) の一覧および [重要な CSS の概念](#概念) の一覧もあります。また、簡単な [DOM-CSS / CSSOM リファレンス](#dom-css_cssom) も含まれています。

## 基本的なルールと構文

### スタイルルールの構文

```css
スタイルルール ::=
    セレクターリスト {
      プロパティリスト
    }
```

ここで、

```css
セレクターリスト ::=
    セレクター[:擬似クラス] [::擬似要素]
    [, セレクターリスト]

プロパティリスト ::=
    [プロパティ : 値] [; プロパティリスト]
```

下記の [_セレクター_](#セレクター)、[_擬似クラス_](#擬似クラスと擬似要素)、_[擬似要素](#擬似クラスと擬似要素)_ の一覧を参照してください。 各指定*値*の構文は、各指定*プロパティ*に定義されたデータ型に依存します。

#### スタイルルールの例

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

初心者レベルの CSS セレクター構文への入門については、 [CSS セレクターのガイド](/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)をご覧ください。ルール定義内での [CSS 構文](/ja/docs/Web/CSS/Guides/Syntax/Introduction) エラーは、そのルール全体を無効にするので十分に注意してください。無効なルールはブラウザーにより無視されます。 CSS ルールの定義はすべて ({{Glossary("ASCII")}}) [テキストベース](https://www.w3.org/TR/css-syntax-3/#intro) であり、DOM-CSS / CSSOM (ルール管理システム) は [オブジェクトベース](https://www.w3.org/TR/cssom/#introduction) なので注意してください。

### アットルールの構文

アットルールの構造は様々であるため、知りたい構文について調べるには[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)のページをご覧ください。

## 索引

> [!NOTE]
> この索引は、[SVG](/ja/docs/Web/SVG) 要素上で CSS プロパティとして使える SVG 専用プレゼンテーション属性を含んでいません。

> [!NOTE]
> この索引でのプロパティ名は、CSS 標準の名前と異なる JavaScript の名前は含んでいません。

{{CSS_Ref}}

## セレクター

以下は様々な[セレクター](/ja/docs/Web/CSS/Guides/Selectors)で、DOM 内の要素の様々な特徴に基づいた条件付きのスタイル付けを可能にします。

### 基本セレクター

**基本セレクター**は基礎的なセレクターです。これらは最も基本的なセレクターで、他のより複雑なセレクターを作成するために頻繁に組み合わせられます。

- [全称セレクター](/ja/docs/Web/CSS/Reference/Selectors/Universal_selectors) `*`
- [要素型セレクター](/ja/docs/Web/CSS/Reference/Selectors/Type_selectors) `elementname`
- [クラスセレクター](/ja/docs/Web/CSS/Reference/Selectors/Class_selectors) `.classname`
- [ID セレクター](/ja/docs/Web/CSS/Reference/Selectors/ID_selectors) `#idname`
- [属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[attr=value]`

### グループ化セレクター

- [セレクターリスト](/ja/docs/Web/CSS/Reference/Selectors/Selector_list) `A, B`
  - : `A` と `B` の両方の要素が選択されることを指定します。これは複数の一致する要素をグループ化する方法です。

### 結合子

結合子 (Combinator) は 2 つ以上の単純セレクターの関係、例えば「`A` は `B` の子である」や「`A` は `B` の子孫である」などを確立し、複合セレクターを作成するためのセレクターです。

- [次兄弟結合子](/ja/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) `A + B`
  - : `A` と `B` のそれぞれで選択された要素が同じ親を持ち、かつ `B` で選択された要素が `A` で選択された要素の水平的な直後にあることを指定します。
- [後続兄弟結合子](/ja/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) `A ~ B`
  - : `A` と `B` のそれぞれで選択された要素が同じ親を共有しており、かつ `A` で選択された要素が `B` の前に — ただし直前である必要はありませんが — 来た場合を指定します。
- [子結合子](/ja/docs/Web/CSS/Reference/Selectors/Child_combinator) `A > B`
  - : `B` で選択された要素のうち、 `A` で選択された要素の直接の子であるものを指定します。
- [子孫結合子](/ja/docs/Web/CSS/Reference/Selectors/Descendant_combinator) `A B`
  - : `B` で選択された要素のうち、 `A`で選択された要素の子孫であるものを指定します。直接の子である必要はありません。
- [列結合子](/ja/docs/Web/CSS/Reference/Selectors/Column_combinator) `A || B` {{Experimental_Inline}}
  - : `B` で指定された要素のうち、 `A` で指定された表の列にあるものを指定します。複数の列にまたがる要素は、そのすべての列のメンバーであるとみなされます。

### 擬似クラスと擬似要素

- [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `:`
  - : 選択された要素が特別な状態にあることを指定します。
- [擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements) `::`
  - : HTML に含まれていないエンティティを表します。

> [!CALLOUT]
> [Selectors Level 4 仕様書におけるセレクター](https://www.w3.org/TR/selectors/#overview)および[擬似要素の仕様書](https://drafts.csswg.org/css-pseudo/)も参照してください。

## 概念

### 構文と意味

- [CSS 構文](/ja/docs/Web/CSS/Guides/Syntax/Introduction)
- [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)
- [カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction)
- [コメント](/ja/docs/Web/CSS/Guides/Syntax/Comments)
- [記述子](/ja/docs/Glossary/CSS_Descriptor)
- [継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)
- [一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [優先度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)
- [値定義構文](/ja/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS 単位と値の種類](/ja/docs/Web/CSS/Guides/Values_and_units)
- [CSS 関数記法](/ja/docs/Web/CSS/Reference/Values/Functions)

### 値

- [実効値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#実効値)
- [計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値)
- [初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)
- [解決値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#解決値)
- [指定値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#指定値)
- [使用値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#使用値)

### レイアウト

- [ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
- [包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)
- [レイアウトモード](/ja/docs/Glossary/Layout_mode)
- [マージンの相殺](/ja/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- {{glossary("Replaced elements", "置換要素")}}
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [視覚整形モデル](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model)

## DOM-CSS / CSSOM

### 主なオブジェクトの種類

- {{DOMxRef("Document.styleSheets")}}
- {{DOMxRef("HTMLElement.style")}}
- {{DOMxRef("Element.className")}}
- {{DOMxRef("Element.classList")}}
- {{DOMxRef("StyleSheetList")}}
- {{DOMxRef("CSSRuleList")}}
- {{DOMxRef("CSSRule")}}
- {{DOMxRef("CSSStyleRule")}}
- {{DOMxRef("CSSStyleDeclaration")}}

### 重要なメソッド

- {{DOMxRef("CSSStyleSheet.insertRule()")}}
- {{DOMxRef("CSSStyleSheet.deleteRule()")}}

## 関連情報

- [Mozilla CSS 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions) (`-moz-` 接頭辞付き)
- [WebKit CSS 拡張](/ja/docs/Web/CSS/Reference/Webkit_extensions) (ほとんどが `-webkit-` 接頭辞付き)

## 外部リンク

- [CSS 索引 (w3.org)](https://www.w3.org/TR/css/#indices)
