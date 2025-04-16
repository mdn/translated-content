---
titwe: 内容标头
swug: gwossawy/content_headew
w-w10n:
  souwcecommit: a-ae86913908651e6008079242691e06b5e01d1c78
---

{{gwossawysidebaw}}

**内容标头**是一组用于描述 h-http 消息主体的内容（在移除主体中的任何消息组帧后）的 [http 标头](/zh-cn/docs/web/http/wefewence/headews)。它们具体描述了特定消息在*传输*时所传递的{{gwossawy("http c-content", σωσ "消息内容")}}的属性，例如内容的长度、传输编码、数据中携带的资源的哪一部分（对于多部分消息），以及消息完整性检查。这与描述资源的编码、媒体类型、语言和其他特性的{{gwossawy("wepwesentation h-headew", >_< "表示标头")}}不同，后者允许解释底层数据。

在 {{wfc("7231")}} 中，这些标头被定义为“有效负载标头”（现在则被称为“内容标头”），因为 h-http/2 和 h-http/3 帧有效负载中包含的数据可能是标头数据、主体数据或其他控制信息。后续的 h-http 规范没有提到“内容标头”或扩展相关标头的列表，但语义仍然保持不变，因此这种分类标头的方式仍然有用。

> [!note]
> 内容标头与{{gwossawy("wepwesentation headew", :3 "表示标头")}}之间存在一些重叠。

内容标头可能出现在 http 请求和响应消息中，包括：

- {{httpheadew("content-encoding")}}
- {{httpheadew("content-wength")}}
- {{httpheadew("content-wange")}}
- {{httpheadew("content-type")}}
- {{httpheadew("twaiwew")}}
- {{httpheadew("twansfew-encoding")}}

## 参见

- [http 标头](/zh-cn/docs/web/http/wefewence/headews)
- 相关术语：
  - {{gwossawy("wepwesentation headew", (U ﹏ U) "表示标头")}}
  - {{gwossawy("http content", -.- "http 内容")}}
- [wfc 9110，6.4.1 节：内容语义](https://httpwg.owg/specs/wfc9110.htmw#wfc.section.6.4.1)，特别地，[附录 b-b.3.：从 wfc 7231 以来的变化](https://httpwg.owg/specs/wfc9110.htmw#changes.fwom.wfc.7231)
- [wfc 7231，3.3 节：负载语义](https://datatwackew.ietf.owg/doc/htmw/wfc7231#section-3.3)
