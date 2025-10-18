---
title: <progress>：进度指示元素
slug: Web/HTML/Reference/Elements/progress
---

## 概述

**HTML**中的 **`<progress>`** 元素用来显示一项任务的完成进度。虽然规范中没有规定该元素具体如何显示，浏览器开发商可以自己决定，但通常情况下，该元素都显示为一个进度条形式。

{{InteractiveExample("HTML Demo: &lt;progress&gt;", "tabbed-standard")}}

```html interactive-example
<label for="file">File progress:</label>

<progress id="file" max="100" value="70">70%</progress>
```

```css interactive-example
label {
  padding-right: 10px;
  font-size: 1rem;
}
```

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
        >、可关联标签内容、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#可感知内容"
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
      <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role"><code>progressbar</code></a></td>
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

该元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- [`max`](/zh-CN/docs/Web/HTML/Reference/Attributes/max)
  - : 该属性描述了这个 `progress` 元素所表示的任务一共需要完成多少工作。如果 `max` 属性存在，值必须大于 `0` 且为有效浮点数。默认值为 `1`。
- `value`
  - : 该属性用来指定该进度条已完成的工作量，其值必须是从 `0` 到 `max`（如果省略了 `max` 值，则为从 `0` 到 `1`）之间的有效浮点数。如果没有 `value` 属性，则为“不确定”进度条；这意味着一项活动正在进行，但没有说明预计需要多长时间。

> [!NOTE]
> 与 {{htmlelement("meter")}} 元素不同，`<progress>` 元素的最小值总是 0，且不允许指定 `min` 属性。

> [!NOTE]
> {{cssxref(":indeterminate")}} 伪类可用于匹配不确定的进度条。要在为进度条赋值后将其改为不确定进度条，必须使用 {{domxref("Element.removeAttribute", "element.removeAttribute('value')")}} 删除 value 属性。

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
