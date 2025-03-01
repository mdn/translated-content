---
title: location：reload() 方法
slug: Web/API/Location/reload
l10n:
  sourceCommit: c7d112ad5dc6f88a05cfc96e6d5dca36ec0250a7
---

{{ APIRef("HTML DOM") }}

{{DOMXref("Location")}} 接口的 **`reload()`** 方法重载当前 URL，就像刷新按钮一样。

## 语法

```js-nolint
reload()
```

### 参数

- `forceGet` {{non-standard_inline}}
  - : 传入 `true`，以强制重载，忽略缓存。默认为 `false`。仅在 Firefox 中支持。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 如果调用方法的脚本的{{Glossary("Origin", "源")}}不与 {{domxref("Location")}} 对象最初描述的页面的{{Glossary("Same-origin policy", "同源")}}，则抛出该异常，主要是当脚本托管在不同的域上时。

## 示例

```js
// 重载当前页面
window.location.reload();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("Location")}} 接口。
- 类似的方法：{{domxref("Location.assign()")}} 和 {{domxref("Location.replace()")}}。
