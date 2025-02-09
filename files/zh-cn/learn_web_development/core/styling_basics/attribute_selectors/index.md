---
title: 属性选择器
slug: Learn_web_development/Core/Styling_basics/Attribute_selectors
original_slug: Learn/CSS/Building_blocks/Selectors/Attribute_selectors
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}

从 HTML 的学习中，你已经知道，元素可以带有属性，它提供了关于如何标记的更详细信息。CSS 中，你能用属性选择器来选中带有特定属性的元素。本节课中，我们将会为你展示如何使用这些很有用的选择器。

<table>
  <tbody>
    <tr>
      <th scope="row">学习前提：</th>
      <td>
        基础电脑知识，<a
          href="/zh-CN/Learn/Getting_started_with_the_web/Installing_basic_software"
          >安装了基本的软件</a
        >，<a href="/zh-CN/Learn/Getting_started_with_the_web/Dealing_with_files"
          >处理文件</a
        >的基本知识，HTML 基础（学习<a
          href="/zh-CN/docs/Learn_web_development/Core/Structuring_content"
          >HTML 介绍</a
        >），以及对 CSS 工作原理的了解（学习<a
          href="/zh-CN/docs/Learn_web_development/Core/Styling_basics"
          >CSS 初步</a
        >）
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>学习属性选择器是什么，如何使用。</td>
    </tr>
  </tbody>
</table>

## 存否和值选择器

这些选择器允许基于一个元素自身是否存在（例如`href`）或者基于各式不同的按属性值的匹配，来选取元素。

<table>
  <thead>
    <tr>
      <th scope="col">选择器</th>
      <th scope="col">示例</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>[<em>attr</em>]</code></td>
      <td><code>a[title]</code></td>
      <td>匹配带有一个名为<em>attr</em>的属性的元素——方括号里的值。</td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>=<em>value</em>]</code></td>
      <td><code>a[href="https://example.com"]</code></td>
      <td>
        匹配带有一个名为<em>attr</em>的属性的元素，其值正为<em>value</em>——引号中的字符串。
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>~=<em>value</em>]</code></td>
      <td><code>p[class~="special"]</code></td>
      <td>
        <p>
          匹配带有一个名为<em>attr</em>的属性的元素，其值正为<em>value</em>，或者匹配带有一个<em>attr</em>属性的元素，其值有一个或者更多，至少有一个和<em>value</em>匹配。
        </p>
        <p>注意，在一列中的好几个值，是用空格隔开的。</p>
      </td>
    </tr>
    <tr>
      <td><code>[<em>attr</em>|=<em>value</em>]</code></td>
      <td><code>div[lang|="zh"]</code></td>
      <td>
        匹配带有一个名为<em>attr</em>的属性的元素，其值可正为<em>value</em>，或者开始为<em>value</em>，后面紧随着一个连字符。
      </td>
    </tr>
  </tbody>
</table>

下面的示例中，你可以看到这些选择器是怎样使用的。

- 使用`li[class]`，我们就能匹配任何有 class 属性的选择器。这匹配了除了第一项以外的所有项。
- `li[class="a"]`匹配带有一个`a`类的选择器，不过不会选中一部分值为`a`而另一部分是另一个用空格隔开的值的类，它选中了第二项。
- `li[class~="a"]`会匹配一个`a`类，不过也可以匹配一列用空格分开、包含`a`类的值，它选中了第二和第三项。

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute.html", '100%', 800)}}

## 子字符串匹配选择器

这些选择器让更高级的属性的值的子字符串的匹配变得可行。例如，如果你有`box-warning`和`box-error`类，想把开头为“box-”字符串的每个物件都匹配上的话，你可以用`[class^="box-"]`来把它们两个都选中。

| 选择器          | 示例                | 描述                                                                                          |
| --------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| `[attr^=value]` | `li[class^="box-"]` | 匹配带有一个名为*attr*的属性的元素，其值开头为*value*子字符串。                               |
| `[attr$=value]` | `li[class$="-box"]` | 匹配带有一个名为*attr*的属性的元素，其值结尾为*value*子字符串                                 |
| `[attr*=value]` | `li[class*="box"]`  | 匹配带有一个名为*attr*的属性的元素，其值的字符串中的任何地方，至少出现了一次*value*子字符串。 |

下个示例展示了这些选择器的用法：

- `li[class^="a"]`匹配了任何值开头为`a`的属性，于是匹配了前两项。
- `li[class$="a"]`匹配了任何值结尾为`a`的属性，于是匹配了第一和第三项。
- `li[class*="a"]`匹配了任何值的字符串中出现了`a`的属性，于是匹配了所有项。

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-substring.html", '100%', 800)}}

## 大小写敏感

如果你想在大小写不敏感的情况下，匹配属性值的话，你可以在闭合括号之前，使用`i`值。这个标记告诉浏览器，要以大小写不敏感的方式匹配 ASCII 字符。没有了这个标记的话，值会按照文档语言对大小写的处理方式，进行匹配——HTML 中是大小写敏感的。

下面的示例中，第一个选择器将会匹配一个开头为`a`的值，这样它只匹配了第一项，因为另外两项开头是大写的 A。第二个选择器使用了大小写不敏感的标记，于是匹配了所有项。

{{EmbedGHLiveSample("css-examples/learn/selectors/attribute-case.html", '100%', 800)}}

> [!NOTE]
> 此外还有一个更加新的`s`值，它会强制在上下文的匹配正常为大小写不敏感的时候，强行要求匹配时大小写敏感。不过，在浏览器中它不太受支持，而且在上下文为 HTML 时也没啥用。

## 接下来……

现在我们完成了属性选择器的学习，你可以继续读下篇文章——关于[伪类和伪元素选择器](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)的事情。

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics")}}
