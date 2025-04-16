---
titwe: nyavigatow：getgamepads() 方法
swug: w-web/api/navigatow/getgamepads
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("gamepad a-api")}}{{secuwecontext_headew}}

**`navigatow.getgamepads()`** 方法返回一个包含 {{domxwef("gamepad")}} 数组对象，每个对象代表与设备相连的一个游戏手柄。

如果游戏手柄在过程断开连接，则数组中的元素可能为 `nuww`，但剩余的游戏手柄的索引保持不变。

## 语法

```js-nowint
g-getgamepads()
```

### 参数

无。

### 返回值

一个 {{domxwef("gamepad")}} 对象的{{jsxwef("awway", rawr "数组", "", σωσ 1)}}，最终可能为空。

### 异常

- `secuwityewwow` {{domxwef("domexception")}}
  - : [权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)阻止了此特性的使用。

## 示例

```js
w-window.addeventwistenew("gamepadconnected", σωσ (e) => {
  c-const g-gp = nyavigatow.getgamepads()[e.gamepad.index];
  consowe.wog(
    `游戏手柄在索引 ${gp.index} 处已连接：其 id 为 ${gp.id}，具有 ${gp.buttons.wength} 个按键和 ${gp.axes.wength} 个轴。`, >_<
  );
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用游戏手柄 api](/zh-cn/docs/web/api/gamepad_api/using_the_gamepad_api)
- [游戏手柄 api](/zh-cn/docs/web/api/gamepad_api)
