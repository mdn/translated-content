---
title: contrast-color()
slug: Web/CSS/Reference/Values/color_value/contrast-color
l10n:
  sourceCommit: ed2725c99c6011da9d4afa5e47546fe0722ee814
---

**`contrast-color()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、{{cssxref("color_value","color")}} 値を取ってコントラストの高い色を返します。この関数はふつう、[WCAG AA の最小コントラスト](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum)（英語）を保証します。ブラウザーは異なるより良いアルゴリズムを可能性もあります。

`contrast-color()` 関数を使用すると、テキストの色を指定して、自動的に対照的な背景色を生成したり、その逆を行ったりすることができます。これにより、背景色とテキスト色の組み合わせを保守する必要を避けることができます。

## 構文

```css
contrast-color(red)
contrast-color(var(--backgroundColor))
```

### 引数

- `color`
  - : 任意の {{cssxref("&lt;color&gt;")}} 値です。

### 返値

{{cssxref("named-color")}} で、`white` または `black` です。

## 解説

`contrast-color()` 関数は、入力色とのコントラストが大きい方に応じて `white` または `black` の値を返します。入力色とのコントラストが `white` と `black` で同じ場合、`white` が返されます。

> [!WARNING]
> WCAG AA (4.5:1) のコントラスト比では、すべての場合で明確に読み取り可能なテキストを生成できるとは限りません。中間調の背景色では、黒または白の前景色と十分なコントラストが確保できない場合が一般的です。例えば、ロイヤルブルー (`#2277d3`) の背景に `contrast-color()` を適用すると黒文字となり、小さな文字では読み取り不可能です。したがって、`contrast-color()` 関数には明るい色または暗い色を使用することが推奨されます。

## 例

### ボタン用にコントラストを付けたテキスト

次の例では、背景色を変更すると、ブラウザーが自動的に送信ボタン {{htmlelement("button")}} のテキストにコントラスト色の背景を適用します。

```html hidden
<label>
  ボタンの背景色を選択:
  <input type="color" id="colorPicker" value="#660066" />
</label>
<br />
<button>送信</button>
```

```css
:root {
  --button-color: lightblue;
}

button {
  background-color: var(--button-color);

  /* テキストの色を自動的に対照的に設定 */
  color: contrast-color(var(--button-color));
}
```

```css hidden
body {
  padding: 1rem;
}

button {
  margin: 3rem;
  padding: 1rem;
  width: 150px;
  font-size: 2rem;
  border-radius: 1rem;
}

@supports not (color: contrast-color(red)) {
  body::before {
    content: "このブラウザーは contrast-color() 関数に対応していません。";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body > * {
    display: none;
  }
}
```

```js hidden
const colorPicker = document.getElementById("colorPicker");
const root = document.documentElement;

function updateColor(color) {
  root.style.setProperty("--button-color", colorPicker.value);
}

colorPicker.addEventListener("change", updateColor);
updateColor();
```

{{EmbedLiveSample("Contrasting text for a button", "", 250)}}

### ライトモードとダークモードの使用

次の例では、[`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) [メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)を使用して、オペレーティングシステムやブラウザーの色設定に基づいて背景色を設定しています。`contrast-color()` 関数を使用して、テキストの色を自動的に設定します。

ブラウザーやOSのダークモード設定を変更して、効果を確認してみてください。

```html hidden
<pre>
    Q: How does CSS transform light into energy?
  Ans: Using <a href="/ja/docs/Web/CSS/Reference/Properties/font-synthesis">font-synthesis</a>.
</pre>
```

```css
:root {
  --background-color: navy;
}

@media (prefers-color-scheme: light) {
  :root {
    --background-color: wheat;
  }
}

body,
a {
  background-color: var(--background-color);
  color: contrast-color(var(--background-color));
}
```

```css hidden
body {
  padding: 2rem;
  font-size: 1.2rem;
}

pre {
  margin-top: 3rem;
}

@supports not (color: contrast-color(red)) {
  body::before {
    content: "このブラウザーは contrast-color() 関数に対応していません。";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body {
    background-color: white;
  }

  body > * {
    display: none;
  }
}
```

{{EmbedLiveSample("Light and dark mode usage", "", 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`contrast()`](/ja/docs/Web/CSS/Reference/Values/filter-function/contrast)
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
- [CSS カスタムプロパティ](/ja/docs/Web/CSS/Reference/Properties/--*)と{{cssxref("var")}}
- [`prefers-contrast`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) および [`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) （{{cssxref("@media")}} の特性）
- [WCAG: 色のコントラスト](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [How to have the browser pick a contrasting color in CSS](https://webkit.org/blog/16929/contrast-color/) - webkit.org (2025)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - webaim.org (2025)
