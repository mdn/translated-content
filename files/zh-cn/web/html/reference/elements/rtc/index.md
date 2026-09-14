---
title: "`<rtc>`：HTML ruby 文本容器元素"
short-title: <rtc>
slug: Web/HTML/Reference/Elements/rtc
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

[HTML](/zh-CN/docs/Web/HTML) 元素 **`<rtc>`** 用于包裹出现在 {{HTMLElement("ruby")}} 元素内、由 {{HTMLElement("rb")}} 元素组成的 ruby 注释中字符的语义注解。{{HTMLElement("rb")}} 元素可以同时具有发音注解（{{HTMLElement("rt")}}）和语义注解（`<rtc>`）。

{{InteractiveExample("HTML 演示：&lt;rtc&gt;", "tabbed-standard")}}

```html interactive-example
<ruby lang="zh-Hant">
  <rbc>
    <rb>馬</rb><rp>(</rp><rt>mǎ</rt><rp>)</rp>
    <rb>來</rb><rp>(</rp><rt>lái</rt><rp>)</rp>
    <rb>西</rb><rp>(</rp><rt>xī</rt><rp>)</rp>
    <rb>亞</rb><rp>(</rp><rt>yà</rt><rp>)</rp>
  </rbc>
  <rtc lang="en">
    <rp>(</rp><rt>Malaysia</rt><rp>)</rp>
  </rtc>
</ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
  ruby-position: under;
}

rtc {
  ruby-position: over;
}
```

## 属性

此元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 示例

```html
<div class="info">
  <ruby>
    <rbc>
      <rb>旧</rb><rt>jiù</rt> <rb>金</rb><rt>jīn</rt> <rb>山</rb><rt>shān</rt>
    </rbc>
    <rtc>San Francisco</rtc>
  </ruby>
</div>
```

```css hidden
.info {
  padding-top: 10px;
  font-size: 36px;
}
```

### 结果

{{EmbedLiveSample("示例", 600, 120)}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容类别</a
        >
      </th>
      <td>无。</td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >或 {{HTMLElement("rt")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>
        若紧随其后的是 {{HTMLElement("rb")}}、<code>&lt;rtc&gt;</code> 或
        {{HTMLElement("rt")}} 元素的开始标签，或其父元素的结束标签，则可省略结束标签。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>{{HTMLElement("ruby")}} 元素。</td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>任意</td>
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

- {{HTMLElement("ruby")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rt")}}
- [CSS Ruby 布局](/zh-CN/docs/Web/CSS/Guides/Ruby_layout)模块
