---
title: CSS 結合子
short-title: 結合子
slug: Web/CSS/Reference/Selectors/Combinators
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

CSS の**結合子**は、[セレクター](/ja/docs/Web/CSS/Reference/Selectors)同氏の関係を定義します。これらは、文書ツリー内の他の要素との関係に基づいて要素を選択することができます。

たとえば、{{HTMLElement("div")}} の直接の子である段落要素のみにスタイルを適用するには、子結合子 (`>`) が使用できます。

```css
/* <div> の直接の子である <p> 要素に上マージンを設定 */
div > p {
  margin-top: 0;
}
```

## 構文

```css
/* 関係を表すためにセレクターを組み合わせる */
セレクター1 結合子 セレクター2 {
  プロパティ: 値;
}
```

## 結合子の索引

- [子結合子 (`>`)](/ja/docs/Web/CSS/Reference/Selectors/Child_combinator)
- [列結合子 (`||`)](/ja/docs/Web/CSS/Reference/Selectors/Column_combinator)
- [子孫結合子 (" ")](/ja/docs/Web/CSS/Reference/Selectors/Descendant_combinator)
- [名前空間セパレーター (`|`)](/ja/docs/Web/CSS/Reference/Selectors/Namespace_separator)
- [次兄弟結合子 (`+`)](/ja/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)
- [セレクターリスト (`,`)](/ja/docs/Web/CSS/Reference/Selectors/Selector_list)
- [後続兄弟結合子 (`~`)](/ja/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)

## 関連情報

- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
- [セレクターと結合子](/ja/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
