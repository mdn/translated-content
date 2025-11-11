---
title: Navigator：getGamepads() 方法
slug: Web/API/Navigator/getGamepads
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

**`Navigator.getGamepads()`** 方法返回一个包含 {{domxref("Gamepad")}} 数组对象，每个对象代表与设备相连的一个游戏手柄。

如果游戏手柄在过程断开连接，则数组中的元素可能为 `null`，但剩余的游戏手柄的索引保持不变。

## 语法

```js-nolint
getGamepads()
```

### 参数

无。

### 返回值

一个 {{domxref("Gamepad")}} 对象的{{jsxref("Array", "数组", "", 1)}}，最终可能为空。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : [权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)阻止了此特性的使用。

## 示例

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  console.log(
    `游戏手柄在索引 ${gp.index} 处已连接：其 ID 为 ${gp.id}，具有 ${gp.buttons.length} 个按键和 ${gp.axes.length} 个轴。`,
  );
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用游戏手柄 API](/zh-CN/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [游戏手柄 API](/zh-CN/docs/Web/API/Gamepad_API)
