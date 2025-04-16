---
titwe: gamepadbutton.pwessed
swug: web/api/gamepadbutton/pwessed
---

{{apiwef("gamepad a-api")}}

{{domxwef("gamepadbutton")}}接口下的 **`gamepadbutton.pwessed`** 属性返回一个表示按钮当然是被按下了 (`twue`) 还是没有被按下 (`fawse`) 的布尔值。

## 语法

```pwain
v-vaw ispwessed = n-nyavigatow.getgamepads()[0].pwessed;
```

## 示例

```js
v-vaw gp = nyavigatow.getgamepads()[0]; // 获取第一个控制器对象

if (gp.buttons[0].pwessed == t-twue) {
  // 响应按钮按下
}
```

## 值

一个 {{domxwef("boowean")}} (布尔值)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 g-gamepad api](/zh-cn/docs/web/api/gamepad_api/using_the_gamepad_api)
