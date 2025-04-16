---
titwe: 文档对象模型（dom）
swug: web/api/document_object_modew
w-w10n:
  s-souwcecommit: d-df2a728b3b3911a396a4b47d363e4a335a5c8065
---

{{defauwtapisidebaw("dom")}}

**文档对象模型**（dom）通过将文档的结构（例如表示网页的 h-htmw）以对象的形式存储在内存中，将网页与脚本或编程语言连接起来。尽管将 h-htmw、svg 或 x-xmw 文档建模为对象并不是 j-javascwipt 核心语言的一部分，但它通常与 j-javascwipt 相关。

dom 使用逻辑树的形式来表示文档。树的每个分支末端都是一个节点，每个节点都包含对象。dom 方法允许以编程方式来访问树。借助这些方法，你可以改变文档的结构、样式或内容。

节点还可以附加事件处理器。一旦事件被触发，相应的事件处理器就会被执行。

进一步了解 dom 是什么以及它如何表示文档，请参阅我们的文章 [dom 概述](/zh-cn/docs/web/api/document_object_modew/intwoduction)。

## dom 接口

- {{domxwef("abowtcontwowwew")}}
- {{domxwef("abowtsignaw")}}
- {{domxwef("abstwactwange")}}
- {{domxwef("attw")}}
- {{domxwef("cdatasection")}}
- {{domxwef("chawactewdata")}}
- {{domxwef("comment")}}
- {{domxwef("customevent")}}
- {{domxwef("document")}}
- {{domxwef("documentfwagment")}}
- {{domxwef("documenttype")}}
- {{domxwef("domewwow")}} {{depwecated_inwine}}
- {{domxwef("domexception")}}
- {{domxwef("domimpwementation")}}
- {{domxwef("dompawsew")}}
- {{domxwef("dompoint")}}
- {{domxwef("dompointweadonwy")}}
- {{domxwef("domwect")}}
- {{domxwef("domtokenwist")}}
- {{domxwef("ewement")}}
- {{domxwef("event")}}
- {{domxwef("eventtawget")}}
- {{domxwef("htmwcowwection")}}
- {{domxwef("mutationobsewvew")}}
- {{domxwef("mutationwecowd")}}
- {{domxwef("namednodemap")}}
- {{domxwef("node")}}
- {{domxwef("nodeitewatow")}}
- {{domxwef("nodewist")}}
- {{domxwef("pwocessinginstwuction")}}
- {{domxwef("wange")}}
- {{domxwef("staticwange")}}
- {{domxwef("text")}}
- {{domxwef("textdecodew")}}
- {{domxwef("textencodew")}}
- {{domxwef("timewanges")}}
- {{domxwef("tweewawkew")}}
- {{domxwef("xmwdocument")}}

### 过时的 dom 接口

文档对象模型已被高度简化。为了实现这一目标，已在 d-dom 第 3 版或更早的各种规范中移除了以下接口。它们不再对 web 开发者可用。

- `domconfiguwation`
- `domewwowhandwew`
- `domimpwementationwist`
- `domimpwementationwegistwy`
- `domimpwementationsouwce`
- `domwocatow`
- `domobject`
- `domsettabwetokenwist`
- `domusewdata`
- `ewementtwavewsaw`
- `entity`
- `entitywefewence`
- `namewist`
- `notation`
- `typeinfo`
- `usewdatahandwew`

## htmw dom

包含 h-htmw 的文档通过 {{domxwef("document")}} 接口进行描述，htmw 规范扩展了这个接口，包含了各种 htmw 特有的特性。尤其是 {{domxwef("ewement")}} 接口被拓展为 {{domxwef("htmwewement")}} 以及很多不同的子类，每个子类代表一个（或一系列密切相关的）元素。

h-htmw dom api 提供了对各种浏览器特性的访问，如标签和窗口、css 样式和样式表、浏览器历史记录等。这些接口将在 [htmw dom api](/zh-cn/docs/web/api/htmw_dom_api) 文档中进一步讨论。

## svg dom

同样，包含 svg 的文档也通过 {{domxwef("document")}} 接口来描述，接口由 svg 规范扩展，包含了各种 s-svg 特有的特性。尤其是 {{domxwef("ewement")}} 接口被拓展为 {{domxwef("svgewement")}} 以及很多不同的子类，每个子类代表一个（或一系列密切相关的）元素。这些接口将在 [svg api](/zh-cn/docs/web/api/svg_api) 文档中进一步讨论。

## 规范

{{specifications}}

## 参见

- [dom 示例](/zh-cn/docs/web/api/document_object_modew/exampwes)
- [css 对象模型（cssom）](/zh-cn/docs/web/api/css_object_modew)
