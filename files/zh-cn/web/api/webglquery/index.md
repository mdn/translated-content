---
title: WebGLQuery
slug: Web/API/WebGLQuery
---

{{APIRef("WebGL")}} {{SeeCompatTable}}

**`WebGLQuery`** 接口是 [WebGL 2](/zh-CN/docs/Web/API/WebGL_API) API 的一部分，并且提供几种异步查询信息的方法。缺省情况下，遮蔽查询和图元查询是可用的。

另一种查询是分离定时器查询，它可以允许你测量 GPU 的性能和能力。仅当存在 {{domxref("EXT_disjoint_timer_query")}} 扩展时分离定时器查询才是可用的。

使用 `WebGLQuery` 对象时，{{domxref("WebGL2RenderingContext")}} 的下列方法是有用的：

- {{domxref("WebGL2RenderingContext.createQuery()")}}
- {{domxref("WebGL2RenderingContext.deleteQuery()")}}
- {{domxref("WebGL2RenderingContext.isQuery()")}}
- {{domxref("WebGL2RenderingContext.beginQuery()")}}
- {{domxref("WebGL2RenderingContext.endQuery()")}}
- {{domxref("WebGL2RenderingContext.getQuery()")}}
- {{domxref("WebGL2RenderingContext.getQueryParameter()")}}

## 示例

### 创建一个 `WebGLQuery` 对象

在本例中，`gl` 必须是 {{domxref("WebGL2RenderingContext")}}. `WebGLQuery` 对象在 WebGL 1 中是不可用的。

```js
var query = gl.createQuery();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("EXT_disjoint_timer_query")}}
