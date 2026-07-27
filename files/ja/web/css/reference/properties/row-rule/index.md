---
title: CSS `row-rule` プロパティ
short-title: row-rule
slug: Web/CSS/Reference/Properties/row-rule
l10n:
  sourceCommit: a9dc3374034d357cbfea717fd5d641605359e3c7
---

{{SeeCompatTable}}

**`row-rule`** は[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)を行う [CSS](/ja/docs/Web/CSS) のプロパティで、複数行のグリッド、フレックス、段組みレイアウトで行・段の間に引かれる罫線の太さ、スタイル、色を設定します。

{{InteractiveExample("CSS デモ: row-rule")}}

```css interactive-example-choice
row-rule: solid;
```

```css interactive-example-choice
row-rule: dotted medium blue;
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(3, dashed magenta 1px, outset green 5px);
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(auto, dashed magenta 1px, dashed magenta 5px),
  dotted medium blue;
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(auto, dashed magenta 1px),
  outset green 5px;
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
  gap: 7px;
  text-align: left;
}
```

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{cssxref("row-rule-color")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("row-rule-width")}}

## 構文

```css
/* 単一の値 */
row-rule: dotted;
row-rule: solid 8px;
row-rule: solid blue;
row-rule: thick inset blue;

/* 複数の値 */
row-rule: groove, dashed, solid;
row-rule:
  dotted medium blue,
  dashed magenta 1px,
  outset green 5px;
row-rule:
  solid #0ff,
  repeat(3, dashed magenta 1px, outset green 5px);
row-rule:
  inset 3px yellow,
  repeat(auto, dashed magenta 1px, groove green 5px);

/* グローバル値 */
row-rule: inherit;
row-rule: initial;
row-rule: revert;
row-rule: revert-layer;
row-rule: unset;
```

### 値

`row-rule` プロパティは、次の値のカンマ区切りのリストで指定します。

- `<gap-rule>`
  - : 以下の値の一覧の中から 1 つ、2 つ、3 つを、順不同で指定します。
    - `<'line-width'>`
      - : {{cssxref("&lt;line-width&gt;")}}: 正の {{cssxref("&lt;length&gt;")}} または 3 つのキーワード `thin`、`medium`、`thick` のいずれかです。デフォルト値は `medium` です。{{cssxref("row-rule-width")}} を参照してください。
    - `<'line-style'>`
      - : {{cssxref("&lt;line-style&gt;")}}: `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset` のいずれかです。デフォルト値は `none` です。{{cssxref("row-rule-style")}} を参照してください。
    - `<'color'>`
      - : 罫線の色を表す {{cssxref("&lt;color&gt;")}} 値です。デフォルト値は `currentcolor` です。{{cssxref("row-rule-color")}} を参照してください。

- `<gap-repeat-rule>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で {{cssxref("&lt;integer&gt;")}} で `1` 以上の値を指定し、それ以降の引数で 1 つ以上の `<gap-rule>` 値を指定したものです。この `<integer>` は、`<gap-rule>` の値が何回繰り返されるかを指定します。

- `<gap-auto-repeat-rule>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で `auto` を指定し、それ以降の引数で 1 つ以上の `<gap-rule>` 値を指定したものです。指定された `<gap-rule>` の値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して値を埋めるために、必要な回数だけ繰り返して使用されます。

## 解説

`row-rule` プロパティは、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)のコンテナーに複数の行・段がある場合に、隙間に描画される罫線のスタイルを定義します。

`row-rule` は、{{cssxref("row-rule-color")}}、{{cssxref("row-rule-style")}}、{{cssxref("row-rule-width")}} の一括指定です。`row-rule` は、一括指定の {{cssxref("column-rule")}} プロパティと同様に、一括指定の {{cssxref("rule")}} プロパティを使用して設定することもできます。

このプロパティの値は、カンマ区切りの要素のリストであり、`<gap-rule>`、`<gap-repeat-rule>`、`<gap-auto-repeat-rule>` といった型を含めることができます。それぞれの `<gap-rule>` は、1 つ以上の区切り線の太さ、色、およびスタイルを定義します。

プロパティの値が 1 つの `<gap-rule>` のみで構成されている場合、すべての行・段間の罫線がそのスタイルになります。次のように宣言すると、すべての行・段間の罫線が `dashed red 3px` になります。

```css
row-rule: dashed red 3px;
```

複数の `<gap-rule>` が宣言されている場合は、行・段間の罫線に、指定された順序で適用されます。行・段間の溝の数が `<gap-rule>` の値の数より多い場合、すべての罫線に罫線が割り当てられるまで、値のリストが繰り返し適用されます。例えば、次のように宣言すると、奇数番目の罫線は `dashed red 3px`、偶数番目の罫線は `dotted blue 5px` になります。

```css
row-rule:
  dashed red 3px,
  dotted blue 5px;
```

### 反復される罫線のスタイル

`repeat()` 関数は、最初の引数として `1` 以上の整数を指定することで、その後の引数として渡された有効な CSS [`<gap-rule>`](#gap-rule) 値のリストを、指定された回数だけ繰り返すことができます。これにより、同じ CSS を複数回繰り返して使用することなく、同じ `<gap-rule>` を指定した回数だけ繰り返すことができます。次の宣言は同等です。

```css
row-rule:
  solid red 5px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px;
row-rule:
  solid red 5px,
  repeat(3, outset blue 10px, inset green 1px);
```

これにより、7 つの罫線のリストが作成されます。`row-rule` の値に含まれるスタイルリストのスタイル数が、行・段間の数を超えた場合、余分なスタイル値は無視されます。ここに適用されるコンテナーが 3 列の場合、1 番目の行・段間に適用される罫線は `solid red 5px`、2 番目の列・段間に適用される罫線は `outset blue 10px` になります。

溝の数の方がスタイルの数より多い場合、スタイルのリストが繰り返されます。コンテナーの行・段数が 8、15、22、29 の場合、このスタイルの順序はそれぞれ 1 回、2 回、3 回、4 回繰り返され、最後の罫線は `inset green 1px` となります。

### 自動反復される罫線のスタイル

`repeat()` 関数は、正の整数の代わりに、第一引数として `auto` を受け取ることもできます。第一引数に `auto` を指定すると、その後の引数として渡された [`<gap-rule>`](#gap-rule) の値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して、値を埋めるのに必要な回数だけ繰り返されます。

```css
row-rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

この場合、最初と最後の行の罫線は `solid red 5px` となり、それ以外のすべての列には `dotted green 1px` と `dashed blue 1px` が交互に適用されます。コンテナーの行数が 3、6、11、16、21 のどれであっても、最初と最後の溝には常に太い赤色の実線が引かれます（{{cssxref("column-rule-visibility-items")}} によって線が描画されない場合を除く）。その他のすべての行間罫線は、細い緑色の点線または青色の破線になります。行が 2 つまたは 3 つしかない場合は、点線や破線は現れません。

`auto` キーワードを`repeat()` 関数内で使用すると、リストの他の部分から値を受け取らない罫線の値を設定する自動リピーターを作成し、リストが繰り返されるのを防ぎます。`row-rule` の値内では、`repeat(auto, <gap-rule>)` を 1 つだけ指定することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、フレックスアイテム間に描画される罫線について、単一の罫線を定義します。

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

このリストをフレックスコンテナーとして定義し、{{cssxref("flex-direction")}} を `column` に設定し、{{cssxref("flex-flow")}} の一括指定を使用して行を生成します。また、{{cssxref("gap")}} を `5px` に指定して、行間に `3px dashed red` の罫線が収まるだけの十分な余地を確保します。

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;

  row-rule: 3px red dashed;
}
```

#### 結果

{{EmbedLiveSample("Basic", "", "180")}}

### 反復する値

この例では、スタイルのリストに含まれる値の数が行間罫線よりも少ない場合に、値がどのように繰り返されるかを示しています。また、幅、色、スタイルのデフォルト値が、それぞれ `medium`、`currentcolor`、`none` となることも示しています。

前回の例と同じ HTML と CSS を使用し、`row-rule` の値としてカンマ区切りの 4 つの `<gap-rule>` 値を指定します。まず最初の `<gap-rule>` では幅を、2 つ目では色を、3 つ目ではスタイルを省略し、4 つ目にはこれら 3 つの要素をすべて含みます。

```css live-sample___repeat
ul {
  row-rule:
    red dashed,
    1px dotted,
    5px blue,
    10px magenta solid;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

赤い線の幅は `3px` で、点線はテキストと同じ色です。また、幅 `5px` の青い線はありません。これは、3 つ目 `<gap-rule>` のスタイルがデフォルトで `none` に設定されているため、線が描画されないからです。

### `repeat()` 関数の使用

この例では、`row-rule` プロパティの値内で `repeat()` 関数を使用する方法を示します。HTML と CSS は前回の例と同じものを使用します。`repeat()` 関数を記載し、2 つの `<gap-rule>` 値のリストを 3 回繰り返すように設定します。

```css live-sample___func live-sample___auto
ul {
  row-rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

{{EmbedLiveSample("func", "", "180")}}

フレックスコンテナーには 6 つの行があるため、溝は 5 つあります。`repeat()` 関数は 2 つのスタイルを 3 回繰り返すため、8 つのスタイルからなるリストが生成されます。行の溝の罫線数はすべてのスタイルの数より少ないため、リストの最後の 3 つの値は破棄されます。

### `auto` を `repeat()` で使用

この例では、`repeat()` 関数で整数の代わりに `auto` 引数を使用する方法を示しています。

`repeat(auto, <gap-rule>)` を使用し、すべての行間罫線を `1px dotted` に設定し、色を現在の色にデフォルトで設定します。ただし、最初と最後の行については、`3px solid red` に設定します。

```css live-sample___auto
ul {
  row-rule:
    3px red solid,
    repeat(auto, 1px dotted),
    3px red solid;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule: thin, thick) {
    body::before {
      content: "このブラウザーは row-rule プロパティに対応していません。";
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
- {{cssxref("row-rule-style")}}
- {{cssxref("column-rule")}} 一括指定
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
