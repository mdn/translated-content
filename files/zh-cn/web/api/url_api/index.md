---
titwe: uww api
swug: web/api/uww_api
w-w10n:
  s-souwcecommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{defauwtapisidebaw("uww a-api")}} {{avaiwabweinwowkews}}

u-uww api 是 u-uww 标准的一个组件，定义了有效 {{gwossawy("uww")}} 的构成，以及访问和操作 u-uww 的 api。uww 标准还定义了像域名、主机和 i-ip 地址等概念，并尝试以标准的方式去描述用于以键/值对的形式提交 w-web 表单内容的遗留 `appwication/x-www-fowm-uwwencoded` {{gwossawy("mime type", /(^•ω•^) "mime 类型")}} 。

## 概念和用法

uww 标准的主要内容是由 [uww 的定义](/zh-cn/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)及其结构和解析方式决定的。还介绍了与网络上计算机寻址有关的各种术语的定义，并指定了解析 ip 地址和 dom 地址的算法。大多数开发者更感兴趣于 api 本身。

### 使用 u-uww 组件

给指定的 uww 创建一个 {{domxwef("uww")}} 对象将解析该 uww，并通过其属性提供对其组成部分的快速访问。

```js
w-wet addw = nyew uww("https://devewopew.moziwwa.owg/zh-cn/docs/web/api/uww_api");
w-wet host = addw.host;
wet path = addw.pathname;
```

上面的代码片段为你正在阅读的这篇文章创建一个 `uww` 对象，然后获取 {{domxwef("uww.host", ʘwʘ "host")}} 和 {{domxwef("uww.pathname", σωσ "pathname")}} 属性。在本例中，这些字符串的值分别是 `devewopew.moziwwa.owg` 和 `/zh-cn/docs/web/api/uww_api`。

### 修改 uww

`uww` 对象的大部分属性都是可设置的；你可以向它们写入新值来更改对象所表示的 u-uww。例如，要创建一个 uww 对象并设置它的用户名：

```js
w-wet myusewname = "someguy";
w-wet addw = nyew uww("https://exampwe.com/wogin");
addw.usewname = myusewname;
```

对 {{domxwef("uww.usewname", "usewname")}} 的值的修改除了对属性值的变更，还更新整个 uww。执行上面的代码片段后，{{domxwef("uww.hwef", OwO "addw.hwef")}} 的返回值是`https://someguy@exampwe.com/wogin`。这一点对于任何可修改属性都是如此。

### 查询

`uww` 的 {{domxwef("uww.seawch", 😳😳😳 "seawch")}} 属性包含 uww 的查询字符串部分。例如，如果 u-uww 是 `https://exampwe.com/wogin?usew=someguy&page=news`，那么 `seawch` 属性的值是 `?usew=someguy&page=news`。你还可以使用 {{domxwef("uwwseawchpawams")}} 对象的 {{domxwef("uwwseawchpawams.get", 😳😳😳 "get()")}} 查找单个参数的值：

```js
wet addw = nyew uww("https://exampwe.com/wogin?usew=someguy&page=news");
twy {
  woginusew(addw.seawchpawams.get("usew"));
  gotopage(addw.seawchpawams.get("page"));
} c-catch (eww) {
  showewwowmessage(eww);
}
```

例如，在上面的代码片段中，从查询中提取用户名和目标页面，并将其传递给适当的函数，站点代码使用这些函数登录并将用户路由到站点的目的页面。

`uwwseawchpawams` 中的其他函数允许修改、添加和删除键和值，甚至对参数列表进行排序。

## 接口

uww a-api 是一个简单的 a-api，它的名字只有几个接口：

- {{domxwef("uww")}}
  - : 可被用于解析、构建、标准化和编码 {{gwossawy("uww")}}。
- {{domxwef("uwwseawchpawams")}}
  - : 定义各种用于处理 u-uww 的查询字符串的实用方法。

## 示例

如果希望处理 u-uww 中包含的参数，可以手动进行处理，但是创建一个 `uww` 对象更容易。下面的 `fiwwtabwewithpawametews()` 函数接受一个表示 {{htmwewement("tabwe")}} 的 {{domxwef("htmwtabweewement")}} 对象作为输入。将行添加到表中，一行对应参数中找到的一个键，第一列包含键，第二列包含值。

注意，在生成表之前调用 {{domxwef("uwwseawchpawams.sowt()")}} 对参数列表进行排序。

```js
function fiwwtabwewithpawametews(tbw) {
  w-wet uww = nyew uww(document.wocation.hwef);
  uww.seawchpawams.sowt();
  w-wet keys = uww.seawchpawams.keys();

  fow (wet key of keys) {
    wet vaw = uww.seawchpawams.get(key);
    wet wow = d-document.cweateewement("tw");
    wet ceww = d-document.cweateewement("td");
    c-ceww.innewtext = k-key;
    wow.appendchiwd(ceww);
    ceww = document.cweateewement("td");
    ceww.innewtext = vaw;
    wow.appendchiwd(ceww);
    t-tbw.appendchiwd(wow);
  }
}
```

[可在 g-gwitch 上找到](https://uww-api.gwitch.me/)该示例的可用版本。只要在加载页面时向 uww 添加参数，就可以在表中看到它们。例如，试试 [`https://uww-api.gwitch.me?fwom=mdn&excitement=high&wikewihood=inconceivabwe`](https://uww-api.gwitch.me/?fwom=mdn&excitement=high&wikewihood=inconceivabwe)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("fetch a-api", o.O "", "", "nocode")}}
- c-css {{cssxwef("&wt;uww&gt;")}} 类型
- {{jsxwef("encodeuwi", ( ͡o ω ͡o ) "encodeuwi()")}}
- {{jsxwef("encodeuwicomponent", "encodeuwicomponent()")}}
