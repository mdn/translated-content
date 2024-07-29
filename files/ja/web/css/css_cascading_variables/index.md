---
title: カスケード変数のための CSS カスタムプロパティ
slug: Web/CSS/CSS_cascading_variables
l10n:
  sourceCommit: 948ade920e17ec0b9351e2d1983ec6fec79d87d2
---

{{CSSRef}}

**カスケード変数のための CSS カスタムプロパティ**モジュールは、CSS プロパティにカスケード変数の対応を追加し、カスタム変数を定義するためのカスタムプロパティを作成し、カスタムプロパティを他にも CSS プロパティの値として使用することができます。

CSS で作業していると、レイアウトでうまく機能する幅や、カラースキームのための色の組み合わせなど、自分のプロジェクト固有の共通の値を再利用することが多くなります。
スタイルシートで繰り返しを管理する方法の 1 つは、値を一度定義し、他の場所で何度も使用することです。
カスタムプロパティを使えば、再利用可能なカスタム変数を作成・定義することができ、複雑なルールや繰り返しの多いルールを単純化し、読みやすく保守しやすくすることができます。
例えば、 `--dark-grey-text` や `--dark-background` は、 `#323831` のような 16 進数の色よりも理解しやすく、使用する文脈もより明白です。

## カスタムプロパティの使用例

カスタムプロパティがどのように使用することができるかを確認するには、入力スライダーを左から右に移動してみてください。

```html hidden
<div class="container">
  <div id="color-1">--hue</div>
  <div id="color-2">--hue + 10</div>
  <div id="color-3">--hue + 20</div>
  <div id="color-4">--hue + 30</div>
  <div id="color-5">--hue + 40</div>
  <div id="color-6">--hue + 50</div>
  <div id="color-7">--hue + 60</div>
  <div id="color-8">--hue + 70</div>
</div>
<input type="range" min="0" max="360" value="0" step="0.1" id="hue" />
```

```js hidden
const hue = document.querySelector("#hue");

const updateHue = () => {
  document.documentElement.style.setProperty("--hue", hue.value);
};

hue.addEventListener("input", updateHue);
```

```css hidden
.container {
  display: grid;
  font-family: sans-serif;
  color: white;
  gap: 0.5rem;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 1rem;
}
.container div {
  border-radius: 0.5rem;
  padding: 1rem;
}

input {
  width: 100%;
  margin: 0;
}

:root {
  --hue: 0;
}

#color-1 {
  background-color: hsl(var(--hue) 50% 50%);
}
#color-2 {
  background-color: hsl(calc(var(--hue) + 10) 50% 50%);
}
#color-3 {
  background-color: hsl(calc(var(--hue) + 20) 50% 50%);
}
#color-4 {
  background-color: hsl(calc(var(--hue) + 30) 50% 50%);
}
#color-5 {
  background-color: hsl(calc(var(--hue) + 40) 50% 50%);
}
#color-6 {
  background-color: hsl(calc(var(--hue) + 50) 50% 50%);
}
#color-7 {
  background-color: hsl(calc(var(--hue) + 60) 50% 50%);
}
#color-8 {
  background-color: hsl(calc(var(--hue) + 70) 50% 50%);
}
```

{{EmbedLiveSample("",600,160)}}

これらの色見本では、 {{cssxref("background-color")}} は {{cssxref("color_value/hsl", "hsl()")}} の {{cssxref("&lt;color&gt;")}} 関数を使用して、 `hsl(var(--hue) 50% 50%)` のように設定します。
`calc(var(--hue) + 10)`, `calc(var(--hue) + 20)` などのように、色相 ({{cssxref("hue")}}) の値を 10 度ずつ増加します。
スライダーの値が 0 から 360 まで変化すると、 `--hue` [カスタムプロパティ](/ja/docs/Web/CSS/--*) の値が {{cssxref("calc")}} を使用して更新され、グリッド内の各ボックスの背景色も更新されます。

## リファレンス

### プロパティ

- {{cssxref("--*")}}

### 関数

- {{cssxref("var")}}

## ガイド

- [CSS カスタムプロパティ（変数）の使用](/ja/docs/Web/CSS/Using_CSS_custom_properties)

  - : CSS や JavaScript でカスタムプロパティを使用する方法を、未定義値や不正な値の処理、代替値、継承などのヒントを交えて解説します。

- [不正なカスタムプロパティ](/ja/docs/Web/CSS/CSS_syntax/Error_handling#不正なカスタムプロパティ)
  - : カスタムプロパティの値がそのプロパティにとって不正なデータ型であった場合に、ブラウザーがプロパティ値を処理する方法について説明します。

## 関連概念

- [CSS プロパティと値 API](/ja/docs/Web/CSS/CSS_properties_and_values_API) モジュール
  - [`@property`](/ja/docs/Web/CSS/@property) アットルール
  - [`CSS.registerProperty()`](/ja/docs/Web/API/CSS/registerProperty_static) メソッド

## 仕様書

{{Specifications}}

## 関連情報

- [CSS カスケードと継承](/ja/docs/Web/CSS/CSS_cascade)モジュール
- [CSS `env()`](/ja/docs/Web/CSS/env) 関数
- [CSS `calc()`](/ja/docs/Web/CSS/calc) 関数
- [`getPropertyValue()`](/ja/docs/Web/API/CSSStyleDeclaration/getPropertyValue) メソッド
