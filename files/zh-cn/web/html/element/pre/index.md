---
title: <pre>
slug: Web/HTML/Element/pre
---

{{HTMLSidebar}}

**HTML \<pre>** 元素表示预定义格式文本。在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来。(紧跟在 \<pre> 开始标签后的换行符也会被省略)

{{EmbedInteractiveExample("pages/tabbed/pre.html", "tabbed-standard")}}

> [!NOTE]
> 你需要将该元素里的 '<' 字符转义为 '\&lt;' 以保证代码里的关闭代码不被浏览器解释为标签。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories">内容类别</a></th>
   <td>流内容 ( <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Flow_content">flow content</a>) , 可触知的内容 (palpable content).</td>
  </tr>
  <tr>
   <th scope="row">允许的 内容</th>
   <td><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Phrasing_content">Phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tr>
  <tr>
   <th scope="row">允许的 父元素</th>
   <td>任何可以接受流内容 ( <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Flow_content">flow content</a>) 的元素</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td>任何</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLPreElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素只具有全局属性。

- `cols` {{non-standard_inline}}{{Deprecated_Inline}}
  - : 定义每行的最大字符数。这是一个非标准的属性，作用与[`width`](#width)相同。要实现这样的效果，应该使用 CSS。
- `width` {{Deprecated_Inline}}
  - : 包含每行的最大字符数。虽然在技术上仍被实现，但这个属性没有视觉效果。要实现这样的效果，应该使用 CSS。
- `wrap` {{non-standard_inline}}
  - : 提示溢出怎样发生。在现代浏览器中，这个提示会被忽略，且被没有视觉效果。要实现这样的效果，应该使用 CSS。

## 示例

### HTML

```html
<p>Using CSS to change the font color is easy.</p>
<pre>
body {
  color: red;
}
</pre>
```

### 结果

{{EmbedLiveSample("示例")}}

## 无障碍

It is important to provide an alternate description for any images or diagrams created using preformatted text. The alternate description should clearly and concisely describe the image or diagram's content.

People experiencing low vision conditions and browsing with the aid of assistive technology such as a screen reader may not understand what the preformatted text characters are representing when they are read out in sequence.

A combination of the {{HTMLElement("figure")}} and {{HTMLElement("figcaption")}} elements, supplemented by a combination of an [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id) and the [ARIA](/zh-CN/docs/Web/Accessibility/ARIA) `role` and `aria-labelledby` attributes allow the preformatted text to be announced as an image, with the `figcaption` serving as the image's alternate description.

### 示例

```plain
<figure role="img" aria-labelledby="cow-caption">
  <pre>
  ___________________________
< I'm an expert in my field. >
  ---------------------------
         \   ^__^
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
  </pre>
  <figcaption id="cow-caption">
    A cow saying, "I'm an expert in my field." The cow is illustrated using preformatted text characters.
  </figcaption>
</figure>
```

- [MDN Understanding WCAG, Guideline 1.1 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- CSS: {{Cssxref('white-space')}}, {{Cssxref('word-break')}}
