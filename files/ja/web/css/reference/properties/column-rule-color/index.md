---
title: CSS `column-rule-color` プロパティ
short-title: column-rule-color
slug: Web/CSS/Reference/Properties/column-rule-color
l10n:
  sourceCommit: 5cf8432d980cbe9b7e5611d647d8566b5c4ff3ed
---

**`column-rule-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、複数列のグリッド、フレックス、段組みレイアウトで列間・段間に引かれる罫線の色を設定します。

{{InteractiveExample("CSS デモ: column-rule-color")}}

```css interactive-example-choice
column-rule-color: purple;
```

```css interactive-example-choice
column-rule-color: rgb(48 125 222), rgb(222 48 125);
```

```css interactive-example-choice
column-rule-color: rgb(48 125 222), repeat(3, rgb(222 48 125));
```

```css interactive-example-choice
column-rule-color: purple, repeat(auto, orange, yellow);
```

```html-nolint interactive-example
<section id="default-example">
  <p id="example-element">
    ロンドン。ミカエル学期の終わり、リンカーンズ・イン・ホールに大法官が座っています。容赦のない 11 月の天候。街は、まるで地球から水が引き始めたばかりのように泥だらけで、ホルボーン・ヒルを象のようなトカゲのようによちよち歩く、体長 12 メートルほどのメガロサウルスに出会っても不思議ではないでしょう。
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 7;
  column-rule: solid thick;
  gap: 7px;
}
```

## 構文

```css
/* 単一の <color> 値 */
column-rule-color: purple;
column-rule-color: rgb(192 56 78);
column-rule-color: transparent;
column-rule-color: hsl(0 100% 50% / 60%);

/* 複数の値 */
column-rule-color: purple, magenta;
column-rule-color: repeat(3, purple), repeat(3, transparent);
column-rule-color: repeat(3, purple), repeat(3, yellow, blue);
column-rule-color: purple, repeat(auto, transparent), purple;
column-rule-color: purple, repeat(auto, blue, yellow), purple;
column-rule-color:
  repeat(3, purple), repeat(auto, transparent), repeat(3, purple);

/* グローバル値 */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
column-rule-color: revert-layer;
column-rule-color: unset;
```

### 値

`column-rule-color` プロパティは、カンマ区切りの値のリストを指定できます。指定可能な値には、次のものがあります。

- `<line-color>`
  - : {{cssxref("&lt;color&gt;")}} で、罫線の色を表します。

- `<repeat-line-color>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で {{cssxref("&lt;integer&gt;")}} で `1` 以上の値を指定し、それ以降の引数で 1 つ以上の `<color>` 値を指定したものです。この `<integer>` は、一連の `<color>` 値を繰り返す回数です。

- `<auto-repeat-line-color>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で `auto` を指定し、それ以降の引数で 1 つ以上の `<color>` 値を指定したものです。指定された `<color>` の値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して値を埋めるために、必要な回数だけ繰り返して使用されます。

## 解説

`column-rule-color` プロパティは、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)のコンテナーに複数の列・段がある場合に、列・段間の隙間に描画される罫線の色を定義します。

この値は、カンマ区切りの一連の成分からなり、`<line-color>`、`<repeat-line-color>`、`<auto-repeat-line-color>` といった型を含めることができます。

`column-rule-color` は、{{cssxref("column-rule-width")}} および {{cssxref("column-rule-style")}} プロパティとともに、一括指定の {{cssxref("column-rule")}} で設定できます。`column-rule-color` は、{{cssxref("row-rule-color")}} プロパティとともに、一括指定の {{cssxref("rule-color")}} で設定することもできます。

`<line-color>` には、有効な CSS {{cssxref("&lt;color&gt;")}} 値を任意に指定できます。プロパティの値が 1 つの `<color>` のみで構成されている場合、すべての罫線がその色になります。例えば、次のように宣言すると、段間の溝にある線はすべて青色になります。

```css
column-rule-color: blue;
```

複数の `<line-color>` が宣言されている場合は、列・段の溝に描画される罫線に、指定された順序で適用されます。罫線の数が `<line-color>` の値の数より多い場合、すべての罫線に色が割り当てられるまで、色のリストが繰り返し適用されます。例えば、次のように宣言すると、奇数番目の罫線は赤、偶数番目の罫線は黄色になります。

```css
column-rule-color: red, yellow;
```

### 反復される罫線の色

`repeat()` 関数は、最初の引数として `1` 以上の整数を指定することで、その後の引数として渡された有効な CSS {{cssxref("&lt;color&gt;")}} 値のリストを、指定された回数だけ繰り返すことができます。これにより、色値を個別に列挙することなく、必要な回数だけ繰り返すことが可能です。以下の宣言は同等です。

```css
column-rule-color: blue, yellow, red, yellow, red;
column-rule-color: blue, repeat(2, yellow, red);
```

これにより、5 色の色リストが作成されます。`column-rule-color` の値に含まれる色リストの色数が、列間・段間の数を超えた場合、余分な色値は無視されます。コンテナーが 3 列の場合、1 番目の列間・段間に適用される罫線は青、2 番目の列間・段間に適用される罫線は黄色になります。

### 自動反復される罫線の色

`repeat()` 関数は、正の整数の代わりに、第一引数として `auto` を受け取ることもできます。第一引数に `auto` を指定すると、その後の引数として渡された `<color>` の値は、プロパティ値の他の要素によって明示的に指定されていない列・段間の罫線に対して、値を埋めるのに必要な回数だけ繰り返されます。

```css
column-rule-color: blue, repeat(auto, yellow), red;
```

この場合、最初の罫線は青、最後の罫線は赤、それ以外はすべて黄色になります。罫線が 2 本あれば、最初の罫線は常に青、最後の罫線は常に赤になります。それ以外はすべて黄色になるため、列や段が 2 つまたは 3 つしかない場合は、黄色の線は表示されません。

`auto` キーワードを`repeat()` 関数内で使用すると、リストの他の部分から値を受け取らない罫線色の値を設定する自動リピーターを作成し、リストが繰り返されるのを防ぎます。`column-rule-color` の値に記載することができる `repeat(auto, <color>)` の数は、最大 1 つです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、段組みレイアウトにおいて、段間に引かれる罫線に単一の色を定義します。

#### HTML

ここに 1 段落分のテキストを記載します。

```html-nolint
<p>
  これは 3 つの段に分割されたテキストの束です。 `column-rule-color` プロパティは、段と段の間に引かれる罫線の色を変更するために使用されます。すばらしいと思いませんか？
</p>
```

#### CSS

{{htmlelement("p")}} 要素を段組みのコンテナーとして定義します。段間に描画される `3px` の破線の罫線にパディングを提供するため、`7px` の {{cssxref("gap")}} を含めています。

```css
p {
  column-count: 5;
  gap: 7px;
  column-rule-style: dashed;
  column-rule-width: 3px;

  column-rule-color: blue;
}
```

#### 結果

{{EmbedLiveSample("基本的な例")}}

### 複数の色値

この例では、複数の色を宣言する方法と、色のリストに含まれる色の数が列・段間の溝の数より少ない場合に、値がどのように繰り返されるかを示しています。

前回の例と同じ HTML と CSS を使用し、`column-rule-color` の値として、カンマで区切られた 3 つの色を指定します。

```html hidden
<p>
  これは 3 つの段に分割されたテキストです。 `column-rule-color` プロパティは、段の間に描画される罫線の色を変更するために使用されます。素晴らしいと思いませんか？
</p>
```

```css hidden
p {
  column-count: 5;
  gap: 7px;
  column-rule-style: dashed;
  column-rule-width: 3px;
}

@layer no-support {
  @supports not (column-rule-color: red, blue) {
    body::before {
      content: "このブラウザーは  column-rule-color プロパティで複数の値に対応していません。";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```css
p {
  column-rule-color: blue, yellow, red;
}
```

#### 結果

{{EmbedLiveSample("複数の色値", "", "180")}}

溝は 4 つありますが、色は 3 色しかないため、リストが繰り返され、1 本目と 4 本目がどちらも青になっています。

### `repeat()` 関数の使用

この例では、`repeat()` 関数を `column-rule-color` プロパティの値内で使用する方法と、この関数が複雑な値を扱いにくくしないための助けとなり得ることを示しています。

#### HTML

作家のリストを作成しました。

```html live-sample___repeat live-sample___auto
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

まず、このリストをグリッドコンテナーとして定義し、{{cssxref("grid-template-columns")}} プロパティを使って列を作成します。{{cssxref("gap")}} を `7px` に設定して、列の間に `3px` の破線の罫線を配置するのに十分な余地を確保し、{{cssxref("list-style-type")}} を `none` に設定して箇条書き記号を除去します。

次に、値がいかに複雑になり得るか、および `repeat()` 関数の有用性を示すために、2つの独自のプロパティを宣言します。これらを 3 つの {{cssxref("color-mix()")}} 色関数の宣言で使用し、青、赤、黄の色を作成します。黄色の `color-mix()` による色は `repeat()` 関数内にあり、3 回繰り返すように設定されています。

同時に、それぞれのグリッドアイテムの周囲に境界線を追加しました。これにより、列間の溝の中央に線がどのように引かれているかを確認できます。

```css live-sample___repeat live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 7px;
  list-style-type: none;
  column-rule-style: dashed;
  column-rule-width: 3px;

  --base: yellow;
  --mixin: blue;
  column-rule-color:
    color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
    repeat(3, color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin))),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin));
}
li {
  border: 1px solid #ddd;
}
```

#### 結果

{{EmbedLiveSample("repeat", "", "180")}}

このグリッドは横に 9 つのセルがあるため、溝は 8 つあります。`repeat()` 関数は、2 つの混合色を 3 回繰り返して、7 色の色リストを作成します。リストの色数よりも列の溝の数の方が多いことから、リストの最後の色は使用されません。
<!-- 英語版をそのまま翻訳していますが、英語版の説明が矛盾しているので、後から修正される可能性があります。 -->

### `auto` を `repeat()` で使用

この例では、`repeat()` 関数内で整数の代わりに `auto` を使用する方法を示しています。

前回の例と同じ HTML と CSS を使用しますが、`column-rule-color` の値を上書きしています。ここでは、`repeat(auto, <color>)` を使用して、最初と最後の行を除き、すべての行をほぼ透明な黒 (`#0003`) に設定し、最初と最後の行は不透明な `black` に設定します。

```css live-sample___auto
ul {
  column-rule-color: black, repeat(auto, #0003), black;
}
```

#### 結果

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___repeat live-sample___auto
@layer no-support {
  @supports not (column-rule-color: repeat(3, red)) {
    body::before {
      content: "このブラウザーは `repeat()` 関数の column-rule-color プロパティでの使用に対応していません。";
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

- {{cssxref("&lt;color&gt;")}} データ型
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule-color")}}
- {{cssxref("column-rule")}} 一括指定
- {{cssxref("rule-color")}} 一括指定
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
