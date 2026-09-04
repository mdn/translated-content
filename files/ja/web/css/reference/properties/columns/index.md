---
title: CSS `columns` プロパティ
short-title: columns
slug: Web/CSS/Reference/Properties/columns
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`columns`** は [CSS](/ja/docs/Web/CSS) 一括指定プロパティで、要素のコンテンツを描画する際に使用する列の最大数、および要素の列の最小幅と最大高さを設定します。

{{InteractiveExample("CSS デモ: columns")}}

```css interactive-example-choice
columns: 2;
```

```css interactive-example-choice
columns: 6rem auto;
```

```css interactive-example-choice
columns: 12em;
```

```css interactive-example-choice
columns: 3;
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
  min-width: 21rem;
  text-align: left;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("column-count")}}
- {{cssxref("column-width")}}
- {{cssxref("column-height")}}

## 構文

```css
/* 段の幅 */
columns: 18em;

/* 段数 */
columns: auto;
columns: 2;

/* 段の幅と段数の両方 */
columns: 2 auto;
columns: auto 12em;
columns: auto auto;

/* 列幅や列数と列の高さ */
columns: 18em / 10em;
columns: 2 / 90vh;
columns: 2 auto / 300px;

/* グローバル値 */
columns: inherit;
columns: initial;
columns: revert;
columns: revert-layer;
columns: unset;
```

`columns` プロパティの値は、[`<column-count>`](/ja/docs/Web/CSS/Reference/Properties/column-count) や [`<column-width>`](/ja/docs/Web/CSS/Reference/Properties/column-width) の値を、任意の順序で指定できます。また、必要に応じて、スラッシュ (`/`) の後に [`<column-height>`](/ja/docs/Web/CSS/Reference/Properties/column-height) の値を続けて指定することもできます。

### 値

- `<'column-width'>`
  - : 理想的な段の幅であり、 {{cssxref("&lt;length&gt;")}} または `auto` キーワードで定義されます。実際の段の幅は、実際の空間に合わせて広くなったり狭くなったりします。 {{cssxref("column-width")}} を参照してください。
- `<'column-count'>`
  - : 要素の内容物が流れる理想的な段の数であり、 {{cssxref("&lt;integer&gt;")}} または `auto` キーワードで定義します。`<integer>` で指定された場合、許可される列の最大数を定義します。{{cssxref("column-count")}}を参照してください。
- `<'column-height'>`
  - : {{cssxref("&lt;length&gt;")}} またはキーワード `auto` で、定義された列の高さです。{{cssxref("column-height")}} を参照してください。

> [!NOTE]
> `<column-height>` の値を設定すると、{{cssxref("column-wrap")}} プロパティは初期値である `auto` にリセットされます。`<column-height>` が `<length>` に設定されている場合、{{cssxref("column-wrap")}} の `auto` 値は `wrap` として解釈されます。`<column-height>` が `auto` に設定されている場合、`nowrap` として解決されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 3 つの等しい段の設定

この例では、テキストコンテナーを 3 つの等幅の列に分割する方法を示しています。

#### HTML

テキストコンテンツを含む基本的な {{htmlelement("p")}} 要素を挿入します。

```html-nolint live-sample___three_equal_columns
<p class="content-box">
  これは、 CSS の <code>columns</code> プロパティを使用して 3 つの列に分割されたテキストの束です。テキストは各カラムに均等に配置されています。
</p>
```

#### CSS

段落に `columns` プロパティを設定し、`<column-count>` の値を `3`、`<column-width>` の値を `auto` に指定しました。

```css hidden live-sample___three_equal_columns
body {
  width: 60%;
  margin: 0 auto;
}
```

```css live-sample___three_equal_columns
.content-box {
  columns: 3 auto;
}
```

#### 結果

{{EmbedLiveSample('three_equal_columns', 'auto', 120)}}

テキストが 3 つの段に分かれている点に注意してください。

### 折り返しと固定の高さの段組み

この例では、`columns` 一括指定プロパティに `<column-height>` の値を追加することで、テキストコンテナーを固定の高さの段に分割し、コンテナーのインライン端に達した際に改行されるようにする方法を示しています。

#### HTML

いくらかのテキストがある基本的な {{htmlelement("p")}} 要素を設置します。

```html-nolint live-sample___fixed-height
<p class="content-box">
  これは、CSS の <code>columns</code> プロパティを使用し、3 つの段に分割されたテキストです。これには、<code>column-count</code> の値として <code>3</code>、<code>column-width</code> の値として <code>auto</code>、<code>column-height</code> の値として <code>5em</code> が指定されています。<code>column-wrap</code> の値は初期値である <code>auto</code> に設定されています。<code>column-height</code> の値が指定されている場合、<code>column-wrap: auto</code> は <code>wrap</code> として解釈され、それぞれの段が複数行にまたがって表示されます。テキストは各段に均等に配分され、複数行に配置されます。
</p>
```

#### CSS

段落に `columns` プロパティを設定し、`<column-count>` の値を `3`、`<column-width>` の値を `auto`、`<column-height>` の値を `5em` としました。`<column-height>` が `<length>` に設定されているため、段落の {{cssxref("column-wrap")}} 値は `wrap` となり、段が複数行にまたがって表示することができます。

```css live-sample___fixed-height
.content-box {
  columns: 3 auto / 5em;
}
```

```css hidden live-sample___fixed-height
body {
  width: 60%;
  margin: 0 auto;
}
```

```css hidden live-sample___fixed-height
@supports not (columns: 3 auto / 5em) {
  body::before {
    content: "このブラウザーは 'column-height' プロパティに対応していません。";
    background-color: wheat;
    position: fixed;
    inset: 40% 0;
    height: fit-content;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### 結果

{{EmbedLiveSample('fixed-height', 'auto', 320)}}

テキストが 3 つの段に分かれている点に注目してください。それぞれの段の高さは `5em` です。段 3 つごとに、段組みはブロック方向に改行されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("widows")}}
- {{cssxref("orphans")}}
- [ページ化メディア](/ja/docs/Web/CSS/Guides/Paged_media)
- [学習: 段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
