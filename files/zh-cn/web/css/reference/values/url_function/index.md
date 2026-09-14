---
title: url()
slug: Web/CSS/Reference/Values/url_function
l10n:
  sourceCommit: b6f6c10c9c3a73e8a1f1c7bc643b44b2521cb234
---

**`url()`** [CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions)用于包含文件。参数可以是绝对 URL、相对 URL、blob URL 或数据 URL。**`url()`** 函数可以作为其他 CSS 函数的参数传递，如 {{cssxref("attr")}} 函数。根据属性值的不同，所查找的资源可以是图像、字体或样式表。`url()` 函数标记表示 `<url>` 数据类型的值。

> [!NOTE]
> {{Glossary("URI")}} 和 {{Glossary("URL")}} 是不同的。URI 用于标识资源。URL 是 URI 的一种类型，用于描述资源的*位置*。URI 可以是 URL，也可以是资源的名称（{{Glossary("URN")}}）。
>
> 在 CSS 第 1 版中，`url()` 函数标记只表示真正的 URL。在 CSS 第 2 版中，`url()` 的定义扩展到可描述任何 URI，无论是 URL 还是 URN。令人困惑的是，这意味着 `url()` 可以用来创建 `<uri>` CSS 数据类型。这种更改不仅笨拙，而且毫无必要，因为 URN 几乎从未在实际 CSS 中使用过。为了减少混淆，CSS 第 3 版又回到了狭义的初始定义。现在，`url()` 只表示真正的 `<url>`。

```css
/* 简单用法 */
url("https://example.com/images/myImg.jpg");
url('https://example.com/images/myImg.jpg');
url(https://example.com/images/myImg.jpg);
url("data:image/jpg;base64,iRxVB0…");
url(myImg.jpg);
url(#IDofSVGpath);

/* 相关属性 */
background-image: url("star.gif");
list-style-image: url('../images/bullet.jpg');
content: url("pdficon.jpg");
cursor: url(mycursor.cur);
border-image-source: url(/media/diamonds.png);
src: url('fantasticfont.woff');
offset-path: url(#path);
mask-image: url("masks.svg#mask1");

/* 带回退的属性 */
cursor: url(pointer.cur), pointer;

/* 相关的简写属性 */
background: url('star.gif') bottom right repeat-x blue;
border-image: url("/media/diamonds.png") 30 fill / 30px / 30px space;

/* 作为另一个 CSS 函数的参数 */
background-image: cross-fade(20% url(first.png), url(second.png));
mask-image: image(url(mask.png), skyblue, linear-gradient(rgb(0 0 0 / 100%), transparent));

/* 作为非简写多重数值的一部分 */
content: url(star.svg) url(star.svg) url(star.svg) url(star.svg) url(star.svg);

/* at 规则 */
@document url("https://www.example.com/") { /* … */ }
@import url("https://www.example.com/style.css");
@namespace url(http://www.w3.org/1999/xhtml);
```

如果使用相对 URL，它是相对于样式表的 URL（而不是相对于网页的 URL）。

**`url()`** 函数可以用作 {{cssxref('background')}}、{{cssxref('background-image')}}、{{cssxref('border')}}、{{cssxref('border-image')}}、{{cssxref('border-image-source')}}、{{cssxref('content')}}、{{cssxref('cursor')}}、{{cssxref('filter')}}、{{cssxref('list-style')}}、{{cssxref('list-style-image')}}、{{cssxref('mask')}}、{{cssxref('mask-image')}}、{{cssxref('offset-path')}}、{{cssxref('clip-path')}} 的值，作为 [`@font-face`](/zh-CN/docs/Web/CSS/Reference/At-rules/@font-face) 块的一部分的 [src](/zh-CN/docs/Web/CSS/Reference/At-rules/@font-face/src)，以及 [@counter-style/`symbol`](/zh-CN/docs/Web/CSS/Reference/At-rules/@counter-style/symbols)。

## 语法

### 值

- `<string>`
  - : 可以指定一个 URL 或 SVG 形状的 ID 的字符串。
    - url
      - : 为相对地址、绝对地址的 URL，或指向所包含的 web 资源的指针，或数据 URL，可选择使用单引号或双引号。如果 URL 包含括号、空白字符或引号（除非这些字符已转义），或者地址包含高于 0x7e 的控制字符，则需要使用引号。除非经过转义，否则双引号不能出现在双引号内，单引号不能出现在单引号内。以下内容均有效且等效：

        ```css
        <css_property>: url("https://example.com/image.png")
        <css_property>: url('https://example.com/image.png')
        <css_property>: url(https://example.com/image.png)
        ```

        如果选择不使用引号编写 URL，请在 URL 中的任何括号、空白字符、单引号（`'`）和双引号（`"`）前使用反斜线（`\`）。

    - path
      - : 引用 [SVG 形状](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes)或 [SVG 滤镜](/zh-CN/docs/Web/SVG/Reference/Element/filter)的 ID。

- `<url-modifier>`
  - : 将来，`url()` 函数可能会支持指定修饰符、标识符或函数标记，从而改变 URL 字符串的含义。本规范不支持此特性，也未对其进行全面定义。

### 形式语法

```plain
url( <string> <url-modifier>* )
```

## 示例

### 作为 background 属性的值

```css
body {
  background: url("https://mdn.github.io/shared-assets/images/examples/leopard.jpg")
    #00d no-repeat fixed;
}
```

{{EmbedLiveSample("作为 background 属性的值", "100%", "200")}}

### 将图像设置为列表项目符号

```html hidden
<ul>
  <li>一</li>
  <li>二</li>
  <li>三</li>
</ul>
```

```css hidden
ul {
  font-size: 3rem;
  margin: 0;
}
```

```css
ul {
  list-style: outside
    url("https://mdn.github.io/shared-assets/images/examples/firefox-logo.svg");
}
```

{{EmbedLiveSample("将图像设置为列表符号", "100%", "200")}}

### 内容属性中的用法

#### HTML

```html
<ul>
  <li>一</li>
  <li>二</li>
  <li>三</li>
</ul>
```

#### CSS

```css
li::after {
  content: "——"
    url("https://mdn.github.io/shared-assets/images/examples/star-white_16x16.png");
}
```

#### 结果

{{EmbedLiveSample("内容属性中的用法", "100%", 110)}}

### 使用数据 URL

#### CSS

```css
body {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='45'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3Cpath d='M10 30h60' stroke='red' stroke-width='5'/%3E%3C/svg%3E");
}
```

{{EmbedLiveSample("使用数据 URL", "100%", 100)}}

### 在滤镜中的用法

当 URL 被用作滤镜路径时，URL 必须是以下其中之一：

1. SVG 文件的路径，并附加滤镜的 ID。
2. 如果页面上已经存在 SVG，则为滤镜的 ID。

```css
.blur {
  filter: url(my-file.svg#svg-blur); /* 作为滤镜使用的 SVG 文件的 URL */
}

.inline-blur {
  filter: url(#svg-blur); /* 嵌入到 HTML 页面中的 SVG 的 ID */
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image", "image()")}}
- {{cssxref("image/image-set", "image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
