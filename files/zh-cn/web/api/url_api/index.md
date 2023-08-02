---
title: URL API
slug: Web/API/URL_API
---

{{DefaultAPISidebar("URL API")}}

URL API 是一个 URL 标准的组件，它定义了有效的{{Glossary("URL", "Uniform Resource Locator")}}和访问、操作 URL 的 API。URL 标准还定义了像域名、主机和 IP 地址等概念，并尝试以标准的方式去描述用于以键/值对的形式提交 web 表单内容的遗留`application/x-www-form-urlencoded` {{Glossary("MIME type")}} 。

## URL 的概念和用法

URL 标准的主要内容是由 URL 的定义以及它的结构和解析方式决定的。还介绍了与网络上计算机寻址有关的各种术语的定义，并指定了解析 IP 地址和 DOM 地址的算法。大多数开发人员更感兴趣的是 API 本身。

### 使用 URL 组件

给指定的 URL 创建一个 {{domxref("URL")}} 对象将解析 URL 并通过其属性对其组成部分的快速访问。

```js
let addr = new URL("https://developer.mozilla.org/zh-CN/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
```

上面的代码片段为您正在阅读的文章创建一个`URL`对象，然后获取 {{domxref("URL.host", "host")}} 和 {{domxref("URL.pathname", "pathname")}} 属性。在本例中，这些字符串的值分别是`developer.mozilla.org` 和`/zh-CN/docs/Web/API/URL_API`。

### 修改 URL

`URL`对象的大部分属性都是可设置的；您可以向它们写入新值来更改对象所表示的 URL。例如，要创建一个 URL 对象并设置它的用户名：

```js
let myUsername = "someguy";
let addr = new URL("https://mysite.com/login");
addr.username = myUsername;
```

设置 {{domxref("URL.username", "username")}} 值不仅是设置该属性的值，而且更新整个 URL。执行上面的代码片段后， {{domxref("URL.href", "addr.href")}} 的返回值是`https://someguy@mysite.com/login`。对于任何可写属性都是如此。

### 查询

{{domxref("URL.search", "search")}} 属性在 URL 上包含 URL 的查询字符串部分。例如，如果 URL 是`https://mysite.com/login?user=someguy&page=news`，那么`search` 属性的值是`?user=someguy&page=news`。您还可以使用 {{domxref("URLSearchParams")}} 对象的 {{domxref("URLSearchParams.get", "get()")}} 查找单个参数的值：

```
let addr = new URL("https://mysite.com/login?user=someguy&page=news");
try {
  loginUser(addr.searchParams.get("user"));
  gotoPage(addr.searchParams.get("page"));
} catch(err) {
  showErrorMessage(err);
}
```

例如，在上面的代码片段中，从查询中提取用户名和目标页面，并将其传递给适当的函数，站点代码使用这些函数登录并将用户路由到站点的目的页面。

`URLSearchParams`中的其他函数允许修改改、添加和删除键和值，甚至对参数列表进行排序。

## URL API 接口

URL API 是一个简单的 API，它的名字只有几个接口：

- [`URL`](/zh-CN/docs/Web/API/URL)
- [`URLSearchParams`](/zh-CN/docs/Web/API/URLSearchParams)

该规范的旧版本包括一个名为{{domxref("URLUtilsReadOnly")}}的接口，该接口已经合并到{{domxref("WorkerLocation")}} 接口中。

## 例子

如果希望处理 URL 中包含的参数，可以手动进行处理，但是创建一个 URL 对象更容易。下面的`fillTableWithParameters()`函数接受一个表示{{HTMLElement("table")}}的 {{domxref("HTMLTableElement")}} 对象作为输入。将行添加到表中，每个行对应参数中找到的键，第一列包含键，第二列包含值。

注意，在生成表之前调用 {{domxref("URLSearchParams.sort()")}} 对参数列表进行排序。

```js
function fillTableWithParameters(tbl) {
  let url = new URL(document.location.href);
  url.searchParams.sort();
  let keys = url.searchParams.keys();

  for (let key of keys) {
    let val = url.searchParams.get(key);
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.innerText = key;
    row.appendChild(cell);
    cell = document.createElement("td");
    cell.innerText = val;
    row.appendChild(cell);
    tbl.appendChild(row);
  }
}
```

在 [found on Glitch](https://url-api.glitch.me/)上可以找到这个例子的工作版本。只要在加载页面时向 URL 添加参数，就可以在表中看到它们。例如，试试[`https://url-api.glitch.me?from=mdn&excitement=high&likelihood=inconceivable`](https://url-api.glitch.me/?from=mdn&excitement=high&likelihood=inconceivable)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- CSS {{cssxref("&lt;url&gt;")}} type
