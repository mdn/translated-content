---
title: clamp()
slug: Web/CSS/Reference/Values/clamp
original_slug: Web/CSS/clamp
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`clamp()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、定義された下限値と上限値の範囲内の値を、その範囲内に制限します。この関数は、最小値、推奨値、および最大許容値の 3 つの引数を取ります。

{{InteractiveExample("CSS デモ: clamp()")}}

```css interactive-example-choice
font-size: clamp(1rem, 2.5vw, 2rem);
```

```css interactive-example-choice
font-size: clamp(1.5rem, 2.5vw, 4rem);
```

```css interactive-example-choice
font-size: clamp(1rem, 10vw, 2rem);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    このテキストのフォントサイズは、ページのベースフォントとビューポートのサイズによって異なります。
  </div>
</section>
```

これらの例のように、フォントの大きさに `clamp()` を使用すると、ビューポートの大きさに合わせてフォントの大きさを設定することができますが、最小フォントサイズを下回ったり、最大フォントサイズを上回ったりすることはありません。これは [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/) のコードと同じ効果がありますが、1 行で済み、メディアクエリーも使用しません。

## 構文

```css
/* 静的な値 */
width: clamp(200px, 40%, 400px);
width: clamp(20rem, 30vw, 70rem);
width: clamp(10vw, 20em, 100vw);

/* 計算値 */
width: clamp(min(10vw, 20rem), 300px, max(90vw, 55rem));
width: clamp(100px, calc(30% / 2rem + 10px), 900px);
```

### 引数

`clamp(min, val, max)` 関数は、カンマで区切られた 3 つの式を引数として受け入れます。

- `min`
  - : 最小値は、最小（最も負側の）値です。これは、許容値の範囲の下限です。推奨値がこれより小さい場合、最小値が使用されます。

- `val`
  - : 推奨値は、結果が最小値と最大値の間にある場合にその値が使用される式です。

- `max`
  - : 最大値は、推奨値がこれより大きい場合に、プロパティの値に代入される最大の（最も正側の）式値です。

式は、計算関数（詳しくは {{CSSxRef("calc", "calc()")}} を参照）、リテラル値、有効な引数型として評価されるその他の式（{{CSSxRef("&lt;length&gt;")}} など）、または入れ子になった {{CSSxRef("min", "min()")}} および {{CSSxRef("max", "max()")}} 関数です。数式としては、 `calc()` 関数自体を使用せずに加算、減算、乗算、除算を使用することができます。計算順を指定するために括弧を使用することもできます。

式の中でそれぞれの値に異なる単位を使用し、いずれかの引数を構成する計算関数の中で異なる単位を使用することもできます。

この関数を使用する際には、次の点に留意してください。

- 自動レイアウト、固定レイアウトを問わず、表の列、列グループ、行、行グループ、セルの幅や高さのパーセント値を出力する数式は、 `auto` が指定されたものとして扱われることがあります。
- 式の値として `max()` および `min()` 関数を重ねることは許可されており、内側のものは単純な括弧として扱われます。式は完全な数式であるため、 calc() 関数自体を使用せずに加算、減算、乗算、除算を使用することができます。
- 式は加算 ( `+` )、減算 ( `-` )、乗算 ( `*` )、除算 ( `/` ) 演算子で組み合わせた値にすることがができ、標準の演算子の優先順位を使用します。 + および - 演算子の両側に空白を入れることを忘れないでください。式の中の値には {{CSSxRef("&lt;length&gt;")}} の構文の値にすることができます。式の中のそれぞれの値に異なる単位を使用することができます。必要に応じて、計算順を指定するために括弧を使用することもできます。
- {{CSSxRef("min()")}} および {{CSSxRef("max()")}} を `clamp()` 関数の中で使用したくなるでしょう。

### 返値

`clamp(MIN, VAL, MAX)` は `max(MIN, min(VAL, MAX))` として解決されます。

指定された引数に基づいて、この関数は {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;integer&gt;")}} のいずれかを返します。

### 形式文法

{{CSSSyntax}}

## 例

### min(), max(), clamp() の比較

この例では、レスポンシブにサイズを設定するために {{CSSxRef("min", "min()")}}、
{{CSSxRef("max", "max()")}}、`clamp()` を使用する ウェブページを指定しています。

この例では、3 つの方法でページ要素のサイズを調整しています。

- テキストの行の長さ
- 段落テキストのフォントサイズ
- 見出しテキストのフォントサイズ

3 つのケースすべてにおいて、ページはビューポート相対単位（[`vw`](/ja/docs/Web/CSS/Reference/Values/length#vw) と {{cssxref("percentage")}}）、ビューポートの幅に応じて変化するサイズを設定し、ビューポート相対ではない値（[`rem`](/ja/docs/Web/CSS/Reference/Values/length#rem) と [`px`](/ja/docs/Web/CSS/Reference/Values/length#px)）を組み合わせて、最小サイズや最大サイズを実装しています。

例は <https://mdn.github.io/css-examples/min-max-clamp/> にあります。新しいウィンドウで開いて、ウィンドウの幅を調整してみてください。

**行の長さ** （[`<body>`](/ja/docs/Web/CSS/Reference/Properties/width) 要素の [`width`](/ja/docs/Web/CSS/Reference/Properties/width) によって制御される）は、ウィンドウの幅が広くなるにつれて長くなりますが、ある点 (`1000px`) を超えるとそれ以上は長くなりません。 `min()` を使用して、**行の最大長**を設定しています。これは `1000px` 未満にはなりますが、それ以上にはなりません。長い行は読みにくいため、行の長さを制限したい場合が多いため、これは役立ちます。これを実現するために、 `min(1000px, calc(70% + 100px))` を使用しています。パーセント値による計算の結果が `1000px` を超えた場合、固定値 `1000px` に切り替わります。

**段落テキストのサイズ**は、[`font-size`](/ja/docs/Web/CSS/Reference/Properties/font-size) で制御され、 [`<p>`](/ja/docs/Web/HTML/Reference/Elements/p) 要素によって制御される、ウィンドウが狭くなるにつれて減少しますが、ある点（`1.2vw` が `1.2rem` 未満になる点）を超えると、それ以上は小さくはなりません。ここでは、最小フォントサイズを設定するために `max()` を使用しています。フォントは `1.2rem` より大きく伸長することはできますが、それより小さくはなりません。これは、非常に小さなテキストは読みにくいため、役立ちます。これを実現するために、 `max(1.2rem, 1.2vw)` を使用しています。これは、 `font-size` が `1.2rem` に設定されることを意味します。ただし、 `1.2vw` の計算値が `1.2rem` より大きい場合は、代わりに `1.2vw` に設定されます。

[`<h1>`](/ja/docs/Web/CSS/Reference/Properties/font-size) 要素の [`font-size`](/ja/docs/Web/CSS/Reference/Properties/font-size) によって制御される **見出しテキストのサイズ** は、最大値と最小値の両方のしきい値を持つビューポート相対値です。これを実現するために、`clamp(1.8rem, 2.5vw, 2.8rem)` を使用します。ビューポート相対の値は `2.5vw` ですが、`1.8rem` と `2.8rem` の間に制限されているため、結果は次のようになります。

- `2.5vw` の計算値が `1.8rem` 未満の場合、`1.8rem` が使用されます
- `2.5vw` の計算値が `2.8rem` より大きい場合、`2.8rem` が使用されます。

これにより、見出しのテキストが、とても狭いウィンドウでは小さくなりすぎたり、とても広いウィンドウでは大きくなりすぎたりすることを防ぎます。

#### HTML

```html
<h1>基本的なレスポンシブ検査</h1>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci orci,
  eleifend id risus nec, mattis rutrum velit. Suspendisse fringilla egestas erat
  eu convallis. Phasellus eu velit ut magna dapibus elementum cursus at ligula.
  Ut tempus varius nibh, nec auctor sapien iaculis sit amet. Fusce iaculis,
  libero quis elementum viverra, nulla ante accumsan lectus, sit amet convallis
  lacus ipsum vel est. Curabitur et urna non est consectetur pulvinar vel id
  risus. Ut vestibulum, sem in semper aliquet, felis arcu euismod sapien, ac
  imperdiet massa nisl quis sem. Vestibulum ac elementum felis, in tempor velit.
  Pellentesque purus ex, mattis at ornare quis, porta condimentum mi. Donec
  vestibulum ligula vel nulla blandit, quis euismod nulla vestibulum.
  Suspendisse potenti. Nunc neque mauris, tempor sed facilisis at, ultrices eget
  nulla. Pellentesque convallis ante nec augue porttitor, id tempus ante luctus.
</p>

<p>
  Integer rutrum sollicitudin tellus, quis cursus nulla scelerisque nec. Nunc eu
  facilisis lorem. Maecenas faucibus sapien eleifend, semper tellus at, pharetra
  quam. Cras feugiat vulputate tortor at rhoncus. Class aptent taciti sociosqu
  ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non felis
  quis sem lobortis sodales vel id libero. Phasellus sit amet placerat lorem.
</p>
```

#### CSS

```css
html {
  font-family: sans-serif;
}

body {
  margin: 0 auto;
  width: min(1000px, calc(70% + 100px));
}

h1 {
  letter-spacing: 2px;
  font-size: clamp(1.8rem, 2.5vw, 2.8rem);
}

p {
  line-height: 1.5;
  font-size: max(1.2rem, 1.2vw);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("max", "max()")}}
- {{CSSxRef("min", "min()")}}
- [学習: CSS 値と単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
