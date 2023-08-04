---
title: 伪类
slug: Web/CSS/Pseudo-classes
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **_伪类_**是添加到选择器的关键字，用于指定所选元素的特殊状态。例如，伪类 {{CSSxRef(":hover")}} 可以用于选择一个按钮，当用户的指针悬停在按钮上时，设置此按钮的样式。

```css
/* 用户的指针悬停在其上的任何按钮 */
button:hover {
  color: blue;
}
```

伪类由冒号（`:`）后跟着伪类名称组成（例如，`:hover`）。函数式伪类还包含一对括号来定义参数（例如，`:dir()`）。附上了伪类的元素被定义为*锚元素*（例如，`button:hover` 中的 `button`）。

伪类让你可以将样式应用于元素，不仅与文档树内容有关，也与外部因素有关——如与导航历史有关的（例如，{{CSSxRef(":visited")}}）、与其内容的状态有关的（如某些表单元素上的 {{CSSxRef(":checked")}}）或者与鼠标位置有关的（如 {{CSSxRef(":hover")}}，它可以让你知道鼠标是否在一个元素上）。

> **备注：** 相较于伪类，[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)可用于设置元素*特定部分*的样式。

## 元素显示状态伪类

这些伪类可以基于元素的显示状态来选择它们。

- {{CSSxRef(":fullscreen")}}
  - : 匹配当前处于全屏模式的元素。

## 输入状态伪类

这些伪类与表单元素相关，可以基于 HTML 属性或交互前后字段的状态来选择元素。

TBD

## 语言的伪类

这些伪类根据文档语言而反应，可以基于语言或书写方向来选择元素。

- {{CSSxRef(":dir()")}}
  - : 方向性伪类基于由文档语言所确定的其方向性来选择元素。
- {{CSSxRef(":lang()")}}
  - : 基于其内容语言来选择元素。

## 位置伪类

这些伪类与链接以及当前文档中的目标元素有关。

TBD

## 资源状态伪类

这些伪类应用于能够处于被描述为“正在播放”状态的媒体，例如视频。

TBD

## 时间方面的伪类

这些伪类适用于查看有计时功能的东西，如 [WebVTT](/zh-CN/docs/Web/API/WebVTT_API) 字幕轨。

TBD

## 树结构的伪类

这些伪类与文档树中的元素位置有关。

- {{CSSxRef(":root")}}
  - : 表示文档的根元素。在 HTML 中这通常是 `<html>` 元素。
- {{CSSxRef(":empty")}}
  - : 表示除空白字符外没有子元素的元素。

TBD

## 用户行为伪类

这些伪类需要用户进行一些交互才能够应用，例如将鼠标指针悬停在元素上。

TBD

## 函数式伪类

这些伪类接受[可容错选择器列表](/zh-CN/docs/Web/CSS/Selector_list#可容错选择器列表)作为参数。

- [`:is()`](/zh-CN/docs/Web/CSS/:is)
  - : 匹配与提供的列表中的任何选择器匹配的任何元素。
- [`:not()`](/zh-CN/docs/Web/CSS/:not)
  - : 表示其参数中未表示的任何元素。
- [`:where()`](/zh-CN/docs/Web/CSS/:where)
  - : 优先级调整伪类匹配与提供的列表中的任何选择器匹配的任何元素，但不添加任何优先级权重。
- [`:has()`](/zh-CN/docs/Web/CSS/:has)
  - : 该关系伪类表示与任何一个与锚定的元素的相对选择器相匹配（如果有的话）的元素。

## 语法

```css
selector:pseudo-class {
  property: value;
}
```

像常规的类一样，你可以在选择器中将任意数量的伪类链在一起。

## 字母索引

由一组 CSS 规范定义的伪类包括以下内容：

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":any-link")}}
- {{CSSxRef(":autofill")}}

B

- {{CSSxRef(":blank")}} {{Experimental_Inline}}

C

- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}} {{Experimental_Inline}}

D

- {{CSSxRef(":default")}}
- {{CSSxRef(":defined")}}
- {{CSSxRef(":dir", ":dir()")}} {{Experimental_Inline}}
- {{CSSxRef(":disabled")}}

E

- {{CSSxRef(":empty")}}
- {{CSSxRef(":enabled")}}

F

- {{CSSxRef(":first")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":fullscreen")}}
- {{CSSxRef(":future")}} {{Experimental_Inline}}
- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- {{CSSxRef(":focus-within")}}

H

- {{CSSxRef(":has", ":has()")}} {{Experimental_Inline}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host", ":host()")}}
- {{CSSxRef(":host-context", ":host-context()")}} {{Experimental_Inline}}
- {{CSSxRef(":hover")}}

I

- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":in-range")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":is", ":is()")}}

L

- {{CSSxRef(":lang", ":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}} {{Experimental_Inline}}

M

- {{CSSxRef(":modal")}}

N

- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{CSSxRef(":nth-col", ":nth-col()")}} {{Experimental_Inline}}
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
- {{CSSxRef(":nth-last-col", ":nth-last-col()")}} {{Experimental_Inline}}
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}

O

- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":out-of-range")}}

P

- {{CSSxRef(":past")}} {{Experimental_Inline}}
- {{CSSxRef(":picture-in-picture")}}
- {{CSSxRef(":placeholder-shown")}}
- {{CSSxRef(":paused")}}
- {{CSSxRef(":playing")}}

R

- {{CSSxRef(":read-only")}}
- {{CSSxRef(":read-write")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":right")}}
- {{CSSxRef(":root")}}

S

- {{CSSxRef(":scope")}}
- {{CSSxRef(":state", ":state()")}} {{Experimental_Inline}}

T

- {{CSSxRef(":target")}}
- {{CSSxRef(":target-within")}} {{Experimental_Inline}}

U

- {{CSSxRef(":user-invalid")}} {{Experimental_Inline}}

V

- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}

W

- {{CSSxRef(":where", ":where()")}}

## 规范

{{Specifications}}

## 参见

- [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)
