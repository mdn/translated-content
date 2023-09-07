---
title: resize
slug: Web/CSS/resize
---

{{CSSRef}}

**`resize`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の寸法を変更できるかどうか、もしそうなら、どの方向に変更できるかを設定します。

{{EmbedInteractiveExample("pages/css/resize.html")}}

`resize` は以下のものには適用されません。

- インライン要素
- {{cssxref("overflow")}} プロパティが `visible` であるブロック要素

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
- `block` {{experimental_inline}}
  - : 要素はユーザーが寸法を変更できる仕組みを、*ブロック方向*について表示します ({{cssxref("writing-mode")}} と {{cssxref("direction")}} の値によって、水平方向または垂直方向のどちらかになります)。
- `inline` {{experimental_inline}}
  - : 要素はユーザーが寸法を変更できる仕組みを、*インライン方向*について表示します ({{cssxref("writing-mode")}} と {{cssxref("direction")}} の値によって、水平方向または垂直方向のどちらかになります)。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Disabling_resizability_of_textareas">テキストエリアの寸法の変更を無効化</h3>

多くのブラウザーでは、 {{HTMLElement("textarea")}} 要素は既定で寸法が変更できます。 `resize` プロパティでこの動作を上書きすることができます。

#### HTML

```html
<textarea>Type some text here.</textarea>
```

#### CSS

```css
textarea {
  resize: none; /* Disables resizability */
}
```

#### 結果

{{EmbedLiveSample("Disabling_resizability_of_textareas","200","100")}}

<h3 id="Using_resize_with_arbitrary_elements">任意の要素に対する resize の使用</h3>

`resize` プロパティを使用して、任意の要素の寸法を変更可能にすることができます。以下の例では、寸法が変更可能な {{HTMLElement("div")}} の中に、寸法が変更可能な段落 ({{HTMLElement("p")}} 要素) を配置しています。

#### HTML

```html
<div class="resizable">
  <p class="resizable">
    This paragraph is resizable in all directions, because the CSS `resize`
    property is set to `both` on this element.
  </p>
</div>
```

#### CSS

```css
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
