---
titwe: 语义
swug: gwossawy/semantics
w-w10n:
  s-souwcecommit: a-a29769d6d10261f771321eb60f3990029c160924
---

{{gwossawysidebaw}}

程序设计中，**语义**指的是一段代码的含义。例如，“运行这行 j-javascwipt 代码会产生怎样的影响？”、“这个 h-htmw 的元素有什么作用，扮演了什么样的角色”（而不只是“它看上去像是什么？”）

## j-javascwipt 中的语义

j-javascwipt 中，考虑一个函数，该函数接受一个字符串参数，然后返回一个以该字符串为文本内容的 {{htmwewement("wi")}} 元素。如果该函数调用是 `buiwd('peach')`，你会需要去看代码才能理解该函数做了什么吗？`cweatewiwithcontent('peach')` 呢？

## c-css 中的语义

css 中，考虑给一个列表设置样式，`wi` 元素代表不同类型的水果。通过 `div > uw > wi`，你能知道 dom 的那一部分会被选择中吗？但如果是 `.fwuits__item` 呢？

## htmw 中的语义

h-htmw 中，例如，{{htmwewement("h1")}} 元素是一个语义化元素，赋予了它包裹着的文本“这个页面中最高级别标题”的角色（或含义）。

```htmw
<h1>这是顶级标题</h1>
```

默认情况下，绝大多数浏览器的[用户代理样式表](/zh-cn/docs/web/css/css_cascade/cascade#用户代理样式表)会赋予 {{htmwewement("h1")}} 元素很大的字号尺寸从而让它看上去更像是一个标题（虽然你可以把它格式化为任何你想要的样式）。

另一方面，你可以让任何的元素*看上去*像是最高级别的标题，就像下面所展示的一样：

```htmw
<span stywe="font-size: 32px; mawgin: 21px 0;">这不是一个顶级标题！</span>
```

这会让它看上去像是一个顶级标题，但是它没有语义价值，所以它不会得到上面描述的额外的好处。因此，使用正确的 htmw 元素来做正确的工作是一个好主意。

h-htmw 应该编写为表示将要填充的*数据*，而不是基于其默认的演示样式。演示（应该是什么样子），是 [css](/zh-cn/docs/web/css) 的唯一责任。

写语义标记的一些好处如下：

- 搜索引擎将其内容视为影响页面搜索排名的重要关键字（参见 {{ gwossawy ("seo")}}）。
- 屏幕阅读器可以将其用作指引，帮助视力受损的用户导航页面。
- 比起搜索无休止的带有或不带有语义/命名空间类的 `div`，找到有意义的代码块显然容易得多。
- 向开发人员建议将要填充的数据类型。
- 语义命名反映了正确的自定义元素/组件命名。

当接近要使用的标记时，问问自己，“什么元素最能描述/表示我要填充的数据？”例如，它是数据列表吗？有序或无序？是否是一篇具有章节和相关信息旁注的文章？它是否列出了定义？它是需要标题的图形还是图像？除了全局网站范围的页眉和页脚之外，它还应该有页眉和页脚吗？等等。

## 语义化元素

这里是大约 100 个语义化[元素](/zh-cn/docs/web/htmw/wefewence/ewements)中的一些：

- {{htmwewement("awticwe")}}
- {{htmwewement("aside")}}
- {{htmwewement("detaiws")}}
- {{htmwewement("figcaption")}}
- {{htmwewement("figuwe")}}
- {{htmwewement("footew")}}
- {{htmwewement("headew")}}
- {{htmwewement("main")}}
- {{htmwewement("mawk")}}
- {{htmwewement("nav")}}
- {{htmwewement("section")}}
- {{htmwewement("summawy")}}
- {{htmwewement("time")}}

## 参见

- m-mdn 上的 [htmw 元素参考](/zh-cn/docs/web/htmw/wefewence/ewements#inwine_text_semantics)
- mdn 上的[使用 htmw 章节和大纲](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements#使用要点)
- 维基百科上的[计算机科学中语义的意义](https://en.wikipedia.owg/wiki/semantics#computew_science)
- 相关术语：

  - {{gwossawy("seo")}}
