---
title: <i>：术语文本元素
slug: Web/HTML/Reference/Elements/i
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

[HTML](/zh-CN/docs/Web/HTML) **`<i>`** 元素用于表现因某些原因需要区分普通文本的一段文本，例如技术术语、外文短语或是小说中人物的思想活动等。从历史上看，这些内容一直采用斜体字呈现，这也是该元素命名为 `<i>` 的最初由来。

{{InteractiveExample("HTML 演示：&lt;i&gt;", "tabbed-shorter")}}

```html interactive-example
<p>我看着它，心想：<i>这不可能是真的！</i></p>

<p><i>芭蕉属</i>是<i>芭蕉科</i>下两三个属之一；该属包括香蕉和大蕉。</p>

<p>术语<i>带宽</i>指在给定时间内，数据连接能够传输多少信息的度量标准。</p>
```

```css interactive-example
i {
  /* 在这里添加样式 */
}
```

## 属性

该元素只包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 使用说明

- 对于出于可读性考虑而与普通正文区分开的文本，请使用 `<i>` 元素。这类文本在语义上与周围文本有所不同。`<i>` 元素的适用场景包括代表不同性质或文本模式的文本片段，例如：
  - 替代语气或语态
  - 分类学名称（如属种名称“_Homo sapiens_”）
  - 其他语言的习语（如“_et cetera_”）；此类内容应包含 [`lang`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/lang) 属性以标识语言。
  - 技术术语
  - 音译词
  - 内心独白（例如“她心想，_这个作家到底在说什么呢？_”）
  - 西方书写系统中的船只或船舶名称（例如“他们在码头搜寻被分配到的那艘名为 _Empress of the Galaxy_ 的船只。”）
- 在早期的 HTML 规范中，`<i>` 元素仅仅是一个用于将文本显示为斜体的呈现元素，就像 `<b>` 元素用于将文本显示为粗体一样。但现在情况已不再如此，因为这些标签现在定义的是语义，而非排版外观。浏览器通常仍会将 `<i>` 元素的内容显示为斜体，但根据定义，它已不再必须这样做。为了将文字显示为斜体，作者应该使用 CSS 属性 {{cssxref("font-style")}}。
- 该元素只在没有更适合的语义元素表示时使用。例如：
  - 使用 {{HTMLElement("em")}} 表示强调或重读。
  - 使用 {{HTMLElement("strong")}} 表示重要性。
  - 使用 {{HTMLElement("mark")}} 表示相关性。
  - 使用 {{HTMLElement("cite")}} 标记著作名，如一本书、剧本或是一首歌。
  - 使用 {{HTMLElement("dfn")}} 标记术语的定义实例。

## 示例

此示例演示了如何使用 `<i>` 元素来标记其他语言的文本。

```html
<p>
  拉丁语短语 <i class="latin">Veni, vidi, vici</i> 常出现在音乐、艺术和文学中。
</p>
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

- {{HTMLElement("em")}}
- 其他斜体元素：{{HTMLElement("var")}}、{{HTMLElement("dfn")}}、{{HTMLElement("cite")}}、{{HTMLElement("address")}}
