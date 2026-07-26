---
title: CSS `column-rule` プロパティ
short-title: column-rule
slug: Web/CSS/Reference/Properties/column-rule
l10n:
  sourceCommit: 5cf8432d980cbe9b7e5611d647d8566b5c4ff3ed
---

**`column-rule`** は[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)を行う [CSS](/ja/docs/Web/CSS) のプロパティで、複数列のグリッド、フレックス、段組みレイアウトで列・段の間に引かれる罫線の太さ、スタイル、色を設定します。

{{InteractiveExample("CSS デモ: column-rule")}}

```css interactive-example-choice
column-rule: solid;
```

```css interactive-example-choice
column-rule: groove 0.8em teal;
```

```css interactive-example-choice
column-rule:
  dotted thick teal,
  repeat(3, dashed pink 1px, outset olive 5px);
```

```css interactive-example-choice
column-rule:
  dotted thick teal,
  repeat(auto, dashed pink 1px, dashed pink 5px),
  dotted thick teal;
```

```css interactive-example-choice
column-rule:
  dashed medium olive,
  repeat(auto, dotted pink 1px),
  inset orange 5px;
```

```html-nolint interactive-example
<section id="default-example">
  <p id="example-element">
    ロンドン。リンカーンズ・イン・ホールに腰を下ろすレディ・キャットニップ。5 月らしい心地よい天気だ。街は、まるで地球から水が引き始めたばかりのように泥だらけで、ホルボーン・ヒルをイグアナのようによたよたと登ってくる、体長 2 フィートほどのフレッドに出くわしても、さほど驚くことではないでしょう。
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 7;
}
```

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- {{Cssxref("column-rule-color")}}
- {{Cssxref("column-rule-style")}}
- {{Cssxref("column-rule-width")}}

## 構文

```css
/* 単一の値 */
column-rule: dashed;
column-rule: inset 8px;
column-rule: solid teal;
column-rule: thick outset rgb(18 122 67);

/* 複数の値 */
column-rule: groove, dashed, solid;
column-rule:
  dotted medium teal,
  dashed pink 0.5em,
  outset olive 1px;
column-rule:
  solid #0ff,
  repeat(3, dashed pink 1px, outset olive 5px);
column-rule:
  inset 3px yellow,
  repeat(auto, dashed pink 1px, groove olive 5px);

/* グローバル値 */
column-rule: inherit;
column-rule: initial;
column-rule: revert;
column-rule: revert-layer;
column-rule: unset;
```

### 値

`column-rule` プロパティは、次の値のカンマ区切りのリストで指定します。

- `<gap-rule>`
  - : 以下の値の一覧の中から 1 つ、2 つ、3 つを、順不同で指定します。
    - `<'line-width'>`
      - : {{cssxref("&lt;line-width&gt;")}}: このキーワードは、`thin`、`medium`、`thick` のいずれか、または線の太さを表す正の {{cssxref("length")}} 値に設定できます。デフォルト値は `medium` です。
    - `<'line-style'>`
      - : {{cssxref("&lt;line-style&gt;")}}: `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset` のいずれかです。デフォルト値は `none` です。{{cssxref("column-rule-style")}} を参照してください。
    - `<'color'>`
      - : 罫線の色を表す {{cssxref("&lt;color&gt;")}} 値です。デフォルト値は `currentcolor` です。{{cssxref("column-rule-color")}} を参照してください。

- `<gap-repeat-rule>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で {{cssxref("&lt;integer&gt;")}} で `1` 以上の値を指定し、それ以降の引数で 1 つ以上の `<gap-rule>` 値を指定したものです。この `<integer>` は、`<gap-rule>` の値が何回繰り返されるかを指定します。

- `<gap-auto-repeat-rule>`
  - : {{cssxref("repeat()")}} 関数に、第一引数で `auto` を指定し、それ以降の引数で 1 つ以上の `<gap-rule>` 値を指定したものです。指定された `<gap-rule>` の値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して値を埋めるために、必要な回数だけ繰り返して使用されます。

## 解説

`column-rule` プロパティは、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)のコンテナーに複数の列・段がある場合に、隙間に描画される罫線のスタイルを定義します。

`column-rule` は、{{cssxref("column-rule-color")}}、{{cssxref("column-rule-style")}}、{{cssxref("column-rule-width")}} の一括指定です。`column-rule` は、一括指定の {{cssxref("row-rule")}} プロパティと同様に、一括指定の {{cssxref("rule")}} プロパティを使用して設定することもできます。

このプロパティの値は、カンマ区切りの要素のリストであり、`<gap-rule>`、`<gap-repeat-rule>`、`<gap-auto-repeat-rule>` といった型を含めることができます。それぞれの `<gap-rule>` は、1 つ以上の区切り線の太さ、色、およびスタイルを定義します。

プロパティの値が 1 つの `<gap-rule>` のみで構成されている場合、すべての列・段間の罫線がそのスタイルになります。次のように宣言すると、すべての列・段間の罫線が `dashed maroon 3px` になります。

```css
column-rule: dashed maroon 3px;
```

複数の `<gap-rule>` が宣言されている場合は、列・段間の罫線に、指定された順序で適用されます。列・段間の溝の数が `<gap-rule>` の値の数より多い場合、すべての罫線に罫線が割り当てられるまで、値のリストが繰り返し適用されます。例えば、次のように宣言すると、奇数番目の罫線は `dashed maroon 3px`、偶数番目の罫線は `dotted navy 5px` になります。

```css
column-rule:
  dashed maroon 3px,
  dotted navy 5px;
```

### 反復される罫線のスタイル

`repeat()` 関数は、最初の引数として `1` 以上の整数を指定することで、その後の引数として渡された有効な CSS [`<gap-rule>`](#gap-rule) 値のリストを、指定された回数だけ繰り返すことができます。これにより、同じ CSS を複数回繰り返して使用することなく、同じ `<gap-rule>` を指定した回数だけ繰り返すことができます。次の宣言は同等です。

```css
column-rule:
  solid maroon 5px,
  outset navy 10px,
  inset olive 1px,
  outset navy 10px,
  inset olive 1px,
  outset navy 10px,
  inset olive 1px;
column-rule:
  solid maroon 5px,
  repeat(3, outset navy 10px, inset olive 1px);
```

これにより、7 つの罫線のリストが作成されます。`column-rule` の値に含まれるスタイルリストのスタイル数が、列・段間の数を超えた場合、余分なスタイル値は無視されます。ここに適用されるコンテナーが 3 列の場合、1 番目の列・段間に適用される罫線は `solid maroon 5px`、2 番目の列・段間に適用される罫線は `outset navy 10px` になります。

溝の数の方がスタイルの数より多い場合、スタイルのリストが繰り返されます。コンテナーの列・段数が 8、15、22、29 の場合、このスタイルの順序はそれぞれ 1 回、2 回、3 回、4 回繰り返され、最後の罫線は `inset olive 1px` となります。

### 自動反復される罫線のスタイル

`repeat()` 関数は、正の整数の代わりに、第一引数として `auto` を受け取ることもできます。第一引数に `auto` を指定すると、その後の引数として渡された [`<gap-rule>`](#gap-rule) の値は、プロパティ値の他の要素によって明示的に指定されていない罫線に対して、値を埋めるのに必要な回数だけ繰り返されます。

```css
column-rule:
  solid maroon 5px,
  repeat(auto, dotted olive 1px, dashed navy 1px),
  solid maroon 5px;
```

この場合、最初と最後の列の罫線は `solid maroon 5px` となり、それ以外のすべての列には `dotted olive 1px` と `dashed navy 1px` が交互に適用されます。コンテナーの列数が 3、6、11、16、21 のどれであっても、最初と最後の溝には常に太いマルーン色の実線が引かれます（{{cssxref("column-rule-visibility-items")}} によって線が描画されない場合を除く）。その他のすべての列間罫線は、細いオリーブ色の点線またはネイビー色の破線になります。列が 2 つまたは 3 つしかない場合は、点線や破線は現れません。

`auto` キーワードを`repeat()` 関数内で使用すると、リストの他の部分から値を受け取らない罫線の値を設定する自動リピーターを作成し、リストが繰り返されるのを防ぎます。`column-rule` の値内では、`repeat(auto, <gap-rule>)` を 1 つだけ指定することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、フレックスアイテム間に描画される罫線について、単一の罫線を定義します。

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

リストをフレックスコンテナーとして定義し、一括指定の {{cssxref("flex-flow")}} を使用して {{cssxref("flex-direction")}} を `row` に設定することで、列を生成します。また、{{cssxref("gap")}} を `12px` に設定し、`10px groove maroon` の罫線が収まるよう、列間に十分な余地を確保するようにします。

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: row;
  gap: 12px;
  list-style-type: none;

  column-rule: 10px groove maroon;
}
```

#### 結果

{{EmbedLiveSample("Basic", "", "180")}}

### 反復する値

この例では、スタイルのリストに含まれる値が列のルール数よりも少ない場合に、値がどのように繰り返されるかを示しています。また、太さ、色、スタイルのデフォルト値が、それぞれ `medium`、`currentcolor`、`none` となることも示しています。

前回の例と同じ HTML と CSS を使用し、`column-rule` の値としてカンマで区切られた 4 つの `<gap-rule>` 値を記載します。まず最初の `<gap-rule>` では太さを、2 つ目では色を、3 つ目ではスタイルを省略し、4 つ目にはこれら 3 つの要素をすべて記載します。

```css live-sample___repeat
ul {
  column-rule:
    maroon dashed,
    1px dotted,
    5px teal,
    10px orange solid;
}
```

{{EmbedLiveSample("Repeat", "", "180")}}

マルーン色の罫線の幅は `3px` です。点線はテキストと同じ色です。ティール色の罫線はありません。これは、3 つ目となる `<gap-rule>` の `<line-style>` がデフォルトで `none` になっているため、線が描画されないからです。溝の数は `<gap-rule>` の値の数よりも多いため、値のリストが繰り返し使用されます。

### `repeat()` 関数の使用

この例では、`column-rule` プロパティの値内で `repeat()` 関数を使用する方法を示します。HTML と CSS は前回の例と同じものを使用します。`repeat()` 関数を記載し、2 つの `<gap-rule>` 値のリストを 4 回繰り返すように設定しています。

```css live-sample___func live-sample___auto
ul {
  column-rule:
    10px maroon dashed,
    repeat(4, dotted olive 3px, dashed teal 3px),
    10px maroon dashed;
}
```

{{EmbedLiveSample("func", "", "180")}}

このフレックスコンテナーには 9 つの列があり、溝は 8 つあります。`repeat()` 関数は、2 つのスタイルを 4 回繰り返して、10 個の `<gap-rule>` 値のリストを作成します。`<gap-rule>` 値の総数よりも列間の溝の数が少ないため、リストの最後の 2 つの値は破棄されます。

### `auto` を `repeat()` で使用

この例では、`repeat()` 関数内で整数の代わりに `auto` 引数を使用する方法を示しています。

`repeat(auto, <gap-rule>)` を使用することで、すべての列間罫線を `1px dotted` かつデフォルトの現在の色に設定しますが、最初と最後の列間罫線のみを `10px groove maroon` に設定します。

```css live-sample___auto
ul {
  column-rule:
    10px groove maroon,
    repeat(auto, 3px dotted maroon),
    10px groove maroon;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (column-rule: thin, thick) {
    body::before {
      content: "このブラウザーは column-rule プロパティでの複数の値の使用に対応していません。";
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
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule")}} 一括指定
- {{cssxref("rule")}} 一括指定
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
