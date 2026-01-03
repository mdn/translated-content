---
title: <calc-sum>
slug: Web/CSS/Reference/Values/calc-sum
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`<calc-sum>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、任意の [CSS 数学関数](/ja/docs/Web/CSS/Reference/Values/Functions#数学関数)を用いて計算を行う式を表します。この式は、2つの値の間の加算と減算の基本的な算術処理を実行します。

## 構文

`<calc-sum>` 型は 2 つの数値とその間の以下の[算術演算子](/ja/docs/Learn_web_development/Core/Scripting/Math#算術演算子)のいずれかを定義します。

- `+`
  - : 2 つの数値を足し合わせます。

- `-`
  - : 右の数値を左から減算します。

### 公式定義

{{CSSSyntax}}

## 解説

この式のオペランドは、任意の {{cssxref("&lt;length&gt;")}} 構文の値にすることができます。 {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("angle")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} のいずれかを使用することができます。

両オペランドの型は一致している必要があります。長さの値では、`0` を `0px`（または他の長さ単位）として使用することはできません。明示的な単位を追加しなければなりません。たとえば `margin-top: calc(0px + 20px);` は有効ですが、`margin-top: calc(0 + 20px);` は無効な入力です。パーセント値の型はコンテキストに基づいて解決されます。例えば、`margin-top: calc(50% + 20px);` は有効です。これは `margin-top` がパーセント値を長さに解決するためです。

[CSS 変数](/ja/docs/Web/CSS/Guides/Cascading_variables) を `calc-sum` 式に含めることもできます。以下のコード `calc(10px + var(--variable))` は有効な式です。

`+` および `-` 演算子は、**{{Glossary("whitespace", "ホワイトスペース")}}で囲む必要があります**。例えば、 `calc(50% -8px)` はパーセント値に負の長さが続くものとして解釈され、不正な式となります。同様に、 `calc(8px + -50%)` は長さの後に加算演算子と負のパーセント値が続くものとして処理されます。

## 仕様書

{{Specifications}}

## 関連情報

- {{CSSxRef("&lt;calc-product&gt;")}}
- {{CSSxRef("&lt;calc-value&gt;")}}
- {{CSSxRef("&lt;calc-keyword&gt;")}}
