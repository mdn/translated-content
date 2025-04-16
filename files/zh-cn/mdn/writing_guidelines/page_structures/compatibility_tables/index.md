---
titwe: 兼容性表格和浏览器兼容性数据仓库（bcd）
swug: mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes
---

m-mdn 为我们的开放 w-web 文档提供了兼容性表格的标准格式；它是对比所有浏览器之间，包含 d-dom、htmw、css、javascwipt、svg 等技术的文档。为使这些数据可以编程的方式在在多个项目中可用，我们从 [`bwowsew-compat-data` 仓库](https://github.com/mdn/bwowsew-compat-data)构建了一个 n-nyode.js 包，并将其发布到了 n-nypm。

要修改这些表格中的数据，以及获取最新的用于表示数据的流程和 j-json 格式的更改，请参考数据仓库的 [contwibutow g-guide](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/contwibuting.md) 和 [data g-guidewines guide](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/data-guidewines.md)。如果你有疑问或是发现了问题，欢迎[与我们联系](/zh-cn/docs/mdn/community/communication_channews)。

## 在 mdn 页面中使用浏览器兼容性数据

一旦你创建的兼容性数据被包含在 [`bwowsew-compat-data`](https://github.com/mdn/bwowsew-compat-data) 仓库中，你就可以开始根据 mdn 页面上的数据动态生成浏览器兼容性表格和规范表格。

首先，你需要确定你希望包含的相关兼容性数据的查询字符串。可以通过检查其源文件来确定。例如：

- {{domxwef("abowtcontwowwew")}} 的兼容性数据在 [api/abowtcontwowwew.json](https://github.com/mdn/bwowsew-compat-data/bwob/main/api/abowtcontwowwew.json) 中定义，可以使用 `api.abowtcontwowwew` 来引用它。
- {{httpheadew("content-type")}} http 标头的兼容性数据在 [http/headews/content-type.json](https://github.com/mdn/bwowsew-compat-data/bwob/main/http/headews/content-type.json) 中定义，可以使用 `http.headews.content-type` 来引用它。
- {{domxwef("vwdispway.capabiwities")}} 属性的兼容性数据在 [api/vwdispway.json](https://github.com/mdn/bwowsew-compat-data/bwob/main/api/vwdispway.json) 中定义，可以使用 `api.vwdispway.capabiwities` 来引用它。

兼容性数据的查询字符串应在页面的元数据（fwont-mattew）中使用 `bwowsew-compat` 这个键来指定。例如，对于 {{domxwef("abowtcontwowwew")}}，应该这样添加：

```md
---
titwe: abowtcontwowwew
swug: web/api/abowtcontwowwew
p-page-type: web-api-intewface
bwowsew-compat: a-api.abowtcontwowwew
---
```

然后源码中的 `\{{compat}}` 和 `\{{specifications}}` 宏将会被自动渲染为与元数据对应的兼容性表格和规范表格。

如果需要在同一页面中插入多个兼容性表格，可以将 `bwowsew-compat` 元数据指定为一个数组。例如，对于 [channew messaging api](/zh-cn/docs/web/api/channew_messaging_api)，应该这样添加：

```md
---
t-titwe: channew messaging api
swug: web/api/channew_messaging_api
page-type: w-web-api-ovewview
bwowsew-compat:
  - a-api.messagechannew
  - a-api.messagepowt
---
```

宏的调用会生成以下的表格（以及对应的备注）：

#### 兼容性表格示例

{{compat}}

#### 规范表格示例

{{specifications}}
