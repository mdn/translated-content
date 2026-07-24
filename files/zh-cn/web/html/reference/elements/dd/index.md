---
title: "`<dd>` HTML 描述详情元素"
short-title: <dd>
slug: Web/HTML/Reference/Elements/dd
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<dd>`** [HTML](/zh-CN/docs/Web/HTML) 元素为描述列表（{{HTMLElement("dl")}}）中前一个术语（{{HTMLElement("dt")}}）提供描述、定义或值。

{{InteractiveExample("HTML 示例：&lt;dd&gt;", "tabbed-standard")}}

```html interactive-example
<p>康沃尔的神秘生物：</p>

<dl>
  <dt>博德明野兽</dt>
  <dd>栖息于博德明荒野的大型猫科动物。</dd>

  <dt>Morgawr</dt>
  <dd>一种海蛇。</dd>

  <dt>猫头鹰人</dt>
  <dd>一种巨大的类猫头鹰生物。</dd>
</dl>
```

```css interactive-example
p,
dt {
  font-weight: bold;
}

dl,
dd {
  font-size: 0.9rem;
}

dd {
  margin-bottom: 1em;
}
```

## 属性

该元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 示例

有关示例，请参见[`<dl>` 元素提供的示例](/zh-CN/docs/Web/HTML/Reference/Elements/dl#示例)。

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>无。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>
        必须有开始标签。如果该元素后面紧跟着另一个 <code>&#x3C;dd></code> 元素或 {{HTMLElement("dt")}} 元素，或者父元素中没有更多内容，则可以省略结束标签。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        {{HTMLElement("dl")}}，或作为 {{HTMLElement("dl")}} 子元素的 {{HTMLElement("div")}}。<br />该元素可用在 {{HTMLElement("dt")}} 或另一个 <code>&lt;dd&gt;</code>
        元素之后。
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >没有相应的角色</a
        >
        </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>不允许 <code>role</code></td>
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

## 参见

- {{HTMLElement("dl")}}
- {{HTMLElement("dt")}}
