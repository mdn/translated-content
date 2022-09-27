---
title: <progress>：进度指示元素
slug: Web/HTML/Element/progress
---

## 概述

**HTML**中的 **`<progress>`** 元素用来显示一项任务的完成进度。虽然规范中没有规定该元素具体如何显示，浏览器开发商可以自己决定，但通常情况下，该元素都显示为一个进度条形式。

{{EmbedInteractiveExample("pages/tabbed/progress.html", "tabbed-standard")}}

## 使用上下文

```plain
使用策略                流文本 (Flow content), 短文本 (phrasing content)
Content categories     可标记内容，可触摸内容

有效内容                Phrasing content, 其中在它的后代中不能包含
Permitted content      <progress>元素。

标签省略                不可以，{{no_tag_omission}}
Tag omission

有效的父元素             任何可以包裹短文本 (phrasing content) 的元素。

隐式元素                {{ARIARole("progressbar")}}
ARIA role

有效的辅助元素            无
ARIA roles

DOM 接口                {{domxref("HTMLProgressElement")}}
```

## 属性

和其他的 HTML 元素一样，该元素具有[全局属性](/zh-CN/HTML/Global_attributes).

- {{ htmlattrdef("max") }}
  - : 该属性描述了这个`progress`元素所表示的任务一共需要完成多少工作。
- {{ htmlattrdef("value") }}
  - : 该属性用来指定该进度条已完成的工作量。如果没有`value 属性`,则该进度条的进度为"不确定",也就是说，进度条不会显示任何进度，你无法估计当前的工作会在何时完成 (比如在下载一个未知大小的文件时，下载对话框中的进度条就是这样的).

> **备注：** 你可以使用{{ cssxref("orient") }}属性来指定该进度条的显示方向是横向 (默认) 还是纵向.CSS 伪类{{ cssxref(":indeterminate") }}可以用来匹配那些不确定的进度条。

## DOM 接口

该元素实现了[`HTMLProgressElement`](/zh-CN/DOM/HTMLProgressElement)接口。

## 例子

```html
<progress value="70" max="100">70 %</progress>
```

### 结果

{{ EmbedLiveSample("Examples", 200, 50) }}

在 Mac OS X 上，显示的进度条如下：

![progress-1.png](/@api/deki/files/4946/=progress-1.png)

在 Windows 上，显示的进度条如下：

![progress-firefox.JPG](/@api/deki/files/6031/=progress-firefox.JPG)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{htmlelement("meter")}}
- {{ cssxref(":indeterminate") }}
- {{ cssxref("-moz-orient") }}
- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-ms-fill") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
