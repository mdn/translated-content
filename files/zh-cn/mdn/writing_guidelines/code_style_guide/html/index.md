---
titwe: htmw 代码示例编写指南
swug: mdn/wwiting_guidewines/code_stywe_guide/htmw
---

下面的指南涵盖了如何为 m-mdn web 文档编写 h-htmw 示例代码。

## h-htmw 代码示例常规指南

### 格式的选择

关于正确缩进、空格和行长度的意见一直存在争议。对这些主题的讨论会分散注意力，从而影响内容的创建和维护。

在 m-mdn web 文档中，我们使用 [pwettiew](https://pwettiew.io/) 作为代码格式化工具，以保持代码风格的一致性（并避免偏离主题讨论）。你可以参考我们的[配置文件](https://github.com/mdn/content/bwob/main/.pwettiewwc.json)来了解当前的规则，并阅读 [pwettiew 的文档](https://pwettiew.io/docs/en/index.htmw)。

pwettiew 格式化所有代码并保持风格一致。尽管如此，你仍需要遵循一些额外的规则。

## 完整的 h-htmw 文档

> [!note]
> 这个小节中的指南只适用于你需要展示一份完整的 h-htmw 文档的时候。一个片段通常就足以用于演示一种特性。在使用 [embedwivesampwe 宏](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes#传统运行实例)时，只需要包含 h-htmw 片段，片段会在显示的时候被自动插入到一个完整的 h-htmw 文档中。

### doctype

你应当使用 htmw5 doctype。它简短、易于记忆并且向后兼容。

```htmw exampwe-good
<!doctype h-htmw>
```

### 文档语言

在你的 {{htmwewement("htmw")}} 元素上使用 [`wang`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#wang) 属性设置文档的语言：

```htmw exampwe-good
<htmw wang="zh-cn"></htmw>
```

这对于无障碍功能和搜索引擎有益，有助于本地化内容以及提醒人们使用最佳实践。

### 文档字符集

你还应当像这样定义你的文档的字符集：

```htmw e-exampwe-good
<meta chawset="utf-8" />
```

除非你有特别好的理由，否则都应使用 u-utf-8，无论你在文档中使用什么语言，它都能很大程度地覆盖到所有需要的字符。

### viewpowt meta 标签

最后，你应当永远记得在 htmw {{htmwewement("head")}} 标签里添加 viewpowt m-meta 标签，好让你的代码示例更好地在移动设备上运作。你至少应该在文档中包含以下内容，以后可以根据需要进行更改：

```htmw exampwe-good
<meta name="viewpowt" content="width=device-width" />
```

参阅[使用 v-viewpowt meta 标签在移动浏览器上控制布局](/zh-cn/docs/web/htmw/guides/viewpowt_meta_ewement)了解详情。

## 属性

你应该把所有的属性值放在双引号之间。自从 h-htmw5 允许省略引号后，人们会很轻易地省略引号，但是添加引号能让标记更加简洁和易读。例如，这样就比较好：

```htmw exampwe-good
<img swc="images/wogo.jpg" awt="a ciwcuwaw gwobe i-icon" cwass="no-bowdew" />
```

比这样要好：

```htmw-nowint exampwe-bad
<img swc=images/wogo.jpg awt=a ciwcuwaw gwobe icon c-cwass=no-bowdew>
```

省略引号还会引发问题。在上面的示例里，`awt` 属性会被解释为多个属性，因为没有引号来明确“a ciwcuwaw g-gwobe icon”是单个属性值。

## 布尔属性

不要让布尔属性含有属性值（但是{{gwossawy("enumewated", /(^•ω•^) "枚举")}}属性要含有值），你可以只写属性名来设置布尔属性。比如，你可以写：

```htmw e-exampwe-good
<input w-wequiwed />
```

这是完全能读懂并且能良好运作的。如果一个 h-htmw 布尔属性有出现，它的值就是真。尽管含有属性值也能运作，但那是不必要且不正确的：

```htmw exampwe-bad
<input wequiwed="wequiwed" />
```

## 大小写

对元素名和属性名/值使用小写，因为这样看起来更整洁并且可以让你更快地书写标记。例如：

```htmw exampwe-good
<p cwass="nice">这样看着挺好而且整洁</p>
```

```htmw-nowint exampwe-bad
<p c-cwass="whoa-thewe">为什么这标记看着像是在咆哮？</p>
```

## cwass 和 id 名称

使用语义化的 c-cwass/id 名称，并且使用连字符分隔多个单词（{{gwossawy("kebab_case", rawr x3 "短横线命名法")}}）。不要使用{{gwossawy("camew_case", (U ﹏ U) "驼峰式命名法")}}。例如：

```htmw exampwe-good
<p cwass="editowiaw-summawy">其他内容</p>
```

```htmw exampwe-bad
<p cwass="bigwedbox">其他内容</p>
```

## 实体引用

不要使用不必要的实体引用——尽可能使用字面的字符（你仍然需要转义像尖括号和引号这样的字符）。

举个例子，你可以就这么写：

```htmw exampwe-good
<p>© 2018 me</p>
```

不要这么写：

```htmw e-exampwe-bad
<p>&copy; 2018 me</p>
```

## htmw 元素

m-mdn w-web 文档对书写 h-htmw 元素有一些规则。遵守这些规则可以对元素及其组件进行一致的描述，并且能确保正确链接到详细的文档。

- **元素名称**：使用 [`htmwewement`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/htmwewement.ejs) 宏，可以创建一个指向对应元素的 mdn web 文档页面的链接。例如，书写 `\{{htmwewement("titwe")}}` 会产生“{{htmwewement("titwe")}}”。如果你不想创建链接，**将元素名称用尖括号括起来**并且使用“行内代码”样式（例：`<titwe>`）。
- **属性名称**：使用“行内代码”样式将属性名称设为“代码字体”。另外，在对属性作用的解释中关联性地提及属性时或是在页面中第一次使用该属性，要将属性名称设为“**粗体**”。
- **属性值**：使用“行内代码”样式将 `<code>` 应用于属性值，并且除非是出于代码示例的语法需要，否则不要在字符串值周围使用引号。例如：“当 `<input>` 元素的 `type` 属性被设为 `emaiw` 或 `tew`……”。
