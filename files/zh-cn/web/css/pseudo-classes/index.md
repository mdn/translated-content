---
title: 伪类
slug: Web/CSS/Pseudo-classes
page-type: landing-page
tags:
  - CSS
  - Guide
  - Overview
  - Pseudo-class
  - Reference
  - Selectors
spec-urls:
  - https://html.spec.whatwg.org/multipage/#pseudo-classes
  - https://drafts.csswg.org/selectors/
  - https://drafts.csswg.org/css-ui/
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **_伪类_** 是添加到选择器的关键字，用于指定所选元素的特殊状态。例如，伪类 {{CSSxRef(":hover")}} 可以用于选择一个按钮，当用户的指针悬停在按钮上时，设置此按钮的样式。

```css
/* 用户的指针悬停在其上的任何按钮 */
button:hover {
  color: blue;
}
```

伪类由冒号（`:`）后跟着伪类名称组成（例如，`:hover`）。函数式伪类还包含一对括号来定义参数（例如，`:dir()`）。附上了伪类的元素被定义为 _锚元素_ （例如，案例 `button:hover` 中的 `button`）。

伪类让你可以将样式应用于元素——不仅仅是与文档树内容有关的，也可以是与外部因素有关的——像是与导航历史有关的（{{CSSxRef(":visited")}}，举例而言）、与其内容的状态有关的（像是某些表单元素上的 {{CSSxRef(":checked")}}）、或者与鼠标位置有关的（像是 {{CSSxRef(":hover")}}，它可以让你知道鼠标是否在一个元素上）。

> **注意：**相较于伪类，[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements) 可用于设置元素 _特定部分_ 的样式。

## 元素显示状态伪类

这些伪类可以基于元素的显示状态来选择它们。

- {{CSSxRef(":fullscreen")}}
  - : 匹配当前处于全屏模式的元素。
- {{CSSxRef(":modal")}}
  - : Matches an element that is in a state in which it excludes all interaction with elements outside it until the interaction has been dismissed.
- {{CSSxRef(":picture-in-picture")}}
  - : Matches an element that is currently in picture-in-picture mode.

## 输入状态伪类

这些伪类与表单元素相关，可以基于 HTML 属性或交互前后字段的状态来选择元素。

- {{CSSxRef(":autofill")}}
  - : Matches when an {{htmlelement("input")}} has been autofilled by the browser.
- {{CSSxRef(":enabled")}}
  - : Represents a user interface element that is in an enabled state.
- {{CSSxRef(":disabled")}}
  - : Represents a user interface element that is in a disabled state.
- {{CSSxRef(":read-only")}}
  - : Represents any element that cannot be changed by the user.
- {{CSSxRef(":read-write")}}
  - : Represents any element that is user-editable.
- {{CSSxRef(":placeholder-shown")}}
  - : Matches an input element that is displaying placeholder text. For example, it will match the `placeholder` attribute in the {{htmlelement("input")}} and {{htmlelement("textarea")}} elements.
- {{CSSxRef(":default")}}
  - : Matches one or more UI elements that are the default among a set of elements.
- {{CSSxRef(":checked")}}
  - : Matches when elements such as checkboxes and radio buttons are toggled on.
- {{CSSxRef(":indeterminate")}}
  - : Matches UI elements when they are in an indeterminate state.
- {{CSSxRef(":blank")}}
  - : Matches a user-input element which is empty, containing an empty string or other null input.
- {{CSSxRef(":valid")}}
  - : Matches an element with valid contents. For example, an input element with the type 'email' that contains a validly formed email address or an empty value if the control is not required.
- {{CSSxRef(":invalid")}}
  - : Matches an element with invalid contents. For example, an input element with type 'email' with a name entered.
- {{CSSxRef(":in-range")}}
  - : Applies to elements with range limitations. For example, a slider control when the selected value is in the allowed range.
- {{CSSxRef(":out-of-range")}}
  - : Applies to elements with range limitations. For example, a slider control when the selected value is outside the allowed range.
- {{CSSxRef(":required")}}
  - : Matches when a form element is required.
- {{CSSxRef(":optional")}}
  - : Matches when a form element is optional.
- {{CSSxRef(":user-invalid")}}
  - : Represents an element with incorrect input, but only when the user has interacted with it.

## 语言式伪类

这些伪类根据文档语言而反应，可以基于语言或书写方向来选择元素。

- {{CSSxRef(":dir()")}}
  - : 方向性伪类基于由文档语言所确定的其方向性来选择元素。
- {{CSSxRef(":lang()")}}
  - : 基于其内容语言来选择元素。

## 位置伪类

这些伪类与链接以及当前文档中的目标元素有关。

- {{CSSxRef(":any-link")}}
  - : Matches an element if the element would match either {{CSSxRef(":link")}} or {{CSSxRef(":visited")}}.
- {{CSSxRef(":link")}}
  - : Matches links that have not yet been visited.
- {{CSSxRef(":visited")}}
  - : Matches links that have been visited.
- {{CSSxRef(":local-link")}}
  - : Matches links whose absolute URL is the same as the target URL. For example, anchor links to the same page.
- {{CSSxRef(":target")}}
  - : Matches the element which is the target of the document URL.
- {{CSSxRef(":target-within")}}
  - : Matches elements which are the target of the document URL, but also elements which have a descendant which is the target of the document URL.
- {{CSSxRef(":scope")}}
  - : Represents elements that are a reference point for selectors to match against.

## 资源状态伪类

这些伪类应用于能够处于被描述为“正在播放”状态的媒体，例如视频。

- {{CSSxRef(":playing")}}
  - : Represents a media element that is capable of playing when that element is playing.
- {{CSSxRef(":paused")}}
  - : Represents a media element that is capable of playing when that element is paused.

## 时间方面的伪类

These pseudo-classes apply when viewing something which has timing, such as a [WebVTT](/zh-CN/docs/Web/API/WebVTT_API) caption track.

- {{CSSxRef(":current")}}
  - : Represents the element or ancestor of the element that is being displayed.
- {{CSSxRef(":past")}}
  - : Represents an element that occurs entirely before the {{CSSxRef(":current")}} element.
- {{CSSxRef(":future")}}
  - : Represents an element that occurs entirely after the {{CSSxRef(":current")}} element.

## 树结构式伪类

这些伪类与文档树中的元素位置有关。

- {{CSSxRef(":root")}}
  - : 表示文档的根元素。在 HTML 中这通常是 `<html>` 元素。
- {{CSSxRef(":empty")}}
  - : 表示除空白字符外没有子元素的元素。
- {{CSSxRef(":nth-child")}}
  - : Uses `An+B` notation to select elements from a list of sibling elements.
- {{CSSxRef(":nth-last-child")}}
  - : Uses `An+B` notation to select elements from a list of sibling elements, counting backwards from the end of the list.
- {{CSSxRef(":first-child")}}
  - : Matches an element that is the first of its siblings.
- {{CSSxRef(":last-child")}}
  - : Matches an element that is the last of its siblings.
- {{CSSxRef(":only-child")}}
  - : Matches an element that has no siblings. For example, a list item with no other list items in that list.
- {{CSSxRef(":nth-of-type")}}
  - : Uses `An+B` notation to select elements from a list of sibling elements that match a certain type from a list of sibling elements.
- {{CSSxRef(":nth-last-of-type")}}
  - : Uses `An+B` notation to select elements from a list of sibling elements that match a certain type from a list of sibling elements counting backwards from the end of the list.
- {{CSSxRef(":first-of-type")}}
  - : Matches an element that is the first of its siblings, and also matches a certain type selector.
- {{CSSxRef(":last-of-type")}}
  - : Matches an element that is the last of its siblings, and also matches a certain type selector.
- {{CSSxRef(":only-of-type")}}
  - : Matches an element that has no siblings of the chosen type selector.

## 用户行为伪类

这些伪类需要用户进行一些交互才能够应用，例如将鼠标指针悬停在元素上。

- {{CSSxRef(":hover")}}
  - : Matches when a user designates an item with a pointing device, such as holding the mouse pointer over the item.
- {{CSSxRef(":active")}}
  - : Matches when an item is being activated by the user. For example, when the item is clicked on.
- {{CSSxRef(":focus")}}
  - : Matches when an element has focus.
- {{CSSxRef(":focus-visible")}}
  - : Matches when an element has focus and the user agent identifies that the element should be visibly focused.
- {{CSSxRef(":focus-within")}}
  - : Matches an element to which {{CSSxRef(":focus")}} applies, plus any element that has a descendant to which {{CSSxRef(":focus")}} applies.

## 函数式伪类

这些伪类接受 [宽容的选择器列表](/zh-CN/docs/Web/CSS/Selector_list) 作为参数。

- [`:is()`](/zh-CN/docs/Web/CSS/:is)
  - : 匹配与提供的列表中的任何选择器匹配的任何元素。
- [`:not()`](/zh-CN/docs/Web/CSS/:not)
  - : 表示其参数中未表示的任何元素。
- [`:where()`](/zh-CN/docs/Web/CSS/:where)
  - : 特异性调整伪类匹配与提供的列表中的任何选择器匹配的任何元素，但不添加任何特异性权重。
- [`:has()`](/zh-CN/docs/Web/CSS/:has)
  - : The relational pseudo-class represents an element if any of the relative selectors match when anchored against the attached element.

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
