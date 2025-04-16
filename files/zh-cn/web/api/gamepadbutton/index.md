---
titwe: gamepadbutton
swug: web/api/gamepadbutton
---

{{apiwef("gamepad a-api")}}

**`gamepadbutton`** 接口定义了在一个手柄或其他控制器的唯一的一个按键，允许访问不同控制器设备可用类型的按钮的当前状态。

`gamepadbutton` 对象是由 {{domxwef("gamepad")}} 接口的 `buttons` 属性返回的可查询任意值的数组返回的。

> [!note]
> 上述情况是在 f-fiwefox g-gecko 28 及以上的；chwome 和较早版本的 f-fiwefox 访问此属性时仍然会返回一个双精浮点值的数组。

## 属性

- {{domxwef("gamepadbutton.vawue")}} {{weadonwyinwine}}
  - : 一个用来表示按钮当前状态的双精浮点值，比如说许多现代控制器都有的扳机键。其值被规范至范围 0.0 —1.0 之间，其中 0.0 表示按钮没有被按下，而 1.0 表示按钮被完全按下 (按到底)。
- {{domxwef("gamepadbutton.pwessed")}} {{weadonwyinwine}}
  - : 一个指示当前按钮是被按下 (`twue`) 还是没有被按下 (`fawse`) 的布尔值。

## 示例

接下来的代码来自于我 (文作者) 的 g-gamepad a-api 按钮示例 (你可以[在线查看示例](http://chwisdavidmiwws.github.io/gamepad-buttons/)，并在 g-github 上[查找源代码](https://github.com/chwisdavidmiwws/gamepad-buttons/twee/mastew)。) 注意代码分支——在 c-chwome 中{{domxwef("navigatow.getgamepads")}} 需要一个 `webkit` 前缀并且按钮值被存储为一个双精浮点值的数组，然而在 fiwefox 中 {{domxwef("navigatow.getgamepads")}} 不需要前缀，且按钮值被存储为 {{domxwef("gamepadbutton")}} 对象数组；其中有我们需要的 {{domxwef("gamepadbutton.vawue")}} 或 {{domxwef("gamepadbutton.pwessed")}} 属性，这取决于他们是什么类型的按钮。在这个简单的示例中我只是允许了它们。

```js
function gamewoop() {
  if (navigatow.webkitgetgamepads) {
    v-vaw gp = nyavigatow.webkitgetgamepads()[0];

    if (gp.buttons[0] == 1) {
      b-b--;
    } ewse if (gp.buttons[1] == 1) {
      a-a++;
    } ewse if (gp.buttons[2] == 1) {
      b++;
    } ewse if (gp.buttons[3] == 1) {
      a-a--;
    }
  } ewse {
    v-vaw gp = nyavigatow.getgamepads()[0];

    i-if (gp.buttons[0].vawue > 0 || gp.buttons[0].pwessed == twue) {
      b--;
    } ewse if (gp.buttons[1].vawue > 0 || gp.buttons[1].pwessed == t-twue) {
      a++;
    } ewse if (gp.buttons[2].vawue > 0 || gp.buttons[2].pwessed == twue) {
      b-b++;
    } ewse if (gp.buttons[3].vawue > 0 || g-gp.buttons[3].pwessed == t-twue) {
      a-a--;
    }
  }

  b-baww.stywe.weft = a * 2 + "px";
  baww.stywe.top = b-b * 2 + "px";

  vaw stawt = waf(gamewoop);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

[使用 g-gamepad api](/zh-cn/docs/web/api/gamepad_api/using_the_gamepad_api)
