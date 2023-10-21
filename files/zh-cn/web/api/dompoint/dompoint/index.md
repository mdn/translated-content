---
title: DOMPoint.DOMPoint()
slug: Web/API/DOMPoint/DOMPoint
---

{{APIRef("DOM")}}

**`DOMPoint()`**构造函数创建并返回一个 {{domxref("DOMPoint")}} 对象，可提供部分或全部属性值作为其参数。

也可以通过调用静态方法 {{domxref("DOMPoint.fromPoint()")}} 来创建 `DOMPoint` 。此方法接受一个 {{domxref("DOMPointInit")}} 兼容对象（`DOMPoint` 或 {{domxref("DOMPointReadOnly")}}）作为参数。

## 语法

```plain
point = new DOMPoint(x, y, z, w);
```

### 参数

- `x` {{optional_inline}}
  - : `x` 坐标。
- `y` {{optional_inline}}
  - : `y` 坐标。
- `z` {{optional_inline}}
  - : `z` 坐标。
- `w` {{optional_inline}}
  - : 透视值。

## 示例

示例首先创建了一个表示当前窗口左上角的 `DOMPoint` ，接着根据第一个点创建一个新的 `DOMPoint` 并将其在垂直和水平方向上偏移 100px。

```js
var windTopLeft = new DOMPoint(window.screenX, window.screenY);
var newTopLeft = DOMPoint.fromPoint(windTopLeft);
newTopLeft.x += 100;
newTopLeft.y += 100;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("DOMPointReadOnly.DOMPoint", "DOMPointReadOnly()")}}
- {{domxref("DOMRect")}}
- {{domxref("DOMMatrix")}}
