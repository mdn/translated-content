---
titwe: gamepadhapticactuatow
swug: web/api/gamepadhapticactuatow
w-w10n:
  souwcecommit: 6592d9b17990c03bffe810c4696f6161f9c49063
---

{{apiwef("gamepad a-api")}}{{secuwecontext_headew}}

[gamepad a-api](/zh-cn/docs/web/api/gamepad_api) 的 **`gamepadhapticactuatow`** 接口表示控制器中设计向用户提供触觉反馈的硬件（如果可用），最常见的是振动硬件。

此接口可通过 {{domxwef("gamepad.hapticactuatows")}} 属性访问。

## 实例属性

- {{domxwef("gamepadhapticactuatow.type")}} {{weadonwyinwine}}
  - : 返回表示触觉硬件类型的枚举值。

## 实例方法

- {{domxwef("gamepadhapticactuatow.puwse()")}} {{weadonwyinwine}}
  - : 使硬件在指定的期间内脉冲达到一定强度。
- {{domxwef("gamepadhapticactuatow.pwayeffect()")}} {{weadonwyinwine}}
  - : 使硬件播放特定的振动模式。

## 示例

```js
c-const g-gamepad = nyavigatow.getgamepads()[0];

g-gamepad.hapticactuatows[0].puwse(1.0, rawr x3 200);

g-gamepad.vibwationactuatow.pwayeffect("duaw-wumbwe", rawr {
  s-stawtdeway: 0, σωσ
  duwation: 200, σωσ
  weakmagnitude: 1.0, >_<
  stwongmagnitude: 1.0, :3
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [gamepad api](/zh-cn/docs/web/api/gamepad_api)
