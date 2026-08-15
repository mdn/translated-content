---
title: CSS `column-rule-style` プロパティ
short-title: column-rule-style
slug: Web/CSS/Reference/Properties/column-rule-style
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

**`column-rule-style`** は [CSS](/ja/docs/Web/CSS) のプロパティで、複数列のグリッド、フレックス、段組みレイアウトで列・段の間に引かれる罫線のスタイルを設定します。

{{InteractiveExample("CSS デモ: column-rule-style")}}

```css interactive-example-choice
column-rule-style: dotted;
```

```css interactive-example-choice
column-rule-style: dashed, dotted;
```

```css interactive-example-choice
column-rule-style: repeat(2, inset, outset), double;
```

```css interactive-example-choice
column-rule-style: double, repeat(auto, dashed, solid), double;
```

```css interactive-example-choice
column-rule-style: hidden;
```

```html-nolint interactive-example
<section id="default-example">
  <p id="example-element">
    ロンドン。ノエル学期が先ごろ終わり、ジョージ卿がリンカーンズ・イン・ホールで審理を行っています。5 月らしい素晴らしい天気です。通りには、まるで水が地球の表面から引き上げたばかりかのようなほど泥が溜まっており、モーガン・ヒルをトカゲのようによたよたと歩く、長さ 2 フィートほどのカモノハシに出くわしても、決して不思議ではないでしょう。
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 6;
  column-rule-width: thick;
  column-rule-color: teal;
  gap: 7px;
}
```

## 構文

```css
/* キーワード値 */
column-rule-style: none;
column-rule-style: hidden;
column-rule-style: dotted;
column-rule-style: dashed;
column-rule-style: solid;
column-rule-style: double;
column-rule-style: groove;
column-rule-style: ridge;
column-rule-style: inset;
column-rule-style: outset;

/* 複数の値 */
column-rule-style: groove, double, dashed;
column-rule-style: solid, repeat(5, ridge), solid;
column-rule-style: dotted, repeat(auto, inset, outset), dotted;

/* グローバル値 */
column-rule-style: inherit;
column-rule-style: initial;
column-rule-style: revert;
column-rule-style: revert-layer;
column-rule-style: unset;
```

### 値

`column-rule-style` プロパティは、カンマ区切りの値のリストを指定できます。指定可能な値には、次のものがあります。

- `<line-style>`
  - : {{cssxref("&lt;line-style&gt;")}}: `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset` のいずれかです。デフォルト値は `none` です。

- `<repeat-line-style>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で {{cssxref("&lt;integer&gt;")}} で `1` 以上の値を指定し、それ以降の引数で 1 つ以上の {{cssxref("&lt;line-style&gt;")}} 値を指定したものです。この整数値は、`<line-style>` の値が何回繰り返されるかを指定します。

- `<auto-repeat-line-style>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で `auto` を指定し、それ以降の引数で 1 つ以上の `<line-style>` 値を指定したものです。指定された `<line-style>` の値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して値を埋めるために、必要な回数だけ繰り返して使用されます。

## 解説

`column-rule-style` プロパティは、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)のコンテナーに複数の列・段がある場合に、列・段間の隙間に描画される罫線のスタイルを定義します。

この値は、カンマ区切りの一連の成分からなり、`<line-style>`、`<repeat-line-style>`、`<auto-repeat-line-style>` といった型を含めることができます。

`column-rule-style` は、{{cssxref("column-rule-color")}} および {{cssxref("column-rule-width")}} プロパティとともに、一括指定の {{cssxref("column-rule")}} で設定できます。`column-rule-style` は、{{cssxref("row-rule-style")}} プロパティとともに、一括指定の {{cssxref("rule-style")}} で設定することもできます。

プロパティの値が 1 つの `<line-style>` のみで構成されている場合、すべての列・段間の罫線がそのスタイルになります。次のように宣言すると、すべての列・段間の罫線が `double` になります。

```css
column-rule-style: double;
```

複数の `<line-style>` が宣言されている場合は、列・段間の罫線に、指定された順序で適用されます。罫線の数が `<line-style>` の値の数より多い場合、すべての罫線にスタイルが割り当てられるまで、スタイルのリストが繰り返し適用されます。例えば、次のように宣言すると、奇数番目の罫線は `double`、偶数番目の罫線は `groove` になります。

```css
column-rule-style: double, groove;
```

### 反復される罫線のスタイル

`repeat()` 関数は、最初の引数として `1` 以上の整数を指定することで、その後の引数として渡された有効な CSS {{cssxref("&lt;line-style&gt;")}} 値のリストを、指定された回数だけ繰り返すことができます。これにより、同じ値を繰り返し使用することなく、同じスタイルを指定した回数だけ繰り返すことができます。`<line-style>` キーワードの値や、有効な `<line-style>` に解決されるカスタムプロパティを記載することができます。`repeat()` を使用すると、値の記述が簡潔になり、列・段数に関係なく、単一の関数で繰り返しパターンを記述できるようになります。以下の宣言は同等です。

```css
column-rule-style: solid, outset, inset, outset, inset;
column-rule-style: solid, repeat(2, outset, inset);
```

これにより、5 つのスタイルのリストが作成されます。`column-rule-style` の値に含まれるスタイルリストのスタイル数が、列・段間の数を超えた場合、余分なスタイル値は無視されます。コンテナーが 3 列の場合、1 番目の列・段間に適用される罫線は `solid`、2 番目の列・段間に適用される罫線は `outset` になります。

溝の数の方がスタイルの数より多い場合、スタイルのリストが繰り返されます。コンテナーの列・段数が 6、11、16、21 の場合、このスタイルの順序はそれぞれ 1 回、2 回、3 回、4 回繰り返され、最後の罫線は `inset` となります。

### 自動反復される罫線のスタイル

`repeat()` 関数は、正の整数の代わりに、第一引数として `auto` を受け取ることもできます。第一引数に `auto` を指定すると、その後の引数として渡された `<line-style>` の値は、プロパティ値の他の要素によって明示的に指定されていない列・段間の罫線に対して、値を埋めるのに必要な回数だけ繰り返されます。

```css
column-rule-style: solid, repeat(auto, dotted), solid;
```

この場合、コンテナーの列・段数が 3、6、11、16、21 のどれであっても、最初と最後の列・段間罫線は常に `solid` となり、それ以外のすべての列・段間罫線は `dotted` となります。列・段が 2 つまたは 3 つしかない場合は、点線の段間罫線は存在しません。

`auto` キーワードを`repeat()` 関数内で使用すると、リストの他の部分から値を受け取らない罫線の値を設定する自動リピーターを作成し、リストが繰り返されるのを防ぎます。`column-rule-style` の値内では、`repeat(auto, <line-style>)` を 1 つだけ指定することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

#### HTML

```html-nolint
<p>
  これは 3 つの段に分割されたテキストの束です。`column-rule-style` プロパティは、段と段の間に引かれる罫線のスタイルを変更するために使用されます。すばらしいと思いませんか？
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: dashed;
}
```

#### 結果

{{ EmbedLiveSample('基本的な使い方') }}

### 複数の値

#### HTML

作家のリストを作成しました。

```html live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
<ul>
  <li>Kimberlé Crenshaw</li>
  <li>Angela Y. Davis</li>
  <li>Bernardine Evaristo</li>
  <li>Audre Lorde</li>
  <li>Cathy Park Hong</li>
  <li>Zoya Patel</li>
  <li>Juno Mac</li>
  <li>Molly Smith</li>
  <li>Tara Westover</li>
</ul>
```

#### CSS

リストをフレックスコンテナーとして定義し、一括指定の {{cssxref("flex-flow")}} を使用して {{cssxref("flex-direction")}} を `row` に設定することで、列を生成します。また、`3px` の二重ティールの罫線が収まるよう、列間に十分な余地を確保するために、{{cssxref("gap")}} を `5px` に設定します。

```css live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: row;
  gap: 5px;
  column-rule-width: 3px;
  column-rule-color: teal;

  column-rule-style:
    dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden;
}
```

#### 結果

{{EmbedLiveSample("Multiple", "", "180")}}

値（10 個）が溝（8 個）よりも多いため、`none` および `hidden` の値は使用されません。

### 反復する値

この例は、スタイルのリストに含まれる値の数が罫線の数よりも少ない場合、値が繰り返し適用される様子を示しています。

前回の例と同じ HTML と CSS を使用し、`column-rule-style` の値として、カンマで区切られた 3 つのスタイルを記載します。

```css live-sample___repeat
ul {
  column-rule-style: solid, groove, double;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

### `repeat()` 関数の使用

この例では、`column-rule-style` プロパティの値内で `repeat()` 関数を使用する方法を示します。HTML と CSS は前回の例と同じものを使用します。`repeat()` 関数を記載し、2 つの `<line-style>` 値のリストを 3 回繰り返すように設定しています。

```css live-sample___func live-sample___auto
ul {
  column-rule-style: solid, repeat(3, inset, outset), solid;
}
```

{{EmbedLiveSample("func", "", "180")}}

このフレックスコンテナーには 6 つの列があり、溝は 5 つあります。`repeat()` 関数は、2 つのスタイルを 3 回繰り返して、8 つのスタイルのリストを作成します。リスト中の最後の 3 つの値は破棄されます。
<!-- 英語版をそのまま翻訳していますが、英語版の説明が矛盾しているので、後から修正される可能性があります。 -->

### `auto` を `repeat()` で使用

この例では、`repeat()` 関数内で整数の代わりに `auto` を使用する方法を示しています。

`repeat(auto, <line-style>)` を使用することで、すべての列間罫線を `groove` に設定しますが、最初と最後の列間罫線のみを `solid` に設定します。

```css live-sample___auto
ul {
  column-rule-style: solid, repeat(auto, groove), solid;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (column-rule-style: solid, groove) {
    body::before {
      content: "このブラウザーは column-rule-style プロパティでの複数の値の使用に対応していません。";
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

- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("column-rule")}} 一括指定
- {{cssxref("rule-style")}} 一括指定
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
