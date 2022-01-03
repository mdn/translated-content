---
title: 擬似要素
slug: Web/CSS/Pseudo-elements
tags:
  - CSS
  - ガイド
  - 概要
  - 擬似要素
  - リファレンス
  - セレクター
translation_of: Web/CSS/Pseudo-elements
---
{{CSSRef}}

CSS の **擬似要素** (Pseudo-elements) は、セレクターに付加するキーワードで、選択された要素の特定の部分にスタイル付けできるようにするものです。例えば {{CSSxRef("::first-line")}} 擬似要素は、段落の最初の行のフォントを変更するために使用することができます。

```css
/* すべての <p> 要素の最初の行です。 */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

> **Note:** 擬似要素とは対照的に、{{CSSxRef("pseudo-classes", "擬似クラス")}}は要素の<em>状態</em>に基づいてスタイル付けを行うことができます。

## 構文

```css
selector::pseudo-element {
  property: value;
}
```

擬似要素は 1 つのセレクターに 1 つだけ使用することができます。文内の単純セレクターの後に置く必要があります。

> **Note:** ルールとして、単一コロン (`:`) の代わりに二重コロン (`::`) を使用してください。これで擬似要素と擬似クラスを区別します。但し、この区別は W3C の古いバージョンの仕様書には存在しなかったため、多くのブラウザーは元々の擬似要素に対して両方の構文に対応しています。

## 索引

CSS の一連の仕様で定義される擬似要素には、以下のようなものがあります。

A

- {{CSSxRef("::after", "::after (:after)")}}

B

- {{CSSxRef("::backdrop")}} {{Experimental_Inline}}
- {{CSSxRef("::before", "::before (:before)")}}

C

- {{CSSxRef("::cue")}}
- {{CSSxRef("::cue-region")}}

F

- {{CSSxRef("::first-letter", "::first-letter (:first-letter)")}}
- {{CSSxRef("::first-line", "::first-line (:first-line)")}}
- {{CSSxRef("::file-selector-button")}}

G

- {{CSSxRef("::grammar-error")}} {{Experimental_Inline}}

M

- {{CSSxRef("::marker")}} {{Experimental_Inline}}

P

- {{CSSxRef("::part", "::part()")}} {{Experimental_Inline}}
- {{CSSxRef("::placeholder")}} {{Experimental_Inline}}

S

- {{CSSxRef("::selection")}}
- {{CSSxRef("::slotted", "::slotted()")}}
- {{CSSxRef("::spelling-error")}} {{Experimental_Inline}}

T

- {{CSSxRef("::target-text")}} {{Experimental_Inline}}

## 仕様書

| 仕様書               | 状態              | 備考                         |
| -------------------- | ----------------- | ---------------------------- |
| {{SpecName("CSS1")}} | {{Spec2("CSS1")}} | 擬似クラスと擬似要素を定義。 |

## ブラウザーの互換性

<table class="standard-table">
  <tbody>
    <tr>
      <th>ブラウザー</th>
      <th>対応開始バージョン</th>
      <th>対応内容</th>
    </tr>
    <tr>
      <td rowspan="2">Internet Explorer</td>
      <td>8.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>9.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Firefox (Gecko)</td>
      <td>1.0 (1.0)</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>1.0 (1.5)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Opera</td>
      <td>4.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>7.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td>Safari (WebKit)</td>
      <td>1.0 (85)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
  </tbody>
</table>

## 関連情報

- [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)
