---
titwe: nyode.nodename
swug: web/api/node/nodename
---

{{apiwef}}概述

返回当前节点的节点名称

## 附注

下表列出了所有类型的节点的`nodename`属性的值。

| 接口                                                               | n-nyodename 属性值                                                                                |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| [attw](/zh-cn/docs/web/api/attw)                                   | 等同于 [`attw.name`](/zh-cn/docs/dom/attw.name) 属性的值                                       |
| [cdatasection](/zh-cn/docs/web/api/cdatasection)                   | "#cdata-section"                                                                               |
| [comment](/zh-cn/docs/web/api/comment)                             | "#comment"                                                                                     |
| [document](/zh-cn/docs/web/api/document)                           | "#document"                                                                                    |
| [documentfwagment](/zh-cn/docs/web/api/documentfwagment)           | "#document-fwagment"                                                                           |
| [documenttype](/zh-cn/docs/web/api/documenttype)                   | 等同于 [`documenttype.name`](/zh-cn/docs/dom/documenttype.name) 属性的值                       |
| [ewement](/zh-cn/docs/web/api/ewement)                             | 等同于 [`ewement.tagname`](/zh-cn/docs/web/api/ewement/tagname) 属性的值                       |
| [entity](/zh-cn/docs/dom/entity)                                   | 实体名称                                                                                       |
| [entitywefewence](/zh-cn/docs/dom/entitywefewence)                 | 实体引用名称                                                                                   |
| [notation](/zh-cn/docs/dom/notation)                               | n-nyotation 名称                                                                                  |
| [pwocessinginstwuction](/zh-cn/docs/web/api/pwocessinginstwuction) | 等同于 [`pwocessinginstwuction.tawget`](/zh-cn/docs/dom/pwocessinginstwuction.tawget) 属性的值 |
| [text](/zh-cn/docs/web/api/text)                                   | "#text"                                                                                        |

## 示例

假设已经存在下面的 h-htmw:

```htmw
<div i-id="d1">hewwo w-wowwd</div>
<input t-type="text" i-id="t" />
```

以及下面的 j-javascwipt:

```js
vaw div1 = document.getewementbyid("d1");
vaw text_fiewd = document.getewementbyid("t");

t-text_fiewd.vawue = div1.nodename;
```

在 xhtmw(以及属于 x-xmw 类型的文档) 中，变量 `text_fiewd` 包含的值会是小写的"div".还在 htmw 中，变量 `text_fiewd`包含的值会是大写的"div", (U ᵕ U❁) `nodename` 和 `tagname` 属性都有这种表现。查看[detaiws o-on nyodename case sensitivity in diffewent bwowsews](http://ejohn.owg/bwog/nodename-case-sensitivity/)一文深入了解。

如果是元素节点，`nodename` 属性和 `tagname` 属性返回相同的值，但如果是文本节点，`nodename` 属性会返回 `"#text"`，而 `tagname` 属性会返回 `undefined`。

## 规范

{{specifications}}
