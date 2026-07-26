---
title: CSS `row-rule-width` プロパティ
short-title: row-rule-width
slug: Web/CSS/Reference/Properties/row-rule-width
l10n:
  sourceCommit: a9dc3374034d357cbfea717fd5d641605359e3c7
---

{{SeeCompatTable}}

**`row-rule-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、複数行のグリッド、フレックス、段組みレイアウトで行・段の間に引かれる罫線の太さを設定します。

{{InteractiveExample("CSS デモ: row-rule-width")}}

```css interactive-example-choice
row-rule-width: thin;
```

```css interactive-example-choice
row-rule-width: thin, thick;
```

```css interactive-example-choice
row-rule-width: repeat(2, thin, thick), 10px;
```

```css interactive-example-choice
row-rule-width: thick, repeat(auto, 1px, 2px), thick;
```

```css interactive-example-choice
row-rule-width: medium;
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
  row-rule-color: magenta;
  gap: 5px;
  text-align: left;
}
```

## 構文

```css
/* キーワード値 */
row-rule-width: thin;
row-rule-width: medium;
row-rule-width: thick;
row-rule-width: thin, medium, thick;
row-rule-width: thick, repeat(5, thin), thick;
row-rule-width: thick, repeat(auto, thin, medium), thick;

/* 長さの値 */
row-rule-width: 1px;
row-rule-width: 5px;
row-rule-width: 1px, 3px, 5px;
row-rule-width: 5px, repeat(auto, 1px), 10px, 15px;
row-rule-width: 5px, repeat(5, 1px, 3px), 5px;

/* グローバル値 */
row-rule-width: inherit;
row-rule-width: initial;
row-rule-width: revert;
row-rule-width: revert-layer;
row-rule-width: unset;
```

### 値

`row-rule-width` プロパティは、カンマ区切りの値のリストを指定できます。指定可能な値には、次のものがあります。

- `<'line-width'>`
  - : {{cssxref("&lt;line-width&gt;")}}: このキーワードは、`thin`、`medium`、`thick` のいずれか、または線の太さを表す正の {{cssxref("length")}} 値に設定できます。デフォルト値は `medium` です。

- `<repeat-line-width>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で {{cssxref("&lt;integer&gt;")}} で `1` 以上の値を指定し、それ以降の引数で 1 つ以上の {{cssxref("&lt;line-width&gt;")}} 値を指定します。この整数値は、`<line-width>` の値が繰り返される回数を指定します。

- `<auto-repeat-line-width>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で `auto` を指定し、それ以降の引数で 1 つ以上の `<line-width>` 値を指定したものです。指定された `<line-width>` の値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して値を埋めるために、必要な回数だけ繰り返して使用されます。

## 解説

`row-rule-width` プロパティは、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)のコンテナーで隣り合う行・段の間の溝に描画される罫線の太さを定義します。

この値は、カンマ区切りの一連の成分からなり、`<line-width>`、`<repeat-line-width>`、`<auto-repeat-line-width>` といった型を含めることができます。

`row-rule-width` は、{{cssxref("row-rule-color")}} および {{cssxref("row-rule-style")}} プロパティとともに、一括指定の {{cssxref("row-rule")}} でも設定できます。`row-rule-width` は、{{cssxref("column-rule-width")}} とともに、一括指定の {{cssxref("rule-width")}} を用いて設定することもできます。

プロパティの値が 1 つの `<line-width>` のみで構成されている場合、すべての行・段間の罫線がその太さになります。次のように宣言すると、すべての行・段間の罫線が `3px` になります。

```css
row-rule-width: 3px;
```

複数の `<line-width>` が宣言されている場合は、行・段間の罫線に、指定された順序で適用されます。罫線の数が `<line-width>` の値の数より多い場合、すべての罫線に太さが割り当てられるまで、太さのリストが繰り返し適用されます。例えば、次のように宣言すると、奇数番目の罫線は `thin`、偶数番目の罫線は `1em` になります。

```css
row-rule-width: thin, 1em;
```

### 反復される罫線の太さ

`repeat()` 関数は、最初の引数として `1` 以上の整数を指定することで、その後の引数として渡された有効な CSS {{cssxref("&lt;line-width&gt;")}} 値のリストを、指定された回数だけ繰り返すことができます。これにより、同じ値を繰り返し使用することなく、同じ値を指定した回数だけ繰り返すことができます。次の宣言は同等です。

```css
row-rule-width: 1rem, thick, thin, thick, thin;
row-rule-width: 1rem, repeat(2, thick, thin);
```

`<line-width>` として、`<line-width>` に解決されるカスタムプロパティを含む、任意の値を使用することができます。`repeat()` を使用すると、特に複雑な長さの計算を行う場合、値の記述が簡単になります。これにより、行・段の数に関係なく、単一の関数を使って繰り返しパターンを記述できるようになります。

`--base: 1vh` と `--secondary: 1vw` を設定すると、以下の記述は前回と同じ結果を提供します。

```css
row-rule-width:
  1rem,
  repeat(
    2,
    min(calc(var(--base) - 3px), 10px),
    abs(calc(var(--secondary) - 30px))
  ),
  thin;
```

これにより、6 つの太さのリストが作成されます。`row-rule-width` の値に含まれる太さのリストにある太さの数が、行・段間の数を超えた場合、余分な太さの値は無視されます。コンテナーが 3 行の場合、1 つ目の溝に適用される罫線は `1rem` の太さ、2 つ目の溝に適用される罫線は {{cssxref("min()")}} 関数で判断されます。

溝の数の方が太さの数より多い場合、太さのリストが繰り返されます。コンテナーの列・段数が 7、13、19、25 の場合、この太さの並びははそれぞれ 1 回、2 回、3 回、4 回繰り返され、最後の罫線は `thin` となります。

### 自動反復される罫線の太さ

`repeat()` 関数は、正の整数の代わりに、第一引数として `auto` を受け取ることもできます。第一引数に `auto` を指定すると、その後の引数として渡された `<line-width>` のリストの値は、プロパティ値の他の要素によって明示的に指定されていない行・段間の罫線に対して、値を埋めるのに必要な回数だけ繰り返されます。

```css
row-rule-width: thin, repeat(auto, medium), thin;
```

この場合、コンテナーの行数が 3、6、11、16、21 のいずれであっても、最初と最後の行は常に `thin` となり、それ以外のすべての行・段間罫線は `medium` になります。行数が 2 行または 3 行しかない場合は、`medium` サイズの行・段間罫線は現れません。

`auto` キーワードを`repeat()` 関数内で使用すると、リストの他の部分から値を受け取らない行罫線の幅の値を設定する自動リピーターを作成し、リストが繰り返されるのを防ぎます。`row-rule-width` の値内では、`repeat(auto, <width>)` を 1 つだけ指定することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、フレックスアイテム間に描画される罫線に対して、単一の太さを定義します。

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

このリストをフレックスコンテナーとして定義し、{{cssxref("flex-direction")}} を `column` に設定し、{{cssxref("flex-flow")}} の一括指定を使用して行を生成します。また、{{cssxref("gap")}} を `5px` に指定して、行間に `3px` の赤い破線の罫線が収まるだけの十分な余地を確保します。

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;
  row-rule-style: dashed;
  row-rule-color: red;
  row-rule-width: 3px;
}
```

#### 結果

{{EmbedLiveSample("Basic", "", "180")}}

### 反復する値

この例では、太さのリスト内にある値の数が、行間の罫線の数よりも少ない場合、値が繰り返し使用される様子を示しています。

前回の例と同じ HTML と CSS を使用し、`row-rule-width` の値として、カンマで区切られた 3 つの太さを記載します。

```css live-sample___repeat
ul {
  row-rule-width: 1px, 3px, 5px;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### `repeat()` 関数の使用

この例では、`repeat()` 関数を `row-rule-width` プロパティの値内で使用する方法と、この関数が値の宣言を縮小するのに役立つことを示しています。

前回の例と同じ HTML と CSS を使用します。値が冗長になり得ることや、`repeat()` 関数の有用性を示すために、2 つの独自のプロパティを宣言し、それらを `repeat()` 関数の宣言で使用します。`repeat()` 関数は、2 つの `<line-width>` 値からなるリストを 3 回繰り返すように設定します。

```css live-sample___func live-sample___auto
ul {
  --base: 0.5vw;
  --secondary: 1vw;
  row-rule-width:
    15px,
    repeat(
      3,
      min(calc(var(--base) + 3px), 10px),
      abs(calc(var(--secondary) - 2px))
    ),
    15px;
}
```

{{EmbedLiveSample("func", "", "180")}}

フレックスコンテナーには 6 つの行があるため、溝は 5 つあります。`repeat()` 関数は 2 つの太さを 3 回繰り返すため、8 つの太さからなるリストが生成されます。行の溝の数はすべての太さの数より少ないため、リストの最後の 3 つの値は破棄されます。

### `auto` を `repeat()` で使用

この例では、`repeat()` 関数内で整数の代わりに `auto` を使用する方法を示しています。

`repeat(auto, <line-width>)` を使用することで、最初と最後の罫線を除き、すべての罫線を `1px` に設定し、最初と最後の罫線は不透明な `5px` に設定します。

```css live-sample___auto
ul {
  row-rule-width: 5px, repeat(auto, 1px), 5px;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule-width: thin, thick) {
    body::before {
      content: "このブラウザーは row-rule-width プロパティに対応していません。";
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

- {{cssxref("row-rule-color")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule")}} 一括指定
- {{cssxref("rule-width")}} 一括指定
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
