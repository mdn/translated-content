---
title: CSS `alpha()` 関数
short-title: alpha()
slug: Web/CSS/Reference/Values/color_value/alpha
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

**`alpha()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、元の色 {{cssxref("color_value","color")}} を受け取り、その色のアルファ（透明度）チャンネルを変更した同じ色を返します。元の色の色要素は変更されずに保持されます。結果は、元の色と同じ色空間になります。

## 構文

```css
/* アルファを固定値に置き換える */
alpha(from red / 50%)
alpha(from var(--my-color) / 80%)

/* 元の色の不透明度を基準として、アルファ値を算出 */
alpha(from var(--my-color) / calc(alpha * 0.5))
```

### 引数

- `from <color>`
  - : [相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)の構文キーワード `from` の後に、有効な {{cssxref("&lt;color&gt;")}} 値を指定することで、**元の色** を定義します。元の色の色要素は変更されずに結果に引き継がれ、影響を受けるのはアルファチャンネルのみです。

- `/ <alpha-value>`
  - : 出力色の不透明度（アルファ値）を指定する {{cssxref("&lt;alpha-value&gt;")}} です。この値は、`0` から `1` までの `<number>`、`0%` から `100%` までの `<percentage>`、{{cssxref("calc()")}} 式のいずれかで指定できます。この値内では、キーワード **`alpha`** を使用して、元の色のアルファチャンネルを `<number>` として参照することができます（ここで、`1.0` は `100%` と同等です）。

### 返値

元の色と同じ色空間にあり、色要素が同一で、指定されたとおりにアルファチャンネルの値が変更された色値。

## 解説

`alpha()` 関数は、[相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors) 関数の一種であり、他の要素を変更することなく、任意の色の透明度を調整することができます。これは、デザイントークンや独自のプロパティの色に対して半透明のバリエーションが必要で、別個の値を管理するのではなく、元の色から自動的に導出したい場合に特に役立ちます。

アルファ値の引数内では、要素キーワード `alpha` は、元の色のアルファチャンネルを `[0, 1]` の範囲の {{cssxref("&lt;number&gt;")}} として評価されます。これにより、入力値に対する相対的な出力アルファ値を表すことができます。例えば、`calc(alpha * 0.5)` で半減させたり、`clamp(0.2, alpha, 0.8)` で範囲を制限したりすることができます。

一般的な [相対色表記法](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)（例：`oklch(from ...)`）とは異なり、`alpha()` 関数は、元の色空間の個々の色チャンネルキーワードを公開しません。この関数はアルファチャンネルのみを扱い、色のその他の部分はそのまま維持します。

返値は常に、元の色と同じ色空間になります。例えば、元の色が [`oklch()`](/ja/docs/Web/CSS/Reference/Values/color_value/oklch) の色である場合、結果も OKLCh で表現され、明度、彩度、色相は元の色と同じになります。

## 形式文法

{{CSSSyntax}}

## 例

### 色のアルファ値を置き換える

この例では、2 つの色を指定します。2 つ目のは色は、1 つ目の色を `alpha()` 関数に渡し、その際にアルファチャンネルを `80%` という固定値に設定することで定義されます。2 つの色を 2 つの {{htmlelement("div")}} 要素の {{cssxref("background-color")}} として設定し、その違いを示しています。

```html live-sample___replace-alpha
<div class="box1">オリジナル</div>
<div class="box2">修正 80% alpha</div>
```

```css live-sample___replace-alpha
:root {
  --my-color: oklch(60% 0.25 315 / 0.3);

  /* 色は同じですが、不透明度を 80% に設定しています */
  --my-color-80: alpha(from var(--my-color) / 80%);
}

.box1 {
  background-color: var(--my-color);
}

.box2 {
  background-color: var(--my-color-80);
}
```

```css hidden live-sample___replace-alpha live-sample___derive-alpha
body {
  font-family: sans-serif;
  display: flex;
  gap: 10%;
  justify-content: center;
}

div {
  width: 40%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

{{EmbedLiveSample("replace-alpha", "100%", 100)}}

### 半透明のバリエーションの作成

この例は前回の例とよく似ていますが、今回は `calc()` 式内で `alpha` コンポーネントキーワードを使用して、2 つ目色のアルファ値を 1 つ目色のアルファ値の半分として計算している点が異なります。

```html live-sample___derive-alpha
<div class="box1">オリジナル</div>
<div class="box2">派生形 50% alpha</div>
```

```css live-sample___derive-alpha
:root {
  --my-color: oklch(60% 0.25 315 / 0.8);

  /* --my-color の不透明度の半分 */
  --my-color-half-opacity: alpha(from var(--my-color) / calc(alpha * 0.5));
}

.box1 {
  background-color: var(--my-color);
}

.box2 {
  background-color: var(--my-color-half-opacity);
}
```

{{EmbedLiveSample("derive-alpha", "100%", 100)}}

### ホバー時に色をフェードさせる

この例では、{{cssxref(":hover")}} の際に要素の背景の不透過度が `40%` までフェードしますが、色自体は変わりません。

```html live-sample___fade-on-hover
<button class="card">ここにマウスをかざしてください</button>
```

```css live-sample___fade-on-hover
:root {
  --brand: oklch(55% 0.22 270);
}

.card {
  background-color: var(--brand);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.card:hover {
  background-color: alpha(from var(--brand) / 40%);
}
```

```css hidden live-sample___fade-on-hover
body {
  padding: 2rem;
}
```

```css hidden live-sample___replace-alpha live-sample___derive-alpha live-sample___fade-on-hover
@supports not (color: alpha(from red / 50%)) {
  body::before {
    font-family: sans-serif;
    content: "Your browser does not support the CSS alpha() function.";
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;

    z-index: 1;
    position: fixed;
    inset: 30% 0 auto;
  }
}
```

{{EmbedLiveSample("fade-on-hover", "100%", 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;color&gt;")}} データ型
- {{cssxref("&lt;alpha-value&gt;")}} データ型
- [相対色の使用](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
- [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*) および {{cssxref("var")}}
