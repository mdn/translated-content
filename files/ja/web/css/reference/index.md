---
title: CSS リファレンス
slug: Web/CSS/Reference
---

{{CSSRef}}

この **CSS リファレンス** は、すべての標準 [CSS](/ja/docs/Web/CSS) プロパティ、[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)、[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)、[データ型](/ja/docs/Web/CSS/CSS_Types)、[関数記法](/ja/docs/Web/CSS/CSS_Functions)、[アット規則](/ja/docs/Web/CSS/At-rule) の [アルファベット順の索引](#Keyword_index) として利用できます。また、すべての CSS [種類別セレクター](#Selectors) の一覧および [重要な CSS の概念](#Concepts) の一覧もあります。また、簡単な [DOM-CSS / CSSOM リファレンス](#DOM-CSS_CSSOM) も含まれています。

## 基本的な規則と構文

### スタイル規則の構文

```
スタイル規則 ::=
    セレクターリスト {
      プロパティリスト
    }
```

... ここで

```
セレクターリスト ::=
    セレクター[:擬似クラス] [::擬似要素]
    [, セレクターリスト]

プロパティリスト ::=
    [プロパティ : 値] [; プロパティリスト]
```

下記の [_セレクター_](#Selectors)、[_疑似クラス_](#Pseudo)、_[疑似要素](#Pseudo)_ の一覧を参照してください。 各指定*値*の構文は、各指定*プロパティ*に定義されたデータ型に依存します。

#### スタイル規則の例

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

初心者レベルの CSS セレクター構文への入門については、 [CSS セレクターのガイド](/ja/docs/Learn/CSS/Building_blocks/Selectors)をご覧ください。規則定義内での [CSS 構文](/ja/docs/Web/CSS/syntax) エラーは、その規則全体を無効にするので十分に注意してください。無効な規則はブラウザーにより無視されます。 CSS 規則の定義はすべて (ASCII) [テキストベース](https://www.w3.org/TR/css-syntax-3/#intro) であり、DOM-CSS / CSSOM (規則管理システム) は [オブジェクトベース](https://www.w3.org/TR/cssom/#introduction) なので注意してください。

### アット規則構文

これには多くの異なる構造的な書式があるため、その各構文は [アット規則](/ja/docs/Web/CSS/At-rule) のページをご覧ください。

## 索引

> **メモ:** この索引のプロパティ名には、CSS 標準の名前と異なる [JavaScript 名](/ja/docs/Web/CSS/CSS_Properties_Reference) は含まれて**いません**。

{{CSS_Ref}}

## セレクター

以下は様々な[セレクター](/ja/docs/Web/CSS/CSS_Selectors)で、 DOM 内の要素の様々な特徴に基づいた条件付きのスタイル付けを可能にします。

### 基本セレクター

**基本セレクター**は基礎的なセレクターです。これらは最も基本的なセレクターで、他のより複雑なセレクターを作成するために頻繁に組み合わせられます。

- [全称セレクター](/ja/docs/Web/CSS/Universal_selectors) `*`, `ns|*`, `*|*`, `|*`
- [要素型セレクター](/ja/docs/Web/CSS/Type_selectors) `elementname`
- [クラスセレクター](/ja/docs/Web/CSS/Class_selectors) `.classname`
- [ID セレクター](/ja/docs/Web/CSS/ID_selectors) `#idname`
- [属性セレクター](/ja/docs/Web/CSS/Attribute_selectors) `[attr=value]`

### グループ化セレクター

- [セレクターリスト](/ja/docs/Web/CSS/Selector_list) `A, B`
  - : `A` と `B` の両方の要素が選択されることを指定します。これは複数の一致する要素をグループ化する方法です。

### 結合子

結合子 (Combinators) は二つ以上の単純セレクターの関係、例えば「`A` は `B` の子である」や「`A` は is `B` の子孫である」などを確立するためのセレクターです。

- [隣接兄弟結合子](/ja/docs/Web/CSS/Adjacent_sibling_combinator) `A + B`
  - : `A` と `B` のそれぞれで選択された要素が同じ親を持ち、かつ `B` で選択された要素が `A` で選択された要素の水平的な直後にあることを指定します。
- [一般兄弟結合子](/ja/docs/Web/CSS/General_sibling_combinator) `A ~ B`
  - : `A` と `B` のそれぞれで選択された要素が同じ親を共有しており、かつ `A` で選択された要素が `B` の前に — ただし直前である必要はありませんが — 来た場合を指定します。
- [子結合子](/ja/docs/Web/CSS/Child_combinator) `A > B`
  - : `B` で選択された要素のうち、 `A` で選択された要素の直接の子であるものを指定します。
- [子孫結合子](/ja/docs/Web/CSS/Descendant_combinator) `A B`
  - : `B` で選択された要素のうち、 `A`で選択された要素の子孫であるものを指定します。直接の子である必要はありません。
- [列結合子](/ja/docs/Web/CSS/Column_combinator) `A || B` {{Experimental_Inline}}
  - : `B` で指定された要素のうち、 `A` で指定された表の列にあるものを指定します。複数の列にまたがる要素は、そのすべての列のメンバーであるとみなされます。

### 擬似クラスと擬似要素

- [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes) `:`
  - : 選択された要素が特別な状態にあることを指定します。
- [擬似要素](/ja/docs/Web/CSS/Pseudo-elements) `::`
  - : HTML に含まれていないエンティティを表します。

> **メモ:** **関連情報:** [Selectors Level 4 仕様書におけるセレクター](https://www.w3.org/TR/selectors/#overview)。

## 概念

### 構文と意味

- [CSS 構文](/ja/docs/Web/CSS/Syntax)
- [アット規則](/ja/docs/Web/CSS/At-rule)
- [カスケード](/ja/docs/Web/CSS/Cascade)
- [コメント](/ja/docs/Web/CSS/Comments)
- [記述子](</ja/docs/Glossary/Descriptor_(CSS)>)
- [継承](/ja/docs/Web/CSS/inheritance)
- [一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)
- [優先度](/ja/docs/Web/CSS/Specificity)
- [値定義構文](/ja/docs/Web/CSS/Value_definition_syntax)
- [CSS 単位と値の種類](/ja/docs/Web/CSS/CSS_Values_and_Units)
- [CSS 関数記法](/ja/docs/Web/CSS/CSS_Functions)

### 値

- [実効値](/ja/docs/Web/CSS/actual_value)
- [算出値](/ja/docs/Web/CSS/computed_value)
- [初期値](/ja/docs/Web/CSS/initial_value)
- [解決値](/ja/docs/Web/CSS/resolved_value)
- [指定値](/ja/docs/Web/CSS/specified_value)
- [使用値](/ja/docs/Web/CSS/used_value)

### レイアウト

- [ブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context)
- [ボックスモデル](/ja/docs/Web/CSS/box_model)
- [包含ブロック](/ja/docs/Web/CSS/All_About_The_Containing_Block)
- [レイアウトモード](/ja/docs/Web/CSS/Layout_mode)
- [マージンの相殺](/ja/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
- [置換要素](/ja/docs/Web/CSS/Replaced_element)
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [視覚書式設定モデル](/ja/docs/Web/Guide/CSS/Visual_formatting_model)

## DOM-CSS / CSSOM

### 主なオブジェクトの種類

- {{DOMxRef("DocumentOrShadowRoot.styleSheets")}}
- `{{DOMxRef("StyleSheetList", "styleSheets", "", 1)}}[i].{{DOMxRef("CSSRuleList", "cssRules", "", 1)}}`
- `cssRules[i].{{DOMxRef("CSSRule.cssText", "cssText", "", 1)}}` (セレクターとスタイル)
- `cssRules[i].{{DOMxRef("CSSStyleRule.selectorText", "selectorText", "", 1)}}`
- {{DOMxRef("HTMLElement.style")}}
- `HTMLElement.style.{{DOMxRef("CSSStyleDeclaration.cssText", "cssText", "", 1)}}` (スタイルのみ)
- {{DOMxRef("Element.className")}}
- {{DOMxRef("Element.classList")}}

### 重要なメソッド

- {{DOMxRef("CSSStyleSheet.insertRule()")}}
- {{DOMxRef("CSSStyleSheet.deleteRule()")}}

## 関連情報

- [Mozilla CSS 拡張](/ja/docs/Web/CSS/Mozilla_Extensions) (`-moz-` 接頭辞付き)
- [WebKit CSS 拡張](/ja/docs/Web/CSS/WebKit_Extensions) (ほとんどが `-webkit-` 接頭辞付き)
- [Microsoft CSS 拡張](/ja/docs/Web/CSS/Microsoft_Extensions) (`-ms-` 接頭辞付き)

## 外部リンク

- [CSS 目次 (w3.org)](https://www.w3.org/TR/CSS/#indices)
