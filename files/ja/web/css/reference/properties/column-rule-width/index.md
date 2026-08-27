---
title: CSS `column-rule-width` プロパティ
short-title: column-rule-width
slug: Web/CSS/Reference/Properties/column-rule-width
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

**`column-rule-width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、複数列のグリッド、フレックス、段組みレイアウトで列・段の間に引かれる罫線の太さを設定します。

{{InteractiveExample("CSS デモ: column-rule-width")}}

```css interactive-example-choice
column-rule-width: thin;
```

```css interactive-example-choice
column-rule-width: 4px;
```

```css interactive-example-choice
column-rule-width: thin, medium, thick;
```

```css interactive-example-choice
column-rule-width: repeat(2, 1px, thick), 10px;
```

```css interactive-example-choice
column-rule-width: 10px, repeat(auto, 1px, 2px), 10px;
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
  column-rule-style: solid;
  column-rule-color: teal;
  gap: 7px;
}
```

## 構文

```css
/* キーワード値 */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;
column-rule-width: thin, medium, thick;
column-rule-width: thick, repeat(5, thin), thick;
column-rule-width: thick, repeat(auto, thin, medium), thick;

/* 長さの値 */
column-rule-width: 0.1em;
column-rule-width: 5px;
column-rule-width: 1px, 3px, 5px;
column-rule-width: 0.1rem, repeat(auto, 1px), 10px, 0.5rem;
column-rule-width: 5px, repeat(5, 1px, 3px), 5px;

/* グローバル値 */
column-rule-width: inherit;
column-rule-width: initial;
column-rule-width: revert;
column-rule-width: revert-layer;
column-rule-width: unset;
```

### 値

`column-rule-width` プロパティは、カンマ区切りの値のリストを指定できます。指定可能な値には、次のものがあります。

- {{cssxref("&lt;line-width&gt;")}}
  - : 罫線の太さを、明示的な負ではない {{cssxref("&lt;length&gt;")}} または `thin`, `medium`, `thick` のキーワードで定義します。デフォルト値は `medium` です。
- `<repeat-line-width>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で {{cssxref("&lt;integer&gt;")}} で `1` 以上の値を指定し、それ以降の引数で 1 つ以上の {{cssxref("&lt;line-width&gt;")}} 値を指定します。この整数値は、`<line-width>` の値が繰り返される回数を指定します。

- `<auto-repeat-line-width>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で `auto` を指定し、それ以降の引数で 1 つ以上の `<line-width>` 値を指定したものです。指定された `<line-width>` の値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して値を埋めるために、必要な回数だけ繰り返して使用されます。

## 解説

`column-rule-width` プロパティは、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)のコンテナーで隣り合う列・段の間の溝に描画される罫線の太さを定義します。

> [!NOTE]
> `column-rule-width` は、隙間部分に描画される罫線の太さのみを定義します。これらの罫線は、[ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model/Introduction) やレイアウトには影響を与えません。溝のサイズは {{cssxref("gap")}} プロパティによって定義されます。デフォルト値は、段組みのコンテナーでは `1em`、それ以外のコンテキストでは `0` です。線の太さが {{cssxref("gap")}} より広い場合、その線は列・段のコンテンツの背後に描画されます。

この値は、カンマ区切りの一連の成分からなり、`<line-width>`、`<repeat-line-width>`、`<auto-repeat-line-width>` といった型を含めることができます。

`column-rule-width` は、{{cssxref("column-rule-color")}} および {{cssxref("column-rule-style")}} プロパティとともに、一括指定の {{cssxref("column-rule")}} でも設定できます。一方、{{cssxref("rule-width")}} は、`column-rule-width` と {{cssxref("row-rule-width")}} の両方のプロパティを設定する一括指定です。

`<line-width>` は、有効な CSS {{cssxref("&lt;line-width&gt;")}} の値であれば、どのような値でも宣言できます。具体的には、キーワード `thin`、`medium`、`thick`、または正の {{cssxref("length")}} 値です。パーセント値は無効です。

プロパティの値が 1 つの `<line-width>` のみで構成されている場合、すべての列・段間の罫線がその太さになります。次のように宣言すると、すべての列・段間の罫線が `2px` になります。

```css
column-rule-width: 2px;
```

複数の `<line-width>` が宣言されている場合は、列・段間の罫線に、指定された順序で適用されます。罫線の数が `<line-width>` の値の数より多い場合、すべての罫線に太さが割り当てられるまで、太さのリストが繰り返し適用されます。例えば、次のように宣言すると、奇数番目の罫線は `thick`、偶数番目の罫線は `0.25rem` になります。

```css
column-rule-width: thick, 0.25rem;
```

### 反復される罫線の太さ

`repeat()` 関数は、最初の引数として `1` 以上の整数を指定することで、その後の引数として渡された有効な CSS {{cssxref("&lt;line-width&gt;")}} 値のリストを、指定された回数だけ繰り返すことができます。これにより、同じ値を繰り返し使用することなく、同じ `<line-width>` を指定した回数だけ繰り返すことができます。次の宣言は同等です。

```css
column-rule-width: 1rem, thick, thin, thick, thin, thick, thin;
column-rule-width: 1rem, repeat(3, thick, thin);
```

`<line-width>` として、`<line-width>` に解決されるカスタムプロパティを含む、任意の値を使用することができます。`repeat()` を使用すると、特に複雑な長さの計算を行う場合、値の記述が簡単になります。これにより、列・段の数に関係なく、単一の関数だけで繰り返しパターンを記述できるようになります。以下の宣言は同等です。

```css
column-rule-width:
  1rem, min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)), thin;
column-rule-width:
  1rem,
  repeat(
    5,
    min(calc(var(--base) - 3px), 10px),
    abs(calc(var(--secondary) - 30px))
  ),
  thin;
```

これにより、12 の太さのリストが作成されます。`column-rule-width` の値に含まれる太さのリストにある太さの数が、列・段間の数を超えた場合、余分な太さの値は無視されます。コンテナーが 3 列の場合、1 つ目の溝に適用される罫線は `1rem` の太さ、2 つ目の溝に適用される罫線は {{cssxref("min()")}} 関数で判断されます。

溝の数の方が太さの数より多い場合、太さのリストが繰り返されます。コンテナーの列・段数が 13 または 25 の場合、この太さの並びははそれぞれ 1 回または 2 回繰り返され、最後の罫線は `thin` となります。25 列までのその他の列数については、最後の罫線は `thin` にはなりません。

### 自動反復される罫線の太さ

`repeat()` 関数は、正の整数の代わりに、第一引数として `auto` を受け取ることもできます。第一引数に `auto` を指定すると、その後の引数として渡された `<line-width>` のリストの値は、プロパティ値の他の要素によって明示的に指定されていない列・段間の罫線に対して、値を埋めるのに必要な回数だけ繰り返されます。

```css
column-rule-width: 10px, repeat(auto, thin), 10px;
```

この場合、最初の列・段の罫線は `10px`、最後の列は `10px`、それ以外のすべての列は `thin` になります。コンテナーの列数が 3、6、11、16、21 であっても、最初と最後の列は常に `10px` になります。つまり、列が 2 つまたは 3 つしかない場合は、`thin` サイズの列の罫線は存在しません。

`auto` キーワードを`repeat()` 関数内で使用すると、リストの他の部分から値を受け取らない行罫線の幅の値を設定する自動リピーターを作成し、リストが繰り返されるのを防ぎます。`column-rule-width` の値内では、`repeat(auto, <line-width>)` を 1 つだけ指定することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な使い方

この例では、単一のキーワード値を使用して、すべての列の罫線を同じサイズに設定する方法を示しています。

#### HTML

次の段落のテキストを記載します。

```html-nolint
<p>
  これは 3 段に分割されたテキストの束です。 `column-rule-width` プロパティは、段と段の間に引かれる線の太さを変更するために使用されます。すばらしいと思いませんか？
</p>
```

#### CSS

{{cssxref("column-count")}} プロパティを使用して、段組みコンテナーを生成します。{{cssxref("column-rule-style")}} プロパティのデフォルト値は `none` であるため、段間罫を表示させるには、これを目に見える値に設定する必要があります。次に、`column-rule-width` を `thick` に設定し、{{cssxref("column-rule-color")}} の値をデフォルトで `currentcolor` のままにします。

```css
p {
  column-count: 3;
  column-rule-style: solid;

  column-rule-width: thick;
}
```

#### 結果

{{EmbedLiveSample("Basic usage")}}

段組みレイアウトでは、{{cssxref("gap")}} プロパティのデフォルト値は `1em` ですが、これは `column-rule-width` よりも広いため、コンテンツと罫線が重なりません。

### 複数の値

この例では、`column-rule-width` プロパティに複数の値を使用する方法を示しています。また、オーバーフローした隙間がコンテンツの背後に描画される様子も示しています。

#### HTML

作家のリストを作成しました。

```html live-sample___basic live-sample___repeat live-sample___func live-sample___auto
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

リストをフレックスコンテナーとして定義し、一括指定の {{cssxref("flex-flow")}} を使用して {{cssxref("flex-direction")}} を `row` に設定することで、列を生成します。`column-rule-width` に 10 個の `<line-width>` 値を記載し、それぞれの値が前よりも大きくなるようにします。

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: row;
  list-style-type: none;
  column-rule-style: solid;
  column-rule-color: teal;

  column-rule-width: 1px, 2px, 3px, 4px, 5px, 6px, 7px, 8px, 9px, 10px;
}
```

#### 結果

{{EmbedLiveSample("Basic", "", "180")}}

値（10 個）が溝（8 個）よりも多いため、`9px` と `10px` の値は使用されません。

{{cssxref("gap")}} のデフォルト値は `normal` であり、フレックスボックスでは `0` として扱われます。`column-rule-width` は、描画される線の幅のみを定義するものであり、レイアウトには影響しません。線はコンテンツの背後に描画されます。

### 反復する値

この例では、幅のリストに含まれる値の数が列のルール数よりも少ない場合、値が繰り返される様子を示しています。

前の例と同じ HTML と CSS を使用し、`column-rule-width` の値として、カンマで区切られた 3 つの幅を記載します。

```css live-sample___repeat
ul {
  column-rule-width: 1px, 5px, 10px;
}
```

#### 結果

{{EmbedLiveSample("Repeat", "", "180")}}

### `repeat()` 関数の使用

この例では、`repeat()` 関数を `column-rule-width` プロパティの値内で使用する方法、およびこの関数が値の宣言を縮小するのに役立つことを示しています。

前回の例と同じ HTML と CSS を使用します。値が冗長になり得ることや、`repeat()` 関数の有用性を示すために、2 つのカスタムプロパティを宣言し、それらを `repeat()` 関数の宣言で使用します。`repeat()` 関数は、2 つの `<line-width>` 値のリストを 3 回繰り返すように設定します。

```css live-sample___func live-sample___auto
ul {
  --base: 0.5vw;
  --secondary: 1vw;
  column-rule-width:
    15px,
    repeat(
      4,
      min(calc(var(--secondary) + 3px), 10px),
      abs(calc(var(--base) - 2px))
    ),
    15px;
}
```

#### 結果

{{EmbedLiveSample("func", "", "180")}}

このフレックスコンテナーには 9 つの列があるため、ガターは 8 つあります。`repeat()` 関数は 2 つの幅の値を 4 回繰り返して、10 個の幅の値からなるリストを作成します。列のガターの数が幅の合計数より少ないため、リストの最後の 2 つの値は破棄されます。

### `auto` を `repeat()` で使用

この例では、`repeat()` 関数内で整数の代わりに `auto` を使用する方法を示しています。

`repeat(auto, <line-width>)` を使用することで、すべての列の罫線を `1px` に設定し、最初と最後の列のみを `5px` に設定します。

```css live-sample___auto
ul {
  column-rule-width: 5px, repeat(auto, 1px), 5px;
}
```

#### 結果

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (column-rule-width: thin, thick) {
    body::before {
      content: "このプロパティは column-rule-width プロパティに対応していません";
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
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule")}} 一括指定
- {{cssxref("row-rule-width")}}
- {{cssxref("rule-width")}} 一括指定
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
