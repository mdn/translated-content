---
title: clear
slug: Web/CSS/clear
---

{{CSSRef}}

**`clear`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素をその前にある[浮動](/ja/docs/Web/CSS/float)要素の下に移動 (clear) する必要があるかどうかを設定します。`clear` プロパティは、浮動要素と非浮動要素のどちらにも適用されます。

{{EmbedInteractiveExample("pages/css/clear.html")}}

浮動でないブロックに適用された場合は、その要素の[境界の辺](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border-area)が、関係するすべての浮動要素の[マージンの辺](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#margin-area)より下まで移動します。浮動でないブロックの上マージンは折り畳まれます。

一方で、二つの浮動要素の垂直マージンは折り畳まれません。浮動要素に適用された場合、下の要素のマージンの辺が、すべての関連する浮動要素のマージンの辺よりも下に移動します。これは後の浮動要素が前のものよりも高い位置に配置されることがないため、後の浮動要素の位置に影響します。

解除されることに関連する浮動要素は、その前の浮動要素と[同一のブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context)内の先行する浮動要素です。

> **メモ:** 浮動要素しか包含しない要素は、高さがなくなります。このような要素を常にリサイズ可能にして浮動要素を包含するようにしたい場合は、その子要素自身に clear を設定しなければなりません。これは **clearfix** と呼ばれます。また、実現方法のひとつとして、置換 {{cssxref("::after")}} [擬似要素](/ja/docs/Web/CSS/Pseudo-elements) に `clear` を使う方法があります。
>
> ```css
> #container::after {
>   content: "";
>   display: block;
>   clear: both;
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

- [CSS 基本ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
