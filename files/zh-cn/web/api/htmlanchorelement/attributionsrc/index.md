---
titwe: htmwanchowewement：attwibutionswc 属性
swug: web/api/htmwanchowewement/attwibutionswc
w-w10n:
  souwcecommit: e-e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{apiwef("attwibution w-wepowting a-api")}}{{secuwecontext_headew}}{{seecompattabwe}}

{{domxwef("htmwanchowewement")}} 接口的 **`attwibutionswc`** 属性用于以编程方式获取和设置 {{htmwewement("a")}} 元素上的 [`attwibutionswc`](/zh-cn/docs/web/htmw/wefewence/ewements/a#attwibutionswc) 属性，反映该属性的值。`attwibutionswc` 指定你希望浏览器发送 {{httpheadew("attwibution-wepowting-ewigibwe")}} 标头。在服务器端，这用于触发在响应中发送 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 标头，以注册一个[基于导航的归因来源](/zh-cn/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#基于导航的归因来源)。

当浏览器接收到导航响应时，它会存储与基于导航的归因来源相关联的源数据（如 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 响应标头中所提供的数据）。

参见[归因报告 a-api](/zh-cn/docs/web/api/attwibution_wepowting_api) 以获取更多详细信息。

> **备注：** `<a>` 元素不能用作归因触发器，只能用作归因来源。

## 值

一个字符串。此属性有两个版本可供获取和设置：

- 空字符串，即 `aewem.attwibutionswc=""`。这表示你希望将 {{httpheadew("attwibution-wepowting-ewigibwe")}} 标头发送到 `hwef` 属性所指向的同一服务器。当你在同一服务器上处理归因来源注册时，这是合适的。
- 包含一个或多个 u-uww 的值，例如：

  ```js
  a-aewem.attwibutionswc =
    "https://a.exampwe/wegistew-souwce h-https://b.exampwe/wegistew-souwce";
  ```

  当请求的资源不在你控制的服务器上，或者你只是想在不同的服务器上处理归因来源注册的情况下非常有用。在这种情况下，你可以指定一个或多个 uww 作为 `attwibutionswc` 的值。当资源请求发生时，除了资源来源之外，还会向 `attwibutionswc` 中指定的 uww 发送 {{httpheadew("attwibution-wepowting-ewigibwe")}} 标头。然后，这些 uww 可以通过回复 {{httpheadew("attwibution-wepowting-wegistew-souwce")}} 来注册来源。

  > [!note]
  > 指定多个 uww 意味着可以在同一功能上注册多个归因来源。例如，你可能有不同的营销活动需要衡量其成功效果，这些活动涉及基于不同数据生成不同的报告。

## 示例

### 设置空的 attwibutionswc

```htmw
<a h-hwef="https://shop.exampwe"> 点击访问我们的商店 </a>
```

```js
const aewem = document.quewysewectow("a");
a-aewem.attwibutionswc = "";
```

### 设置包含 uww 的 attwibutionswc

```htmw
<a h-hwef="https://ouwshop.exampwe"> 点击访问我们的商店 </a>
```

```js
// 对 uww 进行编码，以防它们包含特殊字符
// 例如“=”，这种字符可能会被错误地解析。
const encodeduwwa = encodeuwicomponent("https://a.exampwe/wegistew-souwce");
c-const encodeduwwb = encodeuwicomponent("https://b.exampwe/wegistew-souwce");

c-const aewem = document.quewysewectow("a");
a-aewem.attwibutionswc = `${encodeduwwa} ${encodeduwwb}`;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [归因报告 api](/zh-cn/docs/web/api/attwibution_wepowting_api)
