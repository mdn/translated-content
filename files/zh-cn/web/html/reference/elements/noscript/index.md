---
title: <noscript>：无脚本元素
slug: Web/HTML/Reference/Elements/noscript
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

**`<noscript>`** [HTML](/zh-CN/docs/Web/HTML) 元素定义了在页面上的脚本类型不支持或浏览器当前关闭脚本时插入的 HTML 部分。

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 示例

```html
<noscript>
  <!-- 外部文件的锚链接 -->
  <a href="https://www.mozilla.org/">外部链接</a>
</noscript>
<p>摇滚！</p>
```

### 启用脚本后的结果

摇滚！

### 禁用脚本后的结果

[外部链接](https://www.mozilla.org/)

摇滚！

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#元数据内容"
          >元数据内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        当脚本被禁用并且是 {{HTMLElement("head")}} 元素的后代时：按任意顺序，零个或多个 {{HTMLElement("link")}} 元素、零个或多个 {{HTMLElement("style")}} 元素，以及零个或多个 {{HTMLElement("meta")}} 元素。<br />当脚本被禁用且不是 {{HTMLElement("head")}} 元素的后代时：任何<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#透明内容模型">透明内容</a>，但其后代中不得包含 <code>&#x3C;noscript></code> 元素。<br />否则：流内容或短语内容。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >的元素。如果没有祖先 <code>&#x3C;noscript></code> 元素，或者在 {{HTMLElement("head")}} 元素中（但仅限于 HTML 文档），同样如果没有任何祖先 <code>&#x3C;noscript></code> 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >没有对应的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>没有允许的 <code>role</code></td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
