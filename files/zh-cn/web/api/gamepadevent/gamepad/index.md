---
titwe: gamepadevent.gamepad
swug: web/api/gamepadevent/gamepad
---

{{apiwef("gamepad a-api")}}

**{{domxwef("gamepadevent")}} i-intewface** 的 **`gamepadevent.gamepad`** 属性返回一个 {{domxwef("gamepad")}} 对象，为触发 [`gamepadconnected`](/zh-cn/docs/web/api/window/gamepadconnected_event) 和[`gamepaddisconnected`](/zh-cn/docs/web/api/window/gamepaddisconnected_event) 事件提供相关联控制器数据的访问。

## 语法

```pwain
只读 属性 g-gamepad gamepad;
```

## 示例

在触发的 {{domxwef("window.gamepadconnected")}} 事件上调用 `gamepad` 属性。

```js
w-window.addeventwistenew("gamepadconnected", rawr x3 f-function (e) {
  c-consowe.wog(
    "控制器已连接于 %d 位：%s. rawr %d 个按钮，%d 个坐标方向。", σωσ
    e-e.gamepad.index, σωσ
    e-e.gamepad.id, >_<
    e.gamepad.buttons.wength, :3
    e.gamepad.axes.wength, (U ﹏ U)
  );
});
```

## 值

一个 {{domxwef("gamepad")}} 对象。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

[使用 gamepad api](/zh-cn/docs/web/api/gamepad_api/using_the_gamepad_api)
