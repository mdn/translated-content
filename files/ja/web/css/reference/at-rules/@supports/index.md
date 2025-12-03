---
title: "@supports"
slug: Web/CSS/Reference/At-rules/@supports
original_slug: Web/CSS/@supports
l10n:
  sourceCommit: d50c6b04f0e0cb20eca8a5f0e643e435ee8ac6ff
---

**`@supports`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で、ブラウザーが CSS 機能に対応しているかによって、 CSS 宣言を指定することができます。
このアットルールを使用することは、一般に*機能クエリー*と呼ばれます。
ルールはコードの最上位または他の条件付きグループアットルールの中に配置しなければなりません。

{{InteractiveExample("CSS デモ: @supports", "tabbed-standard")}}

```css interactive-example
.flex-container > * {
  padding: 0.3em;
  list-style-type: none;
  text-shadow: 0 0 2px red;
  float: left;
}

@supports (display: flex) {
  .flex-container > * {
    text-shadow: 0 0 2px blue;
    float: none;
  }

  .flex-container {
    display: flex;
  }
}
```

```html interactive-example
<ul class="flex-container">
  <li><a href="#">Index</a></li>
  <li><a href="#">About me</a></li>
  <li><a href="#">Contact</a></li>
</ul>
```

JavaScript では `@supports` は CSS オブジェクトモデルインターフェイスの {{DOMxRef("CSSSupportsRule")}} からアクセスできます。

## 構文

`@supports` アットルールは、 _supports 条件_ を含む文のブロックで構成されます。
supports 条件は、1 つ以上の名前と値のペア （例： `<property>: <value>`）のセットです。

```css
@supports (<supports-condition>) {
  /* 条件が true の場合、このブロックの CSS を使用します。 */
}
```

条件は、結合条件 (`and`)、非結合条件 (`or`)、否定 (`not`) で組み合わせることができます。

```css
@supports (<supports-condition>) and (<supports-condition>) {
  /* 両方の条件が true の場合、このブロックの CSS を使用します。 */
}
```

演算子の優先順位は、括弧で定義することができます。
対応条件は、`<property>: <value>` 宣言構文または `<function()>` 構文のいずれかを使用することができます。
以下の節では、それぞれの種類の対応条件の使用方法について記述します。

### 宣言の構文

宣言構文は、ブラウザーが指定された `<property>: <value>` 宣言に対応しているかどうかを調べます。
宣言は括弧で囲む必要があります。
次の例は、ブラウザーが式 `transform-origin: 5% 5%` に対応している場合に true を返します。

```css
@supports (transform-origin: 5% 5%) {
}
```

### 関数構文

関数構文は、関数内の値または式がブラウザーに対応しているかどうかを調べます。
関数構文で対応している関数は、次の節で記述されています。

#### `selector()`

ブラウザーがテストされたセレクターの構文に対応しているかどうかを検査します。
以下の例は、ブラウザーが[子結合子](/ja/docs/Web/CSS/Reference/Selectors/Child_combinator)に対応していれば true を返します。

```css
@supports selector(h2 > p) {
}
```

#### `font-tech()`

この関数は、ブラウザーがレイアウトおよびレンダリングのために指定されたフォント技術に対応しているかどうかを調べます。
次の例では、ブラウザーが `COLRv1` フォント技術に対応している場合、true を返し、CSS スタイルを適用します。

```css
@supports font-tech(color-COLRv1) {
}
```

以下の表は、フォント技術 (`<font-tech>`) について記述しています。これには、色フォント技術 (`<color-font-tech>`)、フォント機能技術 (`<font-features-tech>`)、および関数 `font-tech()` を使用して照会できるそれ以外の利用可能なフォント技術を含みます。

| 技術                          | 対応しているもの                                                                                    |
| :---------------------------- | :-------------------------------------------------------------------------------------------------- |
| **`<color-font-tech>`**       |                                                                                                     |
| `color-colrv0`                | COLR version 0 表による多色字体                                                                     |
| `color-colrv1`                | COLR version 1 表による多色字体                                                                     |
| `color-svg`                   | SVG 多色表                                                                                          |
| `color-sbix`                  | 標準ビットマップグラフィック表                                                                      |
| `color-cbdt`                  | カラービットマップデータ表                                                                          |
| **`<font-features-tech>`**    |                                                                                                     |
| `features-opentype`           | OpenType `GSUB` および `GPOS` 表                                                                    |
| `features-aat`                | TrueType `morx` および `kerx` 表                                                                    |
| `features-graphite`           | グラファイト機能、すなわち、`Silf`、`Glat`、`Gloc`、`Feat`、`Sill` 表                               |
| **その他の `<font-tech>` 値** |                                                                                                     |
| `incremental-patch`           | パッチサブセット法を使用したフォントの逐次読み込み                                                  |
| `incremental-range`           | 範囲リクエスト法を使用したフォントの逐次読み込み                                                    |
| `incremental-auto`            | メソッド交渉を使用したフォントの逐次読み込み                                                        |
| `variations`                  | TrueType および OpenType フォントのフォントバリエーションにより、フォント軸、太さ、グリフなどを制御 |
| `palettes`                    | フォントパレット `font-palette` を使用して、フォント内の多くのカラーパレットから 1 つを選択         |

#### `font-format()`

この関数は、ブラウザーがレイアウトおよびレンダリングのために指定されたフォント形式に対応しているかどうかを調べます。
次の例は、ブラウザーが `opentype` フォント形式に対応している場合、 true を返し、 CSS スタイルを適用します。

```css
@supports font-format(opentype) {
}
```

次の表は、この関数でクエリーできる利用可能な形式 （`<font-format>` 値） を記述したものです。

| 形式                | 説明                             | ファイル拡張子  |
| :------------------ | :------------------------------- | :-------------- |
| `collection`        | OpenType コレクション            | `.otc`, `.ttc`  |
| `embedded-opentype` | 埋め込み OpenType                | `.eot`          |
| `opentype`          | OpenType                         | `.ttf`, `.otf`  |
| `svg`               | SVG フォント（非推奨）           | `.svg`, `.svgz` |
| `truetype`          | TrueType                         | `.ttf`          |
| `woff`              | WOFF 1.0 (Web Open フォント形式) | `.woff`         |
| `woff2`             | WOFF 2.0 (Web Open フォント形式) | `.woff2`        |

### not 演算子

`not` 演算子は、新たな式を作成するために任意の式の前に置くことができ、元の式を否定します。
以下の例は、ブラウザーが {{CSSxRef("transform-origin")}} プロパティの値として `10em 10em 10em` を**無効とする**のであれば true を返します。

```css
@supports not (transform-origin: 10em 10em 10em) {
}
```

他の演算子と同様に、 `not` 演算子はどれだけ複雑な宣言にも適用できます。
以下の例はすべて有効な式です。

```css
@supports not (not (transform-origin: 2px)) {
}
@supports (display: grid) and (not (display: inline-grid)) {
}
```

> [!NOTE]
> `not` 演算子が最上位にある場合は、括弧でくくる必要はありません。
> `and` や `or` といった他の演算子と組み合わせるときは、括弧が必須です。

### and 演算子

`and` 演算子は 2 つの式から、元の式の論理積で構成される新たな式を作成します。元の式の両方が true になる場合に限り、新たな式が true になります。以下の例では 2 つの式が同時に true になる場合に限り、全体の式も true になります。

```css
@supports (display: table-cell) and (display: list-item) {
}
```

括弧を増やすことなく、複数の論理積を並記することができます。以下の式はどちらも等価です。

```css
@supports (display: table-cell) and (display: list-item) and (display: contents) {
}
@supports (display: table-cell) and
  ((display: list-item) and (display: contents)) {
}
```

### or 演算子

`or` 演算子は 2 つの式から、元の式の論理和で構成される新たな式を作成します。元の式の一方または両方が true になる場合に限り、新たな式が true になります。以下の例では 2 つの式の少なくとも 1 つが true になる場合に限り、全体の式も true になります。

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) {
}
```

括弧を増やすことなく、複数の論理和を並記することができます。以下の式はどちらも等価です。

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) or (-webkit-transform-style: preserve) {}

@supports (transform-style: preserve-3d) or ((-moz-transform-style: preserve-3d) or (-webkit-transform-style: preserve-3d))) {}
```

> [!NOTE]
> `and` 演算子と `or` 演算子を両方とも使用するときは、これらを適用する順序を定義するために括弧を使用しなければなりません。そうしなければ、アットルール全体を無視させる無効な条件になります。

## 形式文法

{{csssyntax}}

## 例

### 指定した CSS プロパティの対応状況を確認

```css
@supports (animation-name: test) {
  /* 接頭辞がないプロパティでアニメーションに対応する場合に適用する CSS */
  @keyframes {
    /* 他のアットルールを含むことができる */
  }
}
```

### 指定した CSS プロパティの対応状況を、接頭辞付きも含めて確認

```css
@supports (text-stroke: 10px) or (-webkit-text-stroke: 10px) {
  /* text-stroke が対応している場合に適用される CSS（接頭辞の有無は問わない） */
}
```

### 指定した CSS プロパティに対応していないことを確認

```css
@supports not ((text-align-last: justify) or (-moz-text-align-last: justify)) {
  … /* text-align-last: justify をシミュレートするために適用する CSS */
}
```

### セレクターの対応の検査

CSS 条件付きルール 4 仕様書では、セレクターの対応を検査する機能が追加されています。例えば {{cssxref(":has",":has()")}} です。

```css
/* このルールは :has() に対応していないブラウザーでは適用されません */
ul:has(> li li) {
  … /* :has(…) セレクターに対応している場合に CSS が適用される */
}

@supports not selector(:has(a, b)) {
  /* :has() に対応していない場合の代替 */
  ul > li,
  ol > li {
    /* 上記のものは :has(…) に対応していないブラウザーのために展開しています */
  }
}

/* Note: 今のところ :nth-child(…) の `of` 引数に対応しているブラウザーはありません。 */
@supports selector(:nth-child(1n of a, b)) {
  /* このルールは @supports ブロックの中に記述する必要があります。
     nth-child(…)の `of` 引数に対応していないブラウザーでは、
     部分的に適用されます。 */
  :is(:nth-child(1n of ul, ol) a, details > summary) {
    /* :is(…) セレクターと :nth-child(…) の
          両方に対応している場合にのみ適用される CSS */
  }
}
```

### フォント技術の対応状況を確認

次の例は、ブラウザーが `COLRv1` フォント技術に対応している場合に CSS スタイルを適用します。

```css
@import url("https://fonts.googleapis.com/css2?family=Bungee+Spice");

@supports font-tech(color-COLRv1) {
  font-family: "Bungee Spice";
}
```

フォント技術の対応を検査するには、 {{CSSxRef("@font-face")}} アットルール内の `tech` 関数を使用することもできます。
ブラウザーがフォント技術に対応していない場合は、代替フォント (`Bungee-fallback.otf`) を使用することができます。

```css
@font-face {
  font-family: "Bungee Spice";
  src:
    url("https://fonts.googleapis.com/css2?family=Bungee+Spice")
      tech(color-COLRv1),
    url("Bungee-fallback.otf") format("opentype");
}
```

### フォント形式の対応検査

次の例は、ブラウザーが `woff2` フォント形式に対応している場合に CSS スタイルを適用します。

```css
@supports font-format(woff2) {
  font-family: "Open Sans";
  src: url("open-sans.woff2") format("woff2");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [機能クエリーの使用](/ja/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
- [CSS アットルール関数](/ja/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- {{DOMxRef("CSSSupportsRule")}}
- {{DOMxref("CSS.supports_static", "CSS.supports()")}} メソッド
