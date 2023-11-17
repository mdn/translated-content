---
title: counter()
slug: Web/CSS/counter
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 函数 **`counter()`**，返回一个代表计数器的当前值的字符串。它通常和伪元素搭配使用，但是理论上可以在支持\<string>值的任何地方使用。

```css
/* 简单使用 */
counter(计数器名称);

/* 更改计数器显示 */
counter(countername, upper-roman)
```

一个[计数器](/zh-CN/docs/Web/CSS/CSS_lists/Using_CSS_counters)本身没有可见的效果，而是通过`counter()`函数（和[`counters()`](/zh-CN/docs/Web/CSS/counters)函数）返回开发人员定义的字符串（或图像）从而使计数器拥有很棒的作用。

> **备注：** `counter()`函数可以与任何 CSS 属性一起使用，但是对[`"content"`](/zh-CN/docs/Web/CSS/content)以外的属性的支持是试验性的，对 type-or-unit 参数的支持很少。
>
> 在使用此功能之前，请仔细检查[浏览器兼容性表](#Browser_compatibility)。

## 语法

### 值

- `<custom-ident> 自定义标识`
  - : 一个标识计数器的名称，区分大小写，并且与{{cssxref("counter-reset")}}和{{cssxref("counter-increment")}}中的“名称”相同。名称不能以两个破折号开头，并且不能为`none`, `unset`, `initial`, 或 `inherit`。
- `<counter-style> 计数器样式`
  - : 计数器样式名称或 [`symbols()`](/zh-CN/docs/Web/CSS/symbols) 函数，其中计数器样式名称是数字，字母或符号的简单预定义计数器样式，复杂的东亚或埃塞俄比亚长手预定义计数器样式，或其他[预定义计数器样式](/zh-CN/docs/Web/CSS/CSS_counter_styles)。如果省略，则计数器样式默认为十进制。

### 形式语法

```
counter( <custom-ident>, <counter-style>? )

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
  <li></li>
  <li></li>
  <li></li>
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
li::after {
  content: "[" counter(listCounter) "] == [" counter(listCounter, upper-roman)
    "]";
}
```

#### 结果

{{EmbedLiveSample("default value compared to upper Roman", "100%", 150)}}

### _decimal-leading-zero_ compared to lower-alpha

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
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
li::after {
  content: "[" counter(count, decimal-leading-zero) "] == [" counter(
      count,
      lower-alpha
    )
    "]";
}
```

#### 结果

{{EmbedLiveSample("decimal-leading-zero_compared_to_lower-alpha", "100%", 150)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 计数器](/zh-CN/docs/Web/CSS/CSS_lists/Using_CSS_counters)
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- CSS [`counters()`](/zh-CN/docs/Web/CSS/counters) 函数
