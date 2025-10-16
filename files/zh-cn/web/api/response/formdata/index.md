---
title: Response：formData() 方法
slug: Web/API/Response/formData
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

{{domxref("Response")}} 接口的 **`formData()`** 方法接受一个 {{domxref("Response")}} 流，并完整读取它。它将返回一个会兑现为 {{domxref("FormData")}} 对象的 promise。

> [!NOTE]
> 该方法主要与 [service worker](/zh-CN/docs/Web/API/Service_Worker_API) 有关。如果用户提交了的表单请求被 service worker 所拦截，你可以像下述的示例一样，调用 `formData()` 方法来获取一个键值映射，修改某些字段，然后将表单发送到服务器（或在本地使用）。

## 语法

```js-nolint
formData()
```

### 参数

无。

### 返回值

兑现为 {{domxref("FormData")}} 对象的 {{domxref("Promise")}}。

### 异常

- {{domxref("DOMException")}} `AbortError`
  - : 请求被[中止](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch#取消请求)。
- {{jsxref("TypeError")}}
  - : 因以下原因抛出此异常：
    - 响应主体[被干扰或锁定](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch#锁定和干扰流)。
    - 在解码主体内容时存在错误（例如，因为 {{httpheader("Content-Encoding")}} 标头不正确）。
    - 无法根据响应中包含的 {{httpheader("Content-Type")}} 标头来确定主体的 {{glossary("MIME")}} 类型。
    - 主体无法被解析为 `FormData` 对象。

## 示例

待定。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
