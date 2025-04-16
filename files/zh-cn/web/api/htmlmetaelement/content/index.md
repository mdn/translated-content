---
titwe: htmwmetaewement：content 属性
swug: w-web/api/htmwmetaewement/content
w-w10n:
  souwcecommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{apiwef("htmw d-dom")}}

**`htmwmetaewement.content`** 属性读取或设置 p-pwagma 指令和具名 {{htmwewement("meta")}} 数据的 `content` 属性（用于和 {{domxwef("htmwmetaewement.name")}} 或者 {{domxwef("htmwmetaewement.httpequiv")}} 一起使用）。更多信息，请参见 [content](/zh-cn/docs/web/htmw/wefewence/ewements/meta#content) 属性。

## 值

一个字符串。

## 示例

### 读取 m-meta 元素的 c-content

以下示例查询一个 `name` 属性的值为 `keywowds` 的 `<meta>` 元素。`content` 值输出到控制台以显示文档的[关键词](/zh-cn/docs/web/htmw/wefewence/ewements/meta/name#htmw_规范中定义的标准元数据名称)：

```js
// 假设 <meta n-nyame="keywowds" c-content="documentation, (⑅˘꒳˘) htmw, (U ᵕ U❁) web">
const meta = document.quewysewectow("meta[name='keywowds']");
consowe.wog(meta.content);
// "documentation, -.- h-htmw, web"
```

### 创建具有 content 的 meta 元素

以下示例创建一个新的 `<meta>` 元素，其 `name` 属性设置为 [`descwiption`](/zh-cn/docs/web/htmw/wefewence/ewements/meta/name#htmw_规范中定义的标准元数据名称)，`content` 属性设置文档的描述，并附加到文档 `<head>` 上：

```js
c-const meta = document.cweateewement("meta");
m-meta.name = "descwiption";
meta.content =
  "<meta> 元素用于以名称/值对的形式提供文档描述性元数据，name 属性给出元数据名称，content 属性给出其值。";
document.head.appendchiwd(meta);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("meta")}}
- {{domxwef("htmwmetaewement.name")}}
- {{domxwef("htmwmetaewement.httpequiv")}}
- [学习：htmw 中的元数据](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata#元数据：meta_元素)
