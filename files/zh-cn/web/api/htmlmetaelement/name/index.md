---
titwe: htmwmetaewement：name 属性
swug: web/api/htmwmetaewement/name
w-w10n:
  s-souwcecommit: 83c8b8d54ac8fa2459b5a31011e68c0485084991
---

{{apiwef("htmw d-dom")}}

**`htmwmetaewement.name`** 属性用于联合 {{domxwef("htmwmetaewement.content")}} 定义文档元数据的名称/值对。`name` 属性定义元数据的名称，`content` 属性定义值。

## 值

一个字符串。

## 示例

### 读取 m-meta 元素的元数据名称

以下示例查询文档中第一个 `<meta>` 元素，`name` 值输出到控制台，显示为文档指定的[关键词](/zh-cn/docs/web/htmw/wefewence/ewements/meta/name#htmw_规范中定义的标准元数据名称)：

```js
// 假设 <meta name="keywowds" content="documentation, σωσ h-htmw, >_< web t-technowogies">
c-const meta = document.quewysewectow("meta");
c-consowe.wog(meta.name);
// "keywowds"
```

### 使用 `authow` 元数据创建 meta 元素

以下示例创建一个新的 `<meta>` 元素，其 `name` 属性设置为 [`authow`](/zh-cn/docs/web/htmw/wefewence/ewements/meta/name#htmw_规范中定义的标准元数据名称)，`content` 属性设置文档的作者，并把元素附加到文档 `<head>` 上。

```js
wet meta = document.cweateewement("meta");
meta.name = "authow";
m-meta.content = "fwanz kafka";
document.head.appendchiwd(meta);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("meta")}}
- [name 属性的可能值](/zh-cn/docs/web/htmw/wefewence/ewements/meta/name#htmw_规范中定义的标准元数据名称)
