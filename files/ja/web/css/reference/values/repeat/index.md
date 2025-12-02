---
title: repeat()
slug: Web/CSS/Reference/Values/repeat
original_slug: Web/CSS/repeat
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

**`repeat()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、[トラックリスト](/ja/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)内での部分的な繰り返しを表し、繰り返しパターンを示す多数の列や行を、よりコンパクトな形式で記述することができます。

{{InteractiveExample("CSS デモ: repeat()")}}

```css interactive-example-choice
grid-template-columns: repeat(2, 60px);
```

```css interactive-example-choice
grid-template-columns: 1fr repeat(2, 60px);
```

```css interactive-example-choice
grid-template-columns: repeat(2, 20px 1fr);
```

```css interactive-example-choice
grid-template-columns: repeat(auto-fill, 40px);
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
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

この関数は CSS グリッドのプロパティである {{cssxref("grid-template-columns")}} と {{cssxref("grid-template-rows")}} の中で使うことができます。

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
```

`repeat()` 関数は 2 つの引数を取ります。

- **反復回数**: 最初の引数は、トラックリストが繰り返される回数を指定します。これは 1 以上の整数値で指定するか、キーワード値 [`auto-fill`](#auto-fill) または [`auto-fit`](#auto-fit) で指定します。これらのキーワード値は、グリッドコンテナーを埋めるのに必要な回数だけトラックの組み合わせを繰り返します。
- **トラック**: 2 番目の引数は、繰り返されるトラックの組み合わせを指定します。基本的にこれは 1 つ以上の値で構成され、それぞれの値はそのトラックのサイズを表します。それぞれのサイズは [`<track-size>`](#track-size) または [`<fixed-size>`](#fixed-size) で指定します。また、トラックサイズの前後に [`<line-names>`](#line-names) 値を提供することで、各トラックの前後に 1 つ以上の[行名](/ja/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)を指定することもできます。

[`auto-fill`](#auto-fill) や [`auto-fit`](#auto-fit) を使用して反復回数を設定する場合、[`<fixed-size>`](#fixed-size) 型を使用してのみトラックサイズを指定することができ、 [`<track-size>`](#track-size) 型を使用することはできません。これで `repeat()` の構文が 3 種類になりました。

- `<track-repeat>` は次のいずれかです。
  - 反復回数を設定する整数
  - トラックのサイズを設定する [`<track-size>`](#track-size) 値
- `<auto-repeat>` は次のいずれかです。
  - 反復回数を設定する [`auto-fill`](#auto-fill) または [`auto-fit`](#auto-fit)
  - トラックのサイズを設定する [`<fixed-size>`](#fixed-size) 値
- `<fixed-repeat>` は次のいずれかです。
  - 反復回数を設定する整数
  - トラックのサイズを設定する [`<fixed-size>`](#fixed-size) 値

プロパティ宣言で `<auto-repeat>` を用いた場合、`<fixed-repeat>` を使用するのは `repeat()` を呼び出すときだけです。例えば、この例は `<auto-repeat>` 形式と `<track-repeat>` 形式を結合しているので不正です。

```css example-bad
.wrapper {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

サブグリッドに行名を追加するために使用する `<name-repeat>` という第 4 の形式があります。これは [`subgrid`](/ja/docs/Web/CSS/Guides/Grid_layout/Subgrid) キーワードでのみ使用し、行名のみを指定し、トラックサイズは指定しません。

### 値

- `<fixed-size>`
  - : 以下の形式のいずれかです。
    - {{cssxref("&lt;length-percentage&gt;")}} 値
    - {{cssxref("minmax", "minmax()")}} 関数
      - `min` は {{cssxref("&lt;length-percentage&gt;")}} 値で指定
      - `max` は {{cssxref("&lt;length-percentage&gt;")}} 値、 {{cssxref("&lt;flex&gt;")}} 値、または [`min-content`](#min-content), [`max-content`](#max-content), [`auto`](#auto) のキーワード値のいずれかで指定
    - {{cssxref("minmax", "minmax()")}} 関数
      - `min` は {{cssxref("&lt;length-percentage&gt;")}} 値または [`min-content`](#min-content), [`max-content`](#max-content), [`auto`](#auto) のキーワード値のいずれかで指定
      - `max` は {{cssxref("&lt;length-percentage&gt;")}} 値で指定
- {{cssxref("&lt;flex&gt;")}}
  - : 単位 `fr` でトラックのフレックス係数を指定します。それぞれの `<flex>` サイズのトラックは、そのフレックス係数に比例して残りの空間を占めます。
- {{cssxref("&lt;length&gt;")}}
  - : 正の整数の長さです。
- `<line-names>`
  - : 0 個以上の空白区切りの {{cssxref("&lt;custom-ident&gt;")}} 値を角括弧で囲んだもの。例えば `[first header-start]`。
- {{cssxref("&lt;percentage&gt;")}}
  - : 列グリッドトラックではグリッドコンテナーのインラインサイズ、行グリッドトラックではグリッドコンテナーのブロックサイズに対する、非負のパーセントを指定します。グリッドコンテナーのサイズがトラックのサイズに依存する場合、 `<percentage>` は `auto` として扱われなければなりません。ユーザーエージェントは、トラックの内在サイズの寄与をグリッドコンテナーのサイズに調整し、パーセント値を尊重する結果となる最小量だけトラックの最終サイズを大きくすることができます。
- `<track-size>`
  - : 以下の形式のいずれかです。
    - {{cssxref("&lt;length-percentage&gt;")}} 値、 {{cssxref("&lt;flex&gt;")}} 値、または [`min-content`](#min-content), [`max-content`](#max-content), [`auto`](#auto) のキーワード値のいずれかで指定
    - {{cssxref("minmax", "minmax()")}} 関数
      - `min` は {{cssxref("&lt;length-percentage&gt;")}} 値、または [`min-content`](#min-content), [`max-content`](#max-content), [`auto`](#auto) のキーワード値のいずれかで指定
      - `max` は {{cssxref("&lt;length-percentage&gt;")}} 値、 {{cssxref("&lt;flex&gt;")}} 値、または [`min-content`](#min-content), [`max-content`](#max-content), [`auto`](#auto) のキーワード値のいずれかで指定
    - {{cssxref("fit-content_function", "fit-content()")}} 関数に {{cssxref("&lt;length-percentage&gt;")}} 値を渡したもの
- `auto`
  - : 最大値としては、 `max-content` と同じです。最小値としては、グリッドトラックを占めるグリッドアイテムの最大最小サイズ（{{cssxref("min-width")}}/{{cssxref("min-height")}} で指定されたもの）を表します。
- `auto-fill`
  - : グリッドコンテナーが関連する軸に、定義されたまたは最大の幅を持っている場合、繰り返しの数は、グリッドコンテナーをオーバーフローさせない最大の正の数になります。各トラックは定義されているならば、最大トラック幅を調整する関数（`grid-template-rows` または `grid-template-columns` を定義するために使用されるそれぞれ独立した値）として扱われます。それ以外の場合は、最小トラック幅を調整する関数として扱い、グリッドギャップを考慮に入れます。何回繰り返してもオーバーフローしてしまう場合は、繰り返しを 1 とする。そうでなければ、グリッドコンテナーが関連する軸に、定義された最小の寸法をもっている場合、繰り返しの数は最小の要件を満たす可能性がある最小の正の整数になります。その他の場合は、指定されたトラックリストは `1` 回のみ繰り返します。
- `auto-fit`
  - : `auto-fill` と同様に動作しますが、グリッドアイテムを配置した後、空の繰り返しトラックが折りたたまれる点が異なります。空のトラックとは、フロー内のグリッドアイテムが配置されていない、またはそれをまたいで配置されているものがないトラックのことです。（これは、すべてのトラックが空の場合、すべてのトラックが折りたたまれる結果になる可能性があります。）

    折りたたまれたトラックは、`0px`の単一の固定されたトラックサイジング関数を持つものとして扱われ、その両側の溝は折りたたまれます。

    自動反復トラックの数を探すため、ユーザーエージェントはトラックサイズをユーザーエージェントが指定する値（例えば、`1px`）で割り、ゼロによる除算を避けます。

- `max-content`
  - : グリッドトラックを占めるグリッドアイテムの最も大きな最大コンテンツ寄与を表します。
- `min-content`
  - : グリッドトラックを占めるグリッドアイテムの最も大きな最小コンテンツ寄与を表します。

## 例

### repeat() を使用したグリッド列の指定

#### HTML

```html live-sample___specifying_grid_columns_using_repeat
<div id="container">
  <div>このアイテムの幅は 50 ピクセルです。</div>
  <div>幅が自由なアイテムです。</div>
  <div>このアイテムの幅は 50 ピクセルです。</div>
  <div>幅が自由なアイテムです。</div>
  <div>幅 100 ピクセルの柔軟性のないアイテムです。</div>
</div>
```

#### CSS

```css live-sample___specifying_grid_columns_using_repeat
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

{{EmbedLiveSample("Specifying_grid_columns_using_repeat", "100%", 200)}}

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
- [グリッドテンプレート領域 - グリッド定義の一括指定](/ja/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#グリッド定義の一括指定)
