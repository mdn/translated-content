---
title: CSS 宣言
slug: Web/API/CSS_Object_Model/CSS_Declaration
l10n:
  sourceCommit: b07efa13f8459a44a2cbc7b6cdb3279967565e63
---

{{DefaultAPISidebar("CSSOM")}}

**CSS 宣言**は、 DOM でオブジェクトに公開されない抽象的な概念です。 CSS プロパティと値の組を表します。

CSS 宣言には、以下の関連するプロパティがあります。

- プロパティ名
  - : 宣言のプロパティ名。例: {{cssxref("background-color")}}
- 値
  - : コンポーネント値のリストとして宣言された値。
- important フラグ
  - : 設定または未設定
- case-sensitive フラグ
  - : プロパティ名が仕様に従って大文字と小文字を区別するように定義されている場合は設定され、そうでない場合は設定されない。

## 基本的な例

以下の例は、{{htmlelement("Heading_elements","&lt;h1&gt;")}} 要素に対する [CSS 宣言ブロック](/ja/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block) による CSS ルールを示しています。 CSS 宣言ブロックは中括弧で囲まれた行で、 2 つの CSS 宣言を含んでいます。ひとつは {{cssxref("font-style")}} で、もうひとつは {{cssxref("color")}} です。

```css
h1 {
  font-style: italic;
  color: rebeccapurple;
}
```

## 仕様書

{{Specifications}}
