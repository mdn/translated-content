---
title: 擬似要素
slug: Web/CSS/Pseudo-elements
l10n:
  sourceCommit: ceb7507408b15730166596ea3b2de282c4edae1f
---

{{CSSRef}}

CSS の **擬似要素** (Pseudo-elements) は、セレクターに付加するキーワードで、選択された要素の特定の部分にスタイル付けできるようにするものです。

## 構文

```css
selector::pseudo-element {
  property: value;
}
```

例えば {{CSSxRef("::first-line")}} 擬似要素は、段落の最初の行のフォントを変更するために使用することができます。

```css
/* すべての <p> 要素の最初の行です。 */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

擬似要素にはダブルコロン (`::`) を使用します。これは、単一のコロン (`:`) を使用する[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)と区別するためです。

1つのセレクターで使用できる擬似要素は1つだけです。擬似要素が現れる場所は、それが現れる[複雑](/ja/docs/Web/CSS/CSS_selectors/Selector_structure#複雑セレクター)セレクターまたは[複合](/ja/docs/Web/CSS/CSS_selectors/Selector_structure#複合セレクター)セレクター内の他のすべての要素の後でなければなりません。例えば、段落の最初の行は `p::first-line` を使用して選択することができますが、最初の行の子やポインターが当たっている最初の行は選択できません。つまり、 `p::first-line > *` と `p::first-line:hover` はどちらも無効です。

擬似要素を使用して、状態に基づいて要素を選択することはできませんが、擬似要素を使用して、すでに状態が適用されている要素の一部を選択してスタイル設定することはできます。例えば、 `p:hover::first-line` は、段落自体にポインターが当たっているとき（擬似クラス）に、段落の最初の行（擬似要素）を選択します。

> **メモ:** [セレクターリスト](/ja/docs/Web/CSS/CSS_selectors/Selector_structure#セレクターリスト)に無効なセレクターが含まれている場合、そのスタイルブロック全体が無効になります。

## 擬似要素の一覧

CSS の一連の仕様で定義される擬似要素には、以下のようなものがあります。

A

- {{CSSxRef("::after")}}

B

- {{CSSxRef("::backdrop")}}
- {{CSSxRef("::before")}}

C

- {{CSSxRef("::cue")}}
- {{CSSxRef("::cue-region")}}

F

- {{CSSxRef("::first-letter")}}
- {{CSSxRef("::first-line")}}
- {{CSSxRef("::file-selector-button")}}

G

- {{CSSxRef("::grammar-error")}} {{Experimental_Inline}}

M

- {{CSSxRef("::marker")}}

P

- {{CSSxRef("::part", "::part()")}}
- {{CSSxRef("::placeholder")}}

S

- {{CSSxRef("::selection")}}
- {{CSSxRef("::slotted", "::slotted()")}}
- {{CSSxRef("::spelling-error")}} {{Experimental_Inline}}

T

- {{CSSxRef("::target-text")}} {{Experimental_Inline}}

> [!NOTE]
> ブラウザーは元の 4 つの擬似要素、 `::before`、`::after`、`::first-line`、`::first-letter` のみで単一コロンの構文に対応しています。

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 擬似要素](/ja/docs/Web/CSS/CSS_pseudo-elements)モジュール
- [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)
- [CSS セレクター](/ja/docs/Web/CSS/CSS_selectors)モジュール
- [CSS 構成要素: 擬似クラスと擬似要素](/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
