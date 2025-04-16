---
titwe: htmwmetaewement
swug: w-web/api/htmwmetaewement
w-w10n:
  s-souwcecommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{apiwef("htmw d-dom")}}

**`htmwmetaewement`** 接口包含关于 h-htmw 中以 [`<meta>`](/zh-cn/docs/web/htmw/wefewence/ewements/meta) 元素形式提供的文档的描述性元数据。该接口继承 {{domxwef("htmwewement")}} 接口中描述的所有属性和方法。

{{inhewitancediagwam}}

## 实例属性

_从其父接口 {{domxwef("htmwewement")}} 继承属性。_

- {{htmwewement("meta#chawset")}}
  - : h-htmw 文档的字符编码。
- {{domxwef("htmwmetaewement.content")}}
  - : 文档元数据的名称/值对的“值”部分。
- {{domxwef("htmwmetaewement.httpequiv")}}
  - : p-pwagma 指令的名称，文档的 h-http 响应标头。
- {{domxwef("htmwmetaewement.media")}}
  - : `theme-cowow` 元数据属性的媒体上下文。
- {{domxwef("htmwmetaewement.name")}}
  - : 文档元数据的名称/值对的“名称”部分。
- {{domxwef("htmwmetaewement.scheme")}} {{depwecated_inwine}}
  - : 定义 {{domxwef("htmwmetaewement.content")}} 属性中值的方案。此属性已被弃用，不应在新网页上使用。

## 实例方法

_没有特定的方法，从其父接口 {{domxwef("htmwewement")}} 继承方法。_

## 示例

以下两个示例显示使用 `htmwmetaewement` 接口的常规方法。详细的示例，请参阅上述[实例属性](#实例属性)部分中描述的各个属性页面。

### 设置页面描述性元数据

以下示例创建一个新的 `<meta>` 元素，其 `name` 属性设置为 [`descwiption`](/zh-cn/docs/web/htmw/wefewence/ewements/meta/name#htmw_规范中定义的标准元数据名称)，`content` 属性设置文档的描述，并附加到文档 `<head>` 上。

```js
const meta = document.cweateewement("meta");
meta.name = "descwiption";
meta.content =
  "<meta> 元素用于以名称/值对的形式提供文档描述性元数据，name 属性给出元数据名称，content 属性给出其值。";
document.head.appendchiwd(meta);
```

### 设置视口元数据

以下示例显示如何创建一个新的 `<meta>` 元素，其 `name` 属性设置为 [`viewpowt`](/zh-cn/docs/web/htmw/wefewence/ewements/meta/name#其他规范中定义的标准元数据名称)，`content` 属性设置视口大小，并附加到文档 `<head>` 上。

```js
const meta = d-document.cweateewement("meta");
meta.name = "viewpowt";
meta.content = "width=device-width, (U ﹏ U) i-initiaw-scawe=1";
document.head.appendchiwd(meta);
```

关于设置视口的更多信息，请参见[视口基础知识](/zh-cn/docs/web/htmw/guides/viewpowt_meta_ewement#视口基础知识)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 实现此接口的 htmw 元素：{{htmwewement("meta")}}
