---
title: CookieStore
slug: Web/API/CookieStore
l10n:
  sourceCommit: 01e7af5aeee7833c129ddfa41eb719b123a8cdcc
---

{{securecontext_header}}{{APIRef("Cookie Store API")}} {{AvailableInWorkers}}

{{domxref("Cookie Store API", "", "", "nocode")}} 的 **`CookieStore`** 接口提供了在页面或 Service Worker 中异步设置和获取 cookies 的方法

`CookieStore` 通过 {{domxref("Window")}} 或 {{domxref("ServiceWorkerGlobalScope")}} 上下文的全局范围内的属性进行访问。因此，不存在构造函数。

{{InheritanceDiagram}}

## 实例方法

- {{domxref("CookieStore.delete()")}}
  - : `delete()` 方法通过 `name` 或 `options` 对象删除 cookie，返回一个删除完成后兑现的 {{jsxref("Promise")}}。
- {{domxref("CookieStore.get()")}}
  - : `get()` 方法获通过 `name` 或 `options` 对象获取一个 cookie，返回一个兑现为 cookie 详细信息的 {{jsxref("Promise")}}。
- {{domxref("CookieStore.getAll()")}}
  - : `getAll()` 方法获取所有匹配的 cookie，返回一个兑现为 cookie 列表的 {{jsxref("Promise")}}。
- {{domxref("CookieStore.set()")}}
  - : `set()` 方法通过给定的 `name` 和 `value` 或 `options` 对象设置 cookie，返回一个设置成功后兑现的 {{jsxref("Promise")}}。

## 事件

- {{domxref("CookieStore.change_event", "change")}}
  - : 当 cookie 发生任何变更将触发 `change` 事件。

## 示例

在此示例中，我们设置了一个 cookie，并将其写入控制台以了解该操作是成功还是失败。

```js
const day = 24 * 60 * 60 * 1000;

cookieStore
  .set({
    name: "cookie1",
    value: "cookie1-value",
    expires: Date.now() + day,
    domain: "example.com",
  })
  .then(
    () => {
      console.log("成功了！");
    },
    (reason) => {
      console.error("设置失败：", reason);
    },
  );
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
