---
title: CSS `row-rule-style` プロパティ
short-title: row-rule-style
slug: Web/CSS/Reference/Properties/row-rule-style
l10n:
  sourceCommit: a9dc3374034d357cbfea717fd5d641605359e3c7
---

{{SeeCompatTable}}

**`row-rule-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、複数行のグリッド、フレックス、段組みレイアウトで行・段の間に引かれる罫線のスタイルを設定します。

{{InteractiveExample("CSS Demo: row-rule-style")}}

```css interactive-example-choice
row-rule-style: solid;
```

```css interactive-example-choice
row-rule-style: inset, outset;
```

```css interactive-example-choice
row-rule-style: repeat(2, dashed, dotted), solid;
```

```css interactive-example-choice
row-rule-style: solid, repeat(auto, dashed, dotted), solid;
```

```css interactive-example-choice
row-rule-style: hidden;
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
  row-rule-width: thick;
  row-rule-color: magenta;
  gap: 7px;
  text-align: left;
}
```

## 構文

```css
/* 単一の値 */
row-rule-style: none;
row-rule-style: hidden;
row-rule-style: dotted;

/* 複数の値 */
row-rule-style: groove, dashed, solid;
row-rule-style: double, repeat(5, ridge), double;
row-rule-style: solid, repeat(auto, inset, outset), solid;

/* グローバル値 */
row-rule-style: inherit;
row-rule-style: initial;
row-rule-style: revert;
row-rule-style: revert-layer;
row-rule-style: unset;
```

### 値

`row-rule-style` プロパティは、カンマ区切りの値のリストを指定できます。指定可能な値には、次のものがあります。

- `<line-style>`
  - : {{cssxref("&lt;line-style&gt;")}}: `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset` のいずれかです。デフォルト値は `none` です。

- `<repeat-line-style>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で {{cssxref("&lt;integer&gt;")}} で `1` 以上の値を指定し、それ以降の引数で 1 つ以上の {{cssxref("&lt;line-style&gt;")}} 値を指定したものです。この整数値は、`<line-style>` の値が何回繰り返されるかを指定します。

- `<auto-repeat-line-style>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で `auto` を指定し、それ以降の引数で 1 つ以上の `<line-style>` 値を指定したものです。指定された `<line-style>` の値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して値を埋めるために、必要な回数だけ繰り返して使用されます。

## 解説

`row-rule-style` プロパティは、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)のコンテナーに複数の行・段がある場合に、行・段間の隙間に描画される罫線のスタイルを定義します。

この値は、カンマ区切りの一連の成分からなり、`<line-style>`、`<repeat-line-style>`、`<auto-repeat-line-style>` といった型を含めることができます。

`row-rule-style` は、{{cssxref("row-rule-color")}} および {{cssxref("row-rule-width")}} プロパティとともに、一括指定の {{cssxref("row-rule")}} で設定できます。`row-rule-style` は、{{cssxref("column-rule-style")}} プロパティとともに、一括指定の {{cssxref("rule-style")}} で設定することもできます。

プロパティの値が 1 つの `<line-style>` のみで構成されている場合、すべての行・段間の罫線がそのスタイルになります。次のように宣言すると、すべての行・段間の罫線が `dashed` になります。

```css
row-rule-style: dashed;
```

複数の `<line-style>` が宣言されている場合は、行・段間の罫線に、指定された順序で適用されます。罫線の数が `<line-style>` の値の数より多い場合、すべての罫線にスタイルが割り当てられるまで、スタイルのリストが繰り返し適用されます。例えば、次のように宣言すると、奇数番目の罫線は `dashed`、偶数番目の罫線は `dotted` になります。

```css
row-rule-style: dashed, dotted;
```

### 反復される罫線のスタイル

`repeat()` 関数は、最初の引数として `1` 以上の整数を指定することで、その後の引数として渡された有効な CSS {{cssxref("&lt;line-style&gt;")}} 値のリストを、指定された回数だけ繰り返すことができます。これにより、同じ値を繰り返し使用することなく、同じスタイルを指定した回数だけ繰り返すことができます。`<line-style>` キーワードの値や、有効な `<line-style>` に解決されるカスタムプロパティを記載することができます。`repeat()` を使用すると、値の記述が簡潔になり、行・段数に関係なく、単一の関数で繰り返しパターンを記述できるようになります。以下の宣言は同等です。

```css
row-rule-style: solid, outset, inset, outset, inset;
row-rule-style: solid, repeat(2, outset, inset);
```

これにより、5 つのスタイルのリストが作成されます。`row-rule-style` の値に含まれるスタイルリストのスタイル数が、行・段間の数を超えた場合、余分なスタイル値は無視されます。コンテナーが 3 列の場合、1 番目の行・段間に適用される罫線は `solid`、2 番目の列・段間に適用される罫線は `outset` になります。

溝の数の方がスタイルの数より多い場合、スタイルのリストが繰り返されます。コンテナーの行・段数が 6、11、16、21 の場合、このスタイルの順序はそれぞれ 1 回、2 回、3 回、4 回繰り返され、最後の罫線は `inset` となります。

### 自動反復される罫線のスタイル

`repeat()` 関数は、正の整数の代わりに、第一引数として `auto` を受け取ることもできます。第一引数に `auto` を指定すると、その後の引数として渡された `<line-style>` の値は、プロパティ値の他の要素によって明示的に指定されていない行・段間の罫線に対して、値を埋めるのに必要な回数だけ繰り返されます。

```css
row-rule-style: solid, repeat(auto, dotted), solid;
```

この場合、コンテナーの行・段数が 3、6、11、16、21 のどれであっても、最初と最後の行・段間罫線は常に `solid` となり、それ以外のすべての行・段間罫線は `dotted` となります。列・段が 2 つまたは 3 つしかない場合は、点線の段間罫線は存在しません。

`auto` キーワードを`repeat()` 関数内で使用すると、リストの他の部分から値を受け取らない罫線の値を設定する自動リピーターを作成し、リストが繰り返されるのを防ぎます。`row-rule-style` の値内では、`repeat(auto, <line-style>)` を 1 つだけ指定することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、フレックスアイテム間に描画される罫線に対して、単一のスタイルを定義します。

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
  row-rule-width: 3px;
  row-rule-color: red;

  row-rule-style: dashed;
}
```

#### 結果

{{EmbedLiveSample("Basic", "", "180")}}

### 反復する値

この例では、スタイルのリスト内にある値の数が、行間の罫線の数よりも少ない場合、値が繰り返し使用される様子を示しています。

前回の例と同じ HTML と CSS を使用し、`row-rule-style` の値として、カンマで区切られた 3 つのスタイルを記載します。

```css live-sample___repeat
ul {
  row-rule-style: solid, dotted, dashed;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### `repeat()` 関数の使用

この例では、`repeat()` 関数を `row-rule-style` プロパティの値内で使用する方法について説明します。HTML と CSS は前回の例と同じものを使用します。`repeat()` 関数を記載し、2 つの `<line-style>` 値のリストを 3 回繰り返すように設定しています。

```css live-sample___func live-sample___auto
ul {
  row-rule-style: double, repeat(3, inset, dashed), double;
}
```

{{EmbedLiveSample("func", "", "180")}}

フレックスコンテナーには 6 つの行があるため、溝は 5 つあります。`repeat()` 関数は 2 つのスタイル値を 3 回繰り返すため、8 つのスタイル値からなるリストが生成され、リストの最後の 3 つの値は破棄されます。

### `auto` を `repeat()` で使用

この例では、`repeat()` 関数内で整数の代わりに `auto` を使用する方法を示しています。

`repeat(auto, <line-style>)` を使用することで、最初と最後の罫線を除き、すべての罫線を `dotted` に設定し、最初と最後の罫線は不透明な `solid` に設定します。

```css live-sample___auto
ul {
  row-rule-style: solid, repeat(auto, dotted), solid;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule-style: solid, dotted) {
    body::before {
      content: "このブラウザーは row-rule-style プロパティに対応していません。";
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
- {{cssxref("row-rule-width")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule")}} 一括指定
- {{cssxref("rule-style")}} 一括指定
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
