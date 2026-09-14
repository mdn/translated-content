---
title: WebGL2RenderingContext：beginQuery() 方法
slug: Web/API/WebGL2RenderingContext/beginQuery
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

[WebGL 2 API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGL2RenderingContext.beginQuery()`** 方法启动一个异步查询。`target` 参数表明是哪种类型的查询。

## 语法

```js-nolint
beginQuery(target, query)
```

### 参数

- `target`
  - : 指定查询的目标的 {{domxref("WebGL_API/Types", "GLenum")}}。可能的值有：
    - `gl.ANY_SAMPLES_PASSED`
      - : 指定遮挡查询：这类查询检测对象是否可见（局限绘制命令是否通过深度测试；如果通过，则有多少个样本通过）。
    - `gl.ANY_SAMPLES_PASSED_CONSERVATIVE`
      - : 与前者相同，但精度较低且速度更快。
    - `gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`
      - : 写入变换反馈缓冲区的原语数量。

- `query`
  - : 用于开始查询的 {{domxref("WebGLQuery")}} 对象。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
const query = gl.createQuery();
gl.beginQuery(gl.ANY_SAMPLES_PASSED, query);

// …
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLQuery")}}
