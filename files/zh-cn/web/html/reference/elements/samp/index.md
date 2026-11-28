---
title: "`<samp>` HTML 示例输出元素"
short-title: <samp>
slug: Web/HTML/Reference/Elements/samp
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

**`<samp>`** [HTML](/zh-CN/docs/Web/HTML) 元素用于包裹表示计算机程序输出示例（或被引用的输出）的行内文本。其内容通常以浏览器默认的等宽字体（例如 [Courier](https://zh.wikipedia.org/wiki/Courier) 或 Lucida Console）显示。

{{InteractiveExample("HTML 演示：&lt;samp&gt;", "tabbed-shorter")}}

```html interactive-example
<p>我尝试启动电脑，却收到了这条好笑的消息：</p>

<p>
  <samp>未找到键盘<br />按 F1 继续</samp>
</p>
```

```css interactive-example
samp {
  font-weight: bold;
}
```

## 属性

此元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 使用说明

你可以用 CSS 规则覆盖浏览器为 `<samp>` 元素设置的默认字体；不过，浏览器的偏好设置可能会优先于你指定的任何 CSS。

覆盖默认字体的 CSS 如下所示：

```css
samp {
  font-family: "Courier";
}
```

> [!NOTE]
> 如果你需要一个元素来盛放网站或应用的 JavaScript 代码生成的输出，则应改用 {{HTMLElement("output")}} 元素。

## 示例

### 基本示例

在这个基本示例中，段落里包含了一段程序输出的示例。

```html
<p>
  当进程完成后，该实用程序将输出文本
  <samp>扫描完成。找到 <em>N</em> 个结果。</samp>，随后你就可以继续下一步了。
</p>
```

#### 结果

{{EmbedLiveSample("基本示例", 650, 100)}}

### 包含用户输入的示例输出

你可以在 `<samp>` 块中嵌套 {{HTMLElement("kbd")}} 元素，以展示包含用户所输入文本的示例。例如下面这段呈现 Linux（或 macOS）控制台会话记录的文字：

#### HTML

```html
<pre>
<samp><span class="prompt">mike@interwebz:~$</span> <kbd>md5 -s "Hello world"</kbd>
MD5 ("Hello world") = 3e25960a79dbc69b674cd4ec67a72c62

<span class="prompt">mike@interwebz:~$</span> <span class="cursor">█</span></samp></pre>
```

请注意，这里使用 {{HTMLElement("span")}} 是为了能自定义示例文本中特定部分（例如 shell 提示符和光标）的外观。另外，用 `<kbd>` 表示用户在示例文本的提示符处输入的命令。

#### CSS

实现我们所需外观的 CSS 如下：

```css
.prompt {
  color: #bb0000;
}

samp > kbd {
  font-weight: bold;
}

.cursor {
  color: #0000bb;
}
```

这为提示符和光标加上了相当淡雅的着色，并将示例文本中的键盘输入设为粗体。

#### 结果

输出结果如下：

{{EmbedLiveSample("包含用户输入的示例输出", 650, 120)}}

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
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐含的 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
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

- 相关元素：{{HTMLElement("kbd")}}、{{HTMLElement("code")}}、{{HTMLElement("pre")}}
- {{HTMLElement("output")}} 元素：用于盛放脚本生成输出的容器。
