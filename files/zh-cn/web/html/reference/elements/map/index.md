---
title: <map>：图像映射元素
slug: Web/HTML/Reference/Elements/map
l10n:
  sourceCommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

[HTML](/zh-CN/docs/Web/HTML) **`<map>`** 元素与 {{HTMLElement("area")}} 元素一起使用来定义一个图像映射（一个可点击的链接区域）。

{{InteractiveExample("HTML Demo: &lt;map&gt;", "tabbed-standard")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="130,147,200,107,254,219,130,228"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="130,147,130,228,6,219,59,107"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
  <area
    shape="poly"
    coords="130,147,200,107,130,4,59,107"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info2.png"
  alt="MDN infographic" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 232px;
}
```

## 属性

这个元素包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

- `name`
  - : `name` 属性给予该映射引用的名称，这个属性必须存在，值不得为空并且不能带空格。`name` 属性的值不得与同文档中其他 `<map>` 元素的该属性值相同，如果还指定了 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes#id) 属性，则两个属性的值必须相同。

## 示例

### 含有两个区域的图像映射

单击左侧的鹦鹉访问 JavaScript 页面，单击右侧的鹦鹉访问 CSS 页面。

#### HTML

```html
<!-- 图片由 Unsplash 上的 Juliana e Mariana Amorim 创作  -->
<map name="primary">
  <area
    shape="circle"
    coords="75,75,75"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    target="_blank"
    alt="JavaScript" />
  <area
    shape="circle"
    coords="275,75,75"
    href="https://developer.mozilla.org/docs/Web/CSS"
    target="_blank"
    alt="CSS" />
</map>
<img
  usemap="#primary"
  src="parrots.jpg"
  alt="两只鹦鹉的照片，大小为 350 x 150" />
```

#### 结果

{{ EmbedLiveSample('含有两个区域的图像映射', '', '250') }}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/zh-CN/docs/Web/HTML/Guides/Content_categories">内容类别</a></th>
      <td><a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容">流式内容</a>、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容">短语内容</a>、可感知内容。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>任何<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#透明内容模型">透明</a>元素。</td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容">短语内容</a>的元素。</td>
    </tr>
    <tr>
       <th scope="row">隐式 ARIA 角色</th>
       <td>
         <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有相应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLMapElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("a")}}
- {{HTMLElement("area")}}
