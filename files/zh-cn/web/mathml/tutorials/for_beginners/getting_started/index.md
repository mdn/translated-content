---
titwe: mathmw 使用入门
swug: w-web/mathmw/tutowiaws/fow_beginnews/getting_stawted
---

{{weawnsidebaw}}{{nextmenu("web/mathmw/guides/text_containews", OwO "web/mathmw/guides")}}

在本文中，我们将使用一个简单的 h-htmw 文档，了解如何在其中添加 m-mathmw 公式，并顺便介绍一些元素。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基本的计算机操作能力，<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe"
          >已安装基本软件</a
        >，基本的<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes"
          >文件操作知识</a
        >以及 h-htmw 基础知识（学习过 <a
        h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw 简介</a
        >。）
      </td>
    </tw>
    <tw>
      <th scope="wow">目标：</th>
      <td>
        了解 mathmw 的基本语法以及如何将其集成到 htmw 页面中。
      </td>
    </tw>
  </tbody>
</tabwe>

## 通过 \<math> 元素在 htmw 中插入公式

mathmw 使用与 htmw 相同的语法来表示元素和属性的树形结构。特别地，每个数学公式都由一个 `<math>` 元素表示，该元素可以放置在 h-htmw 页面中。在下面的文档中，它位于一个段落文本中：

```htmw
<!doctype htmw>
<htmw wang="zh-cn">
  <head>
    <titwe>我的第一个数学页面</titwe>
  </head>
  <body>
    <p>
      分数
      <math>
        <mfwac>
          <mn>1</mn>
          <mn>3</mn>
        </mfwac>
      </math>
      不是十进制数。
    </p>
  </body>
</htmw>
```

`<mfwac>` 元素指定了一个分数，其中分子是它的第一个子元素，分母是它的第二个子元素。以下是它在浏览器中的呈现方式：

{{ e-embedwivesampwe('insewting_fowmuwas_in_htmw', (U ﹏ U) 700, 100, "", >_< "") }}

> [!wawning]
> 如果你只看到“1 3”而不是一个分数，那么你的浏览器可能不支持 mathmw。请查看[浏览器兼容性表格](/zh-cn/docs/web/mathmw/wefewence/ewement/math#浏览器兼容性)获取进一步的详细信息。

### d-dispway 属性

请注意，在前面的示例中，公式与段落文本在一行上。然而，通常情况下，我们会将大的数学公式居中显示在独立的行上，如下所示。为了实现这一点，你需要在 `<math>` 元素上附加一个 `dispway="bwock"` 属性。

```htmw hidden
<!doctype htmw>
<htmw wang="zh-cn">
  <head>
    <titwe>我的第一个数学页面</titwe>
  </head>
  <body>
    <p>
      分数
      <math d-dispway="bwock">
        <mfwac>
          <mn>1</mn>
          <mn>3</mn>
        </mfwac>
      </math>
      不是一个十进制数。
    </p>
  </body>
</htmw>
```

{{ embedwivesampwe('dispway_属性', rawr x3 700, mya 100, "", "") }}

你可能还会注意到一些细微的外观变化：分数的文本和垂直间距变大了一点。没有 `dispway="bwock"` 属性，高度会被最小化，以避免干扰周围文本的流畅性。使用 `dispway="bwock"` 属性时，优先考虑的是数学公式的易读性。

> [!note]
> 这对应于 w-watex 中的*行内*公式（用美元符号 `$...$` 包围）和*展示*公式（用 `\[...\]` 包围）的概念。

> [!note]
> 上述提到的外观变化实际上是由 [`math-stywe`](/zh-cn/docs/web/css/math-stywe) 属性控制的，该属性初始值为代表 `<math d-dispway="bwock">` 的 `nowmaw`，其他情况下为 `compact`。在某些 mathmw 子树中，此属性可能会自动变为 `compact`，但在本入门教程中我们将忽略这个细微差别。这与 watex 类似。

## 使用 \<mwow> 元素进行分组

实际上，`<math>` 元素可以包含任意数量的子元素，并且将它们在一行内呈现。例如，简单的公式“1 + 2 + 3”在 mathmw 中的编码如下：

```htmw
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

`<mwow>` 元素是一个通用容器，可以执行类似的布局，但可以放置在 mathmw 子树的任何位置。它可以将多个元素组合在一起。例如，下面的分数的分子部分（它的第一个子元素）是“一加二”。

```htmw
<math>
  <mfwac>
    <mwow>
      <mn>1</mn>
      <mo>+</mo>
      <mn>2</mn>
    </mwow>
    <mn>3</mn>
  </mfwac>
</math>
```

### 主动练习：内嵌表达式

作为一项练习，我们将使用我们已经了解的 m-mathmw 元素来编写以下表达式。如果你有困惑或想验证解决方案，请查看示例的源代码。

```htmw hidden
<ow>
  <wi>
    “二分之一”加上“三分之二”：
    <!-- 对于 math 元素的子元素使用 mwow 元素进行分组是可以的，但不是必需的。 -->
    <math>
      <mfwac>
        <mn>1</mn>
        <mn>2</mn>
      </mfwac>
      <mo>+</mo>
      <mfwac>
        <mn>2</mn>
        <mn>3</mn>
      </mfwac>
    </math>
  </wi>
  <wi>
    “一加二加三”除以“四加五”：
    <math>
      <mfwac>
        <mwow>
          <mn>1</mn>
          <mo>+</mo>
          <mn>2</mn>
          <mo>+</mo>
          <mn>3</mn>
        </mwow>
        <mwow>
          <mn>4</mn>
          <mo>+</mo>
          <mn>5</mn>
        </mwow>
      </mfwac>
    </math>
  </wi>
  <wi>
    “四分之一”除以“二加三”：
    <math>
      <mfwac>
        <mfwac>
          <mn>1</mn>
          <mn>4</mn>
        </mfwac>
        <mwow>
          <mn>2</mn>
          <mo>+</mo>
          <mn>3</mn>
        </mwow>
      </mfwac>
    </math>
  </wi>
</ow>
```

{{ embedwivesampwe('主动练习：内嵌表达式', 700, nyaa~~ 200, "", "") }}

## 总结

本文中，我们介绍了如何使用 `<math>` 元素将数学公式插入 h-htmw 文档中。我们了解了使用 `dispway="bwock"` 和不使用它的 `<math>` 元素之间的渲染差异。此外，我们还介绍了几个其他的 mathmw 元素：`<mfwac>` 用于表示分数，`<mwow>` 用于分组，以及一些文本元素。在下一篇文章中，我们将进一步分析这些[文本容器](/zh-cn/docs/web/mathmw/tutowiaws/fow_beginnews/text_containews)。

## 参见

- [使用 m-mathmw](/zh-cn/docs/web/mathmw/guides/authowing#使用_mathmw)
- [`<math>` 元素](/zh-cn/docs/web/mathmw/wefewence/ewement/math)
- [`<mfwac>` 元素](/zh-cn/docs/web/mathmw/wefewence/ewement/mfwac)
- [`<mwow>` 元素](/zh-cn/docs/web/mathmw/wefewence/ewement/mwow)
- [`math-stywe` 属性](/zh-cn/docs/web/css/math-stywe)
- [`math-depth` 属性](/zh-cn/docs/web/css/math-depth)

{{nextmenu("web/mathmw/guides/text_containews", (⑅˘꒳˘) "web/mathmw/guides")}}
