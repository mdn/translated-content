---
title: <calc-sum>
slug: Web/CSS/calc-sum
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
---

{{CSSRef}}

**`<calc-sum>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、任意の [CSS 数学関数](/ja/docs/Web/CSS/CSS_Functions#数学関数)を用いて計算を行う式を表します。この式は、2つの値の間の加算と減算の基本的な算術処理を実行します。

## 構文

`<calc-sum>` 型は 2 つの数値とその間の以下の[算術演算子](/ja/docs/Learn/JavaScript/First_steps/Math#算術演算子)のいずれかを定義します。

- `+`

  - : 2 つの数値を足し合わせます。

- `-`

  - : 右の数値を左から減算します。

### 公式定義

{{CSSSyntax}}

## 解説

この式のオペランドは、任意の {{cssxref("&lt;length&gt;")}} 構文の値にすることができます。 {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;integer&gt;")}} のいずれかを使用することができます。

異なる単位型を単一の式で使用することができます。例えば、`calc(100% - 10px)` のように `%` から `px` を引くのも有効な式です。

[CSS 変数](/ja/docs/Web/CSS/CSS_cascading_variables) を `calc-sum` 式に含めることもできます。以下のコード `calc(10px + var(--variable))` は有効な式です。

`+` および `-` 演算子は、**{{Glossary("whitespace", "ホワイトスペース")}}で囲む必要があります**。例えば、 `calc(50% -8px)` はパーセント値に負の長さが続くものとして解釈され、不正な式となります。同様に、 `calc(8px + -50%)` は長さの後に加算演算子と負のパーセント値が続くものとして処理されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("&lt;calc-product&gt;")}}
- {{CSSxRef("&lt;calc-value&gt;")}}
- {{CSSxRef("&lt;calc-constant&gt;")}}
