---
title: GamepadHapticActuator
slug: Web/API/GamepadHapticActuator
l10n:
  sourceCommit: 6592d9b17990c03bffe810c4696f6161f9c49063
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

[Gamepad API](/zh-CN/docs/Web/API/Gamepad_API) 的 **`GamepadHapticActuator`** 接口表示控制器中设计向用户提供触觉反馈的硬件（如果可用），最常见的是振动硬件。

此接口可通过 {{domxref("Gamepad.hapticActuators")}} 属性访问。

## 实例属性

- {{domxref("GamepadHapticActuator.type")}} {{ReadOnlyInline}}
  - : 返回表示触觉硬件类型的枚举值。

## 实例方法

- {{domxref("GamepadHapticActuator.pulse()")}} {{ReadOnlyInline}}
  - : 使硬件在指定的期间内脉冲达到一定强度。
- {{domxref("GamepadHapticActuator.playEffect()")}} {{ReadOnlyInline}}
  - : 使硬件播放特定的振动模式。

## 示例

```js
const gamepad = navigator.getGamepads()[0];

gamepad.hapticActuators[0].pulse(1.0, 200);

gamepad.vibrationActuator.playEffect("dual-rumble", {
  startDelay: 0,
  duration: 200,
  weakMagnitude: 1.0,
  strongMagnitude: 1.0,
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API)
