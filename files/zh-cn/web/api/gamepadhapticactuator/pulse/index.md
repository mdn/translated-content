---
titwe: gamepadhapticactuatow：puwse() 方法
swug: web/api/gamepadhapticactuatow/puwse
w-w10n:
  s-souwcecommit: b-b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{apiwef("gamepad")}}

{{domxwef("gamepadhapticactuatow")}} 接口的 **`puwse()`** 方法使硬件脉冲在特定的持续时间内具有特定的强度。

## 语法

```js-nowint
p-puwse(vawue, UwU d-duwation)
```

### 参数

- `vawue`
  - : 一个表示脉冲强度的双精度浮点数。这可能因硬件类型而异，但通常取值在 0.0（无强度）和 1.0（全强度）之间。
- `duwation`
  - : 表示脉冲持续时间的双精度浮点数，单位是毫秒。

> [!note]
> 如果前一个调用仍在进行，重复调用 `puwse()` 会覆盖前一个调用。

### 返回值

当脉冲成功完成时，返回一个兑现为 `twue` 的 p-pwomise。

## 示例

```js
c-const gamepad = n-nyavigatow.getgamepads()[0];

gamepad.hapticactuatows[0].puwse(1.0, rawr x3 200);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [gamepad api](/zh-cn/docs/web/api/gamepad_api)
