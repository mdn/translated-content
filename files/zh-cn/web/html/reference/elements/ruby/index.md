---
title: "`<ruby>` HTML ruby 注解元素"
short-title: <ruby>
slug: Web/HTML/Reference/Elements/ruby
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

**`<ruby>`** [HTML](/zh-CN/docs/Web/HTML) 元素表示呈现在基础文本上方、下方或旁边的小注解，通常用于显示东亚字符的发音。它也能用于注解其他类型的文本，但这种用法不太常见。

_ruby_ 一词最初源自[排字工人所使用的一种计量单位](<https://en.wikipedia.org/wiki/Agate_(typography)>)，它代表在新闻纸上印刷文字时仍能保持清晰可辨的最小字号。

{{InteractiveExample("HTML 演示：&lt;ruby&gt;", "tabbed-shorter")}}

```html interactive-example
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
}
```

## 属性

此元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 示例

### 示例 1：字符

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### 结果

{{EmbedLiveSample('示例 1：字符')}}

### 示例 2：词语

```html
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

#### 结果

{{EmbedLiveSample('示例 2：词语')}}

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
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >、
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        一个或多个组，每组由两部分组成：
        <ol>
          <li>基础文本，可以是：
            <ul>
              <li><a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容">短语内容</a>，但不包含 <code>&lt;ruby&gt;</code> 元素，也不包含 <code>&lt;ruby&gt;</code> 元素的后代；或</li>
              <li>单个 <code>&lt;ruby&gt;</code> 元素，且该元素自身不包含 <code>&lt;ruby&gt;</code> 元素的后代。</li>
            </ul>
          </li>
          <li>基础文本的注解，可以是：
            <ul>
              <li>一个或多个 {{HTMLElement("rt")}} 元素；或</li>
              <li>一个 {{HTMLElement("rp")}} 元素，后跟一个或多个 {{HTMLElement("rt")}} 元素，且每个 {{HTMLElement("rt")}} 元素后面都跟着一个 {{HTMLElement("rp")}} 元素（即 <code>rp, rt, rp, rt, ..., rp</code>）。</li>
            </ul>
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>无，开始标签和结束标签都是必需的。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >没有对应的角色</a
        >
      </td>
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

- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{cssxref("ruby-overhang")}}
- {{CSSxRef("text-transform")}}：`full-size-kana`
- [CSS ruby 布局](/zh-CN/docs/Web/CSS/Guides/Ruby_layout)模块
