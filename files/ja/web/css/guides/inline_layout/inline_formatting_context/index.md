---
title: インライン整形コンテキスト
slug: Web/CSS/Guides/Inline_layout/Inline_formatting_context
original_slug: Web/CSS/CSS_inline_layout/Inline_formatting_context
l10n:
  sourceCommit: 113279ab09692d869866519106e25cba8a20abb8
---

このガイドでは、インライン整形コンテキストについて説明します。

## 主要概念

インライン整形コンテキストは、ウェブページの視覚的レンダリングの一部です。インラインボックスは、使用されている書字方向で文が進む方向に、順番にレイアウトされます。

- 横書きでは、ボックスは左から右に横方向に並べられます。
- 縦書きの場合、文字は上から下に向かって縦に並べられます。

下記の例では、黒い境界線のある 2 つの {{HTMLElement("div")}} 要素は[ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)の一部であり、各ボックス内の単語はインライン整形コンテキストに属しています。横書きの単語は水平方向に並べられ、縦書きの単語は垂直方向に並べられます。

```html live-sample___inline
<div class="example horizontal">いち に さん</div>
<div class="example vertical">し ご ろく</div>
```

```css live-sample___inline
body {
  font: 1.2em sans-serif;
}
.example {
  border: 5px solid black;
  margin: 20px;
}

.horizontal {
  writing-mode: horizontal-tb;
}
.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("inline", "", "220px")}}

行を形成するボックスは、行ボックスと呼ばれる長方形の領域で囲まれます。このボックスは、その行のすべてのインラインボックスを収容するのに十分な大きさになります。インライン方向に余地がなくなると、新たな行が作成されます。したがって、段落は、ブロック方向に積み重ねられた一連のインライン行ボックスの集合です。

インラインボックスが分割されると、分割された部分ではマージン、境界線、パディングは視覚的な効果を持ちません。次の例では、2 行にまたがる一連の単語を囲む {{HTMLElement("span")}} 要素があります。 `<span>` の境界線は、折り返し点で途切れます。

```html live-sample___break
<div class="example">
  Before that night—
  <span
    >a memorable night, as it was to prove— hundreds of millions of people</span
  >
  had watched the rising smoke-wreaths of their fires without drawing any
  special inspiration from the fact.
</div>
```

```css live-sample___break
body {
  font: 1.2em sans-serif;
}
.example {
  border: 5px solid black;
  margin: 20px;
}

span {
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("break")}}

インライン方向のマージン、境界線、およびパディングは尊重されます。以下の例では、インライン `<span>` 要素のマージン、境界線、およびパディングがどのように追加されるかを確認できます。

```html live-sample___mbp
<div class="example horizontal">いち <span>に</span> さん</div>
<div class="example vertical">し <span>ご</span> ろく</div>
```

```css live-sample___mbp
body {
  font: 1.2em sans-serif;
}

.example {
  border: 5px solid black;
  margin: 20px;
}

span {
  border: 5px solid rebeccapurple;
  padding-inline-start: 20px;
  padding-inline-end: 40px;
  margin-inline-start: 30px;
  margin-inline-end: 10px;
}
.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("mbp", "", "340px")}}

> [!NOTE]
> 私は、テキストが水平でも垂直でもインライン次元で動作するように、論理的なフロー相対プロパティ（{{cssxref("padding-left")}} ではなく {{cssxref("padding-inline-start")}}）を使用しています。これらのプロパティの詳細については、「[論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)」をご覧ください。

## ブロック方向の配置

インラインボックスは、垂直方向の書式でブロック方向に沿ってさまざまな方法で配置することができます。これには、垂直方向の書式でブロック軸に沿って配置する {{cssxref("vertical-align")}} プロパティを使用します （したがって、垂直方向にはまったく配置されません）。以下の例では、大きなテキストによって最初の文の行ボックスが大きくなっています。そのため、垂直方向の書式でブロック軸に沿って配置する `vertical-align` プロパティを使用して、その両側のインラインボックスを配置することができます。ここでは値 `top` を使用していますが、`middle`、`bottom`、`baseline` に変更してみてください。

```html live-sample___align
<div class="example horizontal">
  Before that night—<span>a memorable night</span>, as it was to prove—hundreds
  of millions of people had watched the rising smoke-wreaths of their fires
  without drawing any special inspiration from the fact.
</div>

<div class="example vertical">
  Before that night—<span>a memorable night</span>, as it was to prove—hundreds
  of millions of people had watched the rising smoke-wreaths of their fires
  without drawing any special inspiration from the fact.
</div>
```

```css live-sample___align
body {
  font: 1.2em sans-serif;
}

span {
  font-size: 200%;
  vertical-align: top;
}

.example {
  border: 5px solid black;
  margin: 20px;
  inline-size: 400px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("align", "", "640px")}}

## インライン方向の配置

インライン方向に追加の空間がある場合、 {{cssxref("text-align")}} プロパティを使用して、行ボックス内のインラインボックスを配置することができます。下記で `text-align` の値を `end` に変更してみてください。

```html live-sample___text-align
<div class="example horizontal">いち に さん</div>
<div class="example vertical">し ご ろく</div>
```

```css hidden live-sample___text-align
body {
  font: 1.2em sans-serif;
}

.example {
  border: 5px solid black;
  margin: 20px;
}

.horizontal {
  writing-mode: horizontal-tb;
}

.vertical {
  writing-mode: vertical-rl;
}
```

```css live-sample___text-align
.example {
  text-align: center;
  inline-size: 250px;
}
```

{{EmbedLiveSample("text-align", "", "350px")}}

## 浮動ボックスの効果

行ボックスは通常、インライン方向では同じサイズであるため、横書きモードでは同じ幅、縦書きモードでは同じ高さになります。ただし、同じブロック整形コンテキスト内に {{cssxref("float")}} がある場合、その浮動ボックスによって、浮動ボックスを囲む行ボックスが短くなります。

```html live-sample___float
<div class="box">
  <div class="float">これは浮動ボックスです。</div>
  <p>これはコンテナー内部のコンテンツです。</p>
</div>
```

```css live-sample___float
body {
  font: 1.2em sans-serif;
}

.box {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}

.float {
  float: left;
  width: 250px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("float", "", "200px")}}

## 関連情報

- [ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [視覚整形モデル](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model)
