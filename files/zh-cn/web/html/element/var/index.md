---
title: <var>：表示变量的元素
slug: Web/HTML/Element/var
---

{{HTMLSidebar}}

[HTML](/zh-CN/docs/Web/HTML) **`<var>`** 元素表示数学表达式或编程上下文中的变量名称。尽管该行为取决于浏览器，但通常使用当前字体的斜体形式显示。

{{EmbedInteractiveExample("pages/tabbed/var.html", "tabbed-shorter")}}

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
        >、
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#短语内容"
          >短语内容</a
        >、可感知内容
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#短语内容"
          >短语内容</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">显式 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有相应角色</a
        >
      </td>
    </tr>
  <tr>
   <td>允许的 ARIA 角色</td>
   <td>任何</td>
  </tr>
  <tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
 </tbody>
</table>

## 属性

本元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 使用说明

### 相关元素

与 `<var>` 一同使用的元素一般包含：

- {{HTMLElement("code")}}：HTML 代码元素
- {{HTMLElement("kbd")}}：HTML 键盘输入元素
- {{HTMLElement("samp")}}：HTML 示例输出元素

如果遇到的代码是出于样式目的而不是语义目的地错误使用 `<var>`，应该使用带有适当 CSS 的 {{HTMLElement("span")}} 元素或者在下列元素中使用适当的语义元素。

- {{HTMLElement("em")}}
- {{HTMLElement("i")}}
- {{HTMLElement("q")}}

### 默认样式

大部分浏览器在渲染 `<var>` 元素时为 {{cssxref("font-style")}} 赋予 `"italic"` 样式，此样式可像这样由 CSS 覆盖：

```css
var {
  font-style: normal;
}
```

## 示例

### 基本示例

这里有一条基本示例，使用 `<var>` 来代表数学方程式的变量名称。

```html
<p>一个简单的方程式：<var>x</var> = <var>y</var> + 2</p>
```

输出为：

{{EmbedLiveSample("基本示例", 650,80)}}

### 覆盖默认样式

使用 CSS 可以为 `<var>` 元素覆盖样式。在这个示例中，如果 Courier 字体可用，将使用该字体渲染变量名称，否则会回退至默认的等宽字体。

#### CSS

```css
var {
  font:
    bold 15px "Courier",
    "Courier New",
    monospace;
}
```

#### HTML

```html
<p>
  变量 <var>minSpeed</var> 和
  <var>maxSpeed</var> 控制设备的最低和最高速度，以每分钟转数（RPM）计算。
</p>
```

此 HTML 使用 `<var>` 来包裹两个变量的名称。

#### 运行结果

{{EmbedLiveSample("覆盖默认样式", 650, 120)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
