---
title: resize
slug: Web/CSS/Reference/Properties/resize
original_slug: Web/CSS/resize
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

**`resize`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の寸法を変更できるかどうか、もしそうなら、どの方向に変更できるかを設定します。

{{InteractiveExample("CSS デモ: resize")}}

```css interactive-example-choice
resize: both;
```

```css interactive-example-choice
resize: horizontal;
```

```css interactive-example-choice
resize: vertical;
```

```css interactive-example-choice
resize: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">Try resizing this element.</div>
</section>
```

```css interactive-example
#example-element {
  background: linear-gradient(135deg, #0ff 0%, #0ff 94%, #fff 95%);
  border: 3px solid #c5c5c5;
  overflow: auto;
  width: 250px;
  height: 250px;
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
```

`resize` は以下のものには適用されません。

- インライン要素
- {{cssxref("overflow")}} プロパティが `visible` または `clip` であるブロック要素

## 構文

```css
/* キーワード値 */
resize: none;
resize: both;
resize: horizontal;
resize: vertical;
resize: block;
resize: inline;

/* グローバル値 */
resize: inherit;
resize: initial;
resize: revert;
resize: revert-layer;
resize: unset;
```

`resize` プロパティは以下に挙げるキーワードから単一の値を指定します。

### 値

- `none`
  - : ユーザーが要素の寸法を制御する方法を提供しません。
- `both`
  - : 要素はユーザーが寸法を変更できる仕組みを、垂直方向と水平方向の両方について表示します。
- `horizontal`
  - : 要素はユーザーが寸法を変更できる仕組みを、*水平方向*について表示します。
- `vertical`
  - : 要素はユーザーが寸法を変更できる仕組みを、*垂直方向*について表示します。
- `block`
  - : 要素はユーザーが寸法を変更できる仕組みを、*ブロック方向*について表示します ({{cssxref("writing-mode")}} と {{cssxref("direction")}} の値によって、水平方向または垂直方向のどちらかになります)。
- `inline`
  - : 要素はユーザーが寸法を変更できる仕組みを、*インライン方向*について表示します ({{cssxref("writing-mode")}} と {{cssxref("direction")}} の値によって、水平方向または垂直方向のどちらかになります)。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### テキストエリアの寸法の変更を無効化

多くのブラウザーでは、 {{HTMLElement("textarea")}} 要素は既定で寸法が変更できます。 `resize` プロパティでこの動作を上書きすることができます。

#### HTML

```html live-sample___disabling_resizability_of_text_areas
<textarea>いくらかテキストを入力してください。</textarea>
```

#### CSS

```css live-sample___disabling_resizability_of_text_areas
textarea {
  resize: none; /* リサイズを無効化 */
}
```

#### 結果

{{EmbedLiveSample("Disabling_resizability_of_text_areas","200","100")}}

### 任意の要素に対する resize の使用

`resize` プロパティを使用して、任意の要素の寸法を変更可能にすることができます。以下の例では、寸法が変更可能な {{HTMLElement("div")}} の中に、寸法が変更可能な段落 ({{HTMLElement("p")}} 要素) を配置しています。

#### HTML

```html-nolint live-sample___using_resize_with_arbitrary_elements
<div class="resizable">
  <p class="resizable">
    この要素では CSS の `resize` プロパティが `both` に設定されているため、この段落はすべてリサイズ可能です。
  </p>
</div>
```

#### CSS

```css live-sample___using_resize_with_arbitrary_elements
.resizable {
  resize: both;
  overflow: scroll;
  border: 1px solid black;
}

div {
  height: 300px;
  width: 300px;
}

p {
  height: 200px;
  width: 200px;
}
```

#### 結果

{{EmbedLiveSample("Using_resize_with_arbitrary_elements","450","450")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("textarea")}}
