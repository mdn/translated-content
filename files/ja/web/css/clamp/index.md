---
title: clamp()
slug: Web/CSS/clamp
---

{{CSSRef}}

**`clamp()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、値を上限と下限の間に制限します。 `clamp()` によって、定義された最大値と最小値の間の値を選択することができます。最小値、推奨値、最大値の3つの引数を取ります。 `clamp()` 関数は {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;integer&gt;")}} のいずれでも使用することができます。

`clamp(MIN, VAL, MAX)` は `{{CSSxRef("max()")}}(MIN, {{CSSxRef("min()")}}(VAL, MAX))` と同等です。

{{EmbedInteractiveExample("pages/css/function-clamp.html")}}

これらの例のように、フォントの大きさに `clamp()` を使用すると、ビューポートの大きさに合わせてフォントの大きさを設定することができますが、最小フォントサイズを下回ったり、最大フォントサイズを上回ったりすることはありません。これは [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/) のコードと同じ効果がありますが、1 行で済み、メディアクエリーも使用しません。

## 構文

`clamp()` 関数は、3 つの式を最小値、推奨値、最大値の順で引数としてカンマ区切りで受け取ります。

最小値は最も小さい (最も負側の) 値です。これは許される値の範囲の下限です。推奨値がこの値よりも小さい場合、最小値が使用されます。

推奨値は、結果が最小値と最大値の間である限り使用される値の式です。

最大値は最も大きな (最も正側の) 値で、推奨値がこの上限値よりも大きい場合にプロパティの値に代入されます。

式は計算関数 (詳しくは {{CSSxRef("calc()")}} を参照)、リテラル値、 {{CSSxRef("attr()")}} のように正しい引数の型 ({{CSSxRef("&lt;length&gt;")}} など) として評価されるその他の式、重複した {{CSSxRef("min()")}} および {{CSSxRef("max()")}} 関数などです。数式としては、 `calc()` 関数自体を使用せずに加算、減算、乗算、除算を使用することができます。計算順を指定するために括弧を使用することもできます。

式の中でそれぞれの値に異なる単位を使用し、いずれかの引数を構成する計算関数の中で異なる単位を使用することもできます。

### メモ

- 自動レイアウト、固定レイアウトを問わず、表の列、列グループ、行、行グループ、セルの幅や高さのパーセント値を出力する数式は、 `auto` が指定されたものとして扱われる*ことが*あります。
- 式の値として `max()` および `min()` 関数を重ねることは許可されており、内側のものは単純な括弧として扱われます。式は完全な数式であるため、 `calc()` 関数自体を使用せずに加算、減算、乗算、除算を使用することができます。
- 式は加算 ( + )、減算 ( - )、乗算 ( \* )、除算 ( / ) 演算子で組み合わせた値にすることがができ、標準の演算子の優先順位を使用します。 + および - 演算子の両側に空白を入れることを忘れないでください。式の中の値には {{CSSxRef("&lt;length&gt;")}} の構文の値にすることができます。式の中のそれぞれの値に異なる単位を使用することができます。必要に応じて、計算順を指定するために括弧を使用することもできます。
- {{CSSxRef("min()")}} および {{CSSxRef("max()")}} を `clamp()` 関数の中で使用したくなるでしょう。

### 形式文法

{{CSSSyntax}}

## 例

### min, max, clamp の比較

この例では、いくつかの大きさに対して {{CSSxRef("min()")}}、{{CSSxRef("max()")}}、{{CSSxRef("clamp()")}} を利用した単純なレスポンシブの例を紹介します。

[`<body>`](/ja/docs/Web/HTML/Element/body) 要素の [`width`](/ja/docs/Web/CSS/width) には、`min(1000px, calc(70% + 100px))` が設定されています。これは、`calc(70% + 100px)` の結果が `1000px` よりも小さい場合には、その値に設定されることを意味しています。`min()` では最大値を設定することができます。

[`<p>`](/ja/docs/Web/HTML/Element/p) 要素の [`font-size`](/ja/docs/Web/CSS/font-size) には、`max(1.2rem, 1.2vw)` が設定されています。すなわち、計算された `1.2vw` の値が `1.2rem` の値よりも大きい場合には、代わりにその値が設定されます。`max()` では、最小値を設定することができ、このような場合にはアクセシビリティの観点からも便利です。

[`<h1>`](/ja/docs/Web/HTML/Element/Heading_Elements) 要素の `font-size` は、`clamp(1.8rem, 2.5vw, 2.8rem)` と設定されています。これは、`2.5vw` の計算値が `1.8rem` の値よりも大きくなるまで、`font-size` が `1.8rem` に設定されることを意味します。この時点では、`2.5vw` の計算値が `2.8rem` の計算値よりも大きくなるまで、`font-size` は `2.5vw` に設定されます。この時点で、`font-size` は `2.8rem` に設定されます。`clamp()` では、最小値と最大値を設定することができます。

操作してみたい場合は、[GitHub で公開されている例](https://mdn.github.io/css-examples/min-max-clamp/)を参照してください。

#### HTML

```html
<h1>Simple responsive test</h1>
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

- {{CSSxRef("calc()")}}
- {{CSSxRef("max()")}}
- {{CSSxRef("min()")}}
- [CSS 値](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)
