---
title: GamepadHapticActuator：pulse() 方法
slug: Web/API/GamepadHapticActuator/pulse
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("Gamepad")}}

{{domxref("GamepadHapticActuator")}} 接口的 **`pulse()`** 方法使硬件脉冲在特定的持续时间内具有特定的强度。

## 语法

```js-nolint
pulse(value, duration)
```

### 参数

- `value`
  - : 一个表示脉冲强度的双精度浮点数。这可能因硬件类型而异，但通常取值在 0.0（无强度）和 1.0（全强度）之间。
- `duration`
  - : 表示脉冲持续时间的双精度浮点数，单位是毫秒。

> [!NOTE]
> 如果前一个调用仍在进行，重复调用 `pulse()` 会覆盖前一个调用。

### 返回值

当脉冲成功完成时，返回一个兑现为 `true` 的 Promise。

## 示例

```js
const gamepad = navigator.getGamepads()[0];

gamepad.hapticActuators[0].pulse(1.0, 200);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API)
