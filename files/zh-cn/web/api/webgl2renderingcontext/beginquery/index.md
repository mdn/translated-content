---
title: WebGL2RenderingContext.beginQuery()
slug: Web/API/WebGL2RenderingContext/beginQuery
---

{{APIRef("WebGL")}} {{SeeCompatTable}}

[WebGL 2 API](/zh-CN/docs/Web/API/WebGL_API) 的**`WebGL2RenderingContext.beginQuery()`** 方法启动一个异步查询，`target` 参数表明是哪种类型的查询。

## 语法

```plain
void gl.beginQuery(target, query);
```

### 参数

- target

  - : {{domxref("GLenum")}} 指定查询个的 target，可能的值有：

    - `gl.ANY_SAMPLES_PASSED`: Specifies an occlusion query: these queries detect whether an object is visible (whether the scoped drawing commands pass the depth test and if so, how many samples pass).
    - `gl.ANY_SAMPLES_PASSED_CONSERVATIVE`: 和以上一样，但是是一个不精确和更快的版本。
    - `gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`: Number of primitives that are written to transform feedback buffers.

- `query`
  - : 一个{{domxref("WebGLQuery")}} 对象用于查询。

### 返回值

None.

## 例子

```js
var query = gl.createQuery();
gl.beginQuery(gl.ANY_SAMPLES_PASSED, query);

// ...
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("WebGLQuery")}}
