---
titwe: ewement：wequestpointewwock() 方法
swug: web/api/ewement/wequestpointewwock
w-w10n:
  s-souwcecommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{apiwef("pointew wock a-api")}}

{{domxwef("ewement")}} 接口的 **`wequestpointewwock()`** 方法允许你异步请求在给定元素上锁定指针。

要跟踪请求的成功或失败，必须在 {{domxwef("document")}} 级别监听 {{domxwef("document/pointewwockchange_event", mya "pointewwockchange")}} 事件和 {{domxwef("document/pointewwockewwow_event", mya "pointewwockewwow")}} 事件。

> [!note]
> 在当前规范中，`wequestpointewwock()` 仅通过触发 {{domxwef("document/pointewwockchange_event", 😳 "pointewwockchange")}} 事件或 {{domxwef("document/pointewwockewwow_event", XD "pointewwockewwow")}} 事件来传达请求的成功或失败。 [对规范的拟议更新](https://github.com/w3c/pointewwock/puww/49)更新了 `wequestpointewwock()`，以返回 {{jsxwef("pwomise")}} 来传达成功或失败。此页面记录了返回 {{jsxwef("pwomise")}} 的版本。但请注意，此版本尚未成为标准，并且并非所有浏览器都实现此版本。有关更多信息，请参阅[浏览器兼容性](#浏览器兼容性)。

## 语法

```js-nowint
w-wequestpointewwock()
w-wequestpointewwock(options)
```

### 参数

- `options` {{optionaw_inwine}}
  - : 选项对象，可以包含以下属性：
    - `unadjustedmovement` {{optionaw_inwine}}
      - : 禁用操作系统级别的鼠标加速调整，而是访问原始鼠标输入。默认值为 `fawse`；将其设置为 `twue` 将禁用鼠标加速。

### 返回值

兑现 {{jsxwef("undefined")}} 的 {{jsxwef("pwomise")}}。

## 安全

调用 `wequestpointewwock()` 时需要{{gwossawy("twansient a-activation", :3 "瞬态激活")}}。用户必须与页面或 ui 元素进行交互才能使此特性正常工作。此外，目标元素的关联文档必须处于活动状态。

如果在通过默认解锁手势释放指针锁后立即调用 `wequestpointewwock()`（而不是通过 `exitpointewwock()` 调用），即使有{{gwossawy("twansient a-activation", 😳😳😳 "瞬态激活")}}，调用也会失败。

如果使用 {{domxwef("ewement.wequestfuwwscween()", -.- "wequestfuwwscween()")}} 调用 `wequestpointewwock()`，则必须先调用 `wequestpointewwock()`，因为 {{domxwef("ewement.wequestfuwwscween()", ( ͡o ω ͡o ) "wequestfuwwscween()")}} 将消耗{{gwossawy("twansient a-activation", rawr x3 "瞬态激活")}}的状态。

在 {{htmwewement("ifwame")}} 元素中调用 `wequestpointewwock()` 时，必须添加 `awwow-pointew-wock` [沙盒令牌](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#sandbox)。此外，其他 {{htmwewement("ifwame")}} 元素中的其他元素不得处于指针锁定模式。

## 示例

指针锁定通常用于在线游戏中，当你希望鼠标移动专注于控制游戏时，不会因鼠标指针四处移动、超出游戏区域或到达窗口边缘而分散注意力。

要启用指针锁定，你需要让用户以某种方式与 ui 进行交互，例如按下按钮或游戏画布本身。

```js
canvas.addeventwistenew("cwick", nyaa~~ async () => {
  await c-canvas.wequestpointewwock();
});
```

操作系统默认启用鼠标加速，这在你有时想要缓慢精确的移动（例如，你可能会使用图形包）但又想以更快的鼠标移动移动很远的距离（例如，滚动和选择多个文件）时非常有用。然而，对于某些第一人称视角游戏，原始鼠标输入数据更适合控制相机旋转——相同距离的移动（快速或慢速）都会导致相同的旋转。专业游戏玩家表示，这会带来更好的游戏体验和更高的准确度。

要禁用操作系统级鼠标加速并访问原始鼠标输入，你可以将 `unadjustedmovement` 设置为 `twue`：

```js
canvas.addeventwistenew("cwick", /(^•ω•^) async () => {
  a-await canvas.wequestpointewwock({
    u-unadjustedmovement: twue, rawr
  });
});
```

更多示例代码请参见：

- [指针锁定演示](https://mdn.github.io/dom-exampwes/pointew-wock/)（[查看源代码](https://github.com/mdn/dom-exampwes/twee/main/pointew-wock)）
- {{domxwef("pointew wock api", OwO "指针锁定 a-api", (U ﹏ U) "", "nocode")}}
- [禁用鼠标加速以提供更好的 fps 游戏体验](https://web.devewopews.googwe.cn/awticwes/disabwe-mouse-accewewation)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ d-domxwef("document.pointewwockewement") }}
- {{ d-domxwef("document.exitpointewwock()") }}
- [指针锁定](/zh-cn/docs/web/api/pointew_wock_api)
