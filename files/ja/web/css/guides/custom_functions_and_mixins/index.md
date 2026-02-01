---
title: CSS カスタム関数とミックスイン
short-title: カスタム関数とミックスイン
slug: Web/CSS/Guides/Custom_functions_and_mixins
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS カスタム関数とミックスイン**モジュールにより、開発者が引数を受け取り、複雑なロジック（CSS の {{cssxref("if()")}} 関数や {{cssxref("@media")}} アットルールなどの機能で定義）を含み、そのロジックに基づいて値を返す、再利用可能な CSS コードブロックを生成できます。

CSS カスタム関数は {{cssxref("@function")}} アットルールで定義され、 {{cssxref("&lt;dashed-function>")}} 構文で呼び出されます。これは [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)構文とよく似ていますが、末尾に引数を記載する括弧が付加される点が異なります （`--my-function(30px, 3)` など）。CSS カスタム関数はいかなるプロパティ値内でも呼び出され、関数に渡された引数と内部ロジックに基づいて値を返します。

CSS ミックスインは `@mixin` アットルールで定義され、ルールセット内に含まれた `@apply` アットルールを使用して適用されます。CSS のミックスインは、複数のルールセット内で再利用可能であり、引数やロジックでカスタマイズできるプロパティのセットを定義します。

CSS カスタム関数とミックスインには、引数と返値に対してオプションのデータ型を割り当てることが可能で、それにより渡される値と返される値を制限できます。

> [!NOTE]
> 現在、ブラウザーの対応は CSS カスタム関数のみです。CSS ミックスインは、現時点ではどのブラウザーでも対応していません。

## リファレンス

### アットルールと記述子

- {{cssxref("@function")}}
  - {{cssxref("@function#result", "result")}}

CSS カスタム関数とミックスインモジュールでは、`@mixin`、`@apply`、`@contents`、`@env` のアットルールも導入されています。現在、これらの機能に対応しているブラウザーはありません。

### データ型と値

- {{cssxref("dashed-function")}}

### 関数

- {{cssxref("type")}}

### インターフェイス

- {{domxref("CSSFunctionRule")}}
- {{domxref("CSSFunctionDeclarations")}}
- {{domxref("CSSFunctionDescriptors")}}

## ガイド

- [CSS カスタム関数の使用](/ja/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
  - : このガイドでは、CSS カスタム関数の使用方法を説明し、いくつかの典型的な用途を紹介します。

## 仕様書

{{Specifications}}

## 関連情報

- {{cssxref("if()")}}
- {{cssxref("@media")}}
