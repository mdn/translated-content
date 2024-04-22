---
title: counters()
slug: Web/CSS/counters
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 函数 **`counters()`** 是一个嵌套计数器，返回表示指定计数器当前值的连接字符串。`counters()` 函数有两种形式：`counters(name, string)` 或 `counters(name, string, style)`。它通常和伪元素搭配使用，但是理论上可以在支持[`<string>`](/zh-CN/docs/Web/CSS/string)值的任何地方使用。生成的文本是具有给定名称的所有计数器的值，从最外层到最内层，之间由指定字符串分隔。计数器以指示的样式呈现，如果未指定样式，则默认为十进制。

```css
/* Simple usage  - style defaults to decimal */
counters(countername, '-');

/* changing the counter display */
counters(countername, '.', upper-roman)
```

一个[计数器](/zh-CN/docs/Web/CSS/CSS_lists/Using_CSS_counters)本身没有可见的效果，而是通过 `counter()` 函数（和 [`counters()`](/zh-CN/docs/Web/CSS/counters) 函数）返回开发人员定义的字符串（或图像）从而使计数器拥有很棒的作用。

> **备注：** `counter()` 函数可以与任何 CSS 属性一起使用，但是对[`"content"`](/zh-CN/docs/Web/CSS/content)以外的属性的支持是试验性的，对 type-or-unit 参数的支持很少。
>
> 在使用此功能之前，请仔细检查[浏览器兼容性表](/zh-CN/docs/Web/CSS/counter#Browser_compatibility) 。

## 语法

### Values

- `<custom-ident> 自定义标识`
  - : 一个标识计数器的名称，区分大小写，并且与[`counter-reset`](/zh-CN/docs/Web/CSS/counter-reset)和[`counter-increment`](/zh-CN/docs/Web/CSS/counter-increment)中的“名称”相同。名称不能以两个破折号开头，并且不能为`none`, `unset`, `initial`, 或 `inherit`。
- `<counter-style> 计数器样式`
  - : 计数器样式名称或 [`symbols()`](/zh-CN/docs/Web/CSS/symbols) 函数，其中计数器样式名称是数字，字母或符号的简单预定义计数器样式，复杂的东亚或埃塞俄比亚长手预定义计数器样式，或其他[预定义计数器样式](/zh-CN/docs/Web/CSS/CSS_counter_styles)。如果省略，则计数器样式默认为十进制。
- `<string> 字符串`
  - : 任意数量的文本字符。非拉丁字符必须使用其 Unicode 转义序列进行编码：例如，`\ 000A9`表示版权符号。

### 形式语法

```plain
counters( <custom-ident>, <string>, <counter-style>? )

where
<counter-style> = <counter-style-name> | symbols()

where
<counter-style-name> = <custom-ident>
```

## 示例

### default value compared to upper Roman

#### HTML

```html
<ol>
  <li>
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </li>
  <li></li>
  <li></li>
  <li>
    <ol>
      <li></li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::marker {
  content: counters(listCounter, ".", upper-roman) ") ";
}
li::before {
  content: counters(listCounter, ".") " == " counters(
      listCounter,
      ".",
      lower-roman
    );
}
```

#### 结果

{{EmbedLiveSample("default value compared to upper Roman", "100%", 150)}}

### _decimal-leading-zero_ compared to lower-alpha

#### HTML

```html
<ol>
  <li>
    <ol>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </li>
  <li></li>
  <li></li>
  <li>
    <ol>
      <li></li>
      <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li>
    </ol>
  </li>
</ol>
```

#### CSS

```css
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::marker {
  content: counters(count, ".", upper-alpha) ") ";
}
li::before {
  content: counters(count, ".", decimal-leading-zero) " == " counters(
      count,
      ".",
      lower-alpha
    );
}
```

#### 结果

{{EmbedLiveSample("decimal-leading-zero_compared_to_lower-alpha", "100%", 150)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using CSS Counters](/zh-CN/docs/Web/CSS/CSS_lists/Using_CSS_counters)
- {{cssxref("counter-set")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- CSS [`counter()`](/zh-CN/docs/Web/CSS/counter_function) function
- {{cssxref("::marker")}}
