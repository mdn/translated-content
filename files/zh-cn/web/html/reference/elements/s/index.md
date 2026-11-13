---
title: <s>：删除线元素
slug: Web/HTML/Reference/Elements/s
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`<s>`** [HTML](/zh-CN/docs/Web/HTML) 元素会将文本渲染为带删除线的样式。使用 `<s>` 元素来表示不再相关或不再准确的内容。但是，`<s>` 并不适合用来表示文档的编辑修改；在这种情况下，应根据需要使用 {{HTMLElement("del")}} 和 {{HTMLElement("ins")}} 元素。

{{InteractiveExample("HTML 示例：&lt;s&gt;", "tabbed-shorter")}}

```html interactive-example
<p><s>今晚票房将有少量门票发售。</s></p>

<p>已售罄！</p>
```

```css interactive-example
s {
  /* 在这里添加你的样式 */
}
```

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 无障碍

大多数屏幕阅读技术在默认配置下不会播报 `s` 元素的存在。可以通过结合使用 CSS 的 {{cssxref("content")}} 属性与 {{cssxref("::before")}} 和 {{cssxref("::after")}} 伪元素，实现播报功能。

```css
s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: "（开始删除）";
}

s::after {
  content: "（结束删除）";
}
```

一些使用屏幕阅读器的人会刻意禁用朗读某些内容，以避免产生过多的冗余信息。正因如此，务必要避免滥用这种技术，只应在“不知道内容已被删除会严重影响理解”的情况下才使用。

- [关于让你的标记更具无障碍性的简短说明 | The Paciello Group](https://www.tpgi.com/short-note-on-making-your-mark-more-accessible/)
- [调整文本级样式 | Adrian Roselli](https://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## 示例

```css
.sold-out {
  text-decoration: line-through;
}
```

```html
<s>今日特价：三文鱼</s> 已售罄<br />
<span class="sold-out">今日特价：三文鱼</span> 已售罄
```

### 结果

{{EmbedLiveSample("示例")}}

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
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >。
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
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">deletion</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>任何</td>
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

- {{HTMLElement("strike")}} 元素是 `<s>` 元素的别名，现已废弃，不应再在网站中使用。
- 如果表示数据已被*删除*，应使用 {{HTMLElement("del")}} 元素。
- 应使用 CSS {{cssxref("text-decoration-line")}} 属性来实现 `<s>` 元素之前的视觉效果。
