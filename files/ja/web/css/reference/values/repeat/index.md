---
title: "`repeat()` 関数 (CSS)"
short-title: repeat()
slug: Web/CSS/Reference/Values/repeat
l10n:
  sourceCommit: 870fe25a3e6ed1a44222c52dd8a992b731c1a383
---

**`repeat()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、[トラックリスト](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)または[罫線リスト](/ja/docs/Web/CSS/Guides/Gaps)内での部分的な反復を表し、反復パターンを示す多数の列や行を、よりコンパクトな形式で記述することができます。

{{InteractiveExample("CSS デモ: repeat()")}}

```css interactive-example-choice
grid-template-columns: repeat(2, 60px);
rule-color: repeat(2, green, orange), yellow;
```

```css interactive-example-choice
grid-template-columns: 1fr repeat(2, 60px);
rule-color: repeat(2, green), repeat(2, yellow);
```

```css interactive-example-choice
grid-template-columns: repeat(2, 20px 1fr);
rule-color: repeat(auto, green), repeat(2, yellow);
```

```css interactive-example-choice
grid-template-columns: repeat(auto-fill, 40px);
rule-color: repeat(2, orange, yellow), repeat(auto, green);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  width: 220px;
  rule: solid 4px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

この関数は、以下の機能と組み合わせて使用できます。

CSS グリッドプロパティ:

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}

CSS すき間プロパティ:

- {{cssxref("column-rule-color")}}
- {{cssxref("row-rule-color")}}
- {{cssxref("rule-color")}} 一括指定
- {{cssxref("column-rule-style")}}
- {{cssxref("row-rule-style")}}
- {{cssxref("rule-style")}} 一括指定
- {{cssxref("column-rule-width")}}
- {{cssxref("row-rule-width")}}
- {{cssxref("rule-width")}} 一括指定
- {{cssxref("column-rule")}} 一括指定
- {{cssxref("row-rule")}} 一括指定
- {{cssxref("rule")}} 一括指定

## 構文

```css
/* <track-repeat> 値 */
repeat(4, 1fr)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] 1fr [col-end])
repeat(4, [col-start] min-content [col-end])
repeat(4, [col-start] max-content [col-end])
repeat(4, [col-start] auto [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])
repeat(4, [col-start] min-content [col-middle] max-content [col-end])

/* <auto-repeat> 値 */
repeat(auto-fill, 250px)
repeat(auto-fit, 250px)
repeat(auto-fill, [col-start] 250px [col-end])
repeat(auto-fit, [col-start] 250px [col-end])
repeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])
repeat(auto-fill, 10px [col-start] 30% [col-middle] 400px [col-end])

/* <fixed-repeat> 値 */
repeat(4, 250px)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] 400px [col-end])

/* <name-repeat> 値 */
repeat(5, [footer])
repeat(auto-fill, [header])
repeat(2, [header footer])

/* <repeat-line> */
repeat(4, dashed)
repeat(2, solid, dotted, inset)
repeat(3, medium)
repeat(4, red)
repeat(3, green medium outset)

/* <auto-repeat-line> */
repeat(auto, dotted)
repeat(auto, 10px)
repeat(auto, currentcolor)
repeat(auto, red, blue, green)
repeat(auto, var(--lineColor) var(--lineSize) solid)
```

### 値

`repeat()` 関数は 2 つの引数を取ります。第一引数には[**反復回数**](#反復回数)を指定し、第二引数には[**反復値のリスト**](#反復値リスト)（繰り返す値のリスト）を指定します。

#### 反復回数

- {{cssxref("integer")}}
  - : `1` 以上の正の整数で、第二引数で指定された特性リストが繰り返される回数を指定します。

- `auto-fill`
  - : 空間を埋めるまで繰り返し表示する自動反復を指定します。制約される（最大サイズが設定されている）コンテンツボックスをはみださない、最大反復回数に解決されます。あるいは、コンテンツボックスに最小サイズが設定されている場合は、その最小サイズを満たす最小の反復回数に解決されます。最小サイズも最大サイズも設定されていない場合は、`1` に解決されます。サブグリッドと併用する場合、第二引数は線名のリストでなければなりません。

- `auto-fit`
  - : `auto-fill` と同様に動作しますが、グリッドアイテムを配置した後、空の繰り返しトラックはすべて折りたたまれる点が異なります。

- `auto`
  - : 自動反復を指定します。プロパティ値の要素が適用された後、第二引数の値が必要な回数だけ繰り返され、欠落している値を埋めます。

#### 反復値リスト

以下のトラックリスト型のいずれかによるリスト。リストの要素がカンマ区切りか空白区切りかは、そのプロパティ値リスト型で想定されている区切り文字によって異なります。

- `<line-names>`
  - : サブグリッドに線名を追加するには、それぞれの `<line-names>` を空白で区切り、角括弧で囲んだ 0 個以上の {{cssxref("&lt;custom-ident&gt;")}} 値で指定します。例：`[start header-start]`。

- `<track-size>`
  - : それぞれの `<track-size>` は、正の値 {{cssxref("&lt;length-percentage&gt;")}}、または最初の引数がキーワード `min-content`、 `max-content`、`auto` のいずれか、または正の `<length-percentage>`、{{cssxref("fit-content()")}} 関数です。

- `<fixed-size>`
  - : それぞれの `<fixed-size>` は、正の `<length-percentage>` であるか、または `minmax()` 関数です。`minmax()` 関数の場合、第一引数が正の `<length-percentage>` であれば、第二引数はトラックのフレックス係数を指定する単位 `fr` を持つ非負のサイズ、あるいはキーワード `min-content`、 `max-content`、`auto` のいずれか、もしくは、第一引数が正の `<length-percentage>` またはキーワード `min-content`、`max-content`、`auto` のいずれかであれば、第二引数は正の `<length-percentage>` です。

- `<value>`
  - : 隙間の罫線を定義する場合、それぞれの `<value>` は、`repeat()` が現れるプロパティ（{{cssxref("line-style")}}、{{cssxref("line-width")}}、{{cssxref("&lt;color&gt;")}} など）で受け入れられる値、あるいはこれら 3 つすべてを `<gap-rule>` として指定したものです。

## 解説

`repeat()` 関数は、カンマまたは空白で区切られた値のリスト内の繰り返し部分を表すもので、これにより、反復パターンがよりコンパクトな形式で記述でき、指定された回数だけ反復させたり、自動的に繰り返し実行させたりすることができます。

`repeat()` 構文の一般的な方法は、おおむね次のようなものです。

```css
repeat( <repeat-count>, <values-list> )
```

第一引数である**反復回数**は、繰り返しの回数を指定します。これは、第二引数で定義された値のリストが何回繰り返されるかを指定するものです。指定方法は、`1` 以上の整数値、またはキーワード `auto-fill`、`auto-fit`、`auto` のいずれかです。

第二引数には、`repeat()` が現れるプロパティで有効な値が、カンマまたは空白で区切られたリストとして指定されます。これは**反復値の型**を指定するもので、一般的には反復されるトラックまたは罫線特性となります。

- **トラック**:
  - : 反復されるトラックのセットを指定します。基本的には、空白で区切られた 1 つ以上の値で構成され、それぞれの値はそのトラックのサイズを表します。それぞれのサイズは [`<track-size>`](#track-size) または [`<fixed-size>`](#fixed-size) で指定します。また、トラックサイズの前後に [`<line-names>`](#line-names) 値を提供することで、各トラックの前後に 1 つ以上の[線名](/ja/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)を指定することもできます。
- **罫線特性**:
  - : 繰り返し適用される罫線特性を指定します。これは、{{cssxref("&lt;color>")}}、{{cssxref("line-width")}}、{{cssxref("line-style")}} のいずれかの値をカンマ区切りで並べたリスト、あるいは線の色、幅、スタイルを設定する一括指定をカンマ区切りで並べたリストのどちらかです。

### 構文の形式

`repeat()` 関数の構文には、いくつかの形式があります。

- `<track-repeat>` = `repeat( <integer>, [ <line-names>? <track-size> ]+ <line-names>? )`
  - : `<integer>` は反復回数を設定します。

    `<track-size>` の値は、トラックのサイズを設定します。`<track-size>` の値は、{{cssxref("&lt;length-percentage&gt;")}}、{{cssxref("&lt;flex&gt;")}} 値（正の `fr` 単位の値）、キーワード `min-content`、 `max-content`、`auto` のいずれか、 {{cssxref("fit-content()")}} に `<length-percentage>` 引数の引数が付いたもの、あるいは {{cssxref("minmax()")}} 関数です。`minmax()` のトラック値の場合、`min` は `<length-percentage>` または `min-content`、`max-content`、`auto` のいずれかのキーワードであり、`max` はこれらのいずれか、または `<flex>` 値のいずれかになります。

    それぞれの `<track-size>` の前には、オプションで `<line-names>` を記述することができます。これは、角括弧で囲まれ、空白で区切られた 0 個以上の {{cssxref("&lt;custom-ident&gt;")}} 値です。

    末尾の `<line-names>` はオプションです。

- `<auto-repeat>` = `repeat( auto-fill | auto-fit, [ <line-names>? <fixed-size> ]+ <line-names>? )`
  - : `auto-fill` または `auto-fit` キーワードは、反復回数を設定します。

    `<fixed-size>` はトラックのサイズを設定します。`<fixed-size>` は、`<length-percentage>` 値、あるいは `minmax()` 関数で、`min` または `max` の一方が `<length-percentage>` であり、もう一方の値も `<length-percentage>` またはキーワード `min-content`、`max-content`、`auto` のいずれかに設定されたものです。

    それぞれの `<fixed-size>` の前には、オプションで `<line-names>` を付けることができます。

    末尾の `<line-names>` はオプションです。

- `<fixed-repeat>` = `repeat( <integer>, [ <line-names>? <fixed-size> ]+ <line-names>? )`
  - : `<auto-repeat>` と同じですが、`<integer>` で反復回数を設定するため、自動反復は行われません。

- `<name-repeat>` = `repeat( [ <integer> | auto-fill ], <line-names>+)`
  - : 整数または `auto-fill` キーワードで、反復回数を設定します。

    `<line-names>` は、角括弧で囲まれ、空白で区切られた 1 つ以上の {{cssxref("&lt;custom-ident&gt;")}} 値です。

    これらの線名（トラックのサイズではなく）は、[`subgrid`](/ja/docs/Web/CSS/Guides/Grid_layout/Subgrid) に関連しています。

- `<repeat-value-type>` = `repeat( <integer> , <value># )`
  - : `<integer>` は反復回数を設定します。

    `<value>` は、`repeat()` 関数が適用されるプロパティに対して、カンマで区切られた 1 つ以上の有効な値です。

    複数の `<repeat-value-type>` の `repeat()` 関数を、1 つの値宣言内で使用することができます。

- `<auto-repeat-value-type>` = `repeat( auto , <value># )`
  - : `auto` キーワードは、自動反復を指定します。自動反復は、リストの他の部分から値を受け取らない空白部分に値を入力するために使用されます。

    `<value>` は、`repeat()` 関数が適用されるプロパティに対して、カンマで区切られた 1 つ以上の有効な値です。

    指定された値のリストにおいて、自動反復となる `repeat()` は最大で 1 つまでです。

### auto-fit と auto-fill

`repeat()` 関数の第一引数が整数ではなく、`auto-fill`、`auto-fit`、`auto` のいずれかのキーワードである場合、自動反復が作成されます。自動反復を行う `repeat()` 関数は、第二引数として指定された値を必要な回数だけ繰り返します。

`auto-fill` では、コンテナーが関連する軸に、定義されたまたは最大の幅を持っている場合、反復の数は、コンテナーをあふれない最大の正の数になります。各トラックは定義されているならば、最大トラック幅を調整する関数（`grid-template-rows` または `grid-template-columns` を定義するために使用されるそれぞれ独立した値）として扱われます。それ以外の場合、明確なサイズや最大サイズが定義されていないときは、`repeat()` 関数は最小トラックサイズ設定関数として機能します。反復回数が何であれオーバーフローが発生する場合は、反復回数は `1` となります。それ以外の場合、グリッドコンテナーが関連する軸において明確な最小サイズを保有しているときは、反復回数はその最小要件を履行する最小の正の整数となります。それ以外の場合は、指定されたトラックリストは 1 回だけ繰り返されます。

`auto-fit` は `auto-fill` と同様に動作しますが、グリッドアイテムを配置した後、空の反復トラックが折りたたまれる点が異なります。空のトラックとは、フロー内のグリッドアイテムが配置されていない、またはそれをまたいで配置されているものがないトラックのことです。（これは、すべてのトラックが空の場合、すべてのトラックが折りたたまれる結果になる可能性があります。）

折りたたまれたトラックは、`0px` の単一の固定されたトラックサイジング関数を持つものとして扱われ、その両側の溝は折りたたまれます。

自動反復トラックの数を探すため、ユーザーエージェントはトラックサイズをユーザーエージェントが指定する値（例えば、`1px`）で割り、ゼロによる除算を避けます。

### 例外とルールの使用

`repeat()` を使用する際には、いくつかのルールや制限があります。

プロパティの値には、複数の `repeat()` 関数を記述することができます。

```css example-good
.wrapper {
  grid-template-columns:
    repeat(2, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

プロパティの値には、自動反復 `repeat()` 関数を最大 1 つまで指定することができます。

```css example-bad
.wrapper {
  row-rule:
    repeat(auto, yellow 3px solid, red 1px dashed),
    repeat(auto, green 5px dotted);
}
```

プロパティ宣言で `<auto-repeat>` を用いた場合、それ以外の `repeat()` 呼び出しには `<fixed-repeat>` のみを使用することができます。自動反復（`auto-fill` または `auto-fit`）は、完全な内在サイズやフレックスサイズと組み合わせることはできません。例えば、この例は `<auto-repeat>` 形式と `<track-repeat>` 形式を結合しているので無効です。

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

`repeat()` 構文は、別の `repeat()` 関数の中に入れ子にすることはできません。

```css example-bad
.wrapper {
  grid-template-columns: repeat(
    2,
    minmax(min-content, max-content),
    repeat(3, 10px)
  );
  column-rule: repeat(
    auto,
    yellow 3px solid,
    repeat(5, green 5px dotted),
    red 1px dashed
  );
}
```

## 形式文法

{{CSSSyntaxRaw(`<repeat-line> <track-repeat> <auto-repeat> <fixed-repeat> <name-repeat> <auto-repeat-line>`)}}

## 例

### repeat() を使用したグリッド列の指定

#### HTML

```html
<div id="container">
  <div>このアイテムの幅は 50 ピクセルです。</div>
  <div>幅が自由なアイテムです。</div>
  <div>このアイテムの幅は 50 ピクセルです。</div>
  <div>幅が自由なアイテムです。</div>
  <div>幅 100 ピクセルの柔軟性のないアイテムです。</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: repeat(2, 50px 1fr) 100px;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### 結果

{{EmbedLiveSample("repeat() を使用したグリッド列の指定", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("grid-template")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- [線に基づく配置を使用したグリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [グリッドテンプレート領域: グリッド定義の一括指定](/ja/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#グリッド定義の一括指定)
- [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout)モジュール
- [CSS 隙間](/ja/docs/Web/CSS/Guides/Gaps)モジュール
