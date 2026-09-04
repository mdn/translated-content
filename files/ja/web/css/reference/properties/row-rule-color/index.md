---
title: CSS `row-rule-color` プロパティ
short-title: row-rule-color
slug: Web/CSS/Reference/Properties/row-rule-color
l10n:
  sourceCommit: 9cf3002bd29376c15d49df6fab2e6a264285abf6
---

{{SeeCompatTable}}

**`row-rule-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、複数行のグリッド、フレックス、段組みレイアウトで行・段間に引かれる罫線の色を設定します。

{{InteractiveExample("CSS Demo: row-rule-color")}}

```css interactive-example-choice
row-rule-color: magenta;
```

```css interactive-example-choice
row-rule-color: magenta, goldenrod;
```

```css interactive-example-choice
row-rule-color: repeat(2, magenta), goldenrod;
```

```css interactive-example-choice
row-rule-color: goldenrod, repeat(auto, magenta), goldenrod;
```

```css interactive-example-choice
row-rule-color: currentColor;
```

```html interactive-example
<section id="default-example">
  <ul id="example-element">
    <li>One fish</li>
    <li>Two fish</li>
    <li>Red fish</li>
    <li>Blue fish</li>
  </ul>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-flow: column;
  row-rule-style: solid;
  row-rule-width: 5px;
  gap: 5px;
  text-align: left;
}
```

## 構文

```css
/* 単一の値 */
row-rule-color: red;
row-rule-color: rgb(192 56 78);
row-rule-color: transparent;
row-rule-color: hsl(0 100% 50% / 60%);
row-rule-color: var(--primaryColor);

/* 複数の値 */
row-rule-color: red, transparent;
row-rule-color: repeat(3, red), repeat(3, transparent);
row-rule-color: repeat(3, red), repeat(3, yellow, blue);
row-rule-color: red, repeat(auto, transparent), red;
row-rule-color: red, repeat(auto, blue, yellow), red;
row-rule-color: repeat(3, red), repeat(auto, transparent), repeat(3, red);

/* グローバル値 */
row-rule-color: inherit;
row-rule-color: initial;
row-rule-color: revert;
row-rule-color: revert-layer;
row-rule-color: unset;
```

### 値

`row-rule-color` プロパティは、カンマ区切りの値のリストを指定できます。指定可能な値には、次のものがあります。

- `<line-color>`
  - : {{cssxref("&lt;color&gt;")}} で、罫線の色を表します。

- `<repeat-line-color>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で {{cssxref("&lt;integer&gt;")}} で `1` 以上の値を指定し、それ以降の引数で 1 つ以上の `<color>` 値を指定したものです。この `<integer>` は、一連の `<color>` 値を繰り返す回数です。

- `<auto-repeat-line-color>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で `auto` を指定し、それ以降の引数で 1 つ以上の `<color>` 値を指定したものです。指定された `<color>` の値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して値を埋めるために、必要な回数だけ繰り返して使用されます。

## 解説

`row-rule-color` プロパティは、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)のコンテナーに複数の行・段がある場合に、行・段間の隙間に描画される罫線の色を定義します。

この値は、カンマ区切りの一連の成分からなり、`<line-color>`、`<repeated-line-color>`、`<auto-repeat-line-color>` といった型を含めることができます。

`row-rule-color` は、{{cssxref("row-rule-width")}} および {{cssxref("row-rule-style")}} プロパティとともに、一括指定の {{cssxref("row-rule")}} で設定できます。`row-rule-color` は、{{cssxref("column-rule-color")}} プロパティとともに、一括指定の {{cssxref("rule-color")}} で設定することもできます。

`<line-color>` には、有効な CSS {{cssxref("&lt;color&gt;")}} 値を任意に指定できます。プロパティの値が 1 つの `<color>` のみで構成されている場合、すべての罫線がその色になります。次のように宣言すると、すべての罫線が青色になります。

```css
row-rule-color: blue;
```

複数の `<line-color>` が宣言されている場合は、行・段間罫線に、指定された順序で適用されます。罫線の数が `<line-color>` の値の数より多い場合、すべての罫線に色が割り当てられるまで、罫線の色のリストが繰り返し適用されます。例えば、次のように宣言すると、奇数番目の罫線は青、偶数番目の罫線は黄色になります。

```css
row-rule-color: blue, yellow;
```

### 反復される罫線の色

`repeat()` 関数は、最初の引数として `1` 以上の整数を指定することで、その後の引数として渡された有効な CSS {{cssxref("&lt;color&gt;")}} 値のリストを、指定された回数だけ繰り返すことができます。これにより、同じ `<line-color>` を何度も繰り返すことなく、同じ色を指定した回数だけ繰り返すことができます。次の宣言は同等です。

```css
row-rule-color: blue, yellow, red, yellow, red;
row-rule-color: blue, repeat(2, yellow, red);
```

CSS の色関数や独自のプロパティなど、あらゆる色空間の有効な色値を指定することができます。特に色値が複雑になるにつれて、`repeat()` を使用すると記述が簡単になります。これにより、行数に関係なく、単一の関数だけで繰り返しパターンを記述できるようになります。

`--base: yellow` と `--mixin: blue` を設定した場合、次のの記述は前の宣言と同様の結果になります。

```css
row-rule-color:
  color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
  repeat(
    2,
    color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin)),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin))
  );
```

これにより、5 色の色リストが作成されます。`row-rule-color` の値に含まれる色リストの色数が、行・段間の数を超えた場合、余分な色値は無視されます。コンテナーが 3 列の場合、1 番目の行・段間に適用される罫線は青、2 番目の行・段間に適用される罫線は黄色になります。

溝の数が色の数より多い場合、すべての行・段間罫線に色が割り当てられるまで、色のリストが繰り返されます。コンテナーの行数が 6、11、16、21 行の場合、この色の順序はそれぞれ 1 回、2 回、3 回、4 回繰り返され、最後は赤になります。

### 自動反復される罫線の色

`repeat()` 関数は、正の整数の代わりに、第一引数として `auto` を受け取ることもできます。第一引数に `auto` を指定すると、その後の引数として渡された `<color>` の値は、プロパティ値の他の要素によって明示的に指定されていない行・段間罫線に対して、値を埋めるのに必要な回数だけ繰り返されます。

```css
row-rule-color: blue, repeat(auto, yellow), red;
```

この場合、最初の行間罫線は青、最後の行間罫線は赤、それ以外の行間罫線はすべて黄色になります。コンテナーの行数が 3、6、11、16、21 のどれであっても、最初の罫線は常に青になり、罫線が 2 本以上ある限り、最後の行間罫線は常に赤になります。それ以外のすべての行間罫線は黄色になります。つまり、行が 2 行または 3 行しかない場合は、黄色の線は現れません。

`auto` キーワードを`repeat()` 関数内で使用すると、リストの他の部分から値を受け取らない罫線色の値を設定する自動リピーターを作成し、リストが繰り返されるのを防ぎます。`row-rule-color` の値に記載することができる `repeat(auto, <color>)` の数は、最大 1 つです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、フレックスアイテム間に描画される罫線の色を単一の色で定義します。

#### HTML

ここでは、ダイナミックなスポーツ・デュオの一覧を掲載します。

```html live-sample___basic live-sample___repeat live-sample___func live-sample___auto
<ul>
  <li>Simone Biles + Jonathan Owens</li>
  <li>Serena Williams + Venus Williams</li>
  <li>Aaron Judge + Giancarlo Stanton</li>
  <li>LeBron James + Dwyane Wade</li>
  <li>Xavi Hernandez + Andres Iniesta</li>
  <li>Kerri Walsh + Misty May Treanor</li>
</ul>
```

#### CSS

このリストをフレックスコンテナーとして定義し、{{cssxref("flex-direction")}} を `column` に設定し、{{cssxref("flex-flow")}} の一括指定を使用して行を生成します。また、{{cssxref("gap")}} を `5px` に指定して、行間に `3px` の破線の罫線が収まるだけの十分な余地を確保します。

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;
  row-rule-style: dashed;
  row-rule-width: 3px;
  row-rule-color: blue;
}
```

#### 結果

{{EmbedLiveSample("Basic", "", "180")}}

### 複数の値

この例では、色のリスト内にある値の数が、行間の溝の数よりも少ない場合、値が繰り返し使用される様子を示しています。

前回の例と同じ HTML と CSS を使用し、`row-rule-color` の値として、カンマで区切られた 3 つの色を記載します。

```css live-sample___repeat
ul {
  row-rule-color: blue, yellow, red;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### `repeat()` 関数の使用

この例では、`repeat()` 関数を `row-rule-color` プロパティの値内で使用する方法と、この関数が複雑な値を扱いにくさを軽減することを示しています。

前回の例と同じ HTML と CSS を使用します。値がどのように複雑になり得るか、および `repeat()` 関数の有用性を示すために、2 つのカスタムプロパティを宣言し、それらを 3 つの {{cssxref("color-mix()")}} 色関数の宣言で使用して、前回の例と同じ青、赤、黄の色を生成します。2 つ目は `repeat()` 関数内にあり、3 回繰り返すように設定されています。

```css live-sample___func live-sample___auto
ul {
  --base: yellow;
  --mixin: blue;
  row-rule-color:
    color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
    repeat(3, color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin))),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin));
}
```

{{EmbedLiveSample("func", "", "180")}}

フレックスコンテナーには 6 つの行があるため、溝は 5 つあります。`repeat()` 関数は 2 つ目の色を 3 回繰り返すため、5 色の色リストが作成されます。行間の溝の数は色の総数と同じであるため、色が繰り返されることはありません。

### `auto` を `repeat()` で使用

この例では、`repeat()` 関数内で整数の代わりに `auto` を使用する方法を示しています。

`repeat(auto, <color>)` を使用することで、最初と最後の罫線を除き、すべての罫線をほぼ透明な黒 (`#0003`) に設定し、最初と最後の罫線は不透明な `black` に設定します。

```css live-sample___auto
ul {
  row-rule-color: black, repeat(auto, #0003), black;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule-color: red, blue) {
    body::before {
      content: "このブラウザーは row-rule-color プロパティに対応していません。";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("row-rule-width")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("column-rule-color")}}
- {{cssxref("row-rule")}} 一括指定
- {{cssxref("rule-color")}} 一括指定
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
