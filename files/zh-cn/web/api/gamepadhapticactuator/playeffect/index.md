---
title: GamepadHapticActuator：playEffect() 方法
slug: Web/API/GamepadHapticActuator/playEffect
l10n:
  sourceCommit: 6592d9b17990c03bffe810c4696f6161f9c49063
---

{{APIRef("Gamepad")}}

{{domxref("GamepadHapticActuator")}} 接口的 **`playEffect()`** 方法使硬件播放特定的振动模式。

## 语法

```js-nolint
playEffect(type, params)
```

### 参数

- `type`
  - : 表示所需效果的字符串。这可能因硬件类型而异，可能的值为 `"dual-rumble"`（双重隆隆声）或 `"vibration"`（振动）。

- `params`
  - : 描述所需触觉效果的对象。期望值是：
    - `duration`
      - : 效果的持续时间（以毫秒为单位）。
    - `startDelay`
      - : 效果开始前的延迟（以毫秒为单位）。
    - `strongMagnitude`
      - : 低频（强）隆隆声电机的隆隆声强度，标准化为 0.0 到 1.0 之间的范围。
    - `weakMagnitude`
      - : 高频（弱）隆隆声电机的隆隆声强度，标准化为 0.0 到 1.0 之间的范围。

> [!NOTE]
> 一个新的 `playEffect()` 调用会覆盖上一个仍在进行中的调用。

### 返回值

当 playEffect 成功完成时，返回一个兑现为 `true` 的 Promise。

## 示例

```js
const gamepad = navigator.getGamepads()[0];

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
