---
title: <tt>：电报文本元素
slug: Web/HTML/Reference/Elements/tt
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{deprecated_header}}

**`<tt>`** [HTML](/zh-CN/docs/Web/HTML) 元素创建行级文本，该文本使用{{Glossary("user agent", "用户代理")}}默认的等宽字体。该元素用于将文本呈现在固定宽度的显示设备（如电传打字机、纯文本屏幕或行式打印机）上。

**非比例字体**、**蒙纳字体**和**等宽字体**这些术语可以互换使用，具有相同的通用含义：它们描述的是字符宽度均为相同像素数的字体。

然而，此元素已过时，对于需要以等宽类型呈现的行级文本，应使用更具语义化的 {{HTMLElement("code")}}、{{HTMLElement("kbd")}}、{{HTMLElement("samp")}} 或 {{HTMLElement("var")}} 元素，而对于应作为单个块呈现的内容，应使用 {{HTMLElement("pre")}} 标签。

> [!NOTE]
> 如果上述语义元素均不符合你的应用场景（例如，你需要以非比例字体展示某些内容），可考虑使用 {{ HTMLElement("span") }} 元素，并通过 CSS 进行相应样式设置。{{cssxref("font-family")}} 属性是一个不错的起点。

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 示例

### 基本示例

此示例使用 `<tt>` 以模拟终端应用程序中输入及输出的文本。

```html
<p>
  在 telnet 命令提示符下输入以下内容：<code>set localecho</code><br />

  telnet 客户端将显示：<tt>Local Echo is on</tt>
</p>
```

#### 结果

{{EmbedLiveSample("基础示例", 650, 80)}}

### 覆盖默认字体

你可以通过 CSS 覆盖浏览器的默认字体——前提是浏览器允许这样做，尽管这不是浏览器必须提供的功能：

#### CSS

```css
tt {
  font-family: "Lucida Console", "Menlo", "Monaco", "Courier", monospace;
}
```

#### HTML

```html
<p>
  在 telnet 命令提示符下输入以下内容：<code>set localecho</code><br />

  telnet 客户端将显示：<tt>Local Echo is on</tt>
</p>
```

#### 结果

{{EmbedLiveSample("覆盖默认字体", 650, 80)}}

## 使用说明

`<tt>` 元素默认使用浏览器的默认非比例字体。你可以通过创建使用 `tt` 选择器的规则来覆盖此设置，如上方示例[覆盖默认字体](#覆盖默认字体)所示。

> [!NOTE]
> 用户对默认等宽字体设置所做的自定义更改可能优先于你的 CSS 样式。

尽管 HTML 4.01 并未正式废弃该元素，但还是不鼓励使用它（因为有语义化元素或 CSS）。`<tt>` 元素在 HTML 5 中已过时。

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
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >、可感知内容。
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
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >短语内容</a
        >的元素。
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

- {{HTMLElement("code")}}、{{HTMLElement("var")}}、{{HTMLElement("kbd")}} 和 {{HTMLElement("samp")}} 语义化元素
- 用于显示预格式化文本块的 {{HTMLElement("pre")}} 元素
