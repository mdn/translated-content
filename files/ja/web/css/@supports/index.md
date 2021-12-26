---
title: '@supports'
slug: Web/CSS/@supports
tags:
  - アットルール
  - CSS
  - レイアウト
  - リファレンス
  - ウェブ
  - supports
browser-compat: css.at-rules.supports
translation_of: Web/CSS/@supports
---
{{CSSRef}}

**`@supports`** は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/At-rule)で、宣言をブラウザーが 1 つまたは複数の特定の CSS 機能に対応しているかによって、宣言を指定することができます。これは*機能クエリー*と呼ばれます。規則はコードの最上位または他の[条件付きグループアットルール](/ja/docs/Web/CSS/At-rule#条件付きグループルール)の中に配置することができます。

```css
@supports (display: grid) {
  div {
    display: grid;
  }
}
```

```css
@supports not (display: grid) {
  div {
    float: right;
  }
}
```

JavaScript では `@supports` は CSS オブジェクトモデルインターフェイスの {{DOMxRef("CSSSupportsRule")}} からアクセスできます。

## 構文

`@supports` アットルールは、文のブロックを*対応条件*に関連付けます。対応条件は 1 つまたは複数の名前と値の組を結合条件 (`and`)、非結合条件 (`or`)、否定 (`not`) で組み合わせたものです。演算子の結合順位は、括弧を使用して変更できます。

### 宣言の構文

もっとも基本的な対応条件は、単純な宣言 (プロパティ名に続けて、コロンで区切って値) です。宣言は括弧で囲む必要があります。以下の例は、ブラウザーが {{CSSxRef("transform-origin")}} プロパティの値として `5% 5%` を有効とみなすのであれば true を返します。

```css
@supports (transform-origin: 5% 5%) {}
```

### 関数構文

第二の基本的な対応状況は関数の対応であり、これらの構文はすべてのブラウザーで対応されていますが、関数自体はまだ標準化の過程にあります。

#### `selector()` {{Experimental_Inline}}

ブラウザーがテストされたセレクターの構文に対応しているかどうかを検査します。以下の例は、ブラウザーが[子結合子](/ja/docs/Web/CSS/Child_combinator)に対応していれば true を返します。

```css
@supports selector(A > B) {}
```

### not 演算子

`not` 演算子は、新たな式を作成するために任意の式の前に置くことができ、元の式を否定します。以下の例は、ブラウザーが {{CSSxRef("transform-origin")}} プロパティの値として `10em 10em 10em` を有効と**みなさない**のであれば true を返します。

```css
@supports not (transform-origin: 10em 10em 10em) {}
```

他の演算子と同様に、 `not` 演算子はどれだけ複雑な宣言にも適用できます。以下の例はすべて有効な式です。

```css
@supports not (not (transform-origin: 2px)) {}
@supports (display: grid) and (not (display: inline-grid)) {}
```

> **Note:** `not` 演算子が最上位にある場合は、括弧でくくる必要はありません。 `and` や `or` といった他の演算子と組み合わせるときは、括弧が必須です。

### and 演算子

`and` 演算子は 2 つの式から、元の式の論理積で構成される新たな式を作成します。元の式の両方が true になる場合に限り、新たな式が true になります。以下の例では 2 つの式が同時に true になる場合に限り、全体の式も true になります。

```css
@supports (display: table-cell) and (display: list-item) {}
```

括弧を増やすことなく、複数の論理積を並記することができます。以下の式はどちらも等価です。

```css
@supports (display: table-cell) and (display: list-item) and (display:contents) {}
@supports (display: table-cell) and ((display: list-item) and (display:contents)) {}
```

### or 演算子

`or` 演算子は 2 つの式から、元の式の論理和で構成される新たな式を作成します。元の式の一方または両方が true になる場合に限り、新たな式が true になります。以下の例では 2 つの式の少なくとも 1 つが true になる場合に限り、全体の式も true になります。

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) {}
```

括弧を増やすことなく、複数の論理和を並記することができます。以下の式はどちらも等価です。

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) or
          (-o-transform-style: preserve) or (-webkit-transform-style: preserve) {}

@supports (transform-style: preserve-3d) or ((-moz-transform-style: preserve-3d) or
          ((-o-transform-style: preserve-3d) or (-webkit-transform-style: preserve-3d))) {}
```

> **Note:** `and` 演算子と `or` 演算子を両方とも使用するときは、これらを適用する順序を定義するために括弧を使用しなければなりません。そうしなければ、アットルール全体を無視させる無効な条件になります。

## 形式文法

{{CSSSyntax}}

## 例

### 指定した CSS プロパティの対応状況を確認

```css
@supports (animation-name: test) {
  … /* 接頭辞がないプロパティでアニメーションに対応する場合に適用する CSS */
  @keyframes { /* 他のアットルールを含むことができる */
    …
  }
}
```

### 指定した CSS プロパティの対応状況を、接頭辞付きも含めて確認

```css
@supports ((perspective: 10px) or (-moz-perspective: 10px) or (-webkit-perspective: 10px) or
         (-ms-perspective: 10px) or (-o-perspective: 10px)) {
  … /* 接頭辞つきを含めて 3D transforms を対応する場合に適用する CSS */
}
```

### 指定した CSS プロパティに対応していないことを確認

```css
@supports not ((text-align-last: justify) or (-moz-text-align-last: justify)) {
  … /* text-align-last:justify をシミュレートするために適用する CSS */
}
```

### カスタムプロパティの対応状況を確認

```css
@supports (--foo: green) {
  body {
    color: var(--varName);
  }
}
```

### セレクターの対応の検査

CSS Conditional Rules Level 4 仕様では、セレクターの対応を検査する機能が追加されています-例えば {{cssxref(":is",":is()") }}。

```css
/* このルールは :is() に対応していないブラウザーでは適用されません */
:is(ul, ol) > li {
  … /* :is(…) セレクターに対応している場合に CSS が適用される */
}

@supports not selector(:is(a, b)) {
  /* :is() に対応していない場合の代替 */
  ul > li,
  ol > li {
    … /* 上記のものは :is(…) に対応していないブラウザーのために展開しています */
  }
}

/* Note: 今のところ :nth-child(...) の `of` 引数に対応しているブラウザーはありません。 */
@supports selector(:nth-child(1n of a, b)) {
  /* このルールは @supports ブロックの中に記述する必要があります。
     nth-child(...)の `of` 引数に対応していないブラウザーでは、
     部分的に適用されます。 */
  :is(
      :nth-child(1n of ul, ol) a,
      details > summary
  ) {
    … /* :is(…) セレクターと :nth-child(…) の
          両方に対応している場合にのみ適用される CSS */
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [機能クエリーの使用](/ja/docs/Web/CSS/CSS_Conditional_Rules/Using_Feature_Queries)
- JavaScript で同様のチェックを実行できる、CSSOM の {{DOMxRef("CSSSupportsRule")}} クラスおよび {{DOMxRef("CSS.supports()")}} メソッド
