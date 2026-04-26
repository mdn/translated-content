---
title: CSS `clear` プロパティ
short-title: clear
slug: Web/CSS/Reference/Properties/clear
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`clear`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素をその前にある[浮動](/ja/docs/Web/CSS/Reference/Properties/float)要素の下に移動 (clear) する必要があるかどうかを設定します。`clear` プロパティは、浮動要素と非浮動要素のどちらにも適用されます。

{{InteractiveExample("CSS デモ: clear")}}

```css interactive-example-choice
clear: none;
```

```css interactive-example-choice
clear: left;
```

```css interactive-example-choice
clear: right;
```

```css interactive-example-choice
clear: both;
```

```html-nolint interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="floated-left">左</div>
    <div class="floated-right">右</div>
    <div class="transition-all" id="example-element">
      通りには、まるで水が地球の表面から引き上げたばかりかのような泥がたまっており、全長 40 フィートほどのメガロサウルスが、同様に象のようなトカゲのようによたよたとホルボーン・ヒルを登ってくるのを見かけても、不思議ではないでしょう。
    </div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  padding: 0.75em;
  text-align: left;
  line-height: normal;
}

.floated-left {
  border: solid 10px #ffc129;
  background-color: rgb(81 81 81 / 0.6);
  padding: 1em;
  float: left;
}

.floated-right {
  border: solid 10px #ffc129;
  background-color: rgb(81 81 81 / 0.6);
  padding: 1em;
  float: right;
  height: 150px;
}
```

## 構文

```css
/* キーワード値 */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* グローバル値 */
clear: inherit;
clear: initial;
clear: revert;
clear: revert-layer;
clear: unset;
```

### 値

- `none`
  - : このキーワードは、この要素が、先行する浮動ボックスを解除するために下に移動されないことを示します。
- `left`
  - : このキーワードは、この要素が先行する左の浮動ボックスを解除するために下に移動されることを示します。
- `right`
  - : このキーワードは、この要素が先行する右の浮動ボックスを解除するために下に移動されることを示します。
- `both`
  - : このキーワードは、この要素が先行する左右両方の浮動ボックスを解除するために下に移動されることを示します。
- `inline-start`
  - : このキーワードは、この要素が先行する包含ブロックの先頭側の浮動ボックスを解除するために下に移動されることを示します。これは左書きでは左側、右書きでは右側の浮動要素です。
- `inline-end`
  - : このキーワードは、この要素が先行する包含ブロックの末尾側の浮動ボックスを解除するために下に移動されることを示します。これは左書きでは右側、右書きでは左側の浮動要素です。

## 解説

浮動ブロック以外に適用された場合は、その要素の[境界の端](/ja/docs/Web/CSS/Guides/Box_model/Introduction#境界領域)が、関係するすべての浮動要素の[マージンの端](/ja/docs/Web/CSS/Guides/Box_model/Introduction#マージン領域)より下まで移動します。浮動ブロック以外では、上マージンは相殺されます。

一方で、2 つの浮動要素の垂直マージンは相殺されません。浮動要素に適用された場合、下の要素のマージンの端が、すべての関連する浮動要素のマージンの端よりも下に移動します。これは後の浮動要素が前のものよりも高い位置に配置されることがないため、後の浮動要素の位置に影響します。

解除されることに関連する浮動要素は、その前の浮動要素と[同一のブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)内の先行する浮動要素です。

> [!NOTE]
> 浮動要素しか包まない要素は、高さがなくなります。このような要素を常にリサイズ可能にして浮動要素を包含するようにしたい場合は、その要素の {{cssxref("display")}} プロパティの値を [`flow-root`](/ja/docs/Web/CSS/Reference/Properties/display#flow-root) に設定してください。
>
> ```css
> #container {
>   display: flow-root;
> }
> ```

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### clear: left

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="left">この段落は左側の浮動要素を解除します。</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.left {
  border: 1px solid black;
  clear: left;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: white;
  width: 20%;
}
.red {
  float: left;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear_left','100%','250') }}

### clear: right

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="right">この段落は右側の浮動要素を解除します。</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.right {
  border: 1px solid black;
  clear: right;
}
.black {
  float: right;
  margin: 0;
  background-color: black;
  color: white;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear_right','100%','250') }}

### clear: both

#### HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor. Fusce pulvinar lacus
    ac dui.
  </p>
  <p class="red">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>
  <p class="both">この段落は両方の浮動要素を解除します。</p>
</div>
```

#### CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.both {
  border: 1px solid black;
  clear: both;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: white;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width: 20%;
}
p {
  width: 45%;
}
```

{{ EmbedLiveSample('clear_both','100%','300') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 基本ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
