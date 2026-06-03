---
title: HTML 语法与常见任务速查表
short-title: HTML 速查表
slug: Web/HTML/Guides/Cheatsheet
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

使用 {{Glossary("HTML")}} 时，若能有一种简单的方法记住如何正确使用和应用 HTML 标签，将会非常方便。MDN 提供了丰富的 [HTML 参考文档](/zh-CN/docs/Web/HTML/Reference/Elements)和一套深入的 [HTML 指南](/zh-CN/docs/Learn_web_development/Core/Structuring_content)。但是，许多情况下我们只需要一些快速的提示。这便是速查表的初衷——为常见用法提供一些快速、准确、现成的代码片段。

> [!NOTE]
> HTML 标签应根据其语义价值而非外观使用。完全可以使用 {{Glossary("CSS")}} 改变特定标签的外观和特性。因此使用 HTML 时，要花时间留意标签的语义，而非它们的外观。

## 行内元素

“元素”是网页的一个单独部分。一些元素较大，作为容器包裹较小的元素。一些元素较小，“嵌入”到更大的元素中。默认情况下，“行内元素”会在网页中并排显示。它们会在网页中按需占用宽度，并且水平排列，就像句子中的词语或同行并列摆放的书本。所有行内元素都可以放置在 `<body>` 元素内。

<table class="standard-table">
  <caption>行内元素：用法和示例</caption>
  <thead>
    <tr>
      <th scope="col">用法</th>
      <th scope="col">元素</th>
      <th scope="col">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>链接</td>
      <td>{{HTMLElement("a")}}</td>
      <td id="a-example">
        <pre class="brush: html">
&#x3C;a href="https://example.org">
至 example.org 的链接&#x3C;/a>。</pre
        >
        {{EmbedLiveSample("a-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>图片</td>
      <td>{{HTMLElement("img")}}</td>
      <td id="img-example">
        <pre class="brush: html">&#x3C;img src="beast.png" width="50" /></pre>
        {{EmbedLiveSample("img-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>内联容器</td>
      <td>{{HTMLElement("span")}}</td>
      <td id="span-example">
        <pre class="brush: html">
用于对元素进行分组：例如，用于&#x3C;span style="color:blue">添加样式
&#x3C;/span>。</pre
        >
        {{EmbedLiveSample("span-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>强调文本</td>
      <td>{{HTMLElement("em")}}</td>
      <td id="em-example">
        <pre class="brush: html">&#x3C;em>我很时髦&#x3C;/em>。</pre>
        {{EmbedLiveSample("em-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>斜体文本</td>
      <td>{{HTMLElement("i")}}</td>
      <td id="i-example">
        <pre class="brush: html">
用&#x3C;i>斜体&#x3C;/i>标记短语。</pre
        >
        {{EmbedLiveSample("i-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>粗体文本</td>
      <td>{{HTMLElement("b")}}</td>
      <td id="b-example">
        <pre class="brush: html">加粗&#x3C;b>单词或短语&#x3C;/b>。</pre>
        {{EmbedLiveSample("b-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>重要文本</td>
      <td>{{HTMLElement("strong")}}</td>
      <td id="strong-example">
        <pre class="brush: html">&#x3C;strong>我很重要！&#x3C;/strong></pre>
        {{EmbedLiveSample("strong-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>高亮文本</td>
      <td>{{HTMLElement("mark")}}</td>
      <td id="mark-example">
        <pre class="brush: html">&#x3C;mark>注意这里！&#x3C;/mark></pre>
        {{EmbedLiveSample("mark-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>删除线文本</td>
      <td>{{HTMLElement("s")}}</td>
      <td id="s-example">
        <pre class="brush: html">&#x3C;s>我无关紧要。&#x3C;/s></pre>
        {{EmbedLiveSample("s-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>下标</td>
      <td>{{HTMLElement("sub")}}</td>
      <td id="sub-example">
        <pre class="brush: html">H&#x3C;sub>2&#x3C;/sub>O</pre>
        {{EmbedLiveSample("sub-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>小文本</td>
      <td>{{HTMLElement("small")}}</td>
      <td id="small-example">
        <pre class="brush: html">
用于表示文档的&#x3C;small>小字&#x3C;/small>。</pre
        >
        {{EmbedLiveSample("small-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>地址</td>
      <td>{{HTMLElement("address")}}</td>
      <td id="address-example">
        <pre class="brush: html">
&#x3C;address>主大街 67 号&#x3C;/address></pre
        >
        {{EmbedLiveSample("address-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>文献引用</td>
      <td>{{HTMLElement("cite")}}</td>
      <td id="cite-example">
        <pre class="brush: html">
欲了解更多怪物，请参阅&#x3C;cite>《怪物书》&#x3C;/cite>。</pre
        >
        {{EmbedLiveSample("cite-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>上标</td>
      <td>{{HTMLElement("sup")}}</td>
      <td id="sup-example">
        <pre class="brush: html">x&#x3C;sup>2&#x3C;/sup></pre>
        {{EmbedLiveSample("sup-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>内联引用</td>
      <td>{{HTMLElement("q")}}</td>
      <td id="q-example">
        <pre class="brush: html">&#x3C;q>我？&#x3C;/q>，她说道。</pre>
        {{EmbedLiveSample("q-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>换行</td>
      <td>{{HTMLElement("br")}}</td>
      <td id="br-example">
        <pre class="brush: html">第 1 行&#x3C;br>第 2 行</pre>
        {{EmbedLiveSample("br-example", 100, 80)}}
      </td>
    </tr>
    <tr>
      <td>换行机会</td>
      <td>{{HTMLElement("wbr")}}</td>
      <td id="wbr-example">
        <pre class="brush: html">
&#x3C;div style="width: 200px">
  Llanfair&#x3C;wbr>pwllgwyngyll&#x3C;wbr>gogerychwyrndrobwllllantysiliogogogoch
&#x3C;/div></pre
        >
        {{EmbedLiveSample("wbr-example", 100, 80)}}
      </td>
    </tr>
    <tr>
      <td>日期</td>
      <td>{{HTMLElement("time")}}</td>
      <td id="time-example">
        <pre class="brush: html">
用于格式化日期。例如：&#x3C;time datetime="2020-05-24"
>发布于 2020 年 5 月 23 日&#x3C;/time>。</pre
        >
        {{EmbedLiveSample("time-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>代码格式</td>
      <td>{{HTMLElement("code")}}</td>
      <td id="code-example">
        <pre class="brush: html">
这段文字是正常格式，但&#x3C;code>这段文字是代码格式&#x3C;/code>。</pre
        >
        {{EmbedLiveSample("code-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>音频</td>
      <td>{{HTMLElement("audio")}}</td>
      <td id="audio-example">
        <pre class="brush: html">
&#x3C;audio controls>
  &#x3C;source src="/shared-assets/audio/t-rex-roar.mp3" type="audio/mpeg">
&#x3C;/audio>
        </pre>
        {{EmbedLiveSample("audio-example", 100, 80)}}
      </td>
    </tr>
    <tr>
      <td>视频</td>
      <td>{{HTMLElement("video")}}</td>
      <td id="video-example">
        <pre class="brush: html">
&#x3C;video controls width="250"
  src="/shared-assets/videos/flower.webm" >
  &#x3C;a href="/shared-assets/videos/flower.webm">下载 WebM 视频&#x3C;/a>
&#x3C;/video></pre
        >
        {{EmbedLiveSample("video-example", 100, 200)}}
      </td>
    </tr>
  </tbody>
</table>

## 区块元素

相反，“区块元素”，会占用整个网页宽度。它们也会占用网页的一整行；它们无法并列排列。相反，它们会像文章里的段落或像积木塔那样堆叠在一起。

> [!NOTE]
> 由于本速查表仅包含少数几个代表特定结构或具备特殊语义的元素，因此 [`div`](/zh-CN/docs/Web/HTML/Reference/Elements/div) 元素被特意排除————因为 `div` 元素不代表任何内容，也不具备任何特殊语义。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">用法</th>
      <th scope="col">元素</th>
      <th scope="col">示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>简单段落</td>
      <td>{{HTMLElement("p")}}</td>
      <td id="p-example">
        <pre class="brush: html">
&#x3C;p>我是一个段落&#x3C;/p>
&#x3C;p>我是另一个段落&#x3C;/p></pre
        >
        {{EmbedLiveSample("p-example", 100, 150)}}
      </td>
    </tr>
    <tr>
      <td>扩展引用</td>
      <td>{{HTMLElement("blockquote")}}</td>
      <td id="blockquote-example">
        <pre class="brush: html">
他们说：
&#x3C;blockquote>blockquote 元素表示扩展引用。&#x3C;/blockquote></pre
        >
        {{EmbedLiveSample("blockquote-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>附加信息</td>
      <td>{{HTMLElement("details")}}</td>
      <td id="details-example">
        <pre class="brush: html">
&#x3C;details>
  &#x3C;summary>HTML 速查表&#x3C;/summary>
  &#x3C;p>行内元素&#x3C;/p>
  &#x3C;p>区块元素&#x3C;/p>
&#x3C;/details></pre
        >
        {{EmbedLiveSample("details-example", 100, 150)}}
      </td>
    </tr>
    <tr>
      <td>无序列表</td>
      <td>{{HTMLElement("ul")}}</td>
      <td id="ul-example">
        <pre class="brush: html">&#x3C;ul>
  &#x3C;li>我是一个元素&#x3C;/li>
  &#x3C;li>我是另一个元素&#x3C;/li>
&#x3C;/ul></pre>
        {{EmbedLiveSample("ul-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>有序列表</td>
      <td>{{HTMLElement("ol")}}</td>
      <td id="ol-example">
        <pre class="brush: html">&#x3C;ol>
  &#x3C;li>我是第一个元素&#x3C;/li>
  &#x3C;li>我是第二个元素&#x3C;/li>
&#x3C;/ol></pre>
        {{EmbedLiveSample("ol-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>定义列表</td>
      <td>{{HTMLElement("dl")}}</td>
      <td id="dl-example">
        <pre class="brush: html">&#x3C;dl>
  &#x3C;dt>一个术语&#x3C;/dt>
  &#x3C;dd>术语的定义&#x3C;/dd>
  &#x3C;dt>另一个术语&#x3C;/dt>
  &#x3C;dd>另一个术语的定义&#x3C;/dd>
&#x3C;/dl></pre>
        {{EmbedLiveSample("dl-example", 100, 150)}}
      </td>
    </tr>
    <tr>
      <td>水平分割线</td>
      <td>{{HTMLElement("hr")}}</td>
      <td id="hr-example">
        <pre class="brush: html">之前&#x3C;hr>之后</pre>
        {{EmbedLiveSample("hr-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>文本标题</td>
      <td>
        {{HTMLElement("Heading_Elements", "&lt;h1&gt;—&lt;h6&gt;")}}
      </td>
      <td id="h1-h6-example">
        <pre class="brush: html">
&#x3C;h1>这是 1 号标题&#x3C;/h1>
&#x3C;h2>这是 2 号标题&#x3C;/h2>
&#x3C;h3>这是 3 号标题&#x3C;/h3>
&#x3C;h4>这是 4 号标题&#x3C;/h4>
&#x3C;h5>这是 5 号标题&#x3C;/h5>
&#x3C;h6>这是 6 号标题&#x3C;/h6></pre
        >
        {{EmbedLiveSample("h1-h6-example", 100, 350)}}
      </td>
    </tr>
  </tbody>
</table>
