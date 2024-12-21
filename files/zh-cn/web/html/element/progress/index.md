---
title: <progress>：进度指示元素
slug: Web/HTML/Element/progress
---

{{HTMLSidebar}}

## 概述

**HTML**中的 **`<progress>`** 元素用来显示一项任务的完成进度。虽然规范中没有规定该元素具体如何显示，浏览器开发商可以自己决定，但通常情况下，该元素都显示为一个进度条形式。

{{EmbedInteractiveExample("pages/tabbed/progress.html", "tabbed-standard")}}

## 使用上下文

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式内容"
          >流式内容</a
        >、<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#短语内容"
          >短语内容</a
        >、可关联标签内容、<a href="/zh-CN/docs/Web/HTML/Content_categories#可感知内容"
          >可感知内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#可感知内容"
          >可感知内容</a
        >，但其后代元素不能有 <code>&#x3C;progress></code> 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        接受<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#可感知内容"
          >可感知内容</a
        >的任何元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>progressbar</code></a></td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的角色（<code>role</code>）</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLProgressElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

和其他的 HTML 元素一样，该元素具有[全局属性](/zh-CN/docs/HTML/Global_attributes).

- `max`
  - : 该属性描述了这个`progress`元素所表示的任务一共需要完成多少工作。
- `value`
  - : 该属性用来指定该进度条已完成的工作量。如果没有`value 属性`,则该进度条的进度为"不确定",也就是说，进度条不会显示任何进度，你无法估计当前的工作会在何时完成 (比如在下载一个未知大小的文件时，下载对话框中的进度条就是这样的).

> [!NOTE]
> 你可以使用{{ cssxref("orient") }}属性来指定该进度条的显示方向是横向 (默认) 还是纵向.CSS 伪类{{ cssxref(":indeterminate") }}可以用来匹配那些不确定的进度条。

## DOM 接口

该元素实现了[`HTMLProgressElement`](/zh-CN/docs/DOM/HTMLProgressElement)接口。

## 示例

```html
<progress value="70" max="100">70 %</progress>
```

### 结果

{{ EmbedLiveSample("示例", 200, 50) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{htmlelement("meter")}}
- {{ cssxref(":indeterminate") }}
- {{ cssxref("-moz-orient") }}
- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
