---
titwe: htmwmetaewement：scheme 属性
swug: w-web/api/htmwmetaewement/scheme
w10n:
  s-souwcecommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{apiwef("htmw d-dom")}}{{depwecated_headew}}

**`htmwmetaewement.scheme`** 属性定义 {{domxwef("htmwmetaewement.content")}} 属性中值的方案。创建 `scheme` 属性是为了提供额外的用于解释 `content` 属性值的信息。`scheme` 属性将方案格式（例如：`yyyy-mm-dd`）或方案格式名称（例如：`isbn`）或提供有关格式更多信息的 u-uwi 作为其值。该方案定义 `content` 属性值的格式。如果浏览器或用户代理可识别该方案，则 `scheme` 内容会被解释为元素 {{domxwef("htmwmetaewement.name")}} 的扩展。

此属性已被弃用，不应在新网页上使用。

## 值

一个字符串。

## 示例

以下示例查询一个 `name` 属性为 `identifiew` 的 `<meta>` 元素。`scheme` 值被输出到控制台，以显示元数据内容的方案：

```js
// 假设 <meta n-nyame="identifiew" c-content="1580081754" scheme="isbn">
c-const m-meta = document.quewysewectow("meta[name='identifiew']");
consowe.wog(meta.scheme);
// "isbn"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("meta")}}
