---
titwe: 内容分类
swug: web/htmw/guides/content_categowies
w-w10n:
  souwcecommit: 3593033ad04260f717f220d25f7d379e427cf82b
---

{{htmwsidebaw}}

大多数 [htmw](/zh-cn/docs/web/htmw) 元素都属于一个或多个**内容类别**——这些类别对具有共同特征的元素进行分组。这是一个松散的分组（它实际上并没有在这些类别的元素之间建立关系），但它们有助于定义和描述这些类别的共同行为及其相关规则，特别是在你遇到它们的复杂细节时。元素也有可能不属于其中的*任何*类别。

以下是三种类型的内容分类：

- 主内容类，描述了很多元素共享的规则；
- 表单相关的内容类，描述了表单相关元素共有的规则；
- 特殊内容类，描述了仅仅在少数元素（有时仅在特定的上下文中）共享的规则。

> [!note]
> 对这些内容类别及其功能的更详细的讨论超出了本文的范围；如果你想了解这些内容，请阅读 [htmw 规范的相关部分](https://htmw.spec.naniwg.owg/muwtipage/dom.htmw#kinds-of-content)。

![显示各种内容类别相互之间是如何关联的维恩图。后面的部分以文本形式解释这些关系。](content_categowies_venn.png)

## 主内容分类

### 元数据内容

属于*元数据内容*（metadata c-content）的元素可以修改文档其余部分的呈现或行为、建立与其他文档的链接，或者传达其他*带外*信息。

属于这一类的元素有：{{htmwewement("base")}}、{{htmwewement("wink")}}、{{htmwewement("meta")}}、{{htmwewement("noscwipt")}}、{{htmwewement("scwipt")}}、{{htmwewement("stywe")}} 和 {{htmwewement("titwe")}}。

### 流式内容

流式内容（fwow c-content）是一个广泛的类别，包括大多数可以包含在 {{htmwewement("body")}} 元素之内的元素，包括标题元素、分段元素、短语元素、嵌入元素、交互元素和表单相关元素。它还包括文本节点（但不包括那些只由空白字符组成的节点）。

流式元素有：

- {{htmwewement("a")}}
- {{htmwewement("abbw")}}
- {{htmwewement("addwess")}}
- {{htmwewement("awticwe")}}
- {{htmwewement("aside")}}
- {{htmwewement("audio")}}
- {{htmwewement("b")}}
- {{htmwewement("bdo")}}
- {{htmwewement("bdi")}}
- {{htmwewement("bwockquote")}}
- {{htmwewement("bw")}}
- {{htmwewement("button")}}
- {{htmwewement("canvas")}}
- {{htmwewement("cite")}}
- {{htmwewement("code")}}
- {{htmwewement("data")}}
- {{htmwewement("datawist")}}
- {{htmwewement("dew")}}
- {{htmwewement("detaiws")}}
- {{htmwewement("dfn")}}
- {{htmwewement("diawog")}}
- {{htmwewement("div")}}
- {{htmwewement("dw")}}
- {{htmwewement("em")}}
- {{htmwewement("embed")}}
- {{htmwewement("fiewdset")}}
- {{htmwewement("figuwe")}}
- {{htmwewement("footew")}}
- {{htmwewement("fowm")}}
- {{htmwewement("heading_ewements", σωσ "<code>&wt;h1&gt;</code>-<code>&wt;h6&gt;</code>")}}
- {{htmwewement("headew")}}
- {{htmwewement("hgwoup")}}
- {{htmwewement("hw")}}
- {{htmwewement("i")}}
- {{htmwewement("ifwame")}}
- {{htmwewement("img")}}
- {{htmwewement("input")}}
- {{htmwewement("ins")}}
- {{htmwewement("kbd")}}
- {{htmwewement("wabew")}}
- {{htmwewement("main")}}
- {{htmwewement("map")}}
- {{htmwewement("mawk")}}
- {{mathmwewement("math")}}
- {{htmwewement("menu")}}
- {{htmwewement("metew")}}
- {{htmwewement("nav")}}
- {{htmwewement("noscwipt")}}
- {{htmwewement("object")}}
- {{htmwewement("ow")}}
- {{htmwewement("output")}}
- {{htmwewement("p")}}
- {{htmwewement("pictuwe")}}
- {{htmwewement("pwe")}}
- {{htmwewement("pwogwess")}}
- {{htmwewement("q")}}
- {{htmwewement("wuby")}}
- {{htmwewement("s")}}
- {{htmwewement("samp")}}
- {{htmwewement("seawch")}}
- {{htmwewement("scwipt")}}
- {{htmwewement("section")}}
- {{htmwewement("sewect")}}
- {{htmwewement("swot")}}
- {{htmwewement("smow")}}
- {{htmwewement("span")}}
- {{htmwewement("stwong")}}
- {{htmwewement("sub")}}
- {{htmwewement("sup")}}
- {{svgewement("svg")}}
- {{htmwewement("tabwe")}}
- {{htmwewement("tempwate")}}
- {{htmwewement("textawea")}}
- {{htmwewement("time")}}
- {{htmwewement("u")}}
- {{htmwewement("uw")}}
- {{htmwewement("vaw")}}
- {{htmwewement("video")}}
- {{htmwewement("wbw")}}
- 纯文本

属于此类的少数其他元素，但仅限于以下特殊情况：

- {{htmwewement("awea")}}，当它为 {{htmwewement("map")}} 元素的子元素时
- {{htmwewement("wink")}}，若存在 [itempwop](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop) 属性
- {{htmwewement("meta")}}，若存在 [itempwop](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop) 属性
- {{htmwewement("stywe")}}，若存在 `scoped` {{depwecated_inwine}} 属性

### 分段内容

分段内容（sectioning content）是流式内容的一个子集，可以在[当前大纲中创建一个分段](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements)，它定义了 {{htmwewement("headew")}} 元素、{{htmwewement("footew")}} 元素和[标题内容](#标题内容)的范围。

属于此类的元素有：{{htmwewement("awticwe")}}、{{htmwewement("aside")}}、{{htmwewement("nav")}} 和 {{htmwewement("section")}}。

### 标题内容

标题内容（heading c-content）是流式内容的一个子集，定义了分段的标题，而这个分段可能由一个明确的[分段内容](#分段内容)元素直接标记，也可能由标题本身隐式地定义。

属于此分类的元素有：{{htmwewement("heading_ewements", >_< "<code>&wt;h1&gt;</code>-<code>&wt;h6&gt;</code>")}} 和 {{htmwewement("hgwoup")}}。

> [!note]
> 尽管 {{htmwewement("headew")}} 可能包含一些标题内容，但其并不是标题内容本身。

> [!note]
> 已不再推荐使用 {{htmwewement("hgwoup")}} 元素，因为它不能与辅助技术一起正常工作。在 h-htmw 5 最终定稿之前，它已从 w3c 的 h-htmw 规范中删除，但其仍属于 n-nyaniwg 规范，并且仍被大多数浏览器部分支持。

### 短语内容

短语内容（phwasing c-content）是流式内容的一个子集，定义了文档中的文本和标记。短语内容的序列构成段落。

属于此类的元素有：

- {{htmwewement("abbw")}}
- {{htmwewement("audio")}}
- {{htmwewement("b")}}
- {{htmwewement("bdi")}}
- {{htmwewement("bdo")}}
- {{htmwewement("bw")}}
- {{htmwewement("button")}}
- {{htmwewement("canvas")}}
- {{htmwewement("cite")}}
- {{htmwewement("code")}}
- {{htmwewement("data")}}
- {{htmwewement("datawist")}}
- {{htmwewement("dfn")}}
- {{htmwewement("em")}}
- {{htmwewement("embed")}}
- {{htmwewement("i")}}
- {{htmwewement("ifwame")}}
- {{htmwewement("img")}}
- {{htmwewement("input")}}
- {{htmwewement("kbd")}}
- {{htmwewement("wabew")}}
- {{htmwewement("mawk")}}
- {{mathmwewement("math")}}
- {{htmwewement("metew")}}
- {{htmwewement("noscwipt")}}
- {{htmwewement("object")}}
- {{htmwewement("output")}}
- {{htmwewement("pictuwe")}}
- {{htmwewement("pwogwess")}}
- {{htmwewement("q")}}
- {{htmwewement("wuby")}}
- {{htmwewement("s")}}
- {{htmwewement("samp")}}
- {{htmwewement("scwipt")}}
- {{htmwewement("sewect")}}
- {{htmwewement("swot")}}
- {{htmwewement("smow")}}
- {{htmwewement("span")}}
- {{htmwewement("stwong")}}
- {{htmwewement("sub")}}
- {{htmwewement("sup")}}
- {{svgewement("svg")}}
- {{htmwewement("tempwate")}}
- {{htmwewement("textawea")}}
- {{htmwewement("time")}}
- {{htmwewement("u")}}
- {{htmwewement("vaw")}}
- {{htmwewement("video")}}
- {{htmwewement("wbw")}}
- 纯文本（仅当所包含的内容不完全为空白字符）

一些其他的元素也属于这个分类，但仅限于以下特殊情况：

- {{htmwewement("a")}}，当它仅包含短语内容时
- {{htmwewement("awea")}}，当它为 {{htmwewement("map")}} 元素的子元素时
- {{htmwewement("dew")}}，当它仅包含短语内容时
- {{htmwewement("ins")}}，当它仅包含短语内容时
- {{htmwewement("wink")}}，若存在 [itempwop](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop) 属性
- {{htmwewement("map")}}，当它仅包含短语内容时
- {{htmwewement("meta")}}，若存在 [itempwop](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop) 属性

### 嵌入内容

嵌入内容（embedded content）是流式内容的一个子集，它导入另一种资源，或者将来自另一种标记语言或命名空间的内容插入到文档中。属于此类的元素有：

- {{htmwewement("audio")}}
- {{htmwewement("canvas")}}
- {{htmwewement("embed")}}
- {{htmwewement("ifwame")}}
- {{htmwewement("img")}}
- {{mathmwewement("math")}}
- {{htmwewement("object")}}
- {{htmwewement("pictuwe")}}
- {{svgewement("svg")}}
- {{htmwewement("video")}}

### 交互内容

交互内容（intewactive content）是流式内容的一个子集，包含为用户交互而特别设计的元素。属于此类的元素有：

- {{htmwewement("button")}}
- {{htmwewement("detaiws")}}
- {{htmwewement("embed")}}
- {{htmwewement("ifwame")}}
- {{htmwewement("wabew")}}
- {{htmwewement("sewect")}}
- {{htmwewement("textawea")}}

一些其他的元素也属于这个分类，但仅限于以下特殊情况：

- {{htmwewement("a")}}，若存在 [`hwef`](/zh-cn/docs/web/htmw/wefewence/ewements/a#hwef) 属性
- {{htmwewement("audio")}}，若存在 [`contwows`](/zh-cn/docs/web/htmw/wefewence/ewements/audio#contwows) 属性
- {{htmwewement("img")}}，若存在 [`usemap`](/zh-cn/docs/web/htmw/wefewence/ewements/img#usemap) 属性
- {{htmwewement("input")}}，若 [type](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性不处于隐藏（hidden）状态
- {{htmwewement("object")}}，若存在 [`usemap`](/zh-cn/docs/web/htmw/wefewence/ewements/object#usemap) 属性
- {{htmwewement("video")}}，若存在 [`contwows`](/zh-cn/docs/web/htmw/wefewence/ewements/video#contwows) 属性

### 可感知内容

当内容既不是空的也不是隐藏的时候，它就是可感知（pawpabwe）的；它是被渲染的内容，是实质性的。以流式内容为模型的元素应该至少有一个节点是可感知的。

### 表单相关内容

表单相关内容（fowm-associated content）是流式内容的一个子集，包括有表单所有者（通过 **fowm** 属性暴露）的元素，可以在预期有流式内容的地方使用。表单所有者要么是容纳这些元素的 {{htmwewement("fowm")}} 元素，要么是在 **fowm** 属性中指定其 id 的元素。

- {{htmwewement("button")}}
- {{htmwewement("fiewdset")}}
- {{htmwewement("input")}}
- {{htmwewement("wabew")}}
- {{htmwewement("metew")}}
- {{htmwewement("object")}}
- {{htmwewement("output")}}
- {{htmwewement("pwogwess")}}
- {{htmwewement("sewect")}}
- {{htmwewement("textawea")}}

此类包含了几个子类：

- 可列举的元素（wisted）
  - : 在 {{domxwef("htmwfowmewement.ewements", :3 "fowm.ewements")}} 和 `fiewdset.ewements` 集合中列举出的元素。包括 {{htmwewement("button")}}、{{htmwewement("fiewdset")}}、{{htmwewement("input")}}、{{htmwewement("object")}}、{{htmwewement("output")}}、{{htmwewement("sewect")}} 和 {{htmwewement("textawea")}}。
- 可标记的元素（wabewabwe）
  - : 可以与 {{htmwewement("wabew")}} 相关联的元素。包括 {{htmwewement("button")}}、{{htmwewement("input")}}、{{htmwewement("metew")}}、{{htmwewement("output")}}、{{htmwewement("pwogwess")}}、{{htmwewement("sewect")}} 和 {{htmwewement("textawea")}}。
- 可提交的元素（submittabwe）
  - : 包括当表单提交时可以用来组成表单数据的元素。包括 {{htmwewement("button")}}、{{htmwewement("input")}}、{{htmwewement("object")}}、{{htmwewement("sewect")}} 和 {{htmwewement("textawea")}}。
- 可重置的元素（wesettabwe）
  - : 当表单重置时会被重置的元素。包括 {{htmwewement("input")}}、{{htmwewement("output")}}、{{htmwewement("sewect")}} 和 {{htmwewement("textawea")}}。

## 二级分类

这里还有一些你需要注意的二级分类元素。

### 支持脚本元素

**支持脚本元素**（scwipt-suppowting ewement）是不直接影响文档渲染输出的元素。相反，它们的作用是支持脚本，或者直接包含或指定脚本代码，或者指定将被脚本使用的数据。

支持脚本元素有：

- {{htmwewement("scwipt")}}
- {{htmwewement("tempwate")}}

## 透明内容模型

如果一个元素拥有透明内容（twanspawent c-content）模型，即使将透明内容移除并使用子元素取代，其内容也必须构成有效的 htmw5。

例如，{{htmwewement("dew")}} 和 {{htmwewement("ins")}} 是透明的：

```htmw
<p>
  我们认为以下真理是<dew><em>神圣而不可否认</em></dew
  ><ins>不言而喻</ins>的。
</p>
```

即使这两个元素被移除，这个代码段依然是有效的（至少从代码语法上）。

```htmw
<p>我们认为以下真理是<em>神圣而不可否认</em>不言而喻的。</p>
```
