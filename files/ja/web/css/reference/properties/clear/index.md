---
title: clear
slug: Web/CSS/Reference/Properties/clear
original_slug: Web/CSS/clear
l10n:
  sourceCommit: 2adfb8760ac42c80966080e2e84211b14e43b589
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

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="floated-left">Left</div>
    <div class="floated-right">Right</div>
    <div class="transition-all" id="example-element">
      As much mud in the streets as if the waters had but newly retired from the
      face of the earth, and it would not be wonderful to meet a Megalosaurus,
      forty feet long or so, waddling like an elephantine lizard up Holborn
      Hill.
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
  background-color: rgba(81, 81, 81, 0.6);
  padding: 1em;
  float: left;
}

.floated-right {
  border: solid 10px #ffc129;
  background-color: rgba(81, 81, 81, 0.6);
  padding: 1em;
  float: right;
  height: 150px;
}
```

浮動でないブロックに適用された場合は、その要素の[境界の辺](/ja/docs/Web/CSS/Guides/Box_model/Introduction#border_area)が、関係するすべての浮動要素の[マージンの辺](/ja/docs/Web/CSS/Guides/Box_model/Introduction#margin_area)より下まで移動します。浮動でないブロックの上マージンは折り畳まれます。

一方で、二つの浮動要素の垂直マージンは折り畳まれません。浮動要素に適用された場合、下の要素のマージンの辺が、すべての関連する浮動要素のマージンの辺よりも下に移動します。これは後の浮動要素が前のものよりも高い位置に配置されることがないため、後の浮動要素の位置に影響します。

解除されることに関連する浮動要素は、その前の浮動要素と[同一のブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)内の先行する浮動要素です。

> [!NOTE]
> 浮動要素しか包含しない要素は、高さがなくなります。このような要素を常にリサイズ可能にして浮動要素を包含するようにしたい場合は、その要素の [`display`](/ja/docs/Web/CSS/Reference/Properties/display) プロパティの値を [`flow-root`](/ja/docs/Web/CSS/Reference/Properties/display#flow-root) に設定してください。
>
> ```css
> #container {
>   display: flow-root;
> }
> ```

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
  - : 要素は先行する浮動要素と切り離されず、下に移動しません。
- `left`
  - : 要素は先行する*左*の浮動要素と切り離され、下に移動します。
- `right`
  - : 要素は先行する*右*の浮動要素と切り離され、下に移動します。
- `both`
  - : 要素は先行する*左右両方*の浮動要素と切り離され、下に移動します。
- `inline-start`
  - : 要素は、先行する*包含ブロックの先頭側*の浮動要素の下に移動することを示すキーワードです。これは左書きでは*左側*、右書きでは*右側*の浮動要素です。
- `inline-end`
  - : 要素は、先行する*包含ブロックの末尾側*の浮動要素の下に移動することを示すキーワードです。これは左書きでは*右側*、右書きでは*左側*の浮動要素です。

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
  <p class="left">This paragraph clears left.</p>
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
  color: #fff;
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
  <p class="right">This paragraph clears right.</p>
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
  color: #fff;
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
  <p class="both">This paragraph clears both.</p>
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
  color: #fff;
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
