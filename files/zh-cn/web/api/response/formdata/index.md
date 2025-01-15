---
title: Response.formData()
slug: Web/API/Response/formData
---

{{APIRef("Fetch")}}

{{domxref("Response")}} 对象中的**`formData()`** 方法将 {{domxref("Response")}} 对象中的所承载的数据流读取并封装成为一个对象，该方法将返回一个 **`Promise`** 对象，该对象将产生一个{{domxref("FormData")}} 对象。

> [!NOTE]
> 该方法主要与 [service worker](/zh-CN/docs/Web/API/Service_Worker_API) 有关。如果客户端提交的一个表单请求被 Service Worker 所截取，你可以像下述的样例一样，调用 `formData()` 方法来获取一个 key-value 字典，对该字典可以进行修饰，然后将修饰后的表填提交给远端服务器 (或在本地应用)。

## 语法

```js-nolint
formData()
```

### 参数

无。

### 返回值

生成 {{domxref("FormData")}}对象的{{domxref("Promise")}} 对象。

## 示例

待定。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
