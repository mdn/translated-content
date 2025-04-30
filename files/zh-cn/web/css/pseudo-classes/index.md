---
title: 伪类
slug: Web/CSS/Pseudo-classes
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) ***伪类***是添加到选择器的关键字，用于指定所选元素的特定状态。例如，{{CSSxRef(":hover")}} 伪类可用于在用户指针悬停在按钮上时选择该按钮，然后对选定的按钮进行样式设计。

```css
/* 用户的指针悬停在其上的任何按钮 */
button:hover {
  color: blue;
}
```

伪类由冒号（`:`）后跟着伪类名称组成（例如，`:hover`）。函数式伪类还包含一对括号来定义参数（例如，`:dir()`）。伪类所依附的元素被定义为*锚元素*（例如，`button:hover` 中的 `button`）。

通过伪类，不仅可以根据文档树的内容对元素应用样式，还可以根据导航器的历史记录等外部因素（如 {{CSSxRef(":visited")}}）、与其内容的状态（如某些表单元素上的 {{CSSxRef(":checked")}}）或鼠标位置（如 {{CSSxRef(":hover")}}，它可以让你知道鼠标是否在一个元素上）应用样式。

> [!NOTE]
> 相较于伪类，[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)可用于设置元素*特定部分*的样式。

## 元素伪类

这些伪类与元素的核心标识有关。

- {{CSSxRef(":defined")}}
  - : 匹配任何具有定义的元素。

## 元素显示状态伪类

这些伪类可以基于元素的显示状态来选择它们。

- {{CSSxRef(":open")}}
  - : 匹配可具有打开和关闭状态的元素，当前为打开状态。
- {{CSSxRef(":popover-open")}}
  - : 匹配当前处于显示状态的弹出窗口元素。
- {{CSSxRef(":modal")}}
  - : 匹配一个处于某种状态的元素，在这种状态下，该元素排除了与外部元素的所有交互，直到交互被解除。
- {{CSSxRef(":fullscreen")}}
  - : 匹配当前处于全屏模式的元素。
- {{CSSxRef(":picture-in-picture")}}
  - : 匹配当前处于画中画模式的元素。

## 输入状态伪类

这些伪类与表单元素相关，可以基于 HTML 属性或交互前后字段的状态来选择元素。

- {{CSSxRef(":enabled")}}
  - : 匹配处于启用状态的用户界面元素。
- {{CSSxRef(":disabled")}}
  - : 匹配处于禁用状态的用户界面元素。
- {{CSSxRef(":read-only")}}
  - : 匹配任何不能被用户更改的元素。
- {{CSSxRef(":read-write")}}
  - : 匹配任何用户可编辑的元素。
- {{CSSxRef(":placeholder-shown")}}
  - : 匹配显示占位符文本的输入元素。例如，它将匹配 {{htmlelement("input")}} 和 {{htmlelement("textarea")}} 元素中的 `placeholder` 属性。
- {{CSSxRef(":autofill")}}
  - : 匹配已被浏览器自动填充的 {{htmlelement("input")}} 元素。
- {{CSSxRef(":default")}}
  - : 匹配一组元素中的一个或多个默认用户界面元素。
- {{CSSxRef(":checked")}}
  - : 匹配选中的复选框和单选钮等元素。
- {{CSSxRef(":indeterminate")}}
  - : 匹配处于不确定状态的用户界面元素。
- {{CSSxRef(":blank")}}
  - : 匹配空用户输入元素，包含空字符串或其他空输入。
- {{CSSxRef(":valid")}}
  - : 匹配具有有效内容的元素。例如，类型为“email”的输入元素，其中包含一个有效的电子邮件地址，或者如果控件不是必需的，则匹配一个空值。
- {{CSSxRef(":invalid")}}
  - : 匹配具有无效内容的元素。例如，类型为“email”的输入元素，其中没有输入一个有效的电子邮件地址。
- {{CSSxRef(":in-range")}}
  - : 适用于有范围限制的元素。例如，当所选值在允许范围内时的滑块控件。
- {{CSSxRef(":out-of-range")}}
  - : 适用于有范围限制的元素。例如，当所选值超出允许范围之外时的滑块控件。
- {{CSSxRef(":required")}}
  - : 匹配必须填入的表单元素。
- {{CSSxRef(":optional")}}
  - : 匹配可选填入的表单元素。
- {{CSSxRef(":user-valid")}}
  - : 代表具有正确输入的元素，但仅限于用户与之交互时。
- {{CSSxRef(":user-invalid")}}
  - : 代表具有错误输入的元素，但仅限于用户与之交互时。

## 语言伪类

这些伪类反映了文档语言，可根据语言或脚本方向选择元素。

- {{CSSxRef(":dir", ":dir()")}}
  - : 方向性伪类根据文档语言确定的元素方向性来选择元素。
- {{CSSxRef(":lang", ":lang()")}}
  - : 基于其内容语言来选择元素。

## 位置伪类

这些伪类与链接以及当前文档中的目标元素有关。

- {{CSSxRef(":any-link")}}
  - : 如果元素匹配 {{CSSxRef(":link")}} 或 {{CSSxRef(":visited")}} 则匹配该元素。
- {{CSSxRef(":link")}}
  - : 匹配还没有访问的链接。
- {{CSSxRef(":visited")}}
  - : 匹配已访问过的链接。
- {{CSSxRef(":local-link")}}
  - : 匹配绝对 URL 与目标 URL 相同的链接。例如，指向同一页面的锚链接。
- {{CSSxRef(":target")}}
  - : 匹配文档 URL 目标元素。
- {{CSSxRef(":target-within")}}
  - : 匹配文档 URL 的目标元素，也匹配有文档 URL 目标后代的元素。
- {{CSSxRef(":scope")}}
  - : 代表作为选择器匹配参考点的元素。

## 资源状态伪类

这些伪类应用于能够处于被描述为“正在播放”状态的媒体，例如视频。

- {{CSSxRef(":playing")}}
  - : Represents a playable element that is playing.
- {{CSSxRef(":paused")}}
  - : Represents a playable element that is paused.
- {{CSSxRef(":seeking")}}
  - : Represents a playable element that is currently seeking a playback position in the media resource.
- {{CSSxRef(":buffering")}}
  - : Represents a playable element that is playing but is temporarily stalled because it is downloading the media resource.
- {{CSSxRef(":stalled")}}
  - : Represents a playable element that is playing but is stalled because it cannot download the media resource.
- {{CSSxRef(":muted")}}
  - : Represents a sound-producing element that is muted.
- {{CSSxRef(":volume-locked")}}
  - : Represents a sound-producing element that has its volume level locked by the browser.

## 时间维度伪类

这些伪类适用于查看有计时功能的东西，如 [WebVTT](/zh-CN/docs/Web/API/WebVTT_API) 字幕轨。

- {{CSSxRef(":current")}}
  - : Represents the element or ancestor of the element that is being displayed.
- {{CSSxRef(":past")}}
  - : Represents an element that occurs entirely before the {{CSSxRef(":current")}} element.
- {{CSSxRef(":future")}}
  - : Represents an element that occurs entirely after the {{CSSxRef(":current")}} element.

## 树结构伪类

这些伪类与文档树中的元素位置有关。

- {{CSSxRef(":root")}}
  - : Represents an element that is the root of the document. In HTML this is usually the `<html>` element.
- {{CSSxRef(":empty")}}
  - : Represents an element with no children other than white-space characters.
- {{CSSxRef(":nth-child", ":nth-child()")}}
  - : Uses `An+B` notation to select elements from a list of sibling elements.
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
  - : Uses `An+B` notation to select elements from a list of sibling elements, counting backwards from the end of the list.
- {{CSSxRef(":first-child")}}
  - : Matches an element that is the first of its siblings.
- {{CSSxRef(":last-child")}}
  - : Matches an element that is the last of its siblings.
- {{CSSxRef(":only-child")}}
  - : Matches an element that has no siblings. For example, a list item with no other list items in that list.
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
  - : Uses `An+B` notation to select elements from a list of sibling elements that match a certain type from a list of sibling elements.
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
  - : Uses `An+B` notation to select elements from a list of sibling elements that match a certain type from a list of sibling elements counting backwards from the end of the list.
- {{CSSxRef(":first-of-type")}}
  - : Matches an element that is the first of its siblings, and also matches a certain type selector.
- {{CSSxRef(":last-of-type")}}
  - : Matches an element that is the last of its siblings, and also matches a certain type selector.
- {{CSSxRef(":only-of-type")}}
  - : Matches an element that has no siblings of the chosen type selector.

## 影子结构伪类

这些伪类与影子 DOM 有关。

- {{CSSxRef(":host")}}
  - : Matches the shadow tree's shadow host.
- {{CSSxRef(":host_function", ":host()")}}
  - : Matches an element that matches {{CSSxRef(":host")}} and matches any of the selectors in the list provided.
- {{CSSxRef(":host-context", ":host-context()")}}
  - : Selects elements outside of the shadow tree in the context of the shadow host.
- {{CSSxRef(":has-slotted")}}
  - : Matches slot elements that have been assigned content.

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
- {{CSSxRef(":target-current")}}
  - : Matches the {{cssxref("::scroll-marker")}} pseudo-element of a {{cssxref("scroll-marker-group")}} that is currently scrolled to, in other words, the **active** scroll marker.

## 函数式伪类

这些伪类接受[选择器列表](/en-US/docs/Web/CSS/Selector_list)或[可容错选择器列表](/zh-CN/docs/Web/CSS/Selector_list#可容错选择器列表)作为参数。

- [`:is()`](/zh-CN/docs/Web/CSS/:is)
  - : 匹配与提供的列表中的任何选择器匹配的任何元素。
- [`:not()`](/zh-CN/docs/Web/CSS/:not)
  - : 表示其参数中未表示的任何元素。
- [`:where()`](/zh-CN/docs/Web/CSS/:where)
  - : 优先级调整伪类匹配与提供的列表中的任何选择器匹配的任何元素，但不添加任何优先级权重。
- [`:has()`](/zh-CN/docs/Web/CSS/:has)
  - : 该关系伪类表示与任何一个与锚定的元素的相对选择器相匹配（如果有的话）的元素。

## 自定义状态伪类

这些伪类应用于自定义元素。

- {{CSSxRef(":state", ":state()")}}
  - : Matches custom elements that have the specified custom state.

## 页面伪类

这些伪类与打印文档中的页面有关，与 At 规则 {{CSSxRef("@page")}} 一起使用。

- {{CSSxRef(":left")}}
  - : Represents all left-hand pages of a printed document.
- {{CSSxRef(":right")}}
  - : Represents all right-hand pages of a printed document.
- {{CSSxRef(":first")}}
  - : Represents the first page of a printed document.
- `:blank`
  - : Represents a blank page in a printed document.

## 语法

```css
selector:pseudo-class {
  property: value;
}
```

像常规的类一样，你可以在选择器中将任意数量的伪类链接在一起。

## 字母索引

由一组 CSS 规范定义的伪类包括以下内容：

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":any-link")}}
- {{CSSxRef(":autofill")}}

B

- {{CSSxRef(":blank")}}（输入）{{Experimental_Inline}}
- `:blank`（页面）
- {{CSSxRef(":buffering")}}

C

- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}} {{Experimental_Inline}}

D

- {{CSSxRef(":default")}}
- {{CSSxRef(":defined")}}
- {{CSSxRef(":dir", ":dir()")}}
- {{CSSxRef(":disabled")}}

E

- {{CSSxRef(":empty")}}
- {{CSSxRef(":enabled")}}

F

- {{CSSxRef(":first")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- {{CSSxRef(":focus-within")}}
- {{CSSxRef(":fullscreen")}}
- {{CSSxRef(":future")}}

H

- {{CSSxRef(":has-slotted")}}
- {{CSSxRef(":has", ":has()")}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host_function", ":host()")}}
- {{CSSxRef(":host-context", ":host-context()")}}
- {{CSSxRef(":hover")}}

I

- {{CSSxRef(":in-range")}}
- {{CSSxRef(":indeterminate")}}
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
- {{CSSxRef(":muted")}}

N

- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}

O

- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
- {{CSSxRef(":open")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":out-of-range")}}

P

- {{CSSxRef(":past")}}
- {{CSSxRef(":paused")}}
- {{CSSxRef(":picture-in-picture")}}
- {{CSSxRef(":placeholder-shown")}}
- {{CSSxRef(":playing")}}
- {{CSSxRef(":popover-open")}}

R

- {{CSSxRef(":read-only")}}
- {{CSSxRef(":read-write")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":right")}}
- {{CSSxRef(":root")}}

S

- {{CSSxRef(":scope")}}
- {{CSSxRef(":seeking")}}
- {{CSSxRef(":stalled")}}
- {{CSSxRef(":state", ":state()")}}

T

- {{CSSxRef(":target")}}
- {{CSSxRef(":target-current")}}
- {{CSSxRef(":target-within")}} {{Experimental_Inline}}

U

- {{CSSxRef(":user-invalid")}}
- {{CSSxRef(":user-valid")}}

V

- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}
- {{CSSxRef(":volume-locked")}}

W

- {{CSSxRef(":where", ":where()")}}

## 规范

{{Specifications}}

## 参见

- [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)
